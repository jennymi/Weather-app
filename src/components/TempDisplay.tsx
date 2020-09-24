import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { IWeatherData } from "../models/weather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { displayWeatherIcon } from "../helpers";

export const TempDisplay = ({ weather, weatherIcon }: { weather?: IWeatherData, weatherIcon?: string }) => {
    const icon: IconProp | undefined = displayWeatherIcon(weatherIcon);

    return (
      <div className="left-panel">
          <div className="temperature">{weather && weather.current?.displayTemp}</div>
          <div className="weather-condition">
            <h1>{icon && <FontAwesomeIcon icon={icon} size="lg" />}</h1>
            <h1>{weather && (weather.current.weather[0].main)}</h1>
          </div>
      </div>
    )
}
