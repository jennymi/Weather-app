import { useCallback, useEffect, useState } from "react";
import { unitConversion } from "../helpers";
import { IWeatherData, Unit } from "../models/weather";
import useFetchWeather from "./useFetchWeather";

const useWeather = (unit: Unit): { weather: IWeatherData | undefined } => {
  const { weatherResponse } = useFetchWeather();
  const [weather, setWeather] = useState<IWeatherData>()

  const applyUnitConversion = useCallback((weather: IWeatherData) => {
    // mutate extended displayTemp prop
    weather.current.displayTemp = unitConversion({temp: weather.current.temp, unit})
    console.log(weather.current.displayTemp)
    return weather;
  }, [unit])

  useEffect(() => {
    if (weatherResponse) {
      setWeather(applyUnitConversion(weatherResponse));
    }
  }, [applyUnitConversion, weatherResponse])

  return {
    weather
  }
}

export default useWeather;
