import { pocketbase } from "@/utility"

export const login = (username: string, password: string) => {
    return pocketbase.admins.authWithPassword(username, password)
}
export const logout = () => {
    return pocketbase.authStore.clear()
}
export const getToken = () => {
    return pocketbase.authStore.token
}
export const isLogged = () => {
    return pocketbase.authStore.isValid
}