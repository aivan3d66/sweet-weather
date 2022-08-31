import React from 'react';

import { useTypedSelector } from '@/hooks';
import { locationStateSelector } from '@/selectors';
import { Spinner } from '@/components/Spinner';

import ErrorComponent from '@/components/ErrorComponent';
import Clock from './Clock';
import CityInput from './CityInput';
import { ClockWrapper, MainContentContainer } from './styles';

const MainContent: React.FC = () => {
  const { locationStateError, locationLoading } = useTypedSelector(
    locationStateSelector,
  );

  if (locationLoading) {
    return <Spinner />;
  }

  return (
    <MainContentContainer>
      <ClockWrapper>
        {locationStateError && (
          <ErrorComponent errorMessage={locationStateError} />
        )}
        <Clock />
      </ClockWrapper>
      <CityInput />
    </MainContentContainer>
  );
};

export default React.memo(MainContent);
