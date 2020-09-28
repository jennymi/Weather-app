// Specify new weather icons here
export enum WeatherIcon {
  CLOUD_RAIN = "cloud-rain",
  CLOUD = "cloud",
  SUN = "sun",
  CLOUD_SUN = "cloud-sun",
  SMOG = "smog"
}

/**
 * Return weather icon name corresponding to weather status
 * @param iconWeatherStatus weather status from API
 */
export function getIconOfWeatherStatus(weatherStatus?: string): WeatherIcon {
  console.log(weatherStatus)
  switch (weatherStatus) {
    case "Drizzle" || "Rain":
      return WeatherIcon.CLOUD_RAIN;

    case "Clouds":
      return WeatherIcon.CLOUD;

    case "Sunny":
      return WeatherIcon.SUN;

    case "SunnyCloud":
      return WeatherIcon.CLOUD_SUN;

    case "Mist":
      return WeatherIcon.SMOG;
    default:
      // throw new Error("No weather icon for current weather status");
      return WeatherIcon.CLOUD
  }
}
