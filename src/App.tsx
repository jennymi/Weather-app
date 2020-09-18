import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { IUserGeoLocation } from './models';
import { IWeather } from './models/weather';
import { kelvinToCelsius } from './helpers';

function App() {
  const GEOLOC_URL = "https://geolocation-db.com/json/";
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const [weather, setWeather] = useState<IWeather>(); // this is the weather data
  const [userGeolocation, setUserGeolocation] = useState<IUserGeoLocation | undefined>(undefined);

  const getWeatherApiUrl = useCallback(
    (latitude: number, longitude: number): string => {
      return `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    },
    [API_KEY],
  )

  /**
   * get user geolocation including coordinates
   */
  useEffect(() => {
    const fetchGeolocation = (): void => {
      axios(GEOLOC_URL)
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
    <div className="App">
      <header className="App-header">
        <h1>Weather</h1>
        {weather && kelvinToCelsius(weather.current.temp)}
      </header>
    </div>
  );
}

export default App;
