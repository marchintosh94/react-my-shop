import { memo } from "react"

export const ServerError = memo(() => {
  return (
    <p className="text-white bg-rose-800 rounded-xl p-3 my-6">
      A server error has occourred!
    </p>
  )
})