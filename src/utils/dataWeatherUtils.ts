import { CurrentWeatherDataType } from '@/components/Footer/WeatherList/WeatherListItem/types';
import { apiNames } from '@/constant';
import {
  OpenWeatherApiDataTypeDaily,
  SubTotalWeatherDataType,
  WeatherBitApiDataTypeDaily,
} from '@/saga/workers/types';

import { getDate } from './dateUtils';

const mapOpenWeatherData = (
  weatherData: Array<OpenWeatherApiDataTypeDaily>,
) => {
  return weatherData.map((dayInfo) => ({
    date: getDate(dayInfo.dt),
    temp: Math.round(dayInfo.main.temp),
    weatherIcon: dayInfo.weather[0].icon,
    weatherMain: dayInfo.weather[0].main,
    wind: dayInfo.wind.speed,
    code: dayInfo.weather[0].id,
  }));
};

const mapWeatherBitData = (weatherData: Array<WeatherBitApiDataTypeDaily>) => {
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
  const { list, data } = weatherInfo;
  let result: Array<CurrentWeatherDataType> | null = null;
  switch (api) {
    case apiNames.openWeather:
      result = mapOpenWeatherData(list);
      break;
    default:
      result = mapWeatherBitData(data);
      break;
  }
  return result && result.filter((_, index) => index < 7);
};
