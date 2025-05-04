"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@shopify/polaris"
import {
  HomeMinor,
  MobileMinor,
  NotificationMajor,
  ColorsMajor,
  CreditCardMajor,
  AppsMinor,
} from "@shopify/polaris-icons"

export default function ShopifySidebar() {
  const router = useRouter()
  const [selected, setSelected] = useState("/shopify")

  const handleNavigationChange = (path: string) => {
    setSelected(path)
    router.push(path)
  }

  return (
    <Navigation location={selected}>
      <Navigation.Section
        items={[
          {
            url: "/shopify",
            label: "Dashboard",
            icon: HomeMinor,
            selected: selected === "/shopify",
            onClick: () => handleNavigationChange("/shopify"),
          },
          {
            url: "/shopify/app-preview",
            label: "App Preview",
            icon: MobileMinor,
            selected: selected === "/shopify/app-preview",
            onClick: () => handleNavigationChange("/shopify/app-preview"),
          },
          {
            url: "/shopify/push-notifications",
            label: "Push Notifications",
            icon: NotificationMajor,
            selected: selected === "/shopify/push-notifications",
            onClick: () => handleNavigationChange("/shopify/push-notifications"),
          },
          {
            url: "/shopify/design-branding",
            label: "Design & Branding",
            icon: ColorsMajor,
            selected: selected === "/shopify/design-branding",
            onClick: () => handleNavigationChange("/shopify/design-branding"),
          },
          {
            url: "/shopify/billing",
            label: "Billing",
            icon: CreditCardMajor,
            selected: selected === "/shopify/billing",
            onClick: () => handleNavigationChange("/shopify/billing"),
          },
          {
            url: "/shopify/integrations",
            label: "Integrations",
            icon: AppsMinor,
            selected: selected === "/shopify/integrations",
            onClick: () => handleNavigationChange("/shopify/integrations"),
          },
        ]}
      />
    </Navigation>
  )
}
