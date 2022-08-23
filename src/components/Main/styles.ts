import styled from 'styled-components';
import theme from '../../theme';

export const MainContainer = styled.div`
  padding: ${theme.paddings.p5}px;

  @media (max-width: ${theme.viewPorts.tablet}px) {
    padding: ${theme.paddings.p1}px;
  }
`;
