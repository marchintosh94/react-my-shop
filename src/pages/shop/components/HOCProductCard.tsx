import { withCartManager } from "@/shared";
import { ProductCard } from "./ProductCard";


export const HOCProductCard = withCartManager(ProductCard)