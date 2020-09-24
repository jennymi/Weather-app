import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { IWeatherData } from "../models/weather";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const TempDisplay = ({ weather, weatherIcon }: { weather?: IWeatherData, weatherIcon?: IconProp }) => {

    return (
        <div className="left-panel">
            <div className="temperature">{weather && weather.current?.displayTemp}</div>
            <div className="weather-condition">
              <h1>{ weatherIcon && <FontAwesomeIcon icon={weatherIcon} size="lg" />}</h1>
              <h1>{weather && (weather.current.weather[0].main)}</h1>
            </div>
        </div>
    )
}
