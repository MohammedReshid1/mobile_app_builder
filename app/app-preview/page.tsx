import type { Metadata } from "next"
import LayoutWithSidebar from "../layout-with-sidebar"
import AppPreviewClient from "./app-preview-client"

export const metadata: Metadata = {
  title: "App Preview",
  description: "Preview your mobile app in real-time",
}

export default function AppPreviewPage() {
  return (
    <LayoutWithSidebar>
      <AppPreviewClient />
    </LayoutWithSidebar>
  )
}
