"use client"

import { useState } from "react"
import { Download, RotateCcw, Smartphone, Tablet, Laptop, Share2, QrCode } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function AppPreviewClient() {
  const [orientation, setOrientation] = useState("portrait")
  const [deviceType, setDeviceType] = useState("phone")
  const [theme, setTheme] = useState("light")

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">App Preview</h2>
          <p className="text-muted-foreground">Preview your mobile app in real-time</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share Preview
          </Button>
          <Button variant="outline" size="sm">
            <QrCode className="mr-2 h-4 w-4" />
            QR Code
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        {/* Preview Area */}
        <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-6">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant={deviceType === "phone" ? "default" : "outline"}
              size="sm"
              onClick={() => setDeviceType("phone")}
            >
              <Smartphone className="mr-2 h-4 w-4" />
              Phone
            </Button>
            <Button
              variant={deviceType === "tablet" ? "default" : "outline"}
              size="sm"
              onClick={() => setDeviceType("tablet")}
            >
              <Tablet className="mr-2 h-4 w-4" />
              Tablet
            </Button>
            <Button
              variant={deviceType === "desktop" ? "default" : "outline"}
              size="sm"
              onClick={() => setDeviceType("desktop")}
            >
              <Laptop className="mr-2 h-4 w-4" />
              Desktop
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setOrientation(orientation === "portrait" ? "landscape" : "portrait")}
              title="Rotate device"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>

          <div
            className={`relative mx-auto overflow-hidden rounded-[32px] border-8 border-gray-800 bg-gray-800 shadow-xl transition-all duration-300 ${
              deviceType === "phone"
                ? orientation === "portrait"
                  ? "h-[600px] w-[300px]"
                  : "h-[300px] w-[600px]"
                : deviceType === "tablet"
                  ? orientation === "portrait"
                    ? "h-[800px] w-[600px]"
                    : "h-[600px] w-[800px]"
                  : "h-[600px] w-[1000px]"
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-6 bg-gray-800">
              <div className="mx-auto mt-1.5 h-1 w-16 rounded-full bg-gray-700" />
            </div>
            <div className={`h-full w-full overflow-hidden bg-${theme === "light" ? "white" : "gray-900"}`}>
              <div className={`h-12 bg-primary p-2 text-center text-${theme === "light" ? "white" : "gray-100"}`}>
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
        </div>

        {/* Controls */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Preview Settings</CardTitle>
              <CardDescription>Customize how your app preview appears</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="animations">Enable Animations</Label>
                <Switch id="animations" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="interactions">Interactive Elements</Label>
                <Switch id="interactions" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>App Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">App Name:</span>
                <span className="text-sm font-medium">My Fashion Store</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Version:</span>
                <span className="text-sm font-medium">1.2.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Last Updated:</span>
                <span className="text-sm font-medium">Today at 10:30 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Platform:</span>
                <span className="text-sm font-medium">iOS, Android</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Smartphone className="mr-2 h-4 w-4" />
                Test on Real Device
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="mr-2 h-4 w-4" />
                Share with Team
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                Download App Bundle
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="screens" className="space-y-4">
        <TabsList>
          <TabsTrigger value="screens">Screens</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="assets">Assets</TabsTrigger>
        </TabsList>

        <TabsContent value="screens" className="space-y-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {["Home", "Categories", "Product", "Cart", "Checkout", "Profile", "Orders", "Settings"].map((screen) => (
              <Card key={screen} className="cursor-pointer hover:bg-accent/50 transition-colors">
                <CardHeader className="p-4">
                  <CardTitle className="text-sm">{screen}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="h-24 rounded-md bg-muted" />
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="components" className="space-y-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {["Button", "Card", "Input", "Navigation", "Carousel", "Product Card", "Modal", "Alert"].map(
              (component) => (
                <Card key={component} className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardHeader className="p-4">
                    <CardTitle className="text-sm">{component}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="h-16 rounded-md bg-muted" />
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </TabsContent>

        <TabsContent value="assets" className="space-y-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((asset) => (
              <Card key={asset} className="cursor-pointer hover:bg-accent/50 transition-colors">
                <CardContent className="p-3">
                  <div className="aspect-square rounded-md bg-muted" />
                  <p className="mt-2 text-xs font-medium">Asset {asset}.png</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
