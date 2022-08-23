import styled from 'styled-components';
import theme from '../../../../theme';

export const WeatherListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeatherListItemIcon = styled.img`
  width: ${theme.width.icon}px;
`;

export const WeatherListItemTemp = styled.p`
  font-size: ${theme.textStyle.lg.fontSize}px;
  font-weight: bold;
`;

export const WeatherListItemWeekday = styled.p`
  width: 40px;
  padding: ${theme.paddings.p02}px;
  margin: 0 0 ${theme.margins.m1}px 0;
  font-size: ${theme.textStyle.sm.fontSize}px;
  text-align: center;
  border-radius: ${theme.radius.roundedSm}px;
  background-color: ${theme.colors.lightBlue};
`;

export const WeatherListItemWind = styled.p`
  padding: ${theme.paddings.p02}px;
  font-weight: bold;
  text-align: center;
  font-size: ${theme.textStyle.base.fontSize}px;
`;
