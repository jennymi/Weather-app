import React, { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import classNames from "classnames";
import { Unit } from "../models/weather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./OptionToggles.scss";

interface IOptionToggles {
  unit: string;
  isFetching: boolean;
  refreshWeather: () => void;
  toggleUnit: () => void;
}

export const OptionToggles = ({ unit, refreshWeather, toggleUnit, isFetching }: IOptionToggles) => {
  const minRefreshInterval: Readonly<number> = 1000;
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const refresh = useCallback(() => {
    setIsRefreshing(true)
    refreshWeather();

    // let refresh state be for minimum 1 sec, else listen when fetch is done
    setTimeout(() => {
      if (!isFetching) {
        setIsRefreshing(false)
      }
    }, minRefreshInterval);
    }, [isFetching, refreshWeather]);

  const isRefreshState: boolean = isRefreshing || isFetching;
  const refreshBtnClasses = classNames("header-options-button", isRefreshState && "refresh-animation")
  return (
    <div className="header-options">
      <Button className={refreshBtnClasses} variant='primary' onClick={refresh} disabled={isRefreshState}>
        <FontAwesomeIcon icon="redo-alt"/>
      </Button>
      <Button className="header-options-button" variant='primary' onClick={toggleUnit}>
        {unit === Unit.CELSIUS ? '°F' : '°C'}
      </Button>
    </div>
  )
}
