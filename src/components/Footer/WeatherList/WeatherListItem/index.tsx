import React from 'react';

import { useTypedSelector } from 'hooks';
import { getUrlIcon } from 'utils';
import { text } from 'constant';
import { weatherStateSelector } from 'selectors';

import {
  WeatherListItemContainer,
  WeatherListItemIcon,
  WeatherListItemTemp,
  WeatherListItemWeekday,
  WeatherListItemWind,
} from './styles';
import { CurrentWeatherDataType } from './types';

const WeatherListItem: React.FC<CurrentWeatherDataType> = ({
  date,
  temp,
  weatherIcon,
  weatherMain,
  wind,
}) => {
  const { nameAPI } = useTypedSelector(weatherStateSelector);

  return (
    <WeatherListItemContainer>
      <WeatherListItemWeekday>{[...date.split(' ')][0]}</WeatherListItemWeekday>
      <WeatherListItemWind>{`${wind} ${text.mc}`}</WeatherListItemWind>
      <WeatherListItemIcon
        src={getUrlIcon(nameAPI, weatherIcon)}
        alt={weatherMain}
        title={weatherMain}
      />
      <WeatherListItemTemp>{`${temp}${text.degree}`}</WeatherListItemTemp>
    </WeatherListItemContainer>
  );
};

export default React.memo(WeatherListItem);
