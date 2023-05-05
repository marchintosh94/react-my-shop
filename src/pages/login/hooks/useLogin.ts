import { ChangeEvent, useState } from "react"

export const useLogin = () => {
    const [formData, setFormData] = useState({ username: '', password: ''})
    
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setFormData(s => ({ ...s, [name]: value}))
    }



    const isValid = formData.username.length && formData.password.length
    return {
        formData,
        actions:{
            changeHandler
        },
        validators: {
            isValid
        }
    }
}