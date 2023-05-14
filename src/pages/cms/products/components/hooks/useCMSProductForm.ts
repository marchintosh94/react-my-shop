import { ProductForm } from "@/model/product.type"
import { useCloudinary } from "@/shared"
import { ChangeEvent, useState } from "react"

const initialState: ProductForm = {
    name: '',
    description: '',
    tmb: '',
    img: '',
    cost: 0
}
export const useCMSProductForm = () => {
    const [ formData, setFormData] = useState(initialState)
    const [ dirty, setDirty] = useState(false)
    const { openWidget } = useCloudinary()

    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.currentTarget.value
        const key = e.currentTarget.name
        setFormData(state => ({ ...state, [key]: value}))
        setDirty(true)
    }

    const uploadHandler = () => {
      openWidget()
        .then(res => {
          setFormData(s => ({ ...s, ...res }))
        })
    }

    const isValidName = !!(formData.name?.length)
    const isValidDescription = !!(formData.description?.length)
    const isValidCost = formData.cost && formData.cost > 0
    const isValidImg = formData.img
    const isValidTmb = formData.tmb
    const isValidForm = isValidName &&
        isValidDescription &&
        isValidCost &&
        isValidImg &&
        isValidTmb 

    return {
        actions: {
            changeHandler,
            setFormData,
            uploadHandler
        },
        validators: {
            dirty,
            isValidName,
            isValidDescription,
            isValidCost,
            isValidImg,
            isValidTmb,
            isValidForm
        },
        formData
    }
} 