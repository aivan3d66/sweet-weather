import styled from 'styled-components';

import { classNames } from '../constant';

interface StyledAppProps {
  backgroundAndColor: { backgroundUrl: string; color: string };
}

export const StyledApp = styled.div<StyledAppProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 3;
  color: ${(props) => props.backgroundAndColor.color};

  &::after {
    z-index: -1;
    content: '';
    background-image: url(${(props) => props.backgroundAndColor.backgroundUrl});
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.9;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.backgroundAndColor.color};
    color: #fff;

    &:disabled {
      cursor: default;
      opacity: 0.8;
    }
  }

  input {
    background-color: transparent;
    border: none;
    color: ${(props) => props.backgroundAndColor.color};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${(props) => props.backgroundAndColor.color};
    }
  }

  input[type='time'] {
    color: #fff;
    font-size: 20px;
    border: 3px solid ${(props) => props.backgroundAndColor.color};
  }

  input[type='date']::-webkit-calendar-picker-indicator {
    width: 20px;
    height: 20px;
  }

  & .${classNames.cityIputContainer} {
    background-color: ${(props) => props.backgroundAndColor.color};
    color: #fff;
    border-radius: 10px;

    & input {
      color: #fff;
    }
  }

  svg {
    fill: ${(props) => props.backgroundAndColor.color};
  }

  .errorContainer {
    background-color: ${(props) => props.backgroundAndColor.color};
    color: #fff;
  }
`;
