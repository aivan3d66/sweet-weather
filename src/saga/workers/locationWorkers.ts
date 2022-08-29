import axios from 'axios';
import { select, put, call } from 'redux-saga/effects';

import {
  fetchLocationError,
  fetchLocationSuccess,
  fetchWeather,
  updateCoordinates,
  updateCountyCode,
  updateLocalStorage,
} from 'actions';
import { RootState } from 'reducers';
import { locationStateSelector } from 'selectors';
import { errors, apiNames, localStorageItems } from 'constant';
import { getUrlApi } from 'utils';
import { LocationStateType } from 'reducers/types';
import {
  CoordinatesType,
  NavigatorFetchDataType,
  OpenWeatherFetchGeocodeType,
} from './types';

export function* getLocationCoordinates() {
  try {
    const { location }: LocationStateType = yield select(locationStateSelector);

    const url: string = yield getUrlApi({
      type: apiNames.openWeatherGeocode,
      location,
    });

    const {
      data: [{ lat, country, lon }],
    }: OpenWeatherFetchGeocodeType = yield call(axios.get, url);

    yield put(updateCountyCode(country));
    yield put(updateLocalStorage(localStorageItems.countryCode, country));
    yield put(
      updateLocalStorage(
        localStorageItems.coordinates,
        JSON.stringify({ lat, lon }),
      ),
    );
    yield put(updateCoordinates({ lat, lon }));
  } catch (err) {
    yield put(fetchLocationError(errors.geocodeApiError));
  }
}

export function* locationWorker() {
  try {
    const { lat, lon }: CoordinatesType = yield select(
      (state: RootState) => state.locationState.coordinates,
    );

    const urlApiLocation: string = yield getUrlApi({
      type: apiNames.locationiq,
      lat,
      lon,
    });

    const {
      data: {
        address: { town },
      },
    }: NavigatorFetchDataType = yield call(axios.get, urlApiLocation);
    yield put(
      updateLocalStorage(
        localStorageItems.coordinates,
        { lat, lon }.toString(),
      ),
    );
    yield put(fetchLocationSuccess(town));
    yield put(updateLocalStorage(localStorageItems.location, town));
    yield put(fetchWeather());
  } catch (error) {
    yield put(fetchLocationError(errors.locationIQApiError));
  }
}
