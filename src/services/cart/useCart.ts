import { CartItem } from "@/model/cart-item.type";
import { Product } from "@/model/product.type";
import { create } from "zustand";

export interface CartState {
    list: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    increaseQty: (productId: string) => void;
    decreaseQty: (productId: string) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
    list: [],
    addToCart: product => {
        const cartItem: CartItem = { product, qty: 1 }
        set(state => ({ list: [...state.list, cartItem] }))
    },
    removeFromCart: productId => {
        set(state => ({ 
            list: state.list.filter(cart => cart.product.id != productId) 
        }))
    },
    increaseQty: productId => {
        set(state => ({
            list: state.list.reduce((accumulator, current) => {
                if(current.product.id == productId){
                    current.qty += 1
                }
                accumulator.push(current)
                return accumulator
            }, [] as CartItem[])
        }))
    },
    decreaseQty: productId => {
        set(state => ({
            list: state.list.reduce((accumulator, current) => {
                if(current.product.id == productId){
                    current.qty -= 1
                }
                if (current.qty > 0){
                    accumulator.push(current)
                }
                return accumulator
            }, [] as CartItem[])
        }))
    },
    clearCart: () => set({list: []}),
}))