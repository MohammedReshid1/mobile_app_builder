import { type NextRequest, NextResponse } from "next/server"
import { shopifyAuth } from "@/lib/shopify-auth"

export async function GET(request: NextRequest, { params }: { params: { route?: string[] } }) {
  try {
    const { searchParams, pathname } = new URL(request.url)
    const shop = searchParams.get("shop")

    // If no shop is provided, return an error
    if (!shop && !pathname.endsWith("/callback")) {
      return NextResponse.json({ error: "No shop provided" }, { status: 400 })
    }

    if (pathname.endsWith("/callback")) {
      // Handle the OAuth callback
      return await shopifyAuth.handleCallback(request)
    } else {
      // Start the OAuth flow
      if (!shop) {
         return NextResponse.json({ error: "No shop provided to begin auth" }, { status: 400 })
      }
      return await shopifyAuth.beginAuth(shop)
    }
  } catch (error) {
    console.error("Auth error:", error)
    return NextResponse.json({ error: "Authentication error" }, { status: 500 })
  }
}
