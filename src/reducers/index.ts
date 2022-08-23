import { combineReducers } from 'redux';
import calendarReducer from './calendarRducer';

import locationReducer from './locationReducer';
import weatherReducer from './weatherReducer';

export const rootReducer = combineReducers({
  weatherState: weatherReducer,
  locationState: locationReducer,
  calendarState: calendarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
