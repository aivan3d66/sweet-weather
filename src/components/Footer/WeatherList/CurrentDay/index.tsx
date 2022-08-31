import React from 'react';

import { useTypedSelector } from '@/hooks';
import { text } from '@/constant';
import { getUrlIcon } from '@/utils';
import { weatherStateSelector } from '@/selectors';

import {
  CurrentDayContainer,
  CurrentDayIcon,
  CurrentDayTemp,
  CurrentDayText,
  CurrentDayTitle,
  CurrentDayWrapper,
} from './styles';

const CurrentDay: React.FC = () => {
  const { weatherData, nameAPI } = useTypedSelector(weatherStateSelector);

  return (
    <CurrentDayContainer>
      {weatherData[0] && (
        <CurrentDayWrapper>
          <CurrentDayIcon
            src={getUrlIcon(nameAPI, weatherData[0].weatherIcon)}
            alt={weatherData[0].weatherMain}
            title={weatherData[0].weatherMain}
          />
          <CurrentDayTitle>
            <CurrentDayText>{text.today}</CurrentDayText>
            <CurrentDayTemp>
              {weatherData[0].temp}
              {text.degree}
            </CurrentDayTemp>
          </CurrentDayTitle>
        </CurrentDayWrapper>
      )}
    </CurrentDayContainer>
  );
};

export default React.memo(CurrentDay);
