import React, { useState } from 'react';
import './App.scss';
import { OptionToggles } from './components/OptionToggles';
import { Timer } from './components/Timer';
import useFetchLocation from './hooks/useFetchLocation';
import useFetchWeather from './hooks/useFetchWeather';
import { Unit } from './models/weather';

const App = () => {
  const [unit, setUnit] = useState<Unit>(Unit.CELSIUS);
  const { location } = useFetchLocation();
  const { weather, refreshWeather } = useFetchWeather(unit);
  const toggleUnit = () => setUnit(unit === Unit.CELSIUS ? Unit.FAHRENHEIT : Unit.CELSIUS)

  return (
    <div className="app">
      <header className="app-header">

      </header>
      <main className="app-main">
        <div className="app-main-header">
          <div className="meta-info">
            <span className="label">
              <Timer/>
            </span>
            <h2>{location?.city}, {location?.country_name}</h2>
          </div>
          <OptionToggles
            unit={unit}
            toggleUnit={toggleUnit}
            refreshWeather={refreshWeather}
          />
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
