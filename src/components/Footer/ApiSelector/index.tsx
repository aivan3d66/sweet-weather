import React, { useId, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '@/hooks';
import { changeWeatherApi, fetchWeather } from '@/actions';
import { weatherStateSelector } from '@/selectors';
import { apiNames, text } from '@/constant';

import {
  SelectorButton,
  SelectorContainer,
  SelectorList,
  SelectorListItem,
  SelectorText,
} from './styled';

const ApiSelector: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { nameAPI } = useTypedSelector(weatherStateSelector);

  const changeView = () => {
    setIsOpen(!isOpen);
  };

  const changeMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    changeView();
    const value = e.currentTarget.textContent;
    if (value) {
      dispatch(changeWeatherApi(value));
    }
    dispatch(fetchWeather());
  };

  return (
    <SelectorContainer onClick={changeView}>
      <SelectorButton>
        <SelectorText>{nameAPI}</SelectorText>
        <SelectorText>{isOpen ? text.arrowTop : text.arrowBottom}</SelectorText>
      </SelectorButton>
      <SelectorList isOpen={isOpen}>
        {apiNames.selector.map((item) => {
          return (
            <SelectorListItem key={useId()} onClick={changeMode}>
              {item}
            </SelectorListItem>
          );
        })}
      </SelectorList>
    </SelectorContainer>
  );
};

export default React.memo(ApiSelector);
