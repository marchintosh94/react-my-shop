import { selectAuthIsLogged, useAuth } from "@/services/auth"
import { PropsWithChildren } from "react"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const isLogged = useAuth(selectAuthIsLogged)
  return (
    <>
      {isLogged? children : <Navigate to={'/login'}/> }
    </>
  )
}