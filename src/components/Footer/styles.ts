import styled from 'styled-components';
import theme from '../../theme';

export const FooterContainer = styled.div`
  width: ${theme.width.full}%;
  height: ${theme.height.footer}px;
  padding: ${theme.paddings.p2}px;
  background-color: ${theme.colors.transparentBlue};

  @media (max-width: ${theme.viewPorts.tablet}px) {
    flex-direction: column;
    height: ${theme.height.base}px;
  }
`;
