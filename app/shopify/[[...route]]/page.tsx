import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import ShopifyLayout from "@/components/shopify/shopify-layout"

export default async function ShopifyAppPage({ params }: { params: { route?: string[] } }) {
  // Check if we have a valid Shopify session
  const cookieStore = await cookies()
  const shopifySession = cookieStore.get("shopify_session")

  if (!shopifySession) {
    // Redirect to auth if no session
    redirect("/api/auth")
  }

  // Determine which page to show based on the route
  const route = params.route?.[0] || "dashboard"

  return (
    <ShopifyLayout>
      {/* The content will be loaded dynamically based on the route */}
      {route === "dashboard" && <ShopifyDashboard />}
      {route === "push-notifications" && <ShopifyPushNotifications />}
      {route === "design-branding" && <ShopifyDesignBranding />}
      {route === "billing" && <ShopifyBilling />}
      {route === "integrations" && <ShopifyIntegrations />}
      {route === "app-preview" && <ShopifyAppPreview />}
    </ShopifyLayout>
  )
}

// These are placeholder components that will be defined in separate files
function ShopifyDashboard() {
  return <div>Loading dashboard...</div>
}

function ShopifyPushNotifications() {
  return <div>Loading push notifications...</div>
}

function ShopifyDesignBranding() {
  return <div>Loading design & branding...</div>
}

function ShopifyBilling() {
  return <div>Loading billing...</div>
}

function ShopifyIntegrations() {
  return <div>Loading integrations...</div>
}

function ShopifyAppPreview() {
  return <div>Loading app preview...</div>
}
