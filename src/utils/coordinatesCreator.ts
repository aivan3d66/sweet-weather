import { Dispatch } from 'redux';

import {
  fetchLocation,
  fetchLocationError,
  updateCoordinates,
} from '@/actions';

export const getCoordinates = (dispatch: Dispatch) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }: GeolocationPosition) => {
      const coordinates = {
        lat: coords.latitude,
        lon: coords.longitude,
      };
      dispatch(updateCoordinates(coordinates));
      dispatch(fetchLocation());
    },
    (error: GeolocationPositionError) => {
      dispatch(fetchLocationError(error.message));
    },
  );
};
