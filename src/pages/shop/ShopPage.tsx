import { Product } from "@/model/product.type"
import { pocketbase } from "@/utility"
import { useCallback, useEffect, useState } from "react"
import { ProductCard } from "@/pages/components"

export const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [pending, setPending] = useState<boolean>(false);


  useEffect(() => {
    setPending(true)
    pocketbase
      .collection('products')
      .getList<Product>()
      .then(res => {
        setProducts(res.items)
        setPending(false)
      })
  }, [])

  const addToCart = useCallback((product: Partial<Product>) => {

  }, [])

  return (
    <div>
      <h1 className="title">SHOP</h1>

      {pending && <div>pending...</div> }
      
      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">

        {
          products.map(p => (
            <ProductCard onAddToCart={addToCart} key={p.id} product={p}/>
          ))
        }

      </div>

    </div>
  )
}
