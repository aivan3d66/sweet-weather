import { put } from 'redux-saga/effects';
import { getIsAuth } from '../../actions';

export function* calendarWorker() {
  yield put(getIsAuth(true));
}
