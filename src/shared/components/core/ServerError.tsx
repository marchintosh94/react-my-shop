import { memo } from "react"

interface ServerErrorProps{
  message?: string;
}
export const ServerError = memo(({message}: ServerErrorProps) => {
  return (
    <p className="text-white bg-rose-800 rounded-xl p-3 my-6">
      { message || 'A server error has occourred!'}
    </p>
  )
})