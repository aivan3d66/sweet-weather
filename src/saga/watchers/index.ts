import { takeEvery } from 'redux-saga/effects';
import {
  calendarWorkers,
  localeStorageWorker,
  locationWorker,
  weatherWorker,
} from 'saga/workers';
import {
  FETCH_LOCATION,
  FETCH_WEATHER,
  GET_TODOS,
  UPDATE_LOCAL_STORAGE,
} from '../../constant/actions';

export function* locationWatcher() {
  yield takeEvery(FETCH_LOCATION, locationWorker);
}

export function* weatherWatcher() {
  yield takeEvery(FETCH_WEATHER, weatherWorker);
}

export function* localeStorageWatcher() {
  yield takeEvery(UPDATE_LOCAL_STORAGE, localeStorageWorker);
}

export function* calendarWatcher() {
  yield takeEvery(GET_TODOS, calendarWorkers);
}
