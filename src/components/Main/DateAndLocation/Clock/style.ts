import styled from 'styled-components';
import theme from '../../../../theme';

export const ClockContainer = styled.div`
  display: flex;
  align-items: baseline;
  font-weight: bold;

  @media (max-width: ${theme.viewPorts.tablet}px) {
    margin: ${theme.margins.m2}px 0;
  }
`;

export const ClockTime = styled.div`
  font-size: ${theme.textStyle.xx2lg.fontSize}px;

  @media (max-width: ${theme.viewPorts.tablet}px) {
    font-size: ${theme.textStyle.xxl.fontSize}px;
  }
`;

export const ClockPeriod = styled.div`
  margin: 0 ${theme.margins.m1}px;

  @media (min-width: ${theme.viewPorts.mobile}px) {
    font-size: ${theme.textStyle.lg.fontSize}px;
  }
  @media (min-width: ${theme.viewPorts.tablet}px) {
    font-size: ${theme.textStyle.xxl.fontSize}px;
  }
`;
