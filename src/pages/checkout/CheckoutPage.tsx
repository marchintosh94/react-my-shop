import { selectCartTotalCost, useCart } from "@/services/cart"
import { ChangeEvent, useState } from "react"

export const CheckoutPage = () => {
  const totalCartCost = useCart(selectCartTotalCost)
  const [user, setUser] = useState({name: '', email:''})

  const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    const name = ev.currentTarget.name
    const value = ev.currentTarget.value
    setUser(state => ({...state, [name]: value}))
  }
  
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="title">CHECHOUT</h1>
      <section className="text-xl border-b my-3">
        €{totalCartCost.toFixed(2)}
      </section>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="name">Your name:</label>
          <input placeholder="name.." type="text" name="name" onChange={changeHandler} value={user.name}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Your email:</label>
          <input type="email" placeholder="email.." name="email" onChange={changeHandler} value={user.email}/>
        </div>

        <button className="btn primary">
          Confirm Order
        </button>
      </form>
    </div>
  )
}