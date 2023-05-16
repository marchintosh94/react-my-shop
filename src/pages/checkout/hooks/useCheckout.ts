import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderForm } from "@/model/order-form.type";
import { selectCartList, selectCartTotalCost, useCart } from "@/services/cart";
import { useOrder } from "@/services/orders";
import { ClientResponseError } from "pocketbase";

export const useCheckout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "" });
  const [dirty, setDirty] = useState(false);

  const totalCartCost = useCart(selectCartTotalCost);
  const cartItems = useCart(selectCartList);
  const { actions: orderActions, state} = useOrder()

  const clearCart = useCart((state) => state.clearCart);

  const changeHandler = (ev: ChangeEvent<HTMLInputElement>) => {
    const name = ev.currentTarget.name;
    const value = ev.currentTarget.value;
    setUser((state) => ({ ...state, [name]: value }));
    setDirty(true);
  };

  const sendOrder = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const orderData: OrderForm = {
      user,
      order: cartItems,
      total: totalCartCost,
      status: "pending",
    };
    orderActions.addOrder(orderData).then((res) => {
      if(!(res instanceof ClientResponseError)){
        clearCart();
        navigate("/thankyou");
      }
    })
  };

  const isValidEmail =
    user.email.length &&
    user.email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  const isValidName = user.name.length;
  const isValidForm = isValidEmail && isValidName;

  return {
    actions: {
      sendOrder,
      changeHandler,
    },
    validators: {
      isValidEmail,
      isValidName,
      isValidForm,
    },
    user,
    dirty,
    totalCartCost,
    error: state.error
  };
};
