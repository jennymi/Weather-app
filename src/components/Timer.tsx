import React from "react"
import { getCurrentDate } from "../helpers/dateTime"

const Timer = () => {
  return (
    <div>
      {getCurrentDate()}
    </div>
  )
}

export default Timer;
