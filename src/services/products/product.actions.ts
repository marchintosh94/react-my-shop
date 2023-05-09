import { Product, ProductForm } from "@/model/product.type";

export interface ProductGetAction { type: 'getProductsSuccess', payload: Product[] }
export interface ProductDeleteAction { type: 'productDeleteSuccess', payload: string };
export interface ProductAddAction { type: 'productAddSuccess', payload: Product };
export interface ProductEditAction { type: 'productEditSuccess', payload: Product };
export interface ProductSetActive { type: 'productSetActive', payload: ProductForm | null };
export interface Error { type: 'error', payload: string };
export interface LoadingAction { type: 'loading', payload: boolean }

export type ProductsActions =
  ProductGetAction |
  ProductDeleteAction |
  ProductAddAction |
  ProductEditAction |
  ProductSetActive |
  Error |
  LoadingAction ;