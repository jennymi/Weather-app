import React, { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import classNames from "classnames";
import { Unit } from "../models/weather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./OptionToggles.scss";

interface IOptionToggles {
  unit: string;
  refreshWeather: () => void;
  toggleUnit: () => void;
}

export const OptionToggles = ({ unit, refreshWeather, toggleUnit }: IOptionToggles) => {
  const refreshInterval: Readonly<number> = 1000;
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const refresh = useCallback(() => {
    setIsRefreshing(true)
    refreshWeather();

    // allow refresh again in 3s
    setTimeout(() => setIsRefreshing(false), refreshInterval);
  }, [refreshWeather]);

  const refreshBtnClasses = classNames("header-options-button", isRefreshing && "refresh-animation")
  return (
    <div className="header-options">
      <Button className={refreshBtnClasses} variant='primary' onClick={refresh} disabled={isRefreshing}>
        <FontAwesomeIcon icon="redo-alt"/>
      </Button>
      <Button className="header-options-button" variant='primary' onClick={toggleUnit}>
        {unit === Unit.CELSIUS ? '°F' : '°C'}
      </Button>
    </div>
  )
}
