import React from 'react';

import { useTypedSelector } from '@/hooks';
import { getUrlIcon } from '@/utils';
import { text } from '@/constant';
import { weatherStateSelector } from '@/selectors';

import {
  WeatherListItemContainer,
  WeatherListItemIcon,
  WeatherListItemTemp,
  WeatherListItemWeekday,
  WeatherListItemWind,
} from './styles';
import { CurrentWeatherDataType } from './types';

const { degree, mc } = text;

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
      <WeatherListItemWind>{`${wind} ${mc}`}</WeatherListItemWind>
      <WeatherListItemIcon
        src={getUrlIcon(nameAPI, weatherIcon)}
        alt={weatherMain}
        title={weatherMain}
      />
      <WeatherListItemTemp>{`${temp}${degree}`}</WeatherListItemTemp>
    </WeatherListItemContainer>
  );
};

export default React.memo(WeatherListItem);
