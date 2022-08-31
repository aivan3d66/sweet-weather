import { CombinedState } from 'redux';

import {
  CalendarStateType,
  LocationStateType,
  WeatherStateType,
} from '@/reducers/types';

interface GlobalState {
  weatherState: WeatherStateType;
  locationState: LocationStateType;
  calendarState: CalendarStateType;
}

export const weatherDataSelector = (state: CombinedState<GlobalState>) =>
  state.weatherState.weatherData;

export const weatherStateSelector = (state: CombinedState<GlobalState>) =>
  state.weatherState;

export const locationStateSelector = (state: CombinedState<GlobalState>) =>
  state.locationState;

export const calendarStateSelector = (state: CombinedState<GlobalState>) =>
  state.calendarState;
