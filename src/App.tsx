import React from 'react';
import './App.css';
import { kelvinToCelsius } from './helpers';
import { getCurrentDate } from './helpers/dateTime';
import useFetchWeather from './hooks/useFetchWeather';

const App = () => {
  const { weatherData } = useFetchWeather()
  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather</h1>
        {weatherData && kelvinToCelsius(weatherData.current.temp)}
        <br/>
        {getCurrentDate()}
      </header>
    </div>
  );
}

export default App;
