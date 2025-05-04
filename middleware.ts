import { type NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only apply to /shopify routes
  if (!pathname.startsWith("/shopify")) {
    return NextResponse.next()
  }

  // Check if we have a valid Shopify session
  const shopifySession = request.cookies.get("shopify_session")

  // If no session, redirect to auth
  if (!shopifySession) {
    const url = request.nextUrl.clone()
    url.pathname = "/api/auth"
    url.searchParams.set("shop", request.nextUrl.searchParams.get("shop") || "")
    return NextResponse.redirect(url)
  }

  // If session is expired, redirect to auth
  try {
    const session = JSON.parse(shopifySession.value)
    const now = Date.now()
    const expiresAt = session.timestamp + 24 * 60 * 60 * 1000 // 24 hours

    if (now > expiresAt) {
      const url = request.nextUrl.clone()
      url.pathname = "/api/auth"
      url.searchParams.set("shop", session.shop)
      return NextResponse.redirect(url)
    }
  } catch (error) {
    console.error("Session parsing error:", error)
    const url = request.nextUrl.clone()
    url.pathname = "/api/auth"
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/shopify/:path*"],
}
