import axios from 'axios';
import { select, put, call } from 'redux-saga/effects';

import {
  fetchWeatherError,
  fetchWeatherSuccess,
  updateLocalStorage,
} from 'actions';
import { apiNames, errors, localStorageItems } from 'constant';
import { RootState } from 'reducers';
import { getDataFromOpenWeatherApi, getUrlApi } from 'utils';

import { CurrentWeatherDataType } from 'components/Footer/WeatherList/WeatherListItem/types';
import { getLocationCoordinates } from './locationWorkers';
import { TotalWeatherDataType } from './types';

export function* weatherWorker() {
  try {
    yield getLocationCoordinates();
    const {
      locationState: {
        location,
        coordinates: { lat, lon },
        countryCode,
      },
      weatherState: { nameAPI },
    }: RootState = yield select((state: RootState) => state);
    yield put(updateLocalStorage(localStorageItems.apiName, nameAPI));
    yield put(updateLocalStorage(localStorageItems.location, location));
    yield put(updateLocalStorage(localStorageItems.countryCode, countryCode));
    const url: string =
      nameAPI === apiNames.openWeather
        ? yield getUrlApi({ type: nameAPI, lat, lon })
        : yield getUrlApi({ type: nameAPI, location });

    const { data }: TotalWeatherDataType = yield call(axios.get, url);
    const info: Array<CurrentWeatherDataType> = yield getDataFromOpenWeatherApi(
      nameAPI,
      data,
    );
    yield put(fetchWeatherSuccess(info));
    yield put(
      updateLocalStorage(localStorageItems.weatherData, JSON.stringify(info)),
    );
  } catch (err) {
    yield put(fetchWeatherError(errors.weatherApiError));
  }
}
