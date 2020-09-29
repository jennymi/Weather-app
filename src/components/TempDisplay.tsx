import React from "react";
import { IWeatherData } from "../models/weather";
import { getIconOfWeatherStatus } from "../helpers/getWeatherIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TempDisplay = ({ weather, weatherStatus }: { weather?: IWeatherData, weatherStatus?: string }) => {
  return (
    <div className="left-panel">
      <div className="weather-condition temperature">
        <h1>{weatherStatus && <FontAwesomeIcon icon={getIconOfWeatherStatus(weatherStatus)} size="lg" />}</h1>
        {weather && weather.current?.displayTemp}
      </div>
      <h3>{weather?.current.weather[0].main}</h3>
    </div>
  )
}
