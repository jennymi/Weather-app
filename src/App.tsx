import cn from "classnames";
import React, { useState } from 'react';
import Helmet from 'react-helmet';
import './App.scss';
import { HeaderSearch } from "./components/header/HeaderSearch";
import { MainWeather } from "./components/main/MainWeather";

import useFetchLocation from './hooks/useFetchLocation';
import useFetchWeather from './hooks/useFetchWeather';
import { Unit } from './models/weather';

export const App = () => {
  const { location } = useFetchLocation();
  const [unit, setUnit] = useState<Unit>(Unit.CELSIUS);
  const weather = useFetchWeather(unit);
  const toggleUnit = () => setUnit(unit === Unit.CELSIUS ? Unit.FAHRENHEIT : Unit.CELSIUS)

  return (
    <div className={cn("app", weather.isLoading && "app-is-loading")}>
      <Helmet>
        <title>{`Weather in ${location?.city} | RJPWeather`}</title>
      </Helmet>

      <HeaderSearch/>

      <MainWeather
        weather={weather}
        location={location}
        unit={unit}
        toggleUnitCallback={toggleUnit}
      />
    </div>
  );
}
