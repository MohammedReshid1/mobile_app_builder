"use client"

import { useState } from "react"
import { Plus, RefreshCw, Search, Settings, Trash } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function IntegrationsClient() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter integrations based on search query
  const filterIntegrations = (integrations, query) => {
    if (!query) return integrations
    return integrations.filter((integration) => integration.name.toLowerCase().includes(query.toLowerCase()))
  }

  // Sample integrations data
  const paymentIntegrations = [
    {
      id: 1,
      name: "Stripe",
      description: "Accept payments online with credit cards and digital wallets",
      icon: "/placeholder.svg?height=40&width=40",
      status: "connected",
    },
    {
      id: 2,
      name: "PayPal",
      description: "Enable PayPal checkout for your customers",
      icon: "/placeholder.svg?height=40&width=40",
      status: "disconnected",
    },
    {
      id: 3,
      name: "Apple Pay",
      description: "Allow customers to pay with Apple Pay",
      icon: "/placeholder.svg?height=40&width=40",
      status: "disconnected",
    },
    {
      id: 4,
      name: "Google Pay",
      description: "Enable Google Pay for faster checkout",
      icon: "/placeholder.svg?height=40&width=40",
      status: "disconnected",
    },
  ]

  const ecommerceIntegrations = [
    {
      id: 1,
      name: "Shopify",
      description: "Sync products and orders with your Shopify store",
      icon: "/placeholder.svg?height=40&width=40",
      status: "connected",
    },
    {
      id: 2,
      name: "WooCommerce",
      description: "Connect your WooCommerce store",
      icon: "/placeholder.svg?height=40&width=40",
      status: "disconnected",
    },
    {
      id: 3,
      name: "Magento",
      description: "Integrate with your Magento e-commerce platform",
      icon: "/placeholder.svg?height=40&width=40",
      status: "disconnected",
    },
  ]

  const marketingIntegrations = [
    {
      id: 1,
      name: "Mailchimp",
      description: "Sync customer data with your email marketing campaigns",
      icon: "/placeholder.svg?height=40&width=40",
      status: "connected",
    },
    {
      id: 2,
      name: "Klaviyo",
      description: "Power your email and SMS marketing",
      icon: "/placeholder.svg?height=40&width=40",
      status: "disconnected",
    },
  ]

  // Integration card component
  const IntegrationCard = ({ integration }) => (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-md bg-muted">
              <Image
                src={integration.icon || "/placeholder.svg"}
                alt={integration.name}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <CardTitle className="text-base">{integration.name}</CardTitle>
              <CardDescription className="line-clamp-1">{integration.description}</CardDescription>
            </div>
          </div>
          {integration.status === "connected" ? (
            <Badge className="bg-green-500 text-white hover:bg-green-600">Connected</Badge>
          ) : (
            <Badge variant="outline">Not Connected</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {integration.status === "connected" && (
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <RefreshCw className="h-3 w-3" />
                <span>Last synced: 2 hours ago</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {integration.status === "connected" ? (
          <div className="flex w-full gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <Settings className="mr-2 h-3.5 w-3.5" />
              Configure
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1 text-destructive hover:text-destructive">
                  <Trash className="mr-2 h-3.5 w-3.5" />
                  Disconnect
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Disconnect Integration</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to disconnect {integration.name}? This will remove all connected data and
                    settings.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Disconnect</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        ) : (
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Connect
          </Button>
        )}
      </CardFooter>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Integrations</h2>
          <p className="text-muted-foreground">Connect your app with other services and platforms</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search integrations..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Integration
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Connected Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Out of 16 available integrations</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Data Synced</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1.2 GB</div>
            <p className="text-xs text-muted-foreground">Across all connected services</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">API Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24.5K</div>
            <p className="text-xs text-muted-foreground">Last 30 days integration activity</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Sync Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="text-base font-medium">All Systems Operational</div>
            </div>
            <p className="text-xs text-muted-foreground">Last checked: 5 minutes ago</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="all">All Integrations</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterIntegrations(
              [...paymentIntegrations, ...ecommerceIntegrations, ...marketingIntegrations],
              searchQuery,
            ).map((integration) => (
              <IntegrationCard key={integration.id} integration={integration} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterIntegrations(paymentIntegrations, searchQuery).map((integration) => (
              <IntegrationCard key={integration.id} integration={integration} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ecommerce" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterIntegrations(ecommerceIntegrations, searchQuery).map((integration) => (
              <IntegrationCard key={integration.id} integration={integration} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="marketing" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filterIntegrations(marketingIntegrations, searchQuery).map((integration) => (
              <IntegrationCard key={integration.id} integration={integration} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Integration Settings</CardTitle>
          <CardDescription>Configure global settings for all integrations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Data Synchronization</h3>
            <div className="space-y-4 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-sync" className="text-base">
                    Automatic Synchronization
                  </Label>
                  <p className="text-sm text-muted-foreground">Automatically sync data between integrations</p>
                </div>
                <Switch id="auto-sync" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sync-frequency">Sync Frequency</Label>
                <Select defaultValue="hourly">
                  <SelectTrigger id="sync-frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Real-time</SelectItem>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sync-notifications" className="text-base">
                    Sync Notifications
                  </Label>
                  <p className="text-sm text-muted-foreground">Receive notifications for sync events</p>
                </div>
                <Switch id="sync-notifications" defaultChecked />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">API Access</h3>
            <div className="space-y-4 rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="api-access" className="text-base">
                    Enable API Access
                  </Label>
                  <p className="text-sm text-muted-foreground">Allow third-party services to access your app data</p>
                </div>
                <Switch id="api-access" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input id="api-key" type="password" value="sk_live_51NzUBTKLksdJFKDJFKDJFKDJF" readOnly />
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Copy
                    </Button>
                    <Button variant="outline" size="sm">
                      Regenerate
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Keep this key secure. Do not share it publicly.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Input id="webhook-url" value="https://your-app.com/api/webhooks" readOnly />
                  <Button variant="outline" size="sm">
                    Copy
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Use this URL to receive events from integrated services.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
