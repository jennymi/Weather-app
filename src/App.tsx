import cn from "classnames";
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import './App.scss';
import { OptionToggles } from './components/OptionToggles';
import { TempDisplay } from './components/TempDisplay';
import { Timer } from './components/Timer';
import useFetchLocation from './hooks/useFetchLocation';
import useFetchWeather from './hooks/useFetchWeather';
import { Unit } from './models/weather';

// const people = [
//   "Jenny",
//   "Ruben",
//   "Petter"
// ];

export const App = () => {
  const [unit, setUnit] = useState<Unit>(Unit.CELSIUS);
  const { location } = useFetchLocation();
  const { weather, refreshWeather, isLoading } = useFetchWeather(unit);
  const toggleUnit = () => setUnit(unit === Unit.CELSIUS ? Unit.FAHRENHEIT : Unit.CELSIUS)
  const places = require('places.js');
  const ready = () => document.readyState === 'interactive' || document.readyState === 'complete' ? Promise.resolve() : new Promise(resolve => {
      document.addEventListener('DOMContentLoaded', resolve);
    });
  ready().then(() => {
    places({
      container: document.getElementById('address-input'),
    });
  });

  return (
    <div className={cn("app", isLoading && "app-is-loading")}>
      <Helmet>
        <title>{`Weather in ${location?.city} | RJPWeather`}</title>
      </Helmet>
      
      <header className="app-header">
        <input id="address-input" placeholder="Search address here.."/>
      </header>

      <main className="app-main">
        <div className="app-main-header">
          <div className="meta-info">
            <Timer/>
            <h2>{location?.city}, {location?.country_name}</h2>
          </div>
          <OptionToggles
            unit={unit}
            toggleUnit={toggleUnit}
            refreshWeather={refreshWeather}
            isFetching={isLoading}
          />
        </div>
        <div className="app-main-body">
          <TempDisplay weather={weather} weatherStatus={weather?.current.weather[0].main}/>
          <div className="right-panel">right</div>
        </div>
      </main>
    </div>
  );
}

// export default App;
