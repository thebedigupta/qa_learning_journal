import { Category, Customer, Product } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 75000,
    stock: 10,
    category: Category.Electronics,
    discount: 10,
  },
  {
    id: 2,
    name: 'Phone',
    price: 45000,
    stock: 15,
    category: Category.Electronics,
  },
  {
    id: 3,
    name: 'T-Shirt',
    price: 500,
    stock: 50,
    category: Category.Clothing,
  },
  {
    id: 4,
    name: 'Jeans',
    price: 1500,
    stock: 30,
    category: Category.Clothing,
    discount: 5,
  },
  { id: 5, name: 'JS Book', price: 799, stock: 20, category: Category.Books },
  { id: 6, name: 'Rice 5kg', price: 350, stock: 100, category: Category.Food },
];

export const customers: Customer[] = [
  { id: 1, name: 'Arjun', email: 'arjun@test.com', address: 'Lucknow, UP' },
  { id: 2, name: 'Priya', email: 'priya@test.com' },
  { id: 3, name: 'Rahul', email: 'rahul@test.com', address: 'Delhi' },
];
