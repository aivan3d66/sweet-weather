import { Dispatch } from 'redux';

import {
  fetchLocation,
  fetchLocationError,
  updateCoordinates,
} from '@/actions';
import { defaultValues } from '@/constant';

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
      dispatch(updateCoordinates(defaultValues.coordinates));
      dispatch(fetchLocation());
    },
  );
};
