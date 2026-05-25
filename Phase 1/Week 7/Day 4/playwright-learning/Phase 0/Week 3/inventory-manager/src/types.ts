// ─── ENUMS ───────────────────────────────────────────
export enum Category {
  Electronics = "ELECTRONICS",
  Clothing = "CLOTHING",
  Books = "BOOKS",
  Food = "FOOD"
}

export enum OrderStatus {
  Pending = "PENDING",
  Confirmed = "CONFIRMED",
  Shipped = "SHIPPED",
  Cancelled = "CANCELLED"
}

export enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404
}

// ─── INTERFACES ──────────────────────────────────────
export interface Product {
  readonly id: number;
  name: string;
  price: number;
  stock: number;
  category: Category;
  discount?: number;
}

export interface Customer {
  readonly id: number;
  name: string;
  email: string;
  address?: string;
}

export interface OrderItem {
  product: Product;
  quantity: number;
  subtotal: number;
}

export interface Order {
  readonly orderId: string;
  customer: Customer;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  createdAt: string;
}

// ─── GENERIC INTERFACES ───────────────────────────────
export interface ApiResponse<T> {
  data: T;
  status: HttpStatus;
  message: string;
}

export interface Repository<T> {
  findById(id: number): Promise<T>;
  findAll(): Promise<T[]>;
  findByFilter(predicate: (item: T) => boolean): Promise<T[]>;
}