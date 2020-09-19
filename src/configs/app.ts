interface IConfigUrls {
  GEOLOCATION_API_URL: string;
  WEATHER_API_BASE_URL: string
}

export const config: IConfigUrls = {
  GEOLOCATION_API_URL: "https://geolocation-db.com/json/",
  WEATHER_API_BASE_URL: "https://api.openweathermap.org/data/2.5/onecall"
}

export const isDevEnv: boolean = process.env.NODE_ENV === 'development';
