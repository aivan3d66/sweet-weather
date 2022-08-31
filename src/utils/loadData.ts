import { Dispatch } from 'redux';
import { localStorageItems } from '@/constant';
import { getCoordinates } from '@/utils/coordinatesCreator';
import {
  changeWeatherApi,
  fetchWeatherSuccess,
  updateCoordinates,
  updateCountyCode,
  updateLocationName,
} from '@/actions';

export const loadDataFromStorage = (dispatch: Dispatch) => {
  const coordinates = localStorage.getItem(localStorageItems.coordinates);
  const location = localStorage.getItem(localStorageItems.location);
  const country = localStorage.getItem(localStorageItems.countryCode);
  const weatherData = localStorage.getItem(localStorageItems.weatherData);
  const apiName = localStorage.getItem(localStorageItems.apiName);
  if (!coordinates) {
    getCoordinates(dispatch);
  } else {
    dispatch(updateCoordinates(JSON.parse(coordinates)));
  }
  location && dispatch(updateLocationName(location));
  country && dispatch(updateCountyCode(country));
  weatherData && dispatch(fetchWeatherSuccess(JSON.parse(weatherData)));
  apiName && dispatch(changeWeatherApi(apiName));
};
