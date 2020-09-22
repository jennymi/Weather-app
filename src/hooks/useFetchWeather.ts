import { useCallback, useEffect, useState } from "react";
import { config } from "../configs";
import axios, { AxiosResponse } from "axios";
import useFetchLocation from "./useFetchLocation";
import {IWeatherData, Unit } from "../models/weather";
import { unitConversion } from "../helpers";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

/**
 * get weather data using user coordinates
 */
const useFetchWeather = (unit: Unit): { weatherData: IWeatherData | undefined } => {
  const { location } = useFetchLocation();
  const [weatherData, setWeatherData] = useState<IWeatherData>();

  const applyUnitConversion = useCallback((res: AxiosResponse<any>) => {
    // mutate temperature to include units
    res.data.current.temp = unitConversion({temp: res.data.current.temp, unit})
    return res;
  }, [unit])

  useEffect(() => {
    const lat = location?.latitude;
    const lon = location?.longitude;
    const WEATHER_API_URL = `${config.WEATHER_API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    if (!lat || !lon) {
      return;
    }

    axios(WEATHER_API_URL)
      .then(res => applyUnitConversion(res))
      .then(res => setWeatherData(res.data))
      .catch(error => {
        throw error;
      });
  }, [applyUnitConversion, location, unit])

  return {
    weatherData
  }
}

export default useFetchWeather;
