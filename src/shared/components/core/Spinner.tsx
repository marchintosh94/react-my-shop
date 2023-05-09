import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useEffect, useState } from "react";

export const Spinner = memo(() => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 300)

    return () => clearTimeout(timeout)
  })
  return show? (
    <div className="flex w-full  justify-center items-center">
      <FontAwesomeIcon icon={faSpinner} spinPulse className="h-8 w-8"/>
    </div>
  ): null
})