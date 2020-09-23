import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { config } from "../configs";
import { unitConversion } from "../helpers";
import { IWeatherData, Unit } from "../models/weather";
import useFetchLocation from "./useFetchLocation";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

interface IFetchWeatherHook {
  weather: IWeatherData | undefined;
  refreshWeather: () => void;
}

/**
 * get weather data using user coordinates
 */
const useFetchWeather = (unit?: Unit): IFetchWeatherHook => {
  const { location } = useFetchLocation();
  const [weatherResponse, setWeatherResponse] = useState<IWeatherData>();
  const [triggerFetch, setTriggerFetch] = useState<boolean>(true);

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
        .then(() => setTriggerFetch(false))
        .catch(error => {
          throw error;
        });
    }

    if (triggerFetch) {
      fetch();
    }
  }, [location, triggerFetch])

  const applyUnitConversion = useCallback((weather?: IWeatherData) => {
    if (weather && unit) {
      // mutate extended displayTemp prop
      weather.current.displayTemp = unitConversion({temp: weather.current.temp, unit})
      return weather;
    }
  }, [unit])

  return {
    weather: applyUnitConversion(weatherResponse),
    refreshWeather: () => setTriggerFetch(true)
  }
}

export default useFetchWeather;
