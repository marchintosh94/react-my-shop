import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo } from "react";

export const Spinner = memo(() => {
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} spinPulse/>
    </div>
  )
})