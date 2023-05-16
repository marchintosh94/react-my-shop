import { pocketbase } from '@/utility';
import { Order } from '@/model/order.type';
import { OrderForm, OrderStatus } from '@/model/order-form.type';

export async function get() {
  return pocketbase.collection('orders').getList<Order>();
}

export async function remove(id: string) {
  return pocketbase.collection('orders').delete(id)
}

export async function add(order: OrderForm) {
  return pocketbase.collection('orders').create<Order>(order);
}

export async function toggleStatus(id: string, status: OrderStatus){
  return pocketbase.collection('orders').update<Order>(id, { status })
}