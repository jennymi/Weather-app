import React, { CSSProperties, useCallback, useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Timer from './components/Timer';
import useFetchLocation from './hooks/useFetchLocation';
import useWeather from './hooks/useWeatherUnitConversion';
import { Unit } from './models/weather';

const App = () => {
  const [unit, setUnit] = useState<Unit>(Unit.CELSIUS);
  const { location } = useFetchLocation();
  const { weather } = useWeather(unit);
  const toggleUnit = useCallback(
    () => setUnit(u => u === Unit.CELSIUS ? Unit.FAHRENHEIT : Unit.CELSIUS
  ), [])


  const unitButtonStyle: CSSProperties = {
    position: 'absolute',
    top: 10,
    right: 10
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>{weather && (weather.current.weather[0].main)}</h1>
        <br/>
        <h1>{location?.city}, {location?.country_name}</h1>
        {weather && weather.current?.displayTemp}

        <br/>
        <Timer/>
        <br/><br/>

        <Button variant='primary' onClick={toggleUnit} style={unitButtonStyle}>
          {unit === Unit.CELSIUS ? '°F' : '°C'}
        </Button>
      </header>
    </div>
  );
}

export default App;
