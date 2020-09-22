import { Unit } from "../models/weather";

/**
 * Converts Kelvin to Celsius
 * @param temp temperature in kelvin
 */
export function kelvinToCelsius(temp: number): string {
  return `${(temp - 273.15).toFixed()}°C`;
}

/**
 * Converts Kelvin to Fahrenheit
 * @param temp temperature in kelvin
 */
export function kelvinToFahrenheit(temp: number): string {
  return `${(((temp - 273.15) * 9 / 5) + 32).toFixed()}°F`;
}

interface IUnitConversion {
  temp: number,
  unit: Unit
}
/**
 * Utility to decide which unit to convert to
 * @param temp temperature in kelvin
 * @param unit unit to display temperature
 */
export function unitConversion({ temp, unit }: IUnitConversion): string {
  return unit === Unit.CELSIUS ? kelvinToCelsius(temp) : kelvinToFahrenheit(temp);
}

