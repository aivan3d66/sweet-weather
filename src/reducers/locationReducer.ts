import { LocationActionCreatorTypes } from '@/actions/types';
import {
  FETCH_LOCATION,
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_SUCCESS,
  UPDATE_COORDINATES,
  UPDATE_COUNTRY_CODE,
  UPDATE_LOCATION,
} from '@/constant/actions';
import { LocationStateType } from './types';

const initialState: LocationStateType = {
  location: '',
  countryCode: '',
  coordinates: {
    lat: 0,
    lon: 0,
  },
  locationLoading: false,
  locationStateError: null,
};

const locationReducer = (
  state = initialState,
  action: LocationActionCreatorTypes,
): LocationStateType => {
  switch (action.type) {
    case FETCH_LOCATION:
      return {
        ...state,
        locationLoading: true,
      };
    case FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        locationLoading: false,
        location: action.payload,
      };
    case FETCH_LOCATION_ERROR:
      return {
        ...state,
        locationLoading: false,
        locationStateError: action.payload,
      };
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case UPDATE_COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      };
    case UPDATE_COUNTRY_CODE:
      return {
        ...state,
        countryCode: action.payload,
      };
    default:
      return state;
  }
};

export default locationReducer;
