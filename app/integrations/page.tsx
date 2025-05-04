import type { Metadata } from "next"
import LayoutWithSidebar from "../layout-with-sidebar"
import IntegrationsClient from "./integrations-client"

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect your app with other services and platforms",
}

export default function IntegrationsPage() {
  return (
    <LayoutWithSidebar>
      <IntegrationsClient />
    </LayoutWithSidebar>
  )
}
