import styled from 'styled-components';

import theme from '@/theme';

export const MainContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${theme.viewPorts.tablet}px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
