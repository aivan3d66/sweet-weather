import UserCalendar from 'components/UserCalendar';
import React from 'react';

import MainContent from './DateAndLocation';
import { MainContainer } from './styles';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainContent />
      <UserCalendar />
    </MainContainer>
  );
};

export default React.memo(Main);
