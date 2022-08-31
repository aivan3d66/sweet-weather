import React from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import { HomeContainer, HomeWrapper } from '@/pages/Home/styles';
import { useTypedSelector } from '@/hooks';
import { weatherDataSelector } from '@/selectors';
import { getBackgroundUrlAndColor } from '@/utils';

const Home: React.FC = () => {
  const weatherData = useTypedSelector(weatherDataSelector);

  const colourScheme = weatherData[0]
    ? getBackgroundUrlAndColor(weatherData[0].code)
    : getBackgroundUrlAndColor(800);

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
