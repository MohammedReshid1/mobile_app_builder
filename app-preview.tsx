"use client"

import { useState } from "react"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Home,
  Layers,
  LayoutGrid,
  Menu,
  MoreHorizontal,
  RefreshCw,
  Search,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Tablet,
  User,
  Plus,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function AppPreview() {
  const [selectedDevice, setSelectedDevice] = useState("iphone")
  const [selectedScreen, setSelectedScreen] = useState("home")
  const [primaryColor, setPrimaryColor] = useState("#3b82f6") // blue-500

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Casual T-Shirt",
      price: "$29.99",
      image: "/placeholder.svg?height=120&width=120",
      discount: "20% OFF",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "$89.99",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 3,
      name: "Summer Dress",
      price: "$49.99",
      image: "/placeholder.svg?height=120&width=120",
      discount: "NEW",
    },
    {
      id: 4,
      name: "Leather Boots",
      price: "$129.99",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      id: 5,
      name: "Slim Fit Jeans",
      price: "$59.99",
      image: "/placeholder.svg?height=120&width=120",
      discount: "10% OFF",
    },
    {
      id: 6,
      name: "Cotton Sweater",
      price: "$45.99",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

  // Sample categories
  const categories = [
    { name: "Women", icon: "👚" },
    { name: "Men", icon: "👔" },
    { name: "Kids", icon: "🧸" },
    { name: "Accessories", icon: "👜" },
    { name: "Shoes", icon: "👟" },
    { name: "Sale", icon: "🏷️" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Dashboard</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8">
            <RefreshCw className="mr-2 h-3.5 w-3.5" />
            Reset Preview
          </Button>
          <Button size="sm" className="h-8">
            Save Changes
          </Button>
        </div>
      </header>

      <div className="grid flex-1 md:grid-cols-[1fr_350px]">
        {/* Main Preview Area */}
        <div className="flex flex-col items-center justify-center bg-muted/30 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedDevice("iphone")}
              className={selectedDevice === "iphone" ? "bg-accent" : ""}
            >
              <Smartphone className="mr-2 h-4 w-4" />
              iPhone
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedDevice("android")}
              className={selectedDevice === "android" ? "bg-accent" : ""}
            >
              <Smartphone className="mr-2 h-4 w-4" />
              Android
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedDevice("tablet")}
              className={selectedDevice === "tablet" ? "bg-accent" : ""}
            >
              <Tablet className="mr-2 h-4 w-4" />
              Tablet
            </Button>
          </div>

          {/* Phone Mockup */}
          <div
            className={`relative mx-auto overflow-hidden rounded-[32px] border-[14px] border-gray-900 bg-white shadow-xl ${
              selectedDevice === "tablet" ? "h-[600px] w-[400px]" : "h-[600px] w-[300px]"
            }`}
          >
            {/* Status Bar */}
            <div className="absolute inset-x-0 top-0 z-10 h-6 bg-gray-900">
              <div className="mx-auto mt-1 h-1 w-16 rounded-full bg-gray-800" />
            </div>

            {/* App Content */}
            <div className="h-full w-full overflow-hidden bg-white">
              {/* App Header */}
              <div className="flex h-14 items-center justify-between px-4" style={{ backgroundColor: primaryColor }}>
                <Menu className="h-5 w-5 text-white" />
                <span className="text-lg font-medium text-white">Fashion Store</span>
                <div className="flex items-center gap-3">
                  <Search className="h-5 w-5 text-white" />
                  <ShoppingCart className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* App Content based on selected screen */}
              {selectedScreen === "home" && (
                <div className="h-full overflow-auto pb-16">
                  {/* Banner */}
                  <div className="relative h-40 w-full bg-gray-200">
                    <Image src="/placeholder.svg?height=160&width=400" alt="Banner" fill className="object-cover" />
                    <div className="absolute inset-0 flex flex-col items-start justify-center bg-black/30 p-6">
                      <span className="text-sm font-medium text-white">NEW COLLECTION</span>
                      <h3 className="text-xl font-bold text-white">Summer 2023</h3>
                      <Button
                        size="sm"
                        className="mt-2"
                        style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="p-4">
                    <h3 className="mb-3 font-medium">Categories</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {categories.map((category) => (
                        <div
                          key={category.name}
                          className="flex flex-col items-center justify-center rounded-lg border p-3"
                        >
                          <span className="text-2xl">{category.icon}</span>
                          <span className="mt-1 text-xs">{category.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured Products */}
                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-medium">Featured Products</h3>
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                        View All
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {products.slice(0, 4).map((product) => (
                        <div
                          key={product.id}
                          className="overflow-hidden rounded-lg border bg-white"
                          onClick={() => setSelectedScreen("product")}
                        >
                          <div className="relative h-24 w-full bg-gray-100">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                            {product.discount && (
                              <span className="absolute left-1 top-1 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
                                {product.discount}
                              </span>
                            )}
                          </div>
                          <div className="p-2">
                            <h4 className="truncate text-xs font-medium">{product.name}</h4>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-xs font-semibold">{product.price}</span>
                              <Button size="icon" variant="ghost" className="h-6 w-6" style={{ color: primaryColor }}>
                                <ShoppingBag className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* New Arrivals */}
                  <div className="p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="font-medium">New Arrivals</h3>
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                        View All
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {products.slice(2, 6).map((product) => (
                        <div
                          key={product.id}
                          className="overflow-hidden rounded-lg border bg-white"
                          onClick={() => setSelectedScreen("product")}
                        >
                          <div className="relative h-24 w-full bg-gray-100">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                            {product.discount && (
                              <span className="absolute left-1 top-1 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-medium text-white">
                                {product.discount}
                              </span>
                            )}
                          </div>
                          <div className="p-2">
                            <h4 className="truncate text-xs font-medium">{product.name}</h4>
                            <div className="mt-1 flex items-center justify-between">
                              <span className="text-xs font-semibold">{product.price}</span>
                              <Button size="icon" variant="ghost" className="h-6 w-6" style={{ color: primaryColor }}>
                                <ShoppingBag className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedScreen === "product" && (
                <div className="h-full overflow-auto pb-16">
                  {/* Product Header */}
                  <div className="relative h-64 w-full bg-gray-100">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-2 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                      onClick={() => setSelectedScreen("home")}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-2 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                    <Image src="/placeholder.svg?height=256&width=300" alt="Product" fill className="object-cover" />
                    <div className="absolute bottom-4 left-0 flex w-full justify-center gap-1">
                      <div className="h-1.5 w-6 rounded-full bg-white" />
                      <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                      <div className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <h2 className="text-lg font-semibold">Casual T-Shirt</h2>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className="h-3 w-3 fill-current text-yellow-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500">(24 Reviews)</span>
                        </div>
                      </div>
                      <div className="text-xl font-bold" style={{ color: primaryColor }}>
                        $29.99
                      </div>
                    </div>

                    <Separator className="my-3" />

                    {/* Color Options */}
                    <div className="mb-4">
                      <h3 className="mb-2 text-sm font-medium">Color</h3>
                      <div className="flex gap-2">
                        <div className="h-6 w-6 rounded-full border-2 border-primary bg-black" />
                        <div className="h-6 w-6 rounded-full border bg-white" />
                        <div className="h-6 w-6 rounded-full border bg-blue-500" />
                        <div className="h-6 w-6 rounded-full border bg-red-500" />
                      </div>
                    </div>

                    {/* Size Options */}
                    <div className="mb-4">
                      <h3 className="mb-2 text-sm font-medium">Size</h3>
                      <div className="flex gap-2">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                          <div
                            key={size}
                            className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs ${
                              size === "M" ? "border-2 border-primary font-semibold" : ""
                            }`}
                          >
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <h3 className="mb-2 text-sm font-medium">Description</h3>
                      <p className="text-xs text-gray-600">
                        This casual t-shirt is perfect for everyday wear. Made from 100% cotton, it offers both comfort
                        and style. The minimalist design makes it easy to pair with any outfit.
                      </p>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="mt-4 grid grid-cols-5 gap-2">
                      <div className="col-span-1 flex items-center justify-center rounded-lg border">
                        <Button variant="ghost" size="icon" className="h-full">
                          <ShoppingBag className="h-5 w-5" />
                        </Button>
                      </div>
                      <Button
                        className="col-span-4"
                        style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {selectedScreen === "cart" && (
                <div className="h-full overflow-auto pb-16">
                  <div className="p-4">
                    <h2 className="mb-4 text-lg font-semibold">Shopping Cart (3)</h2>

                    {/* Cart Items */}
                    <div className="space-y-3">
                      {[
                        { name: "Casual T-Shirt", price: "$29.99", quantity: 1 },
                        { name: "Denim Jacket", price: "$89.99", quantity: 1 },
                        { name: "Summer Dress", price: "$49.99", quantity: 1 },
                      ].map((item, index) => (
                        <div key={index} className="flex gap-3 rounded-lg border p-2">
                          <div className="h-16 w-16 flex-shrink-0 rounded bg-gray-100">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt={item.name}
                              width={64}
                              height={64}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <h4 className="font-medium">{item.name}</h4>
                            <div className="mt-auto flex items-center justify-between">
                              <div className="flex items-center gap-2 rounded-lg border">
                                <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                  <ChevronLeft className="h-3 w-3" />
                                </Button>
                                <span className="text-xs">{item.quantity}</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
                                  <ChevronRight className="h-3 w-3" />
                                </Button>
                              </div>
                              <span className="font-semibold">{item.price}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="mt-4 space-y-2 rounded-lg border p-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Subtotal</span>
                        <span className="text-sm font-medium">$169.97</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Shipping</span>
                        <span className="text-sm font-medium">$5.99</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="font-medium">Total</span>
                        <span className="font-bold">$175.96</span>
                      </div>
                    </div>

                    {/* Checkout Button */}
                    <Button
                      className="mt-4 w-full"
                      style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              )}

              {/* Bottom Navigation */}
              <div className="absolute inset-x-0 bottom-0 flex h-14 items-center justify-around border-t bg-white">
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-full rounded-none ${selectedScreen === "home" ? "text-primary" : ""}`}
                  onClick={() => setSelectedScreen("home")}
                  style={{ color: selectedScreen === "home" ? primaryColor : "" }}
                >
                  <Home className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-full rounded-none ${selectedScreen === "categories" ? "text-primary" : ""}`}
                  onClick={() => setSelectedScreen("categories")}
                  style={{ color: selectedScreen === "categories" ? primaryColor : "" }}
                >
                  <LayoutGrid className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-full rounded-none ${selectedScreen === "cart" ? "text-primary" : ""}`}
                  onClick={() => setSelectedScreen("cart")}
                  style={{ color: selectedScreen === "cart" ? primaryColor : "" }}
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`h-full rounded-none ${selectedScreen === "profile" ? "text-primary" : ""}`}
                  onClick={() => setSelectedScreen("profile")}
                  style={{ color: selectedScreen === "profile" ? primaryColor : "" }}
                >
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Screen Navigation */}
          <div className="mt-6 flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSelectedScreen("home")}
                    className={selectedScreen === "home" ? "bg-accent" : ""}
                  >
                    <Home className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Home Screen</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSelectedScreen("product")}
                    className={selectedScreen === "product" ? "bg-accent" : ""}
                  >
                    <Layers className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Product Screen</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSelectedScreen("cart")}
                    className={selectedScreen === "cart" ? "bg-accent" : ""}
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Cart Screen</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSelectedScreen("categories")}
                    className={selectedScreen === "categories" ? "bg-accent" : ""}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Categories Screen</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setSelectedScreen("profile")}
                    className={selectedScreen === "profile" ? "bg-accent" : ""}
                  >
                    <User className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Profile Screen</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="border-l">
          <div className="border-b p-4">
            <h2 className="text-lg font-semibold">Preview Settings</h2>
            <p className="text-sm text-muted-foreground">Customize how your app looks and behaves</p>
          </div>

          <div className="p-4">
            <Tabs defaultValue="appearance">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
              </TabsList>

              <TabsContent value="appearance" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Primary Color</label>
                  <div className="grid grid-cols-6 gap-2">
                    <button
                      className="h-8 w-8 rounded-full bg-blue-500 ring-2 ring-offset-2"
                      style={{
                        backgroundColor: "#3b82f6",
                        ringColor: primaryColor === "#3b82f6" ? "#3b82f6" : "transparent",
                      }}
                      onClick={() => setPrimaryColor("#3b82f6")}
                    />
                    <button
                      className="h-8 w-8 rounded-full bg-red-500"
                      style={{
                        backgroundColor: "#ef4444",
                        ringColor: primaryColor === "#ef4444" ? "#ef4444" : "transparent",
                        ring: primaryColor === "#ef4444" ? 2 : 0,
                        ringOffset: primaryColor === "#ef4444" ? 2 : 0,
                      }}
                      onClick={() => setPrimaryColor("#ef4444")}
                    />
                    <button
                      className="h-8 w-8 rounded-full bg-green-500"
                      style={{
                        backgroundColor: "#22c55e",
                        ringColor: primaryColor === "#22c55e" ? "#22c55e" : "transparent",
                        ring: primaryColor === "#22c55e" ? 2 : 0,
                        ringOffset: primaryColor === "#22c55e" ? 2 : 0,
                      }}
                      onClick={() => setPrimaryColor("#22c55e")}
                    />
                    <button
                      className="h-8 w-8 rounded-full bg-purple-500"
                      style={{
                        backgroundColor: "#a855f7",
                        ringColor: primaryColor === "#a855f7" ? "#a855f7" : "transparent",
                        ring: primaryColor === "#a855f7" ? 2 : 0,
                        ringOffset: primaryColor === "#a855f7" ? 2 : 0,
                      }}
                      onClick={() => setPrimaryColor("#a855f7")}
                    />
                    <button
                      className="h-8 w-8 rounded-full bg-pink-500"
                      style={{
                        backgroundColor: "#ec4899",
                        ringColor: primaryColor === "#ec4899" ? "#ec4899" : "transparent",
                        ring: primaryColor === "#ec4899" ? 2 : 0,
                        ringOffset: primaryColor === "#ec4899" ? 2 : 0,
                      }}
                      onClick={() => setPrimaryColor("#ec4899")}
                    />
                    <button
                      className="h-8 w-8 rounded-full bg-orange-500"
                      style={{
                        backgroundColor: "#f97316",
                        ringColor: primaryColor === "#f97316" ? "#f97316" : "transparent",
                        ring: primaryColor === "#f97316" ? 2 : 0,
                        ringOffset: primaryColor === "#f97316" ? 2 : 0,
                      }}
                      onClick={() => setPrimaryColor("#f97316")}
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Input
                      type="text"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="h-8"
                    />
                    <Button variant="outline" size="sm" className="h-8">
                      Apply
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Font Family</label>
                  <Select defaultValue="inter">
                    <SelectTrigger>
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inter">Inter</SelectItem>
                      <SelectItem value="roboto">Roboto</SelectItem>
                      <SelectItem value="poppins">Poppins</SelectItem>
                      <SelectItem value="montserrat">Montserrat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Button Style</label>
                  <Select defaultValue="rounded">
                    <SelectTrigger>
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rounded">Rounded</SelectItem>
                      <SelectItem value="pill">Pill</SelectItem>
                      <SelectItem value="square">Square</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Navigation Style</label>
                  <Select defaultValue="icons">
                    <SelectTrigger>
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="icons">Icons</SelectItem>
                      <SelectItem value="text">Text</SelectItem>
                      <SelectItem value="both">Icons & Text</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Theme Mode</CardTitle>
                    <CardDescription>Choose light or dark mode for your app</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                      </svg>
                      Light
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      </svg>
                      Dark
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="content" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">App Name</label>
                  <Input defaultValue="Fashion Store" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Home Screen Layout</label>
                  <Select defaultValue="standard">
                    <SelectTrigger>
                      <SelectValue placeholder="Select layout" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="grid">Grid</SelectItem>
                      <SelectItem value="carousel">Carousel</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Home Screen Sections</label>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4" />
                        <span className="text-sm">Banner Slider</span>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        <LayoutGrid className="h-4 w-4" />
                        <span className="text-sm">Categories</span>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4" />
                        <span className="text-sm">Featured Products</span>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border p-3">
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4" />
                        <span className="text-sm">New Arrivals</span>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Section
                  </Button>
                </div>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Product Display</CardTitle>
                    <CardDescription>Configure how products are displayed</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Show Prices</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Show Ratings</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Show Discount Badges</span>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Quick Add to Cart</span>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="border-t p-4">
            <Button className="w-full">Apply Changes</Button>
            <Button variant="outline" className="mt-2 w-full">
              Save as Template
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Switch({ defaultChecked, ...props }) {
  const [checked, setChecked] = useState(defaultChecked || false)
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      data-state={checked ? "checked" : "unchecked"}
      className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${
        checked ? "bg-primary" : "bg-input"
      }`}
      onClick={() => setChecked(!checked)}
      {...props}
    >
      <span
        data-state={checked ? "checked" : "unchecked"}
        className={`pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform ${
          checked ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  )
}
