import React, { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTypedSelector } from '@/hooks';
import { locationStateSelector, weatherStateSelector } from '@/selectors';
import { Spinner } from '@/components/Spinner';

import ErrorComponent from '@/components/ErrorComponent';
import CurrentDay from './CurrentDay';
import WeatherListItem from './WeatherListItem';
import { WeatherListContainer, WeatherListWrapper } from './styles';

const WeatherList: React.FC = () => {
  const { weatherData, weatherLoading, weatherStateError } =
    useTypedSelector(weatherStateSelector);
  const { locationStateError } = useTypedSelector(locationStateSelector);

  const renderWeatherListItems = useMemo(
    () =>
      weatherData &&
      weatherData
        .filter((_, index) => index)
        .map(({ date, weatherIcon, weatherMain, temp, wind, code }) => (
          <WeatherListItem
            key={uuidv4()}
            temp={temp}
            date={date}
            wind={wind}
            code={code}
            weatherIcon={weatherIcon}
            weatherMain={weatherMain}
          />
        )),
    [weatherData],
  );

  if (weatherLoading) {
    return <Spinner />;
  }
  if (weatherStateError) {
    return <ErrorComponent errorMessage={weatherStateError} />;
  }
  if (locationStateError) {
    return null;
  }

  return (
    <WeatherListContainer>
      <CurrentDay />
      <WeatherListWrapper>{renderWeatherListItems}</WeatherListWrapper>
    </WeatherListContainer>
  );
};

export default React.memo(WeatherList);
