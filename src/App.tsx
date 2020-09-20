import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { IUserGeoLocation } from './models';
import { IWeather } from './models/weather';
import { kelvinToCelsius } from './helpers';
import { config } from './configs';
import {getCurrentDate} from './helpers/dateTime';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState<IWeather>(); // this is the weather data
  const [userGeolocation, setUserGeolocation] = useState<IUserGeoLocation | undefined>(undefined);


  const getWeatherApiUrl = useCallback(
    (lat: number, lon: number): string => {
      return `${config.WEATHER_API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    },
    [],
  )

  /**
   * get user geolocation including coordinates
   */
  useEffect(() => {
    const fetchGeolocation = (): void => {
      axios(config.GEOLOCATION_API_URL)
        .then(res => setUserGeolocation(res.data))
        .catch(error => {
          throw error;
        });
    };
    fetchGeolocation();
  }, []);

  /**
   * get weather data using user coordinates
   */
  useEffect(() => {
    const lat = userGeolocation?.latitude;
    const lon = userGeolocation?.longitude;
    if (!lat || !lon) {
      return;
    }

    const WEATHER_API_URL = getWeatherApiUrl(lat, lon);
    axios(WEATHER_API_URL)
      .then(res => setWeather(res.data))
      .catch(error => {
        throw error;
      });
  }, [getWeatherApiUrl, userGeolocation])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather</h1>
        {weather && kelvinToCelsius(weather.current.temp)}
        <br/>
        {getCurrentDate()}
      </header>
    </div>
  );
}

export default App;
