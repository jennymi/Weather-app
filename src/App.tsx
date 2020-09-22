import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import { kelvinToCelsius, kelvinToFahrenheit } from './helpers';
import { getCurrentDate } from './helpers/dateTime';
import useFetchLocation from './hooks/useFetchLocation';
import useFetchWeather from './hooks/useFetchWeather';

const App = () => {
  const { location } = useFetchLocation();
  const { weatherData } = useFetchWeather();
  const [toggleMetric, setToggledMetric] = useState(false);
  const toggleTrueFalse = () => setToggledMetric(!toggleMetric);

  return (
    <div className="app">
      <header className="app-header">
        <h1>{weatherData && (weatherData.current.weather[0].main)}</h1>
        <br/>
        <h1>{location?.city}, {location?.country_name}</h1>
        {weatherData && (toggleMetric ? kelvinToFahrenheit(weatherData.current.temp) : kelvinToCelsius(weatherData.current.temp))}
        
        <br/>
        {getCurrentDate()}
        <br/><br/>

        <Button variant='primary' size='lg' onClick={toggleTrueFalse} style={{position: 'absolute', top: 5, right: 5}}>
          {toggleMetric ? 'Celsius' : 'Fahrenheit'}
        </Button>
      </header>
    </div>
  );
}

export default App;
