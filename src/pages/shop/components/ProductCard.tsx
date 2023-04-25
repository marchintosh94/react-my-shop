import { Product } from "@/model/product.type"

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({product, onAddToCart}) => {
  return (
    <div
      className="overflow-hidden rounded-lg shadow-xl relative h-[350px] border border-gray-100/20 group hover:cursor-pointer"
    >
      {
        product.img ? 
          <img src={product.img} alt={product.name} className="object-cover h-full w-full absolute blur-[2px] group-hover:blur-0 " /> :
          <div className="h-full w-full absolute bg-gray-600 blur-[2px] group-hover:blur-0 "></div>

      }
      <div className="absolute h-full w-full bg-white/40 group-hover:bg-white/0 transition-all ease-in-out duration-300"></div>
      <div className="absolute w-full bottom-1/2 translate-y-1/2 text-center text-zinc-900 transition-all ease-in-out duration-300 group-hover:-bottom-10">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <h3 className="text-xl font-bold">€{product.cost}</h3>
      </div>
      <div className="absolute bottom-0 h-0 w-full overflow-hidden group-hover:h-12 transition-all ease-in-out duration-500 ">
        <button onClick={() => onAddToCart && onAddToCart(product)} className="w-full h-full bg-emerald-500 text-lg font-semibold">
            {product.name}&nbsp;€{product.cost}
        </button>
      </div>
    </div>
  )
}