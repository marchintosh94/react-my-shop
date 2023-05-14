import { ProductForm } from '@/model/product.type';
import clsx from 'clsx';
import { useCMSProductForm } from './hooks/useCMSProductForm';
import { FormEvent, useEffect } from 'react';
 
export interface CMSProductFormProps {
  activeItem: ProductForm | null;
  onClose: () => void;
  onAdd: (item: ProductForm) => void;
  onEdit: (item: ProductForm) => void;
}

export function CMSProductForm({
  activeItem,
  onAdd,
  onClose,
  onEdit
}: CMSProductFormProps) {
  const { formData, actions, validators} = useCMSProductForm()

  useEffect(() => {
    if(activeItem?.id){
      actions.setFormData({...activeItem})
    } else {
      actions.setFormData({cost: 0, name: '', description: '', img: '', tmb: ''})
    }
  }, [activeItem])

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(activeItem?.id){
      //  EDIT
      onEdit(formData)
    } else {
      onAdd(formData)
    }
  }
  return (
    <div className={clsx(
      'fixed bg-slate-200 z-10 text-black top-0 w-96  h-full transition-all overflow-auto',
      {'-right-96': !activeItem, 'right-0': activeItem}
    )}>
 
      <form onSubmit={submitHandler}>
        <div className="flex justify-around h-16">
          <button
            className="text-white w-1/2 bg-green-500 hover:bg-green-600 disabled:opacity-30"
            disabled={!validators.isValidForm}
            type='submit'
          >SAVE</button>
          <button
            type='button'
            className="text-white w-1/2 bg-slate-500 hover:bg-slate-600"
            onClick={onClose}
          >CLOSE</button>
        </div>

        {
          formData.img &&
            <img src={formData.img} alt={formData.name} className="w-full" />
        }

        <div className="flex flex-col gap-3 mx-3 mt-16">
          Product Name:
          <input
            name='name'
            className={clsx({ 'error': !validators.isValidName && validators.dirty})}
            type="text" value={formData?.name} onChange={actions.changeHandler}
          />

          Product Cost:
          <input
            className={clsx({ 'error': !validators.isValidCost && validators.dirty})}
            type="number" value={formData?.cost} name="cost" onChange={actions.changeHandler}
          />

          Description
          <textarea
            className={clsx({ 'error': !validators.isValidDescription && validators.dirty})}
            value={formData.description} name="description" onChange={actions.changeHandler}
          ></textarea>

          <button className="btn primary" type="button" onClick={actions.uploadHandler}>
            UPLOAD IMAGE
          </button>
        </div>
      </form>
 
    </div>
  )
}