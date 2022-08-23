import { put, select } from 'redux-saga/effects';
import ApiCalendar from 'react-google-calendar-api';
import { localeStorageItems } from '../../constant';

import { getIsAuth, getTodos, updateLocalStorage } from '../../actions';
import { CalendarStateType } from '../../reducers/types';
import { calendarStateSelector } from '../../selectors';

const API_KEY = 'AIzaSyCKhnSW80Es0e2YkIa3QQJHXHzNjz_Qmaw';
const CLIENT_ID =
  '937990846295-3ef705ivdaocht64itnsl84pnla4ao4l.apps.googleusercontent.com';

const config = {
  clientId: CLIENT_ID,
  apiKey: API_KEY,
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};
const apiCalendar = new ApiCalendar(config);

export function* calendarWorkers() {
  const { isAuth }: CalendarStateType = yield select(calendarStateSelector);
  try {
    apiCalendar.handleAuthClick();
    yield put(getIsAuth(true));
    yield put(
      updateLocalStorage(
        localeStorageItems.isAuth,
        JSON.stringify({ isAuth, auth: true }),
      ),
    );
    if (apiCalendar.sign) {
      const todos = apiCalendar
        .listUpcomingEvents(10)
        .then(({ result }: any) => {
          return result;
        });
      yield put(getTodos(todos));
    }
  } catch (err) {
    console.log(err);
  }
}
