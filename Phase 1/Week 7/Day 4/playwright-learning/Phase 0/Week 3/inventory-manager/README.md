# TypeScript Inventory Manager

A CLI inventory and order management system built with TypeScript.

## Concepts Demonstrated

- Interfaces with readonly, optional properties
- Generic interfaces (ApiResponse<T>, Repository<T>)
- Enums (Category, OrderStatus, HttpStatus)
- async/await with Promise<T>
- try/catch with typed errors
- Array methods: find, filter, map, reduce

## Run

npm install
npm start

<!--
❯ npm start

> inventory-manager@1.0.0 start
> npx ts-node src/main.ts

🚀 Inventory Manager — TypeScript v3


📦 INVENTORY SUMMARY
Total products : 6
Total value    : ₹15,45,980
Low stock items: Laptop

📱 ELECTRONICS:
  Laptop — ₹75000 (stock: 10)
  Phone — ₹45000 (stock: 15)

🛒 PLACING ORDERS:

🧾 ORDER: ORD-1775577877106
Customer : Arjun (arjun@test.com)
Address  : Lucknow, UP
  • Laptop x1 = ₹67500
  • JS Book x2 = ₹1598
Total    : ₹69098
Status   : CONFIRMED

🧾 ORDER: ORD-1775577877208
Customer : Priya (priya@test.com)
Address  : Not provided
  • T-Shirt x3 = ₹1500
Total    : ₹1500
Status   : CONFIRMED

❌ Order failed: Insufficient stock for Phone -->
