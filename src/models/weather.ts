/**
 * Here we specify types for each of the properties for typescript to understand.
 * If you are interested to use more of the weather data, then you can expand this model by comparing with the weather API response.
 */
export interface IWeatherData {
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    /* extended property simplifying includement of unit */
    displayTemp?: string;
    uvi: number;
    visibility: number;
    weather: IWeather[];
    wind_deg: number;
    wind_speed: number
  }
}

export interface IWeather {
  description: string;
  icon: string;
  id: 804;
  main: string;
}

export enum Unit {
  CELSIUS = "CELSIUS",
  FAHRENHEIT = "FAHRENHEIT"
}
