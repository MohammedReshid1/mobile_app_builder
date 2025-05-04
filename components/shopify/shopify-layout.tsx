"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AppProvider as PolarisAppProvider, Frame, Loading, Toast } from "@shopify/polaris"
// @ts-ignore
import { AppProvider as AppBridgeProvider } from "@shopify/app-bridge-react"
import { useRouter } from "next/navigation"
import "@shopify/polaris/build/esm/styles.css"

// Define an interface for the App Bridge configuration
interface AppBridgeConfig {
  apiKey: string;
  host: string;
  forceRedirect?: boolean;
}

export default function ShopifyLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  // Use the interface with useState, allowing the state to be the config object or null
  const [appBridgeConfig, setAppBridgeConfig] = useState<AppBridgeConfig | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [toastProps, setToastProps] = useState({ content: "", error: false, active: false })

  useEffect(() => {
    // Get the shop and host from the URL query parameters
    const queryParams = new URLSearchParams(window.location.search)
    const shop = queryParams.get("shop")
    const host = queryParams.get("host")

    if (shop && host) {
      setAppBridgeConfig({
        apiKey: process.env.NEXT_PUBLIC_SHOPIFY_API_KEY || "",
        host,
        forceRedirect: true,
      })
    }

    setIsLoading(false)
  }, [])

  // Show toast message
  const showToast = ({ content, error = false }: { content: string; error?: boolean }) => {
    setToastProps({ content, error, active: true })
  }

  // Hide toast message
  const hideToast = () => {
    setToastProps((prev: { content: string; error: boolean; active: boolean }) => ({ ...prev, active: false }))
  }

  // If we're still loading the configuration, show a loading indicator
  if (isLoading) {
    return (
      <PolarisAppProvider i18n={{}}>
        <Frame>
          <Loading />
        </Frame>
      </PolarisAppProvider>
    )
  }

  // If we don't have a valid configuration, show an error
  if (!appBridgeConfig) {
    return (
      <PolarisAppProvider i18n={{}}>
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">Configuration Error</h1>
          <p>Missing shop or host parameters. Please ensure you're accessing this app from the Shopify admin.</p>
        </div>
      </PolarisAppProvider>
    )
  }

  return (
    <PolarisAppProvider i18n={{}}>
      <AppBridgeProvider config={appBridgeConfig}>
        <Frame>
          {toastProps.active && <Toast content={toastProps.content} error={toastProps.error} onDismiss={hideToast} />}

          {/* Main content wrapper with consistent width */}
          <div className="w-full max-w-[1200px] mx-auto px-4">
            {children}
          </div>
        </Frame>
      </AppBridgeProvider>
    </PolarisAppProvider>
  )
}
