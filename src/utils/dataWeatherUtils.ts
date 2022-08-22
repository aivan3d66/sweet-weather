import { apiNames } from 'constant';
import {
  SubTotalWeatherDataType,
  CurrentWeatherDataType,
  OpenWeatherApiDataTypeDaily,
  WeatherBitApiDataTypeDaily,
} from 'types';

import { getDate } from './dateUtils';

const mapOpenWeatherData = (weatherData: OpenWeatherApiDataTypeDaily[]) => {
  return weatherData.map((dayInfo) => ({
    date: getDate(dayInfo.dt),
    temp: Math.round(dayInfo.temp.day),
    weatherIcon: dayInfo.weather[0].icon,
    weatherMain: dayInfo.weather[0].main,
    wind: dayInfo.wind_speed,
    code: dayInfo.weather[0].id,
  }));
};

const mapWeatherBitData = (weatherData: WeatherBitApiDataTypeDaily[]) => {
  return weatherData.map((dayInfo) => ({
    date: getDate(dayInfo.ts),
    temp: Math.round(dayInfo.temp),
    weatherIcon: dayInfo.weather.icon,
    weatherMain: dayInfo.weather.description,
    wind: dayInfo.wind_spd,
    code: dayInfo.weather.code,
  }));
};

export const getDataFromOpenWeatherApi = (
  api: string,
  weatherInfo: SubTotalWeatherDataType,
) => {
  const { daily, data } = weatherInfo;
  let result: CurrentWeatherDataType[] | null = null;
  switch (api) {
    case apiNames.openWeather:
      result = mapOpenWeatherData(daily);
      break;
    default:
      result = mapWeatherBitData(data);
      break;
  }
  return result && result.filter((_, index) => index < 7);
};
