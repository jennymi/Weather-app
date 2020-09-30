import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { config } from "../configs";
import { unitConversion } from "../helpers";
import { IWeatherData, Unit } from "../models/weather";
import useFetchLocation from "./useFetchLocation";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export interface IWeatherState {
  data: IWeatherData | undefined;
  refreshWeather: () => void;
  isLoading: boolean;
}

/**
 * get weather data using user coordinates
 */
const useFetchWeather = (unit?: Unit): IWeatherState => {
  const { location } = useFetchLocation();
  const [weatherResponse, setWeatherResponse] = useState<IWeatherData>();
  const [triggerFetch, setTriggerFetch] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const lat = location?.latitude;
    const lon = location?.longitude;
    const WEATHER_API_URL = `${config.WEATHER_API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    if (!lat || !lon) {
      return;
    }

    const fetch = async () => {
      setIsLoading(true);
      await axios(WEATHER_API_URL)
        .then(res => setWeatherResponse(res.data))
        .then(() =>  {
          setTriggerFetch(false);
          setIsLoading(false);
        })
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
    data: applyUnitConversion(weatherResponse),
    refreshWeather: () => setTriggerFetch(true),
    isLoading
  }
}

export default useFetchWeather;
