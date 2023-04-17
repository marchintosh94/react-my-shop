import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

export const Spinner = memo(() => {
  return (
    <div className="flex w-full  justify-center items-center">
      <FontAwesomeIcon icon={faSpinner} spinPulse className="h-8 w-8"/>
    </div>
  )
})