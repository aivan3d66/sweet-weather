import axios from 'axios';
import { select, put, call } from 'redux-saga/effects';

import {
  fetchWeatherError,
  fetchWeatherSuccess,
  updateLocalStorage,
} from 'actions';
import { apiNames, errors, localeStorageItems } from 'constant';
import { RootState } from 'reducers';
import { CurrentWeatherDataType, TotalWeatherDataType } from 'types';
import { getDataFromOpenWeatherApi, getUrlApi } from 'utils';

import { getLocationCoordinates } from './locationWorkers';

export function* weatherWorker(): any {
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
    yield put(updateLocalStorage(localeStorageItems.apiName, nameAPI));
    yield put(updateLocalStorage(localeStorageItems.location, location));
    yield put(updateLocalStorage(localeStorageItems.countryCode, countryCode));
    const url: string =
      nameAPI === apiNames.openWeather
        ? yield getUrlApi({ type: nameAPI, lat, lon })
        : yield getUrlApi({ type: nameAPI, location });

    const { data }: TotalWeatherDataType = yield call(axios.get, url);
    const info: CurrentWeatherDataType[] = yield getDataFromOpenWeatherApi(
      nameAPI,
      data,
    );
    yield put(fetchWeatherSuccess(info));
    yield put(
      updateLocalStorage(localeStorageItems.weatherData, JSON.stringify(info)),
    );
  } catch (err) {
    yield put(fetchWeatherError(errors.weatherApiError));
  }
}
