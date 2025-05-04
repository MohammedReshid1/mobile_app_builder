import LayoutWithSidebar from "./layout-with-sidebar"
import DashboardClient from "./dashboard-client"

export default function Home() {
  return (
    <LayoutWithSidebar>
      <DashboardClient />
    </LayoutWithSidebar>
  )
}
