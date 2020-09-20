/**
 * Here we specify types for each of the properties for typescript to understand.
 * If you are interested to use more of the weather data, then you can expand this by comparing with the weather api response.
 */
export interface IWeather {
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
    weather: any; // expand later
    wind_deg: number;
    wind_speed: number
  }
}