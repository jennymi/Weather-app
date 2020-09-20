/**
 * Here we specify types for each of the properties for typescript to understand.
 * If you are interested to use more of the weather data, then you can expand this by comparing with the weather api response.
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
    temp: number; // this is in kelvin
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
