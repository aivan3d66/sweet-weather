import React, { useEffect, useState } from 'react';

import { text } from 'constant';
import { ClockContainer, ClockPeriod, ClockTime } from './style';

const Clock: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ClockContainer>
      <ClockTime>{date.toLocaleTimeString()}</ClockTime>
      <ClockPeriod>{date.getHours() > 12 ? text.pm : text.am}</ClockPeriod>
    </ClockContainer>
  );
};

export default React.memo(Clock);
