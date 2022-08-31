import { take } from 'redux-saga/effects';

import { LocalStorageUpdateActionType } from '@/actions/types';
import { localStorageItems } from '@/constant';
import { UPDATE_LOCAL_STORAGE } from '@/constant/actions';

export function* localeStorageWorker() {
  const action: LocalStorageUpdateActionType = yield take(UPDATE_LOCAL_STORAGE);
  let nameItem: string | null = null;
  switch (action.payload.item) {
    case localStorageItems.location:
      nameItem = localStorageItems.location;
      break;
    case localStorageItems.coordinates:
      nameItem = localStorageItems.coordinates;
      break;
    case localStorageItems.countryCode:
      nameItem = localStorageItems.countryCode;
      break;
    case localStorageItems.weatherData:
      nameItem = localStorageItems.weatherData;
      break;
    case localStorageItems.isAuth:
      nameItem = localStorageItems.isAuth;
      break;
    case localStorageItems.todoList:
      nameItem = localStorageItems.todoList;
      break;
    default:
      nameItem = localStorageItems.apiName;
      break;
  }

  yield localStorage.setItem(nameItem, action.payload.data);
}
