import { all } from 'redux-saga/effects';

import {
  localeStorageWatcher,
  locationWatcher,
  weatherWatcher,
} from './watchers';

export default function* rootSaga() {
  yield all([locationWatcher(), weatherWatcher(), localeStorageWatcher()]);
}
