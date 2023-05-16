import { useEffect } from "react"
import { ServerError, Spinner } from "@/shared"
import { HOCProductCard } from "./components/HOCProductCard"
import { useProduct } from "@/services/products"

const ShopPage = () => {
  const { actions, error, pending, products } = useProduct()

  useEffect(() => {
    actions.getAll()
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

export default ShopPage
