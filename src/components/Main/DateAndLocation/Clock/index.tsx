import React, { useEffect, useState } from 'react';
import { getCurrentDate } from 'utils';

import { ClockContainer, ClockPeriod, ClockTime } from './style';

const Clock: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ClockContainer>
      <ClockTime>{date.toLocaleTimeString()}</ClockTime>
      <ClockPeriod>{getCurrentDate(date)}</ClockPeriod>
    </ClockContainer>
  );
};

export default React.memo(Clock);
