import { FetchActionCreatorTypes } from 'actions/types';
import { apiNames } from 'constant';
import {
  CHANGE_WEATHER_API,
  FETCH_WEATHER,
  FETCH_WEATHER_ERROR,
  FETCH_WEATHER_SUCCESS,
} from 'constant/actions';
import { WeatherStateType } from './types';

const initialState: WeatherStateType = {
  nameAPI: apiNames.weatherbit,
  weatherData: [],
  weatherLoading: false,
  weatherStateError: null,
};

const weatherReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state = initialState,
  action: FetchActionCreatorTypes,
): WeatherStateType => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weatherLoading: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        weatherLoading: false,
        weatherData: action.payload,
      };
    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        weatherLoading: false,
        weatherStateError: action.payload,
      };
    case CHANGE_WEATHER_API:
      return {
        ...state,
        nameAPI: action.payload,
      };

    default:
      return state;
  }
};

export default weatherReducer;
