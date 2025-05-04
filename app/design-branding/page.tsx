import type { Metadata } from "next"
import LayoutWithSidebar from "../layout-with-sidebar"
import DesignBrandingClient from "./design-branding-client"

export const metadata: Metadata = {
  title: "Design & Branding",
  description: "Customize the look and feel of your mobile app",
}

export default function DesignBrandingPage() {
  return (
    <LayoutWithSidebar>
      <DesignBrandingClient />
    </LayoutWithSidebar>
  )
}
