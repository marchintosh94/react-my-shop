import { useReducer } from "react"
import { initialState, productReducer } from "./product.reducer"
import { 
  getProducts, 
  deleteProduct,
  createProduct,
  editProduct
} from "../api"
import { Product, ProductForm } from "@/model/product.type"

export const useProduct = () => {
  const [state, dispatch] = useReducer(productReducer, initialState)

  const getAll = () => {
    dispatch({type: 'loading', payload: true})
    getProducts().then(res => {
      dispatch({ type: 'getProductsSuccess', payload: res.items})
    }).catch(() => {
      dispatch({ type: 'error', payload: 'Products not loaded'})
    })
  }

  const remove = (id: string) => {
    dispatch({ type: 'loading', payload: true })
    deleteProduct(id).then(() => {
      dispatch({ type: 'productDeleteSuccess', payload: id  })
    }).catch(() => {
      dispatch({ type: 'error', payload: 'Products not deleted'  })
    })
  }

  const addProduct = (product: ProductForm) => {
    dispatch({ type: 'loading', payload: true })
    createProduct(product).then(res => {
      dispatch({ type: 'productAddSuccess', payload: res  })
    }).catch(() => {
      dispatch({ type: 'error', payload: 'Products not added'  })
    })
  }

  const updateProduct = (product: ProductForm) => {
    dispatch({ type: 'loading', payload: true })
    editProduct(product).then(res => {
      dispatch({ type: 'productEditSuccess', payload: res  })
    }).catch(() => {
      dispatch({ type: 'error', payload: 'Products not edited'  })
    })
  }

  const setActiveItem = (product: ProductForm) => {
    dispatch({ type: 'productSetActive', payload: product })
  }

  const resetActiveItem = () => {
    dispatch({ type: 'productSetActive', payload: null })
  }

  return {
    ...state,
    actions: {
      getAll,
      remove,
      addProduct,
      updateProduct,
      setActiveItem,
      resetActiveItem
    }
  }

}