import styled from 'styled-components';

import { classNames } from '../constant';
import theme from '../theme';

interface StyledAppProps {
  colourScheme: { backgroundUrl: string; color: string; bgColor: string };
}

export const AppWrapper = styled.div<StyledAppProps>`
  position: relative;
  width: ${theme.width.full}%;
  background-image: url(${({ colourScheme }) => colourScheme.backgroundUrl});
  background-size: cover;
  background-color: ${({ colourScheme }) => colourScheme.bgColor};
  &::before {
    position: absolute;
    z-index: 0;
    content: '';
    width: ${theme.width.full}%;
    height: ${theme.height.full}%;
    background-color: black;
    opacity: 0.5;
  }
`;

export const AppContainer = styled.div<StyledAppProps>`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: ${theme.viewPorts.mobile}px;
  height: ${theme.height.lg}px;
  margin: ${theme.margins.m4}px auto 0 auto;
  color: ${({ colourScheme }) => colourScheme.color};
  ${theme.boxShadows[0]};

  @media (min-width: ${theme.viewPorts.tablet}px) {
    width: ${theme.viewPorts.tablet}px;
  }

  @media (min-width: ${theme.viewPorts.desktop}px) {
    width: ${theme.viewPorts.desktop}px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-image: url(${({ colourScheme }) => colourScheme.backgroundUrl});
    background-size: cover;
    opacity: 0.9;
  }

  button {
    background-color: ${({ colourScheme }) => colourScheme.color};
  }

  input {
    color: ${({ colourScheme }) => colourScheme.color};
    background-color: transparent;
    border: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ colourScheme }) => colourScheme.color};
    }
  }
  & .${classNames.cityInputContainer} {
    color: ${({ colourScheme }) => colourScheme.color};

    input {
      color: ${({ colourScheme }) => colourScheme.color};
    }
  }

  svg {
    fill: ${({ colourScheme }) => colourScheme.color};
  }

  .errorContainer {
    color: ${theme.colors.white};
    background-color: ${({ colourScheme }) => colourScheme.color};
  }
`;
