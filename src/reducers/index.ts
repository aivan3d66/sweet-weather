import { combineReducers } from 'redux';

import locationReducer from './locationReducer';
import weatherReducer from './weatherReducer';

export const rootReducer = combineReducers({
  weatherState: weatherReducer,
  locationState: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
