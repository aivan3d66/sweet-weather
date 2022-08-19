import {
  CHANGE_WEATHER_API,
  FETCH_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from '../constants/actions'

import { CurrentWeatherDataType } from './types'

export const fetchWeather = () => ({
  type: FETCH_WEATHER,
})
export const fetchWeatherSuccess = (dataWeather: CurrentWeatherDataType[]) => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: { dataWeather },
})
export const fetchWeatherError = (errorMessage: string) => ({
  type: FETCH_WEATHER_ERROR,
  payload: { errorMessage },
})
export const changeWeatherApi = (nameApi: string) => ({
  type: CHANGE_WEATHER_API,
  payload: { nameApi },
})
