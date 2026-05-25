import { products } from './data';
import {
  ApiResponse,
  HttpStatus,
  Category,
  Product,
  Repository,
} from './types';

// delay helper
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Implements the generic Repository interface
export class ProductRepository implements Repository<Product> {
  async findById(id: number): Promise<Product> {
    await delay(50);
    const product = products.find((p) => p.id === id);
    if (!product) throw new Error(`Product ${id} not found`);
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

// Calculate final price after discount
export function getFinalPrice(product: Product): number {
  return product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;
}

// Wrap result in generic ApiResponse
export async function getProductsByCategory(
  category: Category,
): Promise<ApiResponse<Product[]>> {
  const repo = new ProductRepository();
  const items = await repo.findByFilter((p) => p.category === category);
  return {
    data: items,
    status: HttpStatus.OK,
    message: `Found ${items.length} products in ${category}`,
  };
}

// Get inventory summary
export async function getInventorySummary(): Promise<void> {
  const repo = new ProductRepository();
  const all = await repo.findAll();

  const totalValue = all.reduce((sum, p) => sum + p.price * p.stock, 0);
  const lowStock = all.filter((p) => p.stock < 15);

  console.log('\n📦 INVENTORY SUMMARY');
  console.log(`Total products : ${all.length}`);
  console.log(`Total value    : ₹${totalValue.toLocaleString()}`);
  console.log(`Low stock items: ${lowStock.map((p) => p.name).join(', ')}`);
}
