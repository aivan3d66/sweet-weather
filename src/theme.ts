// Fonts
const font = 'Gill Sans, sans-serif'

// Color palette
const black = '#000000'
const darkGray = '#00000029'
const white = '#ffffff'
const error = '#E25837'
const pink = '#9A40D3'
const yellow = '#F4E048'
const green = '#37E29A'

const boxShadows = [
  'box-shadow: 4px 4px 8px #00000029',
]

const size = {
  xs: 550,
  small: 768,
  med: 992,
  large: 1200,
  full: 100,
}

export default {
  size,
  boxShadows,
  font,
  opacity: {
    opacity0: 0,
    opacity50: 0.5,
    opacity100: 1,
  },
  height: {
    full: 100,
  },
  radius: {
    roundedSm: 0.5,  // 8px
    roundedMd: 1.5,  // 24px
    roundedFull: 9999,
  },
  paddings: {
    p025: 0.125, // 2px
    p5: 1.25, // 20px
    p7: 1.75, // 30px
    p10: 2.5, // 40px
  },
  margins: {
    m2: 0.625, // 10px
    m5: 1.25, // 20px
    m7: 1.75, // 30px
    m10: 2.5, // 40px
  },
  textStyle: {
    sm: {
      fontSize: 1, // 16px
      lineHeight: 1.5,
    },
    base: {
      fontSize: 1.25, // 20px
      lineHeight: 1.75,
    },
    lg: {
      fontSize: 1.875, // 30px
      lineHeight: 2.25,
    },
    xl: {
      fontSize: 2.25, // 36px
      lineHeight: 2.5,
    },
    xl2: {
      fontSize: 3, // 48px
      lineHeight: 1,
    },
  },
  colors: {
    black,
    darkGray,
    white,
    error,
    green,
    yellow,
    pink,
  },
}
