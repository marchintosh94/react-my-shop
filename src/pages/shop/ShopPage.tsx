import { Product } from "@/model/product.type"
import { pocketbase } from "@/utility"
import { useEffect, useState } from "react"

export const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  useEffect(() => {
    pocketbase
      .collection('products')
      .getList<Product>()
      .then(res => setProducts(res.items))
  }, [])

  return (
    <div>
      <h1 className="title">SHOP</h1>
      
      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">

        {
          products.map(p => (
            <div
              key={p.id}
              className="overflow-hidden rounded-lg shadow-xl relative h-[350px] border border-gray-100/20 group hover:cursor-pointer"
            >
              <img src={p.img} alt={p.name} className="object-cover h-full w-full absolute blur-[2px] group-hover:blur-0 " />
              <div className="absolute h-full w-full bg-white/40 group-hover:bg-white/0 transition-all ease-in-out duration-300"></div>
              <div className="absolute w-full bottom-1/2 translate-y-1/2 text-center text-zinc-900 transition-all ease-in-out duration-300 group-hover:-bottom-10">
                <h2 className="text-3xl font-bold">{p.name}</h2>
                <h3 className="text-xl font-bold">€{p.cost}</h3>
              </div>
              <div className="absolute bottom-0 h-0 w-full overflow-hidden group-hover:h-12 transition-all ease-in-out duration-500 ">
                <button className="w-full h-full bg-emerald-500 text-lg font-semibold">
                    {p.name}&nbsp;€{p.cost}
                </button>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}
