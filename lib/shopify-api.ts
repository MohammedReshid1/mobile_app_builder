import { cookies } from "next/headers"

export class ShopifyApiClient {
  private accessToken: string
  private shop: string

  constructor(shop: string, accessToken: string) {
    this.shop = shop
    this.accessToken = accessToken
  }

  // Static method to create a client from the session cookie
  static fromSession() {
    const sessionCookie = cookies().get("shopify_session")

    if (!sessionCookie) {
      throw new Error("No Shopify session found")
    }

    try {
      const session = JSON.parse(sessionCookie.value)
      return new ShopifyApiClient(session.shop, session.accessToken)
    } catch (error) {
      throw new Error("Invalid Shopify session")
    }
  }

  // Make a request to the Shopify API
  async request<T>(endpoint: string, method = "GET", data?: any): Promise<T> {
    const url = `https://${this.shop}/admin/api/2023-10${endpoint}`

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": this.accessToken,
      },
      body: data ? JSON.stringify(data) : undefined,
    })

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.statusText}`)
    }

    return response.json()
  }

  // Get shop information
  async getShopInfo() {
    return this.request<{ shop: any }>("/shop.json")
  }

  // Get products
  async getProducts(limit = 10) {
    return this.request<{ products: any[] }>(`/products.json?limit=${limit}`)
  }

  // Get customers
  async getCustomers(limit = 10) {
    return this.request<{ customers: any[] }>(`/customers.json?limit=${limit}`)
  }

  // Get orders
  async getOrders(limit = 10) {
    return this.request<{ orders: any[] }>(`/orders.json?limit=${limit}`)
  }

  // Create a product
  async createProduct(product: any) {
    return this.request<{ product: any }>("/products.json", "POST", { product })
  }

  // Update a product
  async updateProduct(productId: number, product: any) {
    return this.request<{ product: any }>(`/products/${productId}.json`, "PUT", { product })
  }

  // Delete a product
  async deleteProduct(productId: number) {
    return this.request(`/products/${productId}.json`, "DELETE")
  }

  // Create a webhook
  async createWebhook(webhook: any) {
    return this.request<{ webhook: any }>("/webhooks.json", "POST", { webhook })
  }

  // Get app billing information
  async getAppSubscriptions() {
    return this.request<{ recurring_application_charges: any[] }>("/recurring_application_charges.json")
  }

  // Create an app subscription
  async createAppSubscription(subscription: any) {
    return this.request<{ recurring_application_charge: any }>("/recurring_application_charges.json", "POST", {
      recurring_application_charge: subscription,
    })
  }
}
