import { all } from 'redux-saga/effects';

import {
  calendarWatcher,
  localeStorageWatcher,
  locationWatcher,
  weatherWatcher,
} from './watchers';

export default function* rootSaga() {
  yield all([
    locationWatcher(),
    weatherWatcher(),
    localeStorageWatcher(),
    calendarWatcher(),
  ]);
}
