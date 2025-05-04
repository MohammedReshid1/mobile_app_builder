"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  Check,
  CreditCard,
  Download,
  FileText,
  HelpCircle,
  Info,
  Plus,
  RefreshCw,
  Shield,
  Zap,
  Smartphone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"

export default function BillingClient() {
  useEffect(() => {
    const fixWidthIssues = () => {
      const container = document.querySelector(".shopify-app-content")
      if (container) {
        container.classList.add("w-full", "max-w-none")
      }

      const parents = document.querySelectorAll(".Polaris-Frame__Content, .Polaris-Page, .Polaris-Layout")
      parents.forEach((el) => {
        el.classList.add("w-full", "max-w-none")
      })
    }

    fixWidthIssues()
    const observer = new MutationObserver(fixWidthIssues)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  const [selectedPlan, setSelectedPlan] = useState("pro")

  return (
    <div className="space-y-6 w-full max-w-none">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Billing & Subscription</h2>
          <p className="text-muted-foreground">Manage your subscription plan and payment methods</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <HelpCircle className="mr-2 h-4 w-4" />
            Billing Support
          </Button>
        </div>
      </div>

      <Tabs defaultValue="subscription" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="subscription" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle>Current Plan</CardTitle>
                  <CardDescription>You are currently on the Pro plan, billed monthly</CardDescription>
                </div>
                <Badge className="w-fit bg-green-500 text-white hover:bg-green-600">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold">
                      Pro Plan
                      <Badge variant="outline" className="ml-2">
                        Monthly
                      </Badge>
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Perfect for growing businesses with advanced features
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-2xl font-bold">$49.99</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Next billing date</span>
                    <span className="font-medium">June 15, 2023</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Payment method</span>
                    <span className="font-medium">Visa ending in 4242</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    <RefreshCw className="mr-2 h-3.5 w-3.5" />
                    Change Plan
                  </Button>
                  <Button variant="outline" size="sm">
                    <CreditCard className="mr-2 h-3.5 w-3.5" />
                    Update Payment
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                    Cancel Subscription
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Plan Features</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="flex items-start gap-2 rounded-lg border p-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Smartphone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">App Customization</h4>
                      <p className="text-xs text-muted-foreground">Full access to all design and branding features</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border p-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Push Notifications</h4>
                      <p className="text-xs text-muted-foreground">Up to 50,000 push notifications per month</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border p-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Premium Features</h4>
                      <p className="text-xs text-muted-foreground">Access to loyalty programs and digital wallets</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 rounded-lg border p-3">
                    <div className="rounded-full bg-primary/10 p-1">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Analytics</h4>
                      <p className="text-xs text-muted-foreground">Detailed user behavior and conversion analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Plans</CardTitle>
              <CardDescription>Choose the best plan for your business needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card
                  className={`cursor-pointer border-2 ${
                    selectedPlan === "starter" ? "border-primary" : "border-border"
                  }`}
                  onClick={() => setSelectedPlan("starter")}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Starter</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold">$19.99</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Basic app customization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Up to 10,000 push notifications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Standard analytics</span>
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <Info className="h-4 w-4" />
                        <span>No premium features</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant={selectedPlan === "starter" ? "default" : "outline"} className="w-full">
                      {selectedPlan === "starter" ? "Selected" : "Select Plan"}
                    </Button>
                  </CardFooter>
                </Card>

                <Card
                  className={`cursor-pointer border-2 ${selectedPlan === "pro" ? "border-primary" : "border-border"}`}
                  onClick={() => setSelectedPlan("pro")}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Pro</CardTitle>
                      <Badge>Popular</Badge>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold">$49.99</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Full app customization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Up to 50,000 push notifications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Advanced analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Premium features included</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant={selectedPlan === "pro" ? "default" : "outline"} className="w-full">
                      {selectedPlan === "pro" ? "Current Plan" : "Select Plan"}
                    </Button>
                  </CardFooter>
                </Card>

                <Card
                  className={`cursor-pointer border-2 ${
                    selectedPlan === "enterprise" ? "border-primary" : "border-border"
                  }`}
                  onClick={() => setSelectedPlan("enterprise")}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Enterprise</CardTitle>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold">$149.99</span>
                      <span className="text-sm text-muted-foreground">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Custom app development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Unlimited push notifications</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Enterprise analytics</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Dedicated support</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant={selectedPlan === "enterprise" ? "default" : "outline"} className="w-full">
                      {selectedPlan === "enterprise" ? "Selected" : "Select Plan"}
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="flex justify-center">
                <Button className="mt-4">
                  Upgrade Subscription
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment-methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods and billing information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-16 items-center justify-center rounded-md bg-muted">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 04/2025</p>
                    </div>
                  </div>
                  <Badge className="w-fit">Default</Badge>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    Remove
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-16 items-center justify-center rounded-md bg-muted">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">Mastercard ending in 8888</p>
                      <p className="text-sm text-muted-foreground">Expires 09/2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Make Default
                    </Button>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    Remove
                  </Button>
                </div>
              </div>

              <Button className="mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Add Payment Method
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Billing Information</CardTitle>
              <CardDescription>Update your billing address and contact information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="Acme Inc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="billing@acme.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Main St" />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="San Francisco" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" defaultValue="CA" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" defaultValue="94103" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input id="country" defaultValue="United States" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tax-id">Tax ID (Optional)</Label>
                <Input id="tax-id" placeholder="Enter your VAT or tax ID" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Billing Information</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Invoices & Receipts</CardTitle>
              <CardDescription>View and download your past invoices and receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV-001</TableCell>
                      <TableCell>May 15, 2023</TableCell>
                      <TableCell>$49.99</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 text-white hover:bg-green-600">Paid</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV-002</TableCell>
                      <TableCell>April 15, 2023</TableCell>
                      <TableCell>$49.99</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 text-white hover:bg-green-600">Paid</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">INV-003</TableCell>
                      <TableCell>March 15, 2023</TableCell>
                      <TableCell>$49.99</TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 text-white hover:bg-green-600">Paid</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="ml-auto">
                <Download className="mr-2 h-4 w-4" />
                Download All Invoices
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Usage & Limits</CardTitle>
              <CardDescription>Monitor your app's resource usage and limits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Push Notifications</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Monthly push notification limit based on your plan</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className="text-sm text-muted-foreground">22,450 / 50,000 notifications used</p>
                  </div>
                  <Badge variant="outline">45% Used</Badge>
                </div>
                <Progress value={45} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Storage</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Storage space for app assets and user data</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className="text-sm text-muted-foreground">6.5 GB / 10 GB storage used</p>
                  </div>
                  <Badge variant="outline">65% Used</Badge>
                </div>
                <Progress value={65} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">API Calls</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Monthly API request limit for your app</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className="text-sm text-muted-foreground">82,145 / 100,000 API calls used</p>
                  </div>
                  <Badge variant="outline">82% Used</Badge>
                </div>
                <Progress value={82} className="h-2" />
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-medium">Usage Alerts</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="push-alerts" defaultChecked />
                      <Label htmlFor="push-alerts">Push Notification Alerts</Label>
                    </div>
                    <span className="text-sm">at 80% usage</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="storage-alerts" defaultChecked />
                      <Label htmlFor="storage-alerts">Storage Alerts</Label>
                    </div>
                    <span className="text-sm">at 80% usage</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Switch id="api-alerts" defaultChecked />
                      <Label htmlFor="api-alerts">API Call Alerts</Label>
                    </div>
                    <span className="text-sm">at 80% usage</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Usage Report
              </Button>
              <Button>Upgrade Plan</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
