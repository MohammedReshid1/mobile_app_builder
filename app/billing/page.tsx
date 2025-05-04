import type { Metadata } from "next"
import LayoutWithSidebar from "../layout-with-sidebar"
import BillingClient from "./billing-client"

export const metadata: Metadata = {
  title: "Billing",
  description: "Manage your subscription plan and payment methods",
}

export default function BillingPage() {
  return (
    <LayoutWithSidebar>
      <BillingClient />
    </LayoutWithSidebar>
  )
}
