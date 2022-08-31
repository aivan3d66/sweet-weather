import React from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import { HomeContainer, HomeWrapper } from '@/pages/Home/styles';
import { useTypedSelector } from '@/hooks';
import { weatherDataSelector } from '@/selectors';
import { colorSchemeCreator } from '@/utils/colorSchemeCreator';

const Home: React.FC = () => {
  const weatherData = useTypedSelector(weatherDataSelector);
  const colourScheme = colorSchemeCreator(weatherData);

  return (
    <HomeWrapper colourScheme={colourScheme}>
      <HomeContainer colourScheme={colourScheme}>
        <ErrorBoundary>
          <Main />
          <Footer />
        </ErrorBoundary>
      </HomeContainer>
    </HomeWrapper>
  );
};

export default React.memo(Home);
