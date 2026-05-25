// Create interface UserProfile with:
// readonly id: number
// name: string
// email: string
// age?: number
// role?: "admin" | "user" | "guest" (literal union type)

// Create 3 objects using this interface:
// 1. Full object with all properties
// 2. Object without optional fields
// 3. Try changing readonly id — observe the error

interface UserProfile {
  readonly id: number;
  name: string;
  email: string;
  age?: number;
  role?: 'admin' | 'user' | 'guest';
}

// Create Full Object with all properties

const fullProfile: UserProfile = {
  id: 101,
  name: 'John',
  email: 'john@example.com',
  age: 30,
  role: 'admin',
};

// Object Without optional fields

const profile: UserProfile = {
  id: 102,
  name: 'Suraj',
  email: 'suraj@example.com',
};

// Trying Changing and Observing read only error

const userProfile: UserProfile = {
  id: 103,
  name: 'Alice',
  email: 'alice@example.com',
};

// Exercise 2

// Create a generic class DataStore<T> with:
// private items: T[] = []
// add(item: T): void
// getAll(): T[]
// findById method — where T extends { id: number }

// Test with:
// DataStore<User> — store users
// DataStore<Product> — store products
// Both use same class, different types

interface DataStore<T extends { id: number }> {
  items: T[];
  add(item: T): void;
  getAll(): T[];
  findById(id: number): T | undefined;
}

const userStore: DataStore<UserProfile> = {
  items: [],
  add(item: UserProfile) {
    this.items.push(item);
  },
  getAll() {
    return this.items;
  },
  findById(id: number) {
    return this.items.find((item) => item.id === id);
  },
};

interface Product {
  id: number;
  name: string;
  price: number;
}

const productStore: DataStore<Product> = {
  items: [],
  add(item: Product) {
    this.items.push(item);
  },
  getAll() {
    return this.items;
  },
  findById(id: number) {
    return this.items.find((item) => item.id === id);
  },
};

// Testing the DataStore with UserProfile
userStore.add(fullProfile);
userStore.add(profile);

console.log(userStore.getAll());
console.log(userStore.findById(101));

// Testing the DataStore with Product
productStore.add({ id: 201, name: 'Laptop', price: 999 });
productStore.add({ id: 202, name: 'Phone', price: 499 });

console.log(productStore.getAll());
console.log(productStore.findById(201));

// Create these interfaces:
// ApiResponse<T> with status, message, data fields
// User with userId, name, email
// Order with orderId, userId, total, items: string[]

// Write async function fetchUserWithOrders(userId: number)
// that returns Promise<ApiResponse<{user: User, orders: Order[]}>>
// Simulate with setTimeout
// Call it and print results

interface ApiInterfaces<T> {
  status: number;
  message: string;
  data: T;
}

interface User<T> {
  userId: number;
  name: string;
  email: string;
}

interface Order<T> {
  orderId: number;
  userId: number;
  total: number;
  items: string[];
}

async function fetchUserWIthOrrders(
  userId: number,
): Promise<ApiInterfaces<{ user: User<number>; orders: Order<number>[] }>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user: User<number> = {
        userId,
        name: 'John Doe',
        email: 'john@example.com',
      };

      const orders: Order<number>[] = [
        {
          orderId: 1,
          userId,
          total: 100,
          items: ['item1', 'item2'],
        },
        {
          orderId: 2,
          userId,
          total: 150,
          items: ['item3', 'item4'],
        },
      ];

      resolve({
        status: 200,
        message: 'User and orders fetched successfully',
        data: { user, orders },
      });
    }, 2000);
  });
}

fetchUserWIthOrrders(1).then((response) => {
  console.log(response);
});

