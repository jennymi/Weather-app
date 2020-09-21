import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { IUserGeoLocation } from './models';
import { IWeather } from './models/weather';
import { kelvinToCelsius, kelvinToFahrenheit } from './helpers';
import { config } from './configs';
import {getCurrentDate} from './helpers/dateTime';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState<IWeather>(); // this is the weather data
  const [userGeolocation, setUserGeolocation] = useState<IUserGeoLocation | undefined>(undefined);
  
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);

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
         {weather && (isToggled ? kelvinToFahrenheit(weather.current.temp) : kelvinToCelsius(weather.current.temp))}
        <br/>
        {getCurrentDate()}
        <br/><br/>

        <h2>{isToggled}</h2>
        <Button variant='primary' size='lg' onClick={toggleTrueFalse}>
        {isToggled ? 'Fahrenheit' : 'Celsius'}
        </Button>

      </header>
    </div>
  );
}

export default App;
