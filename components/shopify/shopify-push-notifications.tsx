"use client"

import { useState } from "react"
import {
  Page,
  Layout,
  Card,
  Button,
  Tabs,
  TextField,
  Select,
  Stack,
  Checkbox,
  DatePicker,
  Badge,
  ResourceList,
  ResourceItem,
  TextStyle,
} from "@shopify/polaris"
import { Bell, Filter, Plus, Search, Send, Settings, Smartphone } from "lucide-react"

export default function ShopifyPushNotifications() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [title, setTitle] = useState("")
  const [message, setMessage] = useState("")
  const [linkType, setLinkType] = useState("product")
  const [linkDetails, setLinkDetails] = useState("")
  const [audience, setAudience] = useState("all")
  const [sendImmediately, setSendImmediately] = useState(true)
  const [scheduleForLater, setScheduleForLater] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [searchValue, setSearchValue] = useState("")

  const handleTabChange = (selectedTabIndex: number) => {
    setSelectedTab(selectedTabIndex)
  }

  const tabs = [
    {
      id: "compose",
      content: "Compose",
      panelID: "compose-panel",
    },
    {
      id: "scheduled",
      content: "Scheduled",
      panelID: "scheduled-panel",
    },
    {
      id: "sent",
      content: "Sent",
      panelID: "sent-panel",
    },
    {
      id: "analytics",
      content: "Analytics",
      panelID: "analytics-panel",
    },
  ]

  const handleSendNotification = () => {
    alert("Notification sent!")
  }

  const handleSaveAsDraft = () => {
    alert("Saved as draft!")
  }

  const handlePreview = () => {
    alert("Preview notification")
  }

  const linkTypeOptions = [
    { label: "Product Page", value: "product" },
    { label: "Category", value: "category" },
    { label: "Shopping Cart", value: "cart" },
    { label: "Custom URL", value: "custom" },
  ]

  const audienceOptions = [
    { label: "All Users", value: "all" },
    { label: "Active Users", value: "active" },
    { label: "Inactive Users", value: "inactive" },
    { label: "New Users", value: "new" },
    { label: "Custom Segment", value: "custom" },
  ]

  const scheduledNotifications = [
    {
      id: "1",
      title: "Flash Sale Announcement",
      scheduledFor: "May 15, 2023 at 9:00 AM",
      message: "Don't miss our flash sale! Get up to 50% off on all products for 24 hours only.",
      audience: "All Users (24,500)",
    },
    {
      id: "2",
      title: "New Collection Launch",
      scheduledFor: "May 20, 2023 at 10:00 AM",
      message: "Our summer collection is here! Check out the latest styles for the season.",
      audience: "Active Users (18,750)",
    },
    {
      id: "3",
      title: "Limited Time Offer",
      scheduledFor: "May 25, 2023 at 2:00 PM",
      message: "Limited time offer: Free shipping on all orders over $50!",
      audience: "All Users (24,500)",
    },
  ]

  const sentNotifications = [
    {
      id: "1",
      title: "New Collection Available",
      sentOn: "May 10, 2023 at 10:00 AM",
      message: "Check out our new summer collection! Fresh styles just arrived.",
      stats: {
        sent: "24,500",
        opened: "12,345 (50.4%)",
      },
    },
    {
      id: "2",
      title: "Weekend Sale",
      sentOn: "May 5, 2023 at 9:00 AM",
      message: "Weekend sale! Get 30% off on all products this weekend.",
      stats: {
        sent: "24,500",
        opened: "13,475 (55.0%)",
      },
    },
    {
      id: "3",
      title: "App Update",
      sentOn: "May 1, 2023 at 11:00 AM",
      message: "We've updated our app with new features! Check them out now.",
      stats: {
        sent: "24,500",
        opened: "10,780 (44.0%)",
      },
    },
    {
      id: "4",
      title: "Restock Alert",
      sentOn: "April 28, 2023 at 3:00 PM",
      message: "Your favorite items are back in stock! Shop now before they're gone.",
      stats: {
        sent: "24,500",
        opened: "14,700 (60.0%)",
      },
    },
  ]

  return (
    <Page
      title="Push Notifications"
      subtitle="Manage and send push notifications to your mobile app users"
      primaryAction={
        <Button primary icon={<Plus />}>
          Create Notification
        </Button>
      }
      secondaryActions={[
        {
          content: "Settings",
          icon: <Settings />,
        },
      ]}
    >
      <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />

      <div className="mt-4">
        {selectedTab === 0 && (
          <Layout>
            <Layout.Section>
              <Card title="Compose New Notification">
                <Card.Section>
                  <p>Create a new push notification to send to your users</p>
                </Card.Section>

                <Card.Section>
                  <Stack vertical spacing="loose">
                    <TextField
                      label="Notification Title"
                      value={title}
                      onChange={setTitle}
                      placeholder="Enter notification title"
                    />

                    <TextField
                      label="Notification Message"
                      value={message}
                      onChange={setMessage}
                      placeholder="Enter notification message"
                      multiline={4}
                    />

                    <Stack vertical spacing="tight">
                      <TextStyle>Deep Link (Optional)</TextStyle>
                      <Stack distribution="fillEvenly">
                        <Select label="" options={linkTypeOptions} value={linkType} onChange={setLinkType} />
                        <TextField
                          label=""
                          value={linkDetails}
                          onChange={setLinkDetails}
                          placeholder="Enter link details"
                        />
                      </Stack>
                    </Stack>

                    <Select label="Audience" options={audienceOptions} value={audience} onChange={setAudience} />

                    <hr />

                    <Stack vertical spacing="tight">
                      <TextStyle>Scheduling</TextStyle>
                      <Checkbox label="Send immediately" checked={sendImmediately} onChange={setSendImmediately} />
                      <Checkbox label="Schedule for later" checked={scheduleForLater} onChange={setScheduleForLater} />

                      {scheduleForLater && (
                        <Stack distribution="fillEvenly">
                          <DatePicker
                            month={selectedDate.getMonth()}
                            year={selectedDate.getFullYear()}
                            onChange={({ start }) => setSelectedDate(start)}
                            selected={selectedDate}
                          />
                          <TextField label="Time" type="time" value="09:00" />
                        </Stack>
                      )}
                    </Stack>
                  </Stack>
                </Card.Section>

                <Card.Section>
                  <Stack distribution="equalSpacing">
                    <Button onClick={handlePreview}>Preview</Button>
                    <Stack>
                      <Button onClick={handleSaveAsDraft}>Save as Draft</Button>
                      <Button primary onClick={handleSendNotification} icon={<Send />}>
                        Send Notification
                      </Button>
                    </Stack>
                  </Stack>
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        )}

        {selectedTab === 1 && (
          <Layout>
            <Layout.Section>
              <Card>
                <Card.Section>
                  <Stack distribution="equalSpacing">
                    <Stack>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <TextField
                          label=""
                          value={searchValue}
                          onChange={setSearchValue}
                          placeholder="Search scheduled notifications..."
                          prefix={
                            <span className="sr-only">
                              <Search />
                            </span>
                          }
                        />
                      </div>
                      <Button icon={<Filter />}>Filter</Button>
                    </Stack>
                    <Button primary icon={<Plus />}>
                      Schedule New
                    </Button>
                  </Stack>
                </Card.Section>

                <ResourceList
                  resourceName={{ singular: "notification", plural: "notifications" }}
                  items={scheduledNotifications}
                  renderItem={(item) => (
                    <ResourceItem id={item.id} accessibilityLabel={`View details for ${item.title}`}>
                      <Stack>
                        <Stack.Item fill>
                          <Stack vertical spacing="extraTight">
                            <Stack alignment="center" distribution="equalSpacing">
                              <TextStyle variation="strong">{item.title}</TextStyle>
                              <Badge status="attention">Scheduled</Badge>
                            </Stack>
                            <TextStyle variation="subdued">Scheduled for {item.scheduledFor}</TextStyle>
                            <p>{item.message}</p>
                          </Stack>
                        </Stack.Item>
                        <Stack vertical alignment="trailing">
                          <Stack alignment="center">
                            <Smartphone className="h-3 w-3 text-gray-500" />
                            <TextStyle variation="subdued">Target: {item.audience}</TextStyle>
                          </Stack>
                          <Stack>
                            <Button size="slim">Edit</Button>
                            <Button size="slim" destructive>
                              Cancel
                            </Button>
                          </Stack>
                        </Stack>
                      </Stack>
                    </ResourceItem>
                  )}
                />
              </Card>
            </Layout.Section>
          </Layout>
        )}

        {selectedTab === 2 && (
          <Layout>
            <Layout.Section>
              <Card>
                <Card.Section>
                  <Stack>
                    <div className="relative flex-1">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <TextField
                        label=""
                        value={searchValue}
                        onChange={setSearchValue}
                        placeholder="Search sent notifications..."
                        prefix={
                          <span className="sr-only">
                            <Search />
                          </span>
                        }
                      />
                    </div>
                    <Button icon={<Filter />}>Filter</Button>
                  </Stack>
                </Card.Section>

                <ResourceList
                  resourceName={{ singular: "notification", plural: "notifications" }}
                  items={sentNotifications}
                  renderItem={(item) => (
                    <ResourceItem id={item.id} accessibilityLabel={`View details for ${item.title}`}>
                      <Stack>
                        <Stack.Item fill>
                          <Stack vertical spacing="extraTight">
                            <Stack alignment="center" distribution="equalSpacing">
                              <TextStyle variation="strong">{item.title}</TextStyle>
                              <Badge>Sent</Badge>
                            </Stack>
                            <TextStyle variation="subdued">Sent on {item.sentOn}</TextStyle>
                            <p>{item.message}</p>
                          </Stack>
                        </Stack.Item>
                        <Stack vertical alignment="trailing">
                          <Stack>
                            <Stack alignment="center" spacing="extraTight">
                              <Smartphone className="h-3 w-3 text-gray-500" />
                              <TextStyle variation="subdued">Sent: {item.stats.sent}</TextStyle>
                            </Stack>
                            <Stack alignment="center" spacing="extraTight">
                              <Bell className="h-3 w-3 text-gray-500" />
                              <TextStyle variation="subdued">Opened: {item.stats.opened}</TextStyle>
                            </Stack>
                          </Stack>
                          <Button size="slim">View Details</Button>
                        </Stack>
                      </Stack>
                    </ResourceItem>
                  )}
                />
              </Card>
            </Layout.Section>
          </Layout>
        )}

        {selectedTab === 3 && (
          <Layout>
            <Layout.Section>
              <Stack distribution="fillEvenly">
                <Card title="Total Notifications">
                  <Card.Section>
                    <TextStyle variation="strong" element="h3">
                      245
                    </TextStyle>
                    <TextStyle variation="positive">+12% from last month</TextStyle>
                  </Card.Section>
                </Card>

                <Card title="Average Open Rate">
                  <Card.Section>
                    <TextStyle variation="strong" element="h3">
                      48.2%
                    </TextStyle>
                    <TextStyle variation="positive">+3.1% from last month</TextStyle>
                  </Card.Section>
                </Card>

                <Card title="Conversion Rate">
                  <Card.Section>
                    <TextStyle variation="strong" element="h3">
                      5.7%
                    </TextStyle>
                    <TextStyle variation="positive">+0.8% from last month</TextStyle>
                  </Card.Section>
                </Card>
              </Stack>
            </Layout.Section>

            <Layout.Section>
              <Card title="Notification Performance">
                <Card.Section>
                  <p>View the performance of your recent notifications</p>
                </Card.Section>

                <Card.Section>
                  <ResourceList
                    resourceName={{ singular: "notification", plural: "notifications" }}
                    items={[1, 2, 3, 4, 5].map((i) => ({ id: i.toString() }))}
                    renderItem={(item) => (
                      <ResourceItem id={item.id} accessibilityLabel={`View details for notification ${item.id}`}>
                        <Stack>
                          <Stack.Item fill>
                            <Stack vertical spacing="extraTight">
                              <TextStyle variation="strong">Summer Sale Announcement</TextStyle>
                              <TextStyle variation="subdued">Sent on May 5, 2023</TextStyle>
                            </Stack>
                          </Stack.Item>
                          <Stack distribution="fillEvenly">
                            <Stack vertical alignment="center">
                              <TextStyle variation="strong">Sent</TextStyle>
                              <TextStyle>24,500</TextStyle>
                            </Stack>
                            <Stack vertical alignment="center">
                              <TextStyle variation="strong">Opened</TextStyle>
                              <TextStyle>12,250 (50%)</TextStyle>
                            </Stack>
                            <Stack vertical alignment="center">
                              <TextStyle variation="strong">Clicked</TextStyle>
                              <TextStyle>3,675 (15%)</TextStyle>
                            </Stack>
                            <Stack vertical alignment="center">
                              <TextStyle variation="strong">Converted</TextStyle>
                              <TextStyle>735 (3%)</TextStyle>
                            </Stack>
                          </Stack>
                        </Stack>
                      </ResourceItem>
                    )}
                  />
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        )}
      </div>
    </Page>
  )
}
