/// ------ENUM---------

export enum Status {
  ordered = 'ORDERED',
  shipped = 'SHIPPED',
  delivery = 'DELIVERY',
  delivered = 'DELIVERED',
}

export enum Category {
  electronic = 'ELECTRONIC',
  book = 'BOOK',
  cosmetics = 'COSMETICS',
  grocery = 'GROCERY',
}

export enum LoanEligible {
  applied = 'Applied',
  process = 'Process',
  eligible = 'Eligible',
  nonEligible = 'NonEligible',
}

export enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
}

/// ------- Interfaces -------

export interface Product {
  readonly id: number;
  name: string;
  price: number;
  rating?: number;
  category: Category;
  stock: number;
  discount: number;
}

export interface Customer {
  readonly id: number;
  name: string;
  phone: number;
  Address?: string;
  loan?: LoanEligible;
}

interface OrderItems {
  product: Product;
  quantity: number;
  subtotal: number;
}

export interface Order {
  readonly orderId: string;
  customer: Customer;
  items: OrderItems[];
  status: Status;
  total: number;
  createdAt: string;
}
/// -------Generic Interface ----------

export interface ApiResponse<T> {
  data: T;
  reposonse: HttpStatus;
  message: string;
}

export interface Repository<T> {
  findById(Id: number): Promise<T>;
  findAll(): Promise<T[]>;
  findByFilter(predicate: (item: T) => boolean): Promise<T[]>;
}
