import { NavLink, useNavigate } from "react-router-dom"
import laptop from "../../../assets/laptop.png"
import { isActive } from "../../../utility/router.utility"
import { CartPanel, IfLogged } from "@/shared"
import { selectCartIsEmpty, selectCartTotalItems, useCart, useCartPanel } from "@/services/cart"
import { useAuth } from "@/services/auth"

export const NavBar = () => {
  const navigate = useNavigate()
  const isCartPanelOpen = useCartPanel(state => state.open)
  const toggleCartPanel = useCartPanel(state => state.toggle)
  const cartItemCount = useCart(selectCartTotalItems)
  const cartIsEmpty = useCart(selectCartIsEmpty)
  const logout = useAuth(state => state.logout)

  const logoutHandler = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="fixed top-0 left-0 right-0 shadow-2xl z-10">
      <div className="bg-zinc-900 flex justify-between items-center h-20 text-white p-3">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={laptop} alt="my logo" className="w-16" />
          <NavLink to={'shop'} className={(obj) => isActive(obj, 'text-xl text-emerald-400 font-bold')}>SHOP</NavLink>
        </div>

        {/* Cart buton badge */}
        <div>
          <button className="btn accent lg" disabled={cartIsEmpty} onClick={toggleCartPanel}>
            Cart: {cartItemCount}
          </button>
        </div>

        { isCartPanelOpen && <CartPanel/>}

        <div className="fixed bottom-2 right-2 p-3 bg-zinc-900/80 rounded-full">
          <NavLink className={'btn accent lg'} to="cms">Cms</NavLink>
          <IfLogged
            elseNode={
              <NavLink className={'btn accent lg'} to="login">Login</NavLink>
            }
          >
            <button type="button" onClick={logoutHandler} className="btn primary lg">Logout</button>
          </IfLogged>
        </div>

      </div>
    </div>
  )
}