import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  changeWeatherApi,
  fetchLocation,
  fetchLocationError,
  fetchWeatherSuccess,
  updateCoordinates,
  updateCountyCode,
  updateLocationName,
} from '@/actions';
import { defaultValues, localStorageItems } from '@/constant';
import { useTypedSelector } from '@/hooks';
import { weatherDataSelector } from '@/selectors';
import { getBackgroundUrlAndColor } from '@/utils';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import GlobalStyle from '@/globalStyle';
import { AppContainer, AppWrapper } from './styles';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const weatherdata = useTypedSelector(weatherDataSelector);

  const colourScheme = weatherdata[0]
    ? getBackgroundUrlAndColor(weatherdata[0].code)
    : getBackgroundUrlAndColor(800);

  const getCoordinates = () => {
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
        dispatch(updateCoordinates(defaultValues.location));
        dispatch(fetchLocation());
      },
    );
  };

  useEffect(() => {
    const coordinates = localStorage.getItem(localStorageItems.coordinates);
    const location = localStorage.getItem(localStorageItems.location);
    const country = localStorage.getItem(localStorageItems.countryCode);
    const weatherData = localStorage.getItem(localStorageItems.weatherData);
    const apiName = localStorage.getItem(localStorageItems.apiName);
    if (!coordinates) {
      getCoordinates();
    } else {
      dispatch(updateCoordinates(JSON.parse(coordinates)));
    }
    if (location) {
      dispatch(updateLocationName(location));
    }
    if (country) {
      dispatch(updateCountyCode(country));
    }
    if (weatherData) {
      dispatch(fetchWeatherSuccess(JSON.parse(weatherData)));
    }
    if (apiName) {
      dispatch(changeWeatherApi(apiName));
    }
  }, []);

  return (
    <AppWrapper colourScheme={colourScheme}>
      <AppContainer colourScheme={colourScheme}>
        <GlobalStyle />
        <ErrorBoundary>
          <Main />
          <Footer />
        </ErrorBoundary>
      </AppContainer>
    </AppWrapper>
  );
};

export default React.memo(App);
