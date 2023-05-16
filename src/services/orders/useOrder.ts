import { useReducer } from "react"
import { initialState, ordersReducer } from "./orders.reducer"
import { OrderForm, OrderStatus } from "@/model/order-form.type"
import * as OrdersService from '../api/orders';

export const useOrder = () => {
    const [state, dispatch] = useReducer(ordersReducer, initialState)

    const getOrders = async () => {
        dispatch({ type: 'loading', payload: true })
    
        try {
          const res = await OrdersService.get();
          dispatch({ type: 'ordersGetSuccess', payload: res.items  })
        } catch(e) {
          dispatch({ type: 'error', payload: 'Orders not loaded'  })
        }
      }
    
    const deleteOrder = async (id: string) => {
        dispatch({ type: 'loading', payload: true })
    
        try {
          await OrdersService.remove(id);
          dispatch({ type: 'orderDeleteSuccess', payload: id  })
        } catch(e) {
          dispatch({ type: 'error', payload: 'Order not deleted'  })
        }
      }
    
    const addOrder = async (order: OrderForm) => {
        dispatch({ type: 'loading', payload: true })
    
        try {
          await OrdersService.add(order);
        } catch(e) {
          dispatch({ type: 'error', payload: 'Order not added'  })
          return e;
        }
      }
    
    const toggleOrderStatus = async (id: string, status: OrderStatus) => {
        dispatch({ type: 'loading', payload: true })
    
        try {
          const res = await OrdersService.toggleStatus(id, status);
          dispatch({ type: 'orderToggleStatusSuccess', payload: res  })
        } catch(e) {
          dispatch({ type: 'error', payload: 'Order not deleted'  })
        }
      }
    
      return {
        actions: {
            getOrders,
            deleteOrder,
            addOrder,
            toggleOrderStatus,
        },
        state
      }
}