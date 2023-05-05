import clsx from "clsx"
import { useCheckout } from "./hooks/useCheckout"

export const CheckoutPage = () => {
  const {
    actions,
    validators,
    dirty,
    totalCartCost,
    user
  } = useCheckout()
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="title">CHECHOUT</h1>
      <section className="text-xl border-b my-3">
        €{totalCartCost.toFixed(2)}
      </section>
      <form className="flex flex-col gap-3" onSubmit={actions.sendOrder}>
        <div className="flex flex-col">
          <label htmlFor="name">Your name:</label>
          <input 
            placeholder="name.." 
            type="text" 
            name="name" 
            className={clsx({
              'error': !validators.isValidName && dirty
            })}
            onChange={actions.changeHandler} value={user.name}/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Your email:</label>
          <input 
            type="email" 
            placeholder="email.." 
            name="email" 
            className={clsx({
              'error': !validators.isValidEmail && dirty
            })}
            onChange={actions.changeHandler} value={user.email}/>
        </div>

        <button 
          type="submit" 
          className={clsx(
            'btn',
            {
              'primary': !validators.isValidForm,
              'success': validators.isValidForm
            }
          )}
          disabled={!validators.isValidForm}>
          Confirm Order
        </button>
      </form>
    </div>
  )
}