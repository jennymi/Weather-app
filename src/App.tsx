import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.scss';
import Timer from './components/Timer';
import useFetchLocation from './hooks/useFetchLocation';
import useFetchWeather from './hooks/useFetchWeather';
import { Unit } from './models/weather';

const App = () => {
  const [unit, setUnit] = useState<Unit>(Unit.CELSIUS);
  const { location } = useFetchLocation();
  const { weather } = useFetchWeather(unit);
  const toggleUnit = () => setUnit(unit === Unit.CELSIUS ? Unit.FAHRENHEIT : Unit.CELSIUS)

  return (
    <div className="app">
      <header className="app-header">

      </header>
      <main className="app-main">
        <div className="app-main-header">
          <Button className="convert-unit-button" variant='primary' onClick={toggleUnit}>
            {unit === Unit.CELSIUS ? '°F' : '°C'}
          </Button>
          <span className="label">
            <Timer/>{" "}
          </span>
          <h3>{location?.city}, {location?.country_name}</h3>
        </div>
        <div className="app-main-body">
          <div className="left-panel">
            <div className="temperature">{weather && weather.current?.displayTemp}</div>
            <div><h1>{weather && (weather.current.weather[0].main)}</h1></div>
          </div>
          <div className="right-panel">right</div>
        </div>
      </main>
    </div>
  );
}

export default App;
