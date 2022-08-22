import { LocationStateType, WeatherStateType } from 'reducers/types';
import { CombinedState } from 'redux';

interface GlobalState {
  weatherState: WeatherStateType;
  locationState: LocationStateType;
}

export const weatherDataSelector = (state: CombinedState<GlobalState>) =>
  state.weatherState.weatherData;

export const weatherStateSelector = (state: CombinedState<GlobalState>) =>
  state.weatherState;

export const locationStateSelector = (state: CombinedState<GlobalState>) =>
  state.locationState;
