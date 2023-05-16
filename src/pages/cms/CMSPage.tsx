import { NavLink, Outlet } from "react-router-dom"
import { isActive } from "../../utility/router.utility"

const CMSPage = () => {
  return (
    <div>
      <NavLink to={'/cms/products'} className={(obj) => isActive(obj, 'btn primary', 'btn')}>Products</NavLink>
      <NavLink to={'/cms/orders'} className={(obj) => isActive(obj, 'btn primary', 'btn')}>Orders</NavLink>
      <Outlet/>
    </div>
  )
}

export default CMSPage
