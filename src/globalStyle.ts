import { createGlobalStyle } from 'styled-components';
import theme from 'theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${theme.font};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    background: linear-gradient(45deg, ${theme.colors.lightOrange}, ${theme.colors.extraLightBlue}) no-repeat center 100%;;

    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
  }
`;
