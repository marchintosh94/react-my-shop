import { Product } from "@/model/product.type";
import { useCart } from "../../services/cart/useCart";
import { useCallback } from "react";
import { useCartPanel } from "../../services/cart/useCartPanel";

export const withCartManager = <T extends object>(WrappedComponent: React.FC<T>) => {
  return (props: T) => {
    const { addToCart, increaseQty } = useCart(state => state)
    const cartItems = useCart(state => state.list)
    const openCartPanel = useCartPanel(state => state.openOverlay)

    const addToCartHandler = useCallback((product: Product) => {            
      const cartItemExist = cartItems.find(cartItem => cartItem.product.id == product.id)
      cartItemExist? increaseQty(product.id) : addToCart(product)         
      openCartPanel()
    }, [cartItems])
  

    return (
      <WrappedComponent {...props} onAddToCart={addToCartHandler}/>
    )
  } 
}