import { CartItem } from "./cart-item.type";
import { OrderStatus, OrderUser } from "./order-form.type";

export interface Order {
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    order: CartItem[];
    status: OrderStatus;
    total: number;
    updated: string;
    user: OrderUser;
  }