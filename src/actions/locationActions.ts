import {
  FETCH_LOCATION,
  FETCH_LOCATION_ERROR,
  FETCH_LOCATION_SUCCESS,
  UPDATE_COORDINATES,
  UPDATE_COUNTRY_CODE,
  UPDATE_LOCATION,
} from '../constants/actions'

import { CoordinatesType } from './types'

export const fetchLocation = () => ({
  type: FETCH_LOCATION,
})
export const fetchLocationSuccess = (location: string) => ({
  type: FETCH_LOCATION_SUCCESS,
  payload: { location },
})
export const fetchLocationError = (errorMessage: string) => ({
  type: FETCH_LOCATION_ERROR,
  payload: { errorMessage },
})
export const updateLocationName = (cityName: string) => ({
  type: UPDATE_LOCATION,
  payload: { cityName },
})
export const updateCountyCode = (countryCode: string) => ({
  type: UPDATE_COUNTRY_CODE,
  payload: { countryCode },
})
export const updateCoordinates = (coordinates: CoordinatesType) => ({
  type: UPDATE_COORDINATES,
  payload: { coordinates },
})
