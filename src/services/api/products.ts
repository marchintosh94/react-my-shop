import { Product, ProductForm } from "@/model/product.type";
import { pocketbase } from "@/utility";

export const getProducts = () => pocketbase.collection('products').getList<Product>()
export const deleteProduct = (id: string) => pocketbase.collection('products').delete(id)
export const createProduct = (product: ProductForm) => pocketbase.collection('products').create<Product>(product)
export const editProduct = (product: ProductForm) => pocketbase.collection('products').update<Product>(product.id!, product)