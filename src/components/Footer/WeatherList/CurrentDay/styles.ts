import styled from 'styled-components';

import theme from '@/theme';

export const CurrentDayContainer = styled.div`
  margin: auto ${theme.margins.m4}px;
`;

export const CurrentDayWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin: auto;

  @media (min-width: ${theme.viewPorts.mobile}px) {
    width: ${theme.width.exm}px;
    margin: 0 auto ${theme.margins.m2}px auto;
  }
  @media (min-width: ${theme.viewPorts.desktop}px) {
    width: ${theme.width.base}px;
  }
`;

export const CurrentDayTitle = styled.p`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

export const CurrentDayText = styled.span`
  font-size: ${theme.textStyle.lg.fontSize}px;
`;

export const CurrentDayTemp = styled.span`
  font-size: ${theme.textStyle.xxl.fontSize}px;
`;

export const CurrentDayIcon = styled.img`
  width: 80px;
  border-radius: ${theme.radius.roundedFull}%;

  @media (min-width: ${theme.viewPorts.desktop}px) {
    width: ${theme.width.eexm}px;
  }
`;
