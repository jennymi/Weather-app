/**
 * Converts Kelvin to Celsius
 * @param kelvin temperature in kelvin
 */
export function kelvinToCelsius(kelvin: number): string {
  return `${(kelvin - 273.15).toFixed()}°C`;
}

export function kelvinToFahrenheit() {
  alert('Hello!');
}