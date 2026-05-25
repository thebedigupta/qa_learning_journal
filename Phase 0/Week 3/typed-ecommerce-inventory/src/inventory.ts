import {
  Category,
  LoanEligible,
  Product,
  Customer,
  Repository,
  ApiResponse,
  HttpStatus,
} from './types';
import { products, customer } from './data';

// Delay function
export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getProductById(Id: number): Product | string {
  const productById = products.find((product) => product.id === Id);
  return productById === undefined ? 'Product Not Avaliable' : productById;
}

export function getProductByName(name: string): Product[] | string {
  // You can name it as getProductByName or getProductByCategory or global search for product name
  const productName = products.filter((product) => product.name === name);
  return productName.length === 0
    ? 'No Product Avaliable with that name'
    : productName;
}

export class ProductRepository implements Repository<Product> {
  async findById(Id: number): Promise<Product> {
    await delay(50);
    const product = products.find((product) => product.id === Id);
    if (!product) throw new Error(`Product ${product} not found`);
    return product;
  }

  async findAll(): Promise<Product[]> {
    await delay(50);
    return products;
  }

  async findByFilter(predicate: (p: Product) => boolean): Promise<Product[]> {
    await delay(50);
    return products.filter(predicate);
  }
}

// Product Discount

function finalPrice(product: Product): number {
  return product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;
}

// Wrap result in generic ApiResponse

export async function getProductByCategory(
  category: Category,
): Promise<ApiResponse<Product[]>> {
  const repo = new ProductRepository();
  const findByFilter = await repo.findByFilter((p) => p.category === category);
  return {
    data: findByFilter,
    reposonse: HttpStatus.OK,
    message: 'All Product to that category is fetched',
  };
}

// Get Inventory Summary Function

export async function getInventoryFunction() {
  const repo = new ProductRepository();
  const data = await repo.findAll();

  const totalValue = data.reduce((sum, p) => sum + p.price * p.stock, 0);
  const lowStock = data.filter((product) => product.stock < 15);

  console.log(`📦 INVENTORY SUMMARY`);
  console.log(`Total Products : ${data.length}`);
  console.log(`Total Value : ${totalValue.toLocaleString()}`);
  console.log(`Low stock items : ${lowStock.map((p) => p.name).join(',')}`);
}
