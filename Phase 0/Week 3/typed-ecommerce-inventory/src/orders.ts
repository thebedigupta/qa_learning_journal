import { ApiResponse, Customer, Order, HttpStatus } from './types';
import { customer } from './data';
import { delay, ProductRepository } from './inventory';
// Input type for placing an order
interface OrderRequest {
  customerId: number;
  items: { productId: number; quantity: number }[];
}

export async function placedOrder(
  person: OrderRequest,
): Promise<ApiResponse<Order[] | string>> {
  await delay(100); // Simulate async operation
  // It checks order was coming from is existing user or not
  const customerExist = customer.find((p) => p.id === person.customerId);
  const usernotExist =
    customerExist === undefined ? 'No user exist with that ID' : customerExist;
}
