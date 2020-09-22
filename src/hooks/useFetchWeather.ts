import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../configs";
import { IWeatherData } from "../models/weather";
import useFetchLocation from "./useFetchLocation";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

/**
 * get weather data using user coordinates
 */
const useFetchWeather = (): { weatherResponse: IWeatherData | undefined } => {
  const { location } = useFetchLocation();
  const [weatherResponse, setWeatherResponse] = useState<IWeatherData>();

  useEffect(() => {
    const lat = location?.latitude;
    const lon = location?.longitude;
    const WEATHER_API_URL = `${config.WEATHER_API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    if (!lat || !lon) {
      return;
    }
    const fetch = async () => {
      await axios(WEATHER_API_URL)
        .then(res => setWeatherResponse(res.data))
        .catch(error => {
          throw error;
        });
    }

    fetch();

  }, [location])

  return {
    weatherResponse
  }
}

export default useFetchWeather;
