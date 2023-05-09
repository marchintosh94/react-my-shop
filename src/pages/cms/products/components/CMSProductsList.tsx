import { Product, ProductForm } from "@/model/product.type";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

interface CMSProductsListProps {
  items: Product[];
  activeItem: ProductForm | null;
  onEditItem: (product: ProductForm) => void;
  onDeleteItem: (id: string) => void;
}

export const CMSProductsList = ({activeItem, items, onDeleteItem, onEditItem}: CMSProductsListProps) => {
  return (
    <div className="mt-12">
      <table className="table-auto w-full hover">
        <thead>
            <tr>
              <th className="text-left">PRODUCTS</th>
              <th className="text-left">IMAGE</th>
              <th>COST</th>
              <th>DELETE</th>
            </tr>
        </thead>

        <tbody>
          {
            items.map(p => (
              <tr 
                className={clsx(
                  'cursor-pointer rounded-sm', 
                  { 'bg-gray-300 text-black pointer-events-none': activeItem?.id === p.id}
                )}
                key={p.id} 
                onClick={() => onEditItem(p)}
              >
                <td className="rounded-tl-sm rounded-bl-sm">{p.name}</td>
                <td>
                  { p.tmb && <img src={p.tmb} alt={p.name} className="h-16 rounded-xl" /> }
                </td>
                <td className="text-center">€ {p.cost.toFixed(2)}</td>
                <td className="text-center rounded-tr-sm rounded-br-sm">
                  <FontAwesomeIcon 
                    icon={faTrash} 
                    className="cursor-pointer" 
                    onClick={(e) => {
                      e.stopPropagation()
                      onDeleteItem(p.id)
                    }}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}