"use client"

import { Bell, Calendar, Clock, Filter, Plus, Search, Send, Settings, Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function PushNotificationsClient() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Push Notifications</h2>
          <p className="text-muted-foreground">Manage and send push notifications to your mobile app users</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Create Notification
          </Button>
        </div>
      </div>

      <Tabs defaultValue="compose" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="sent">Sent</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="compose" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compose New Notification</CardTitle>
              <CardDescription>Create a new push notification to send to your users</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Notification Title</Label>
                <Input id="title" placeholder="Enter notification title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Notification Message</Label>
                <Textarea id="message" placeholder="Enter notification message" className="min-h-[100px]" />
              </div>
              <div className="space-y-2">
                <Label>Deep Link (Optional)</Label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Select defaultValue="product">
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Link Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="product">Product Page</SelectItem>
                      <SelectItem value="category">Category</SelectItem>
                      <SelectItem value="cart">Shopping Cart</SelectItem>
                      <SelectItem value="custom">Custom URL</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Enter link details" className="flex-1" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Audience</Label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Users</SelectItem>
                    <SelectItem value="active">Active Users</SelectItem>
                    <SelectItem value="inactive">Inactive Users</SelectItem>
                    <SelectItem value="new">New Users</SelectItem>
                    <SelectItem value="custom">Custom Segment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator className="my-2" />

              <div className="space-y-3">
                <Label>Scheduling</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Switch id="send-now" defaultChecked />
                    <Label htmlFor="send-now">Send immediately</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="schedule" />
                    <Label htmlFor="schedule">Schedule for later</Label>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="flex">
                        <Input id="date" type="date" className="rounded-r-none" />
                        <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                          <Calendar className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <div className="flex">
                        <Input id="time" type="time" className="rounded-r-none" />
                        <Button variant="outline" size="icon" className="rounded-l-none border-l-0">
                          <Clock className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
              <Button variant="outline">Preview</Button>
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <Button variant="outline" className="sm:w-auto">
                  Save as Draft
                </Button>
                <Button className="sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Send Notification
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
              <div className="relative flex-1 sm:max-w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search scheduled notifications..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Schedule New
            </Button>
          </div>

          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <CardTitle>Flash Sale Announcement</CardTitle>
                    <Badge>Scheduled</Badge>
                  </div>
                  <CardDescription>Scheduled for May 15, 2023 at 9:00 AM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">
                    Don't miss our flash sale! Get up to 50% off on all products for 24 hours only.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Smartphone className="mr-1 h-3 w-3" />
                    <span>Target: All Users (24,500)</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      Cancel
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sent" className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
              <div className="relative flex-1 sm:max-w-[300px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search sent notifications..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <CardTitle>New Collection Available</CardTitle>
                    <Badge variant="outline">Sent</Badge>
                  </div>
                  <CardDescription>Sent on May 10, 2023 at 10:00 AM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Check out our new summer collection! Fresh styles just arrived.</p>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:gap-4">
                    <div className="flex items-center">
                      <Smartphone className="mr-1 h-3 w-3" />
                      <span>Sent: 24,500</span>
                    </div>
                    <div className="flex items-center">
                      <Bell className="mr-1 h-3 w-3" />
                      <span>Opened: 12,345 (50.4%)</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Average Open Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48.2%</div>
                <p className="text-xs text-muted-foreground">+3.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.7%</div>
                <p className="text-xs text-muted-foreground">+0.8% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Notification Performance</CardTitle>
              <CardDescription>View the performance of your recent notifications</CardDescription>
            </CardHeader>
            <CardContent className="overflow-auto">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex flex-col border-b pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="mb-2 sm:mb-0">
                      <h4 className="font-medium">Summer Sale Announcement</h4>
                      <p className="text-sm text-muted-foreground">Sent on May 5, 2023</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm sm:flex sm:gap-6 md:gap-8">
                      <div className="text-left sm:text-right">
                        <p className="font-medium">Sent</p>
                        <p>24,500</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-medium">Opened</p>
                        <p>12,250 (50%)</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-medium">Clicked</p>
                        <p>3,675 (15%)</p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="font-medium">Converted</p>
                        <p>735 (3%)</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
