import {
  fetchLocation,
  fetchLocationError,
  fetchLocationSuccess,
  updateCoordinates,
  updateCountyCode,
  updateLocationName,
} from './locationActions';
import {
  changeWeatherApi,
  fetchWeather,
  fetchWeatherError,
  fetchWeatherSuccess,
} from './weatherActions';
import { updateLocalStorage } from './localStorageActions';

export type LocationActionCreatorTypes =
  | ReturnType<typeof fetchLocation>
  | ReturnType<typeof fetchLocationSuccess>
  | ReturnType<typeof fetchLocationError>
  | ReturnType<typeof updateLocationName>
  | ReturnType<typeof updateCountyCode>
  | ReturnType<typeof updateCoordinates>;

export type FetchActionCreatorTypes =
  | ReturnType<typeof fetchWeather>
  | ReturnType<typeof fetchWeatherSuccess>
  | ReturnType<typeof fetchWeatherError>
  | ReturnType<typeof changeWeatherApi>;

export type LocalStorageActionCreatorType = ReturnType<
  typeof updateLocalStorage
>;
