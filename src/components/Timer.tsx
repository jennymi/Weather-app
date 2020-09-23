import React, { useEffect, useMemo, useState } from "react"
import { formatDate } from "../helpers/dateTime"

const Timer = () => {
  const [timer, setTimer] = useState(() => new Date())
  const formattedTimer = useMemo(() => formatDate(timer), [timer])

  const updateTime = () => {
    setTimer(new Date());
  }

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000);
    return () => { clearInterval(interval) }
  }, [])

  return (
    <div>
      {formattedTimer}
    </div>
  )
}

export default Timer;
