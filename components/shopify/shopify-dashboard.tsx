"use client"

import { useState } from "react"
import { Page, Layout, Card, TextContainer, LegacyStack, Button, Tabs, Badge, ProgressBar } from "@shopify/polaris"
import { useAppBridge } from "@shopify/app-bridge-react"
import { Redirect } from "@shopify/app-bridge/actions"
import { PieChart, Smartphone, MessageSquare, CreditCard, Plus } from "lucide-react"

export default function ShopifyDashboard() {
  const app = useAppBridge()
  const redirect = Redirect.create(app)
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabChange = (selectedTabIndex: number) => {
    setSelectedTab(selectedTabIndex)
  }

  const tabs = [
    {
      id: "branding",
      content: "Branding",
      panelID: "branding-panel",
    },
    {
      id: "layout",
      content: "Layout",
      panelID: "layout-panel",
    },
    {
      id: "features",
      content: "Features",
      panelID: "features-panel",
    },
  ]

  return (
    <Page title="Dashboard">
      <Layout>
        {/* Analytics Cards */}
        <Layout.Section>
          <LegacyStack distribution="fillEvenly">
            <Card sectioned>
              <LegacyStack vertical spacing="extraTight">
                <LegacyStack alignment="center" distribution="equalSpacing">
                  <TextContainer>
                    <p>Total Users</p>
                  </TextContainer>
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                </LegacyStack>
                <p className="text-2xl font-bold">12,546</p>
                <p className="text-xs text-success">+16% from last month</p>
              </LegacyStack>
            </Card>

            <Card sectioned>
              <LegacyStack vertical spacing="extraTight">
                <LegacyStack alignment="center" distribution="equalSpacing">
                  <TextContainer>
                    <p>App Installs</p>
                  </TextContainer>
                  <Smartphone className="h-4 w-4 text-muted-foreground" />
                </LegacyStack>
                <p className="text-2xl font-bold">8,942</p>
                <p className="text-xs text-success">+12% from last month</p>
              </LegacyStack>
            </Card>

            <Card sectioned>
              <LegacyStack vertical spacing="extraTight">
                <LegacyStack alignment="center" distribution="equalSpacing">
                  <TextContainer>
                    <p>Push Notifications Sent</p>
                  </TextContainer>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </LegacyStack>
                <p className="text-2xl font-bold">45,231</p>
                <p className="text-xs text-success">+24% from last month</p>
              </LegacyStack>
            </Card>

            <Card sectioned>
              <LegacyStack vertical spacing="extraTight">
                <LegacyStack alignment="center" distribution="equalSpacing">
                  <TextContainer>
                    <p>Conversion Rate</p>
                  </TextContainer>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </LegacyStack>
                <p className="text-2xl font-bold">3.2%</p>
                <p className="text-xs text-success">+0.5% from last month</p>
              </LegacyStack>
            </Card>
          </LegacyStack>
        </Layout.Section>

        {/* App Management Section */}
        <Layout.Section>
          <Layout>
            <Layout.Section variant="oneThird">
              <Card title="App Management">
                <Card.Section>
                  <p>Customize your mobile app's appearance and functionality</p>
                </Card.Section>

                <Card.Section>
                  <Tabs tabs={tabs} selected={selectedTab} onSelect={handleTabChange} />

                  {selectedTab === 0 && (
                    <div className="mt-4 space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <p className="text-sm font-medium">App Icon</p>
                          <div className="mt-2 flex h-24 w-24 items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100">
                            <Button plain icon={<Plus />} />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Splash Screen</p>
                          <div className="mt-2 flex h-24 w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-100">
                            <Button plain icon={<Plus />} />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Primary Color</p>
                        <div className="flex gap-2">
                          <div className="h-8 w-8 rounded-full bg-red-500" />
                          <div className="h-8 w-8 rounded-full bg-blue-500" />
                          <div className="h-8 w-8 rounded-full bg-green-500" />
                          <div className="h-8 w-8 rounded-full bg-purple-500" />
                          <div className="h-8 w-8 rounded-full bg-yellow-500" />
                          <div className="h-8 w-8 rounded-full bg-pink-500" />
                          <div className="h-8 w-8 rounded-full bg-gray-500" />
                          <Button size="slim">Custom</Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTab === 1 && (
                    <div className="mt-4 space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                          <Card.Section title="Home Screen">
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Banner Slider</span>
                                <Badge status="success">Enabled</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Categories Grid</span>
                                <Badge status="success">Enabled</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Featured Products</span>
                                <Badge>Disabled</Badge>
                              </div>
                            </div>
                          </Card.Section>
                          <Card.Section>
                            <Button fullWidth>Customize</Button>
                          </Card.Section>
                        </Card>

                        <Card>
                          <Card.Section title="Product Screen">
                            <div className="flex flex-col gap-2">
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Image Gallery</span>
                                <Badge status="success">Enabled</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Reviews Section</span>
                                <Badge status="success">Enabled</Badge>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-xs">Related Products</span>
                                <Badge status="success">Enabled</Badge>
                              </div>
                            </div>
                          </Card.Section>
                          <Card.Section>
                            <Button fullWidth>Customize</Button>
                          </Card.Section>
                        </Card>
                      </div>
                    </div>
                  )}

                  {selectedTab === 2 && (
                    <div className="mt-4 space-y-4">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Push Notifications</h3>
                            <p className="text-sm text-subdued">Send targeted messages to your users</p>
                          </div>
                          <Badge status="success">Enabled</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Wishlist</h3>
                            <p className="text-sm text-subdued">Allow users to save products for later</p>
                          </div>
                          <Badge status="success">Enabled</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Apple Pay / Google Pay</h3>
                            <p className="text-sm text-subdued">Enable fast checkout with digital wallets</p>
                          </div>
                          <Badge>Premium Feature</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-medium">Loyalty Program</h3>
                            <p className="text-sm text-subdued">Reward your most loyal customers</p>
                          </div>
                          <Badge>Premium Feature</Badge>
                        </div>
                      </div>
                    </div>
                  )}
                </Card.Section>

                <Card.Section>
                  <LegacyStack distribution="equalSpacing">
                    <Button>Cancel</Button>
                    <Button primary>Save Changes</Button>
                  </LegacyStack>
                </Card.Section>
              </Card>
            </Layout.Section>

            <Layout.Section variant="twoThirds">
              <Card title="App Preview">
                <Card.Section>
                  <p>See how your app looks in real-time</p>
                </Card.Section>

                <Card.Section>
                  <div className="flex flex-col items-center justify-center">
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
                  </div>
                </Card.Section>

                <Card.Section>
                  <Button
                    fullWidth
                    primary
                    onClick={() => redirect.dispatch(Redirect.Action.APP, "/shopify/app-preview")}
                  >
                    Open Full Preview
                  </Button>
                </Card.Section>
              </Card>
            </Layout.Section>
          </Layout>
        </Layout.Section>

        {/* Usage Stats */}
        <Layout.Section>
          <Card title="Usage Statistics">
            <Card.Section>
              <p>Your app's performance over the last 30 days</p>
            </Card.Section>

            <Card.Section>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Storage Usage</span>
                    <span className="text-sm text-subdued">65% of 10GB</span>
                  </div>
                  <ProgressBar progress={65} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Push Notification Quota</span>
                    <span className="text-sm text-subdued">45% of 50,000</span>
                  </div>
                  <ProgressBar progress={45} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">API Calls</span>
                    <span className="text-sm text-subdued">82% of 100,000</span>
                  </div>
                  <ProgressBar progress={82} />
                </div>
              </div>
            </Card.Section>

            <Card.Section>
              <Button fullWidth>View Detailed Analytics</Button>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
