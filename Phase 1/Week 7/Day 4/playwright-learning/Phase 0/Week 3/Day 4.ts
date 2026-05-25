// Setup:
// interface Product { id: number; name: string; price: number; stock: number; }
// interface Order { orderId: string; product: Product; quantity: number; total: number; }

// 1. Write async function getProduct(id: number): Promise<Product>
//    - fake delay of 50ms
//    - return from an array of 3 products
//    - throw Error if not found

// 2. Write async function placeOrder(productId: number, quantity: number): Promise<Order>
//    - call getProduct() inside
//    - throw Error if quantity > stock
//    - return Order with total = price * quantity

// 3. Write async function main(): Promise<void>
//    - use try/catch
//    - place 2 valid orders and 1 invalid order (quantity > stock)
//    - log results clearly

// Expected output:
// ✅ Order placed: Laptop x1 = ₹49500
// ✅ Order placed: T-Shirt x2 = ₹1000
// ❌ Error: Insufficient stock for Book

// Basic SetUp Complete

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

interface Order {
  orderId: string;
  product: Product;
  quantity: number;
  total: number;
}

// Question 1: Write async function getProduct(id: number): Promise<Product>

let arrayofElements: Product[] = [
  { id: 1, name: 'Laptop', price: 49500, stock: 1 },
  { id: 2, name: 'T-shirt', price: 500, stock: 2 },
  { id: 3, name: 'Book', price: 200, stock: 5 },
];

async function getProduct(id: number): Promise<Product> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = arrayofElements.find((p) => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error(`Product with id ${id} not found`));
      }
    }, 50);
  });
}

// Question 2: Write async function placeOrder(productId: number, quantity: number): Promise<Order>

async function placeOrder(id: number, quantity: number): Promise<Order> {
  const product = await getProduct(id);
  if (quantity > product.stock) {
    throw new Error(`Insufficient stock for ${product.name}`);
  }
  return {
    orderId: `order-${Date.now()}`,
    product,
    quantity,
    total: product.price * quantity,
  };
}

// Question 3: Write async function main(): Promise<void>

// 3. Write async function main(): Promise<void>
//    - use try/catch
//    - place 2 valid orders and 1 invalid order (quantity > stock)
//    - log results clearly

// Expected output:
// ✅ Order placed: Laptop x1 = ₹49500
// ✅ Order placed: T-Shirt x2 = ₹1000
// ❌ Error: Insufficient stock for Book

async function main(): Promise<void> {
  const orders = [
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 2 },
    { productId: 3, quantity: 6 },
  ];

  for (let o of orders) {
    try {
      const order = await placeOrder(o.productId, o.quantity);
      console.log(
        `Order Placed: ${order.product.name} x${order.quantity} = ₹${order.total}`,
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log(`❌ Error: ${error.message}`);
      }
    }
  }
}
main();
