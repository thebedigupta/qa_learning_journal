// 1. Create an interface "Product" with:
//    - id (readonly, number)
//    - name (string)
//    - price (number)
//    - category ("Electronics" | "Clothing" | "Books" | "Food")
//    - discount? (optional number)

// 2. Create a type alias "CartItem" with:
//    - product (Product)
//    - quantity (number)

// 3. Write a function finalPrice(item: CartItem): number
//    - returns price * quantity
//    - if discount exists, apply it: price * (1 - discount/100) * quantity

// 4. Create an array CartItem[] with 3 items and print final price for each

// Expected output:
// Laptop x2 = ₹89100 (after 10% discount)
// T-Shirt x3 = ₹1500 (no discount)
// Book x1 = ₹299 (no discount)

// Exercise 1 Complete
interface Product {
  readonly id: number;
  itemName: string;
  price: number;
  category: 'Electronics' | 'Clothing' | 'Books' | 'Food';
  discount?: number;
}

// Exercise 2 Complete

type CartItem = {
  product: Product;
  quantity: number;
};

// Exercise 3 Complete

function finalPrice({ product, quantity }: CartItem): number {
  return product.discount
    ? product.price * (1 - product.discount / 100) * quantity
    : product.price * quantity;
}

// Exercise 4

let arrayItem: CartItem[] = [
  {
    product: {
      id: 1,
      itemName: 'Laptop',
      price: 99000,
      category: 'Electronics',
      discount: 10,
    },
    quantity: 2,
  },
  {
    product: {
      id: 2,
      itemName: 'T-shirt',
      price: 500,
      category: 'Clothing',
    },
    quantity: 3,
  },
  {
    product: {
      id: 3,
      itemName: 'Book',
      price: 299,
      category: 'Books',
    },
    quantity: 1,
  },
];

arrayItem.forEach((item) => {
  const discountPrice = finalPrice(item);
  console.log(`${item.product.itemName} x${item.quantity} = ₹${discountPrice}`);
});

// Laptop x2 = ₹89100 (after 10% discount)
