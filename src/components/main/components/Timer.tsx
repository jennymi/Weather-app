import React, { useCallback, useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import { formatAdvancedTime, formatSimpleTime } from "../../../helpers/dateTime"
import "./Timer.scss";

export const Timer = () => {
  const [isAdvancedTimer, setIsAdvancedTimer] = useState<boolean>(false);
  const [timer, setTimer] = useState(() => new Date());

  const updateTime = useCallback(() => setTimer(new Date()), []);

  useEffect(() => {
    const interval = setInterval(() => updateTime(), 1000);
    return () => { clearInterval(interval) }
  }, [updateTime])

  return (
    <Button
      className="timer-button"
      variant='primary'
      onClick={() => setIsAdvancedTimer(prevIsAdvancedTimer => !prevIsAdvancedTimer)}
    >
      {isAdvancedTimer ? formatAdvancedTime(timer) : formatSimpleTime(timer)}
    </Button>
  )
}
