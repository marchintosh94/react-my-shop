import { selectCartList, selectCartTotalCost, useCart, useCartPanel } from "@/services/cart";
import { useNavigate } from "react-router-dom";

export const CartPanel = () => {
  const navigate = useNavigate()
  const closeCartPanel = useCartPanel(state => state.closeOverlay)
  const cartItems = useCart(selectCartList)
  const totalCartItems = useCart(selectCartTotalCost)
  const goToCart = (): void => {
    closeCartPanel()
    navigate('cart')
  }

  return (
    <div className="fixed bg-stone-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96">
      <ul className="flex flex-col gap-4">
        {
          cartItems.map(ci => (
            <li key={ci.product.id} className="flex justify-between items-center border-b border-gray-600 pb-3">
              <div>{ci.product.name}</div>
              <div className="flex gap-3">
                <div>({ci.qty} x € {ci.product.cost.toFixed(2)})</div>
                <div>€ {(ci.qty * ci.product.cost).toFixed(2)}</div>
              </div>
            </li>
          ))
        }
      </ul>

      <div className="flex justify-end text-xl font-bold">Total €{totalCartItems.toFixed(2)}</div>
      <div className="flex justify-center">
        <button className="btn primary" onClick={goToCart}>
          Go to Cart
        </button>
      </div>
    </div>
  )
}