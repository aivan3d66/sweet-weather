import styled from 'styled-components';
import theme from '../../../theme';

export const WeatherListContainer = styled.div`
  display: flex;
  width: ${theme.width.full}%;
  padding: 0;

  @media (max-width: ${theme.viewPorts.tablet}px) {
    flex-direction: column;
  }
`;

export const WeatherListWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  width: ${theme.width.full}%;

  @media (max-width: ${theme.viewPorts.tablet}px) {
    flex-wrap: wrap;
  }
`;
