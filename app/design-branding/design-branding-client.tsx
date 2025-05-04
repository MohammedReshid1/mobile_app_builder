"use client"

import { useState } from "react"
import { Home, Search, ShoppingCart, User, Palette, Type, ImageIcon, Layout, Sliders, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export default function DesignBrandingClient() {
  const [primaryColor, setPrimaryColor] = useState("#FF5722")
  const [secondaryColor, setSecondaryColor] = useState("#2196F3")
  const [fontFamily, setFontFamily] = useState("Inter")
  const [borderRadius, setBorderRadius] = useState([8])
  const [darkMode, setDarkMode] = useState(false)

  const tabIcons = {
    colors: <Palette className="h-4 w-4" />,
    typography: <Type className="h-4 w-4" />,
    images: <ImageIcon className="h-4 w-4" />,
    layout: <Layout className="h-4 w-4" />,
    advanced: <Sliders className="h-4 w-4" />,
  }

  const previewScreens = [
    {
      name: "Home",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: "Search",
      icon: <Search className="h-4 w-4" />,
    },
    {
      name: "Cart",
      icon: <ShoppingCart className="h-4 w-4" />,
    },
    {
      name: "Profile",
      icon: <User className="h-4 w-4" />,
    },
  ]

  return (
    <div className="flex flex-col space-y-8">
      {/* Top Bar with Back Button */}
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6 -mx-8 -mt-8 mb-0">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Dashboard</span>
        </Link>
      </header>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Design & Branding</h2>
          <p className="text-muted-foreground">Customize the look and feel of your mobile app</p>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline">Reset to Default</Button>
          <Button>Save Changes</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="colors">
            <TabsList className="grid w-full grid-cols-5">
              {Object.entries(tabIcons).map(([key, icon]) => (
                <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                  {icon}
                  <span className="hidden sm:inline-block capitalize">{key}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="colors" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Brand Colors</CardTitle>
                  <CardDescription>Set your primary and secondary brand colors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-md border" style={{ backgroundColor: primaryColor }} />
                        <Input
                          id="primary-color"
                          type="text"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="secondary-color">Secondary Color</Label>
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-md border" style={{ backgroundColor: secondaryColor }} />
                        <Input
                          id="secondary-color"
                          type="text"
                          value={secondaryColor}
                          onChange={(e) => setSecondaryColor(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>UI Element Colors</CardTitle>
                  <CardDescription>Customize colors for specific UI elements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="button-color">Button Color</Label>
                      <Input id="button-color" type="text" defaultValue="#FF5722" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="text-color">Text Color</Label>
                      <Input id="text-color" type="text" defaultValue="#212121" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="background-color">Background Color</Label>
                      <Input id="background-color" type="text" defaultValue="#FFFFFF" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accent-color">Accent Color</Label>
                      <Input id="accent-color" type="text" defaultValue="#4CAF50" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Theme Mode</CardTitle>
                  <CardDescription>Configure light and dark mode settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Enable dark mode for your app</p>
                    </div>
                    <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-theme">Auto Theme</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically switch based on user's device settings
                      </p>
                    </div>
                    <Switch id="auto-theme" defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="typography" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Font Settings</CardTitle>
                  <CardDescription>Configure the typography for your app</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="font-family">Font Family</Label>
                    <Select value={fontFamily} onValueChange={setFontFamily}>
                      <SelectTrigger id="font-family">
                        <SelectValue placeholder="Select font family" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Inter">Inter</SelectItem>
                        <SelectItem value="Roboto">Roboto</SelectItem>
                        <SelectItem value="Poppins">Poppins</SelectItem>
                        <SelectItem value="Montserrat">Montserrat</SelectItem>
                        <SelectItem value="Open Sans">Open Sans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="heading-size">Heading Size</Label>
                      <Select defaultValue="large">
                        <SelectTrigger id="heading-size">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="body-size">Body Text Size</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger id="body-size">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="font-weight">Font Weight</Label>
                      <span className="text-sm text-muted-foreground">Regular</span>
                    </div>
                    <Slider id="font-weight" defaultValue={[400]} max={900} min={100} step={100} className="py-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Text Styles</CardTitle>
                  <CardDescription>Preview and customize text styles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-4xl font-bold" style={{ fontFamily }}>
                        Heading 1
                      </h1>
                      <p className="text-sm text-muted-foreground">Used for main titles</p>
                    </div>
                    <div>
                      <h2 className="text-3xl font-semibold" style={{ fontFamily }}>
                        Heading 2
                      </h2>
                      <p className="text-sm text-muted-foreground">Used for section titles</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium" style={{ fontFamily }}>
                        Heading 3
                      </h3>
                      <p className="text-sm text-muted-foreground">Used for subsection titles</p>
                    </div>
                    <div>
                      <p className="text-base" style={{ fontFamily }}>
                        Body Text
                      </p>
                      <p className="text-sm text-muted-foreground">Used for main content</p>
                    </div>
                    <div>
                      <p className="text-sm" style={{ fontFamily }}>
                        Small Text
                      </p>
                      <p className="text-sm text-muted-foreground">Used for captions and labels</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="images" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>App Icons</CardTitle>
                  <CardDescription>Upload and manage your app icons</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>App Icon</Label>
                      <div className="flex items-center justify-center h-32 rounded-md border border-dashed">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <ImageIcon className="h-8 w-8 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
                          <Button variant="secondary" size="sm">
                            Upload Icon
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Splash Screen</Label>
                      <div className="flex items-center justify-center h-32 rounded-md border border-dashed">
                        <div className="flex flex-col items-center gap-1 text-center">
                          <ImageIcon className="h-8 w-8 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
                          <Button variant="secondary" size="sm">
                            Upload Image
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Image Settings</CardTitle>
                  <CardDescription>Configure image display settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="image-quality">Image Quality</Label>
                    <Select defaultValue="high">
                      <SelectTrigger id="image-quality">
                        <SelectValue placeholder="Select quality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low (faster loading)</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High (better quality)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="image-radius">Image Border Radius</Label>
                      <span className="text-sm text-muted-foreground">{borderRadius[0]}px</span>
                    </div>
                    <Slider
                      id="image-radius"
                      value={borderRadius}
                      onValueChange={setBorderRadius}
                      max={20}
                      step={1}
                      className="py-2"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="lazy-loading">Lazy Loading</Label>
                      <p className="text-sm text-muted-foreground">Load images only when they are in view</p>
                    </div>
                    <Switch id="lazy-loading" defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="layout" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Layout Settings</CardTitle>
                  <CardDescription>Configure the layout of your app</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="navigation-style">Navigation Style</Label>
                    <Select defaultValue="bottom-tabs">
                      <SelectTrigger id="navigation-style">
                        <SelectValue placeholder="Select navigation style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bottom-tabs">Bottom Tabs</SelectItem>
                        <SelectItem value="side-drawer">Side Drawer</SelectItem>
                        <SelectItem value="top-tabs">Top Tabs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="layout-density">Layout Density</Label>
                    <Select defaultValue="comfortable">
                      <SelectTrigger id="layout-density">
                        <SelectValue placeholder="Select density" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compact">Compact</SelectItem>
                        <SelectItem value="comfortable">Comfortable</SelectItem>
                        <SelectItem value="spacious">Spacious</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="container-padding">Container Padding</Label>
                      <span className="text-sm text-muted-foreground">16px</span>
                    </div>
                    <Slider id="container-padding" defaultValue={[16]} max={32} step={2} className="py-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="full-width">Full Width Layout</Label>
                      <p className="text-sm text-muted-foreground">Use the full width of the screen</p>
                    </div>
                    <Switch id="full-width" defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Screen Transitions</CardTitle>
                  <CardDescription>Configure transitions between screens</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="transition-type">Transition Type</Label>
                    <Select defaultValue="slide">
                      <SelectTrigger id="transition-type">
                        <SelectValue placeholder="Select transition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="slide">Slide</SelectItem>
                        <SelectItem value="fade">Fade</SelectItem>
                        <SelectItem value="zoom">Zoom</SelectItem>
                        <SelectItem value="none">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="transition-speed">Transition Speed</Label>
                      <span className="text-sm text-muted-foreground">300ms</span>
                    </div>
                    <Slider id="transition-speed" defaultValue={[300]} max={500} min={100} step={50} className="py-2" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Settings</CardTitle>
                  <CardDescription>Configure advanced design settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="animations">Animations</Label>
                      <p className="text-sm text-muted-foreground">Enable animations throughout the app</p>
                    </div>
                    <Switch id="animations" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="haptic-feedback">Haptic Feedback</Label>
                      <p className="text-sm text-muted-foreground">Enable haptic feedback for interactions</p>
                    </div>
                    <Switch id="haptic-feedback" defaultChecked />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="reduced-motion">Reduced Motion</Label>
                      <p className="text-sm text-muted-foreground">Respect user's reduced motion preferences</p>
                    </div>
                    <Switch id="reduced-motion" defaultChecked />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>CSS Customization</CardTitle>
                  <CardDescription>Add custom CSS to your app</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="custom-css">Custom CSS</Label>
                    <div className="relative">
                      <div className="rounded-md border bg-muted px-3 py-2 text-sm font-mono h-32 overflow-auto">
                        {`.app-container {
  max-width: 100%;
  overflow-x: hidden;
}

.product-card:hover {
  transform: translateY(-4px);
  transition: transform 0.2s ease-in-out;
}`}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Save Custom CSS
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Export Theme</CardTitle>
                  <CardDescription>Export your theme settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="export-format">Export Format</Label>
                    <Select defaultValue="json">
                      <SelectTrigger id="export-format">
                        <SelectValue placeholder="Select format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="json">JSON</SelectItem>
                        <SelectItem value="css">CSS Variables</SelectItem>
                        <SelectItem value="scss">SCSS</SelectItem>
                      </SelectContent>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Import Theme</Button>
                  <Button>Export Theme</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>See how your changes look</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative mx-auto w-64 h-[500px] rounded-3xl border-8 border-gray-800 overflow-hidden shadow-xl">
                <div
                  className="absolute inset-0 bg-white"
                  style={{
                    backgroundColor: darkMode ? "#121212" : "#FFFFFF",
                    color: darkMode ? "#FFFFFF" : "#121212",
                    fontFamily,
                  }}
                >
                  {/* App Header */}
                  <div
                    className="p-4 border-b"
                    style={{
                      backgroundColor: primaryColor,
                      color: "#FFFFFF",
                    }}
                  >
                    <h3 className="font-semibold">Shopping App</h3>
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Featured Products</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4].map((item) => (
                          <div
                            key={item}
                            className="rounded-md overflow-hidden border"
                            style={{ borderRadius: `${borderRadius[0]}px` }}
                          >
                            <div className="bg-gray-200 h-20"></div>
                            <div className="p-2">
                              <div className="text-xs font-medium">Product {item}</div>
                              <div className="text-xs" style={{ color: secondaryColor }}>
                                $19.99
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <button
                        className="w-full py-2 rounded-md text-white text-sm"
                        style={{
                          backgroundColor: primaryColor,
                          borderRadius: `${borderRadius[0]}px`,
                        }}
                      >
                        View All Products
                      </button>
                    </div>
                  </div>

                  {/* App Navigation */}
                  <div
                    className="absolute bottom-0 left-0 right-0 border-t flex justify-around p-2 bg-white"
                    style={{
                      backgroundColor: darkMode ? "#1E1E1E" : "#FFFFFF",
                    }}
                  >
                    {previewScreens.map((screen) => (
                      <div key={screen.name} className="flex flex-col items-center">
                        <div className="p-1" style={{ color: screen.name === "Home" ? primaryColor : undefined }}>
                          {screen.icon}
                        </div>
                        <span className="text-[10px]">{screen.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <div className="w-full flex justify-between items-center">
                <Label htmlFor="preview-screen">Screen</Label>
                <Select defaultValue="home">
                  <SelectTrigger id="preview-screen" className="w-[120px]">
                    <SelectValue placeholder="Select screen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="search">Search</SelectItem>
                    <SelectItem value="cart">Cart</SelectItem>
                    <SelectItem value="profile">Profile</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="outline" className="w-full">
                Open Full Preview
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
