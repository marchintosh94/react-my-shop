import { Order } from '@/model/order.type';

export interface OrdersGetSuccess { type: 'ordersGetSuccess', payload: Order[] };
export interface OrderDeleteSuccess { type: 'orderDeleteSuccess', payload: string };
export interface OrderReset { type: 'orderReset' };
export interface OrderToggleStatusSuccess { type: 'orderToggleStatusSuccess', payload: Order };
export interface Error { type: 'error', payload: string };
export interface LoadingAction { type: 'loading', payload: boolean }


export type OrdersActions =
  OrdersGetSuccess |
  OrderDeleteSuccess |
  OrderReset |
  OrderToggleStatusSuccess |
  Error |
  LoadingAction;