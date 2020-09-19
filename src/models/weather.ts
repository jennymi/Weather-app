// expand this model if in need of more data from response
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