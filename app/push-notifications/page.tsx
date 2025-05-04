import type { Metadata } from "next"
import LayoutWithSidebar from "../layout-with-sidebar"
import PushNotificationsClient from "./push-notifications-client"

export const metadata: Metadata = {
  title: "Push Notifications",
  description: "Manage and send push notifications to your mobile app users",
}

export default function PushNotificationsPage() {
  return (
    <LayoutWithSidebar>
      <PushNotificationsClient />
    </LayoutWithSidebar>
  )
}
