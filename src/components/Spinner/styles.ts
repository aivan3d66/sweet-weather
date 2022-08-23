import styled from 'styled-components';
import theme from '../../theme';

export const SpinnerContainer = styled.div`
  margin: ${theme.margins.m1}px auto;
  width: ${theme.width.icon}px;
  height: ${theme.width.icon}px;
  animation: ${theme.spin} 2s linear infinite;
`;
