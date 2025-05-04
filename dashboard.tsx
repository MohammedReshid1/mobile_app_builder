"use client"

import { useState } from "react"
import {
  Bell,
  ChevronDown,
  CreditCard,
  Home,
  Layers,
  MessageSquare,
  Palette,
  PieChart,
  Plus,
  Settings,
  Smartphone,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 z-20 flex h-full flex-col border-r bg-background transition-all duration-300 md:relative",
          isSidebarCollapsed ? "w-[70px]" : "w-[250px]",
        )}
      >
        <div className="flex h-14 items-center border-b px-4">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            {!isSidebarCollapsed && <span>AppBuilder</span>}
            <Smartphone className="h-5 w-5 text-primary" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            <ChevronDown className={cn("h-4 w-4 transition-all", isSidebarCollapsed ? "-rotate-90" : "rotate-0")} />
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            <Link
              href="/"
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                "bg-accent text-accent-foreground",
              )}
            >
              <Home className="h-4 w-4" />
              {!isSidebarCollapsed && <span>Dashboard</span>}
            </Link>
            <Link
              href="/app-preview"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <Smartphone className="h-4 w-4" />
              {!isSidebarCollapsed && <span>App Preview</span>}
            </Link>
            <Link
              href="/push-notifications"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <MessageSquare className="h-4 w-4" />
              {!isSidebarCollapsed && <span>Push Notifications</span>}
            </Link>
            <Link
              href="/design-branding"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <Palette className="h-4 w-4" />
              {!isSidebarCollapsed && <span>Design & Branding</span>}
            </Link>
            <Link
              href="/billing"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <CreditCard className="h-4 w-4" />
              {!isSidebarCollapsed && <span>Billing</span>}
            </Link>
            <Link
              href="/integrations"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <Layers className="h-4 w-4" />
              {!isSidebarCollapsed && <span>Integrations</span>}
            </Link>
          </nav>
        </div>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 rounded-full bg-muted">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Avatar"
                className="rounded-full object-cover"
                fill
              />
            </div>
            {!isSidebarCollapsed && (
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">john@example.com</span>
              </div>
            )}
            {!isSidebarCollapsed && (
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
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={cn("flex flex-1 flex-col", isSidebarCollapsed ? "md:ml-[70px]" : "md:ml-[250px]")}>
        {/* Top Bar */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex flex-1 items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden gap-1 md:flex">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span>Upgrade to Premium</span>
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

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6">
          <div className="grid gap-6">
            {/* Analytics Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,546</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500">+16%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">App Installs</CardTitle>
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,942</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500">+12%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Push Notifications Sent</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45,231</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500">+24%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.2%</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-emerald-500">+0.5%</span> from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* App Management Section */}
            <div className="grid gap-6 md:grid-cols-6">
              <Card className="md:col-span-4">
                <CardHeader>
                  <CardTitle>App Management</CardTitle>
                  <CardDescription>Customize your mobile app's appearance and functionality</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="branding">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="branding">Branding</TabsTrigger>
                      <TabsTrigger value="layout">Layout</TabsTrigger>
                      <TabsTrigger value="features">Features</TabsTrigger>
                    </TabsList>
                    <TabsContent value="branding" className="mt-4 space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="text-sm font-medium">App Icon</label>
                          <div className="mt-2 flex h-24 w-24 items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted/50">
                            <Button variant="ghost" size="icon">
                              <Plus className="h-6 w-6 text-muted-foreground" />
                            </Button>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium">Splash Screen</label>
                          <div className="mt-2 flex h-24 w-full items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/25 bg-muted/50">
                            <Button variant="ghost" size="icon">
                              <Plus className="h-6 w-6 text-muted-foreground" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Primary Color</label>
                        <div className="flex gap-2">
                          <div className="h-8 w-8 rounded-full bg-red-500" />
                          <div className="h-8 w-8 rounded-full bg-blue-500" />
                          <div className="h-8 w-8 rounded-full bg-green-500" />
                          <div className="h-8 w-8 rounded-full bg-purple-500" />
                          <div className="h-8 w-8 rounded-full bg-yellow-500" />
                          <div className="h-8 w-8 rounded-full bg-pink-500" />
                          <div className="h-8 w-8 rounded-full bg-gray-500" />
                          <Button variant="outline" size="sm" className="h-8 px-2">
                            Custom
                          </Button>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="layout" className="mt-4 space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Home Screen</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Banner Slider</span>
                                <Badge>Enabled</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Categories Grid</span>
                                <Badge>Enabled</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Featured Products</span>
                                <Badge variant="outline">Disabled</Badge>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm" className="w-full">
                              Customize
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm">Product Screen</CardTitle>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Image Gallery</span>
                                <Badge>Enabled</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Reviews Section</span>
                                <Badge>Enabled</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Related Products</span>
                                <Badge>Enabled</Badge>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" size="sm" className="w-full">
                              Customize
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                    </TabsContent>
                    <TabsContent value="features" className="mt-4 space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Push Notifications</h3>
                            <p className="text-sm text-muted-foreground">Send targeted messages to your users</p>
                          </div>
                          <Badge>Enabled</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Wishlist</h3>
                            <p className="text-sm text-muted-foreground">Allow users to save products for later</p>
                          </div>
                          <Badge>Enabled</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Apple Pay / Google Pay</h3>
                            <p className="text-sm text-muted-foreground">Enable fast checkout with digital wallets</p>
                          </div>
                          <Badge variant="outline">Premium Feature</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Loyalty Program</h3>
                            <p className="text-sm text-muted-foreground">Reward your most loyal customers</p>
                          </div>
                          <Badge variant="outline">Premium Feature</Badge>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>App Preview</CardTitle>
                  <CardDescription>See how your app looks in real-time</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center">
                  <div className="relative mx-auto h-[400px] w-[200px] overflow-hidden rounded-[32px] border-8 border-gray-800 bg-gray-800 shadow-xl">
                    <div className="absolute inset-x-0 top-0 h-6 bg-gray-800">
                      <div className="mx-auto mt-1.5 h-1 w-16 rounded-full bg-gray-700" />
                    </div>
                    <div className="h-full w-full overflow-hidden bg-white">
                      <div className="h-12 bg-blue-500 p-2 text-center text-white">
                        <span className="text-sm font-medium">My Fashion Store</span>
                      </div>
                      <div className="p-2">
                        <div className="mb-2 h-24 rounded-md bg-gray-100" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-20 rounded-md bg-gray-100" />
                          <div className="h-20 rounded-md bg-gray-100" />
                          <div className="h-20 rounded-md bg-gray-100" />
                          <div className="h-20 rounded-md bg-gray-100" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/app-preview">Open Full Preview</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Usage Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Usage Statistics</CardTitle>
                <CardDescription>Your app's performance over the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Storage Usage</span>
                      <span className="text-sm text-muted-foreground">65% of 10GB</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Push Notification Quota</span>
                      <span className="text-sm text-muted-foreground">45% of 50,000</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">API Calls</span>
                      <span className="text-sm text-muted-foreground">82% of 100,000</span>
                    </div>
                    <Progress value={82} className="h-2" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View Detailed Analytics
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function Menu(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
