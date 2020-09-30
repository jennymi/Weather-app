import React, { useEffect, useState } from "react"
import { IWeatherState } from "../../hooks/useFetchWeather"
import { IUserGeoLocation } from "../../models"
import { Unit } from "../../models/weather"
import { MainLoader } from "./components/MainLoader"
import { OptionToggles } from "./components/OptionToggles"
import { TempDisplay } from "./components/TempDisplay"
import { Timer } from "./components/Timer"
import "./MainWeather.scss";

interface IMainWeatherProps {
  location?: IUserGeoLocation;
  weather: IWeatherState;
  unit: Unit;
  toggleUnitCallback: () => void;
}

export const MainWeather = ({ location, weather, unit, toggleUnitCallback }: IMainWeatherProps) => {
  const [minimumLoading, setMinimumLoading] = useState<boolean>(true);

  useEffect(() => {
    // sets a min. 500ms delay before listening
    // TODO: Split into custom hook?
    if (!weather.isLoading) {
      setTimeout(() => {
        setMinimumLoading(weather.isLoading);
      }, 300);
    }
  }, [weather.isLoading])

  return (
    <main className="app-main">
      <MainLoader isLoading={minimumLoading} />
      <div className="app-main-header">
        <div className="meta-info">
          <Timer/>
          <h2>{location?.city}, {location?.country_name}</h2>
        </div>
        <OptionToggles
          unit={unit}
          toggleUnit={toggleUnitCallback}
          refreshWeather={weather.refreshWeather}
          isFetching={weather.isLoading}
        />
      </div>
      <div className="app-main-body">
        <TempDisplay weather={weather.data} weatherStatus={weather?.data?.current.weather[0].main}/>
        <div className="right-panel">
          right
        </div>
      </div>
    </main>
  )
}
