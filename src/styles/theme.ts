// eslint-disable-next-line import/no-anonymous-default-export
export default {
  rem: (px: number) => {
    return px / 16 + 'rem';
  },
  colors: {
    white: '#fff',
    black: '#000',
    lightBlue: '#077af5',
    blue: '#273FAD',
    green: '#3FAD27',
    red: '#ad273f',
    background: '#EBEBEB',
    shapes: '#FFFFFF',
    textTitle: '#3D3D4D',
    text: '#1C1C29',
    textLight: '#A09CB1',
  },
  breakpoints: {
    largeMobile: '@media (min-width: 480px)',
    tablet: '@media (min-width: 768px)',
    laptop: '@media (min-width: 1024px)',
    desktop: '@media (min-width: 1280px)',
    wide: '@media (min-width: 1440px)',
  },
};
