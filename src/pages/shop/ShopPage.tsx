import { Product } from "@/model/product.type"
import { pocketbase } from "@/utility"
import { useEffect, useState } from "react"
import { ServerError, Spinner } from "@/shared"
import { ClientResponseError } from "pocketbase"
import { HOCProductCard } from "./components/HOCProductCard"
import { getProducts } from "@/services/api"

export const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [pending, setPending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);



  useEffect(() => {
    setPending(true)
    getProducts()
      .then(res => {
        setError(false)
        setProducts(res.items)
      })
      .catch((err: ClientResponseError) => {
        if (err.status != 0){
          setError(true)
        }
      })
      .finally(() => {
        setPending(false)
      })
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
              <HOCProductCard key={p.id} product={p}/>
            ))
          }

        </div>
      </section>

    </div>
  )
}
