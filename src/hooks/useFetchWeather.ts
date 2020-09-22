import { useEffect, useState } from "react";
import { config } from "../configs";
import axios from "axios";
import useFetchLocation from "./useFetchLocation";
import {IWeatherData } from "../models/weather";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

/**
 * get weather data using user coordinates
 */
const useFetchWeather = (): { weatherData: IWeatherData | undefined } => {
  const { location } = useFetchLocation();
  const [weatherData, setWeatherData] = useState<IWeatherData>();

  useEffect(() => {
    const lat = location?.latitude;
    const lon = location?.longitude;
    const WEATHER_API_URL = `${config.WEATHER_API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    if (!lat || !lon) {
      return;
    }

    axios(WEATHER_API_URL)
      .then(res => setWeatherData(res.data))
      .catch(error => {
        throw error;
      });
  }, [location])

  return {
    weatherData
  }
}

export default useFetchWeather;
