import { keyframes } from 'styled-components';

const font = 'Gill Sans, sans-serif';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const orange = '#ff9900';
const lightPink = '#ff9900';
const black = '#000000';
const lightBlack = '#222222';
const grey = '#9b9b9b';
const lightGrey = '#E6E6FFFF';
const darkGrey = '#555555';
const lightOrange = '#EECFBA';
const extraLightBlue = '#C5DDE8';
const transparentBlue = '#0020609F';
const lightBlue = '#3939ac';
const white = '#ffffff';

const boxShadows = ['box-shadow: 0px 4px 24px -8px rgba(0,0,0,0.75)'];

const viewPorts = {
  mobile: 375,
  tablet: 678,
  desktop: 1120,
};

const height = {
  sm: 200,
  footer: 300,
  base: 360,
  mid: 400,
  lg: 700,
  full: 100,
};

const width = {
  eexm: 120,
  exm: 160,
  sm: 200,
  base: 240,
  mid: 400,
  lg: 700,
  full: 100,
  icon: 50,
};

const paddings = {
  p02: 2,
  p05: 5,
  p1: 10,
  p2: 20,
  p3: 30,
  p4: 40,
  p5: 50,
};

const margins = {
  m1: 10,
  m2: 20,
  m3: 30,
  m4: 40,
};

const textStyle = {
  sm: {
    fontSize: 14,
  },
  base: {
    fontSize: 16,
  },
  lg: {
    fontSize: 22,
  },
  xl: {
    fontSize: 24,
  },
  xxl: {
    fontSize: 40,
  },
  xx2lg: {
    fontSize: 70,
  },
};

const radius = {
  roundedSm: 10,
  roundedMd: 20,
  roundedFull: 100,
};

export default {
  font,
  viewPorts,
  height,
  width,
  textStyle,
  radius,
  colors: {
    orange,
    lightOrange,
    lightPink,
    black,
    lightBlack,
    grey,
    lightGrey,
    darkGrey,
    extraLightBlue,
    white,
    lightBlue,
    transparentBlue,
  },
  spin,
  boxShadows,
  paddings,
  margins,
};
