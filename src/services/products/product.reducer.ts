import { Product, ProductForm } from "@/model/product.type";
import { ProductsActions } from "./product.actions";

interface ProductState {
  products: Product[];
  pending: boolean;
  error: string | null;
  activeItem: ProductForm | null
}

export const initialState: ProductState = {
  products: [],
  pending: false,
  error: null,
  activeItem: null
}

export const productReducer = (state: ProductState, {payload, type}: ProductsActions): ProductState => {
  switch(type){
    case 'loading':
      return { ...state, pending: payload}
    case 'error':
      return { ...state, error: payload, pending: false,}
    case 'getProductsSuccess':
      return { 
        ...state, 
        products: payload, 
        pending: false, 
        error: null
      }
    case 'productDeleteSuccess':
      return { 
        ...state, 
        products: state.products.filter(item => item.id != payload), 
        pending: false, 
        error: null,
        activeItem: state.activeItem?.id === payload ? null : state.activeItem
      }
    case 'productAddSuccess':
      return { 
        ...state, 
        products: [...state.products, payload],
        pending: false, 
        error: null,
        activeItem: null
      }
    case 'productEditSuccess':
      return { 
        ...state, 
        products: state.products.reduce<Product[]>((accumulator, current) => {
          let product = current
          if(current.id == payload.id){
            product = {...current, ...payload}
          }
          accumulator.push(product)
          return accumulator
        }, []),
        activeItem: null,
        pending: false,
        error: null
      }
    case 'productSetActive':
      return { 
        ...state,
        activeItem: payload
      }
  }
  return state
} 