import React from "react";
import { IWeatherData } from "../models/weather";

export const TempDisplay = ({ weather }: { weather?: IWeatherData }) => {

    return (
        <div className="left-panel">
            <div className="temperature">{weather && weather.current?.displayTemp}</div>
            <div><h1>{weather && weather.current.weather[0].main}</h1></div>
        </div>
    )
}
