import React from "react";
import { IWeatherData } from "../../../models/weather";
import { getIconOfWeatherStatus } from "../../../helpers/getWeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./TempDisplay.scss";

export const TempDisplay = ({ weather, weatherStatus }: { weather?: IWeatherData, weatherStatus?: string }) => {
  return (
    <div className="left-panel">
      <div className="temperature">
        <div className="temperature-icon">
          {weatherStatus && <FontAwesomeIcon icon={getIconOfWeatherStatus(weatherStatus)} size="6x" />}
        </div>
        <div className="temperature-info">
          <h2>{weather && weather.current?.displayTemp}</h2>
          <h3>{weather?.current.weather[0].main}</h3>
        </div>
      </div>
    </div>
  )
}
