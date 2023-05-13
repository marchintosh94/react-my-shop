import { useEffect } from "react"
import { useProduct } from "@/services/products";
import { ServerError, Spinner } from "@/shared";
import { CMSProductsList } from "./components/CMSProductsList";
import { CMSProductForm } from "./components/CMSProductForm";


export const CMSProductsPage = () => {
  const { actions, error, pending, products, activeItem } = useProduct()
  useEffect(() => {
    actions.getAll()
  }, [])

  return (
    <div>
      <h1 className="title">PRODUCTS</h1>
      { pending && <Spinner/>}
      { error && <ServerError message={error}/> }

      <CMSProductForm 
        activeItem={activeItem}
        onClose={actions.resetActiveItem}
      />

      <CMSProductsList
        items={products}
        activeItem={activeItem}
        onEditItem={actions.setActiveItem}
        onDeleteItem={actions.remove}
      />
    </div>
  )
}
