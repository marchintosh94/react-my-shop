import { MouseEvent, MouseEventHandler } from "react"
import { useNavigate } from "react-router-dom";

export const CartPanel = () => {
  const navigate = useNavigate()
  const goToCart = (): void => {
    navigate('cart')
  }

  return (
    <div className="fixed bg-stone-800 right-4 top-24 p-3 rounded-xl shadow-2xl w-96">
      <ul className="flex flex-col gap-4">
        <li className="flex justify-between items-center border-b border-gray-600 pb-3">
          <div>Product Name</div>
          <div className="flex gap-3">
            <div>(2 x € 10)</div>
            <div>€ 20</div>
          </div>
        </li>
      </ul>

      <div className="flex justify-end text-xl font-bold">Total €20</div>
      <div className="flex justify-center">
        <button className="btn primary" onClick={goToCart}>
          Go to Cart
        </button>
      </div>
    </div>
  )
}