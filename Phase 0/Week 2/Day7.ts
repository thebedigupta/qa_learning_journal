// Exercise 1 :

// Rewrite this in TypeScript with proper types:
// function that takes name(string), age(number), scores(number array)
// returns average score as number
// add type to every parameter and return value

function averageScore(name: string, age: number, scores: number[]): number {
  return scores.reduce((acc, curr) => acc + curr, 0) / scores.length;
}

// Exercise 2 :

// Create interface Product with:
// name: string, price: number, inStock: boolean, category?: string
// Write function filterByPrice(products: Product[], maxPrice: number): Product[]
// Use your interface to type everything

interface Product {
  name: string;
  price: number;
  inStock: boolean;
  category?: string;
}

const product: Product = {
  name: 'Washing Machine',
  price: 7499,
  inStock: true,
  category: 'Appliances',
};

function filterByPrice(products: Product[], maxPrice: number): Product[] {
  return products.filter((item) => item.price <= maxPrice);
}

// Exercise 3 :

// Rewrite your BankAccount from Day 13 in TypeScript:
// Use TypeScript 'private' keyword instead of #
// Add proper types to all properties and methods
// withdraw() should throw typed error
// getBalance() return type should be number

class BankAccount {
  private balance: number;
  owner: string;

  constructor(initialBalance: number) {
    this.owner = 'Suraj';
    this.balance = initialBalance;
  }

  getBalance(): number {
    return this.balance;
  }
  deposit(amount: number): number {
    return (this.balance += amount);
  }
  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error('Insufficient Funds');
    }
    this.balance -= amount;
  }
}

