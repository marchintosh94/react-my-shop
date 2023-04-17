import { NavLink } from "react-router-dom"
import laptop from "../../../assets/laptop.png"
import { isActive } from "../../../utility/router.utility"
import { CartPanel } from "@/shared"

export const NavBar = () => {

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
          <button className="btn accent lg">
            Cart: 0
          </button>
        </div>

        <CartPanel/>

        <div className="fixed bottom-2 right-2 p-3 bg-zinc-900/80 rounded-full">
          <NavLink className={'btn accent lg'} to="login">Login</NavLink>
          <NavLink className={'btn accent lg'} to="cms">Cms</NavLink>
          <button className="btn primary lg">Logout</button>
        </div>

      </div>
    </div>
  )
}