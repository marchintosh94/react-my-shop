import { selectAuthIsLogged, useAuth } from "@/services/auth"
import { PropsWithChildren, ReactNode } from "react"

interface IfLoggedProps {
  elseNode?: ReactNode
}

export const IfLogged = ({ children, elseNode}: PropsWithChildren<IfLoggedProps>) => {
  const isLogged = useAuth(selectAuthIsLogged)
  return (
    <>
      {isLogged? children : elseNode }
    </>
  )
}