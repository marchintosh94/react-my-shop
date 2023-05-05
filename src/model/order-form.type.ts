import { CartItem } from "./cart-item.type";

export interface OrderUser {
    name: string;
    email: string;
}

export interface OrderForm {
    user: OrderUser;
    order: CartItem[];
    status: OrderStatus;
    total: number;
}

export type OrderStatus = 'pending' | 'done'