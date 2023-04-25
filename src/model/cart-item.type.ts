import { Product } from "./product.type";

export interface CartItem {
    product: Product;
    qty: number;
}