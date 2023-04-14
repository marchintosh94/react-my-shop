import { Product } from "@/model/product.type"
import { pocketbase } from "@/utility"
import { useCallback, useEffect, useState } from "react"
import { ProductCard } from "@/pages/components"
import { ServerError, Spinner } from "@/shared"

export const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);


  useEffect(() => {
    setPending(true)
    pocketbase
      .collection('products')
      .getList<Product>()
      .then(res => {
        setError(false)
        setProducts(res.items)
      })
      .catch(err => {
        setError(true)
      })
      .finally(() => {
        setPending(false)
      })
  }, [])

  const addToCart = useCallback((product: Partial<Product>) => {

  }, [])

  return (
    <div className="py-3">
      <h1 className="title">SHOP</h1>


      <section className="space-y-3">
        <h2 className="text-2xl font-semibold opacity-90">Top Products</h2>
        {pending && <Spinner/> }
        {error && <ServerError />}
        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">

          {
            products.map(p => (
              <ProductCard onAddToCart={addToCart} key={p.id} product={p}/>
            ))
          }

        </div>
      </section>

    </div>
  )
}
