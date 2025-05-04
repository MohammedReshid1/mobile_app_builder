import { cookies } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"

// This is a simplified version - in a real app, you'd use Shopify's official libraries
export const shopifyAuth = {
  async beginAuth(shop: string) {
    // Validate the shop
    if (!isValidShopDomain(shop)) {
      return NextResponse.json({ error: "Invalid shop domain" }, { status: 400 })
    }

    // Generate a nonce for security
    const nonce = generateNonce()

    // Store the nonce in a cookie
    const cookieStore = await cookies()
    cookieStore.set("shopify_nonce", nonce, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    })

    // Construct the authorization URL
    const authUrl = new URL(`https://${shop}/admin/oauth/authorize`)
    authUrl.searchParams.append("client_id", process.env.SHOPIFY_API_KEY || "")
    authUrl.searchParams.append("scope", process.env.SHOPIFY_API_SCOPES || "")
    const redirectUri = `${process.env.HOST}/api/auth/callback` // Construct URI
    console.log("--- Shopify Auth Begin --- PRE-REDIRECT --- "); // Log before redirect
    console.log("Constructed Redirect URI:", redirectUri); // Log the URI
    authUrl.searchParams.append("redirect_uri", redirectUri) // Use the variable
    authUrl.searchParams.append("state", nonce)

    // Redirect to the authorization URL
    console.log("Redirecting to Shopify Auth URL:", authUrl.toString()); // Log the full URL
    return NextResponse.redirect(authUrl.toString())
  },

  async handleCallback(request: NextRequest) {
    console.log("--- Shopify Auth Callback Received ---");
    console.log("Request URL:", request.url);
    const { searchParams } = new URL(request.url)
    const shop = searchParams.get("shop")
    const code = searchParams.get("code")
    const state = searchParams.get("state")

    console.log("Extracted Params:", { shop, code, state }); // Log extracted params

    // Validate the parameters
    if (!shop || !code || !state) {
      console.error("Validation Failed: Missing shop, code, or state."); // Add specific log
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Validate the shop
    if (!isValidShopDomain(shop)) {
      return NextResponse.json({ error: "Invalid shop domain" }, { status: 400 })
    }

    // Validate the state/nonce
    const cookieStoreForGet = await cookies()
    const storedNonce = cookieStoreForGet.get("shopify_nonce")?.value
    if (!storedNonce || storedNonce !== state) {
      return NextResponse.json({ error: "Invalid state" }, { status: 403 })
    }

    try {
      // Exchange the code for an access token
      const tokenResponse = await fetch(`https://${shop}/admin/oauth/access_token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: process.env.SHOPIFY_API_KEY,
          client_secret: process.env.SHOPIFY_API_SECRET,
          code,
        }),
      })

      if (!tokenResponse.ok) {
        throw new Error(`Token exchange failed: ${tokenResponse.statusText}`)
      }

      const { access_token } = await tokenResponse.json()

      // Store the session
      const cookieStoreForSet = await cookies()
      cookieStoreForSet.set(
        "shopify_session",
        JSON.stringify({
          shop,
          accessToken: access_token,
          timestamp: Date.now(),
        }),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          path: "/",
          maxAge: 24 * 60 * 60, // 24 hours
        },
      )

      // Clear the nonce
      const cookieStoreForDelete = await cookies()
      cookieStoreForDelete.delete("shopify_nonce")

      // Redirect to the app
      return NextResponse.redirect(`${process.env.HOST}/shopify?shop=${shop}`)
    } catch (error) {
      console.error("Token exchange error:", error)
      return NextResponse.json({ error: "Failed to exchange token" }, { status: 500 })
    }
  },
}

// Helper function to validate shop domains
function isValidShopDomain(shop: string): boolean {
  return /^[a-zA-Z0-9][a-zA-Z0-9-]*\.myshopify\.com$/.test(shop)
}

// Helper function to generate a nonce
function generateNonce(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
