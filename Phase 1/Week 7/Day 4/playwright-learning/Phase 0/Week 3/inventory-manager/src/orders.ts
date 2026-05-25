import { customers, products } from "./data";
import { Order, OrderItem, OrderStatus, HttpStatus, ApiResponse } from "./types";
import { getFinalPrice } from "./inventory";

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Input type for placing an order
interface OrderRequest {
  customerId: number;
  items: { productId: number; quantity: number }[];
}

export async function placeOrder(
  request: OrderRequest
): Promise<ApiResponse<Order>> {
  await delay(100);

  // Find customer
  const customer = customers.find(c => c.id === request.customerId);
  if (!customer) throw new Error(`Customer ${request.customerId} not found`);

  // Build order items
  const orderItems: OrderItem[] = [];

  for (const item of request.items) {
    const product = products.find(p => p.id === item.productId);
    if (!product) throw new Error(`Product ${item.productId} not found`);
    if (item.quantity > product.stock) {
      throw new Error(`Insufficient stock for ${product.name}`);
    }

    const subtotal = getFinalPrice(product) * item.quantity;
    orderItems.push({ product, quantity: item.quantity, subtotal });

    // Reduce stock
    product.stock -= item.quantity;
  }

  const total = orderItems.reduce((sum, i) => sum + i.subtotal, 0);

  const order: Order = {
    orderId: `ORD-${Date.now()}`,
    customer,
    items: orderItems,
    status: OrderStatus.Confirmed,
    total: Math.round(total),
    createdAt: new Date().toISOString()
  };

  return {
    data: order,
    status: HttpStatus.Created,
    message: "Order placed successfully"
  };
}

export function printOrder(order: Order): void {
  console.log(`\n🧾 ORDER: ${order.orderId}`);
  console.log(`Customer : ${order.customer.name} (${order.customer.email})`);
  console.log(`Address  : ${order.customer.address ?? "Not provided"}`);
  order.items.forEach(i => {
    console.log(`  • ${i.product.name} x${i.quantity} = ₹${i.subtotal}`);
  });
  console.log(`Total    : ₹${order.total}`);
  console.log(`Status   : ${order.status}`);
}