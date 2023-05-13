import { ProductForm } from '@/model/product.type';
import clsx from 'clsx';
 
export interface CMSProductFormProps {
  activeItem: ProductForm | null;
  onClose: () => void;
}

const initialState: ProductForm = {
  name: '',
  description: '',
  tmb: '',
  img: ''
}
export function CMSProductForm(
  props: CMSProductFormProps
) {
  return (
    <div className={clsx(
      'fixed bg-slate-200 z-10 text-black top-0 w-96  h-full transition-all',
      {'-right-96': !props.activeItem, 'right-0': props.activeItem}
    )}>
 
      <div className="flex justify-around h-16">
        <button
          className="text-white w-1/2 bg-green-500 hover:bg-green-600"
          onClick={props.onClose}
        >SAVE</button>
        <button
          className="text-white w-1/2 bg-slate-500 hover:bg-slate-600"
          onClick={props.onClose}
        >CLOSE</button>
      </div>
 
      {props.activeItem?.name}
 
    </div>
  )
}