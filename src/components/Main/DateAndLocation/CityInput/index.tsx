import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector, useDebounce } from '@/hooks';
import { fetchWeather, updateLocationName } from '@/actions';
import { locationStateSelector } from '@/selectors';

import { CityInputContainer, CountryCode, InputField } from './styles';

const CityInput: React.FC = () => {
  const { location, countryCode } = useTypedSelector(locationStateSelector);

  const [locationName, setLocationName] = useState<string>(location);

  const dispatch = useDispatch();

  const updateLocation = (value: string) => {
    if (value) {
      dispatch(updateLocationName(value));
    } else {
      setLocationName(location);
    }
    dispatch(fetchWeather());
  };

  const debounceHandleChangeInputValue = useDebounce(updateLocation, 2000);

  const handleChangeInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const refactorVal = value.charAt(0).toUpperCase() + value.slice(1);
      setLocationName(refactorVal);
      debounceHandleChangeInputValue(refactorVal);
    },
    [debounceHandleChangeInputValue],
  );

  useEffect(() => {
    if (location) {
      setLocationName(location);
    }
  }, [location]);

  return (
    <CityInputContainer>
      <InputField
        type="text"
        value={locationName}
        onChange={handleChangeInputValue}
        placeholder="write the city name here..."
      />
      {countryCode && <CountryCode>{countryCode}</CountryCode>}
    </CityInputContainer>
  );
};

export default React.memo(CityInput);
