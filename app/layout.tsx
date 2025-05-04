import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import "./shopify-styles.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mobile App Builder",
  description: "Build and manage your own branded mobile shopping apps",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add Shopify Polaris styles conditionally loaded for Shopify routes */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@shopify/polaris@11.11.0/build/esm/styles.css"
          media="(prefers-shopify-routes: active)"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
