"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import "./shopify-styles.css"
import styles from "./layout-with-sidebar.module.css"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Bell,
  CreditCard,
  Home,
  Layers,
  MessageSquare,
  Palette,
  Settings,
  Smartphone,
  Zap,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mobile App Builder",
  description: "Build and manage your own branded mobile shopping apps",
}

export default function LayoutWithSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const isActive = (path: string) => pathname === path

  const getPageTitle = () => {
    if (pathname === "/") return "Dashboard"
    return pathname
      .substring(1)
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const navItems = [
    { href: "/", label: "Dashboard", icon: <Home className="h-4 w-4" /> },
    { href: "/app-preview", label: "App Preview", icon: <Smartphone className="h-4 w-4" /> },
    { href: "/push-notifications", label: "Push Notifications", icon: <MessageSquare className="h-4 w-4" /> },
    { href: "/design-branding", label: "Design & Branding", icon: <Palette className="h-4 w-4" /> },
    { href: "/billing", label: "Billing", icon: <CreditCard className="h-4 w-4" /> },
    { href: "/integrations", label: "Integrations", icon: <Layers className="h-4 w-4" /> },
  ]

  return (
    <SidebarProvider>
      <div className={styles.layout}>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <Smartphone className="h-5 w-5 text-primary" />
              <span className="font-semibold">AppBuilder</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={isActive(item.href)}>
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center gap-3 px-4 py-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted">
                <Image src="/placeholder.svg?height=32&width=32" alt="Avatar" className="object-cover" fill />
              </div>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">john@example.com</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset className="flex-1 flex flex-col">
          <header className="flex h-16 items-center justify-between border-b px-6 shrink-0">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              {pathname !== "/" && !isMobile && (
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Dashboard
                  </Link>
                </Button>
              )}
              <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden gap-1 md:flex">
                <Zap className="mr-1 h-4 w-4 text-yellow-500" />
                <span>Upgrade</span>
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Avatar"
                      className="rounded-full"
                      width={32}
                      height={32}
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6">
            {pathname !== "/" && isMobile && (
              <div className="mb-6">
                <Button variant="ghost" size="sm" asChild className="pl-0">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Dashboard
                  </Link>
                </Button>
              </div>
            )}
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
