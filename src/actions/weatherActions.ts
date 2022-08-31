import { CurrentWeatherDataType } from '@/components/Footer/WeatherList/WeatherListItem/types';
import {
  CHANGE_WEATHER_API,
  FETCH_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from '@/constant/actions';

export const fetchWeather = () =>
  ({
    type: FETCH_WEATHER,
  } as const);

export const fetchWeatherSuccess = (
  dataWeather: Array<CurrentWeatherDataType>,
) =>
  ({
    type: FETCH_WEATHER_SUCCESS,
    payload: dataWeather,
  } as const);

export const fetchWeatherError = (errorMessage: string) =>
  ({
    type: FETCH_WEATHER_ERROR,
    payload: errorMessage,
  } as const);

export const changeWeatherApi = (nameApi: string) =>
  ({
    type: CHANGE_WEATHER_API,
    payload: nameApi,
  } as const);
