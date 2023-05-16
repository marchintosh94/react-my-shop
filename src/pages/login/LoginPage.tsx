import { FormEvent, useEffect } from "react"
import { useLogin } from "./hooks/useLogin"
import { selectAuthError, selectAuthIsLogged, useAuth } from "@/services/auth"
import { ServerError } from "@/shared"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const navigate = useNavigate()
  const {
    actions,
    formData,
    validators
  } = useLogin()
  const login = useAuth(state => state.login)
  const isLogged = useAuth(selectAuthIsLogged)
  const error = useAuth(selectAuthError)

  useEffect(() => {
    isLogged && navigate('/cms')
  }, [isLogged])

  const doLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    login(formData.username, formData.password)
  }

  return (
    <div>
      <h1 className="title">LOGIN</h1>
      {error && <ServerError />}
      <form onSubmit={doLogin} className=" flex flex-col gap-3">
        <input type="text" placeholder="username" name="username" value={formData.username} onChange={actions.changeHandler} />
        <input type="password" placeholder="password" name="password" value={formData.password} onChange={actions.changeHandler} />
        <button className="btn primary" type="submit" disabled={!validators.isValid}>SIGN IN</button>
      </form>
    </div>
  )
}

export default LoginPage
