const darkColors = {
  base: {
    black: '#0E0C15',
    white: '#FFFFFF',
  },
  accent: {
    primary: '#1C64F2',
    primaryLight: '#4785FF',
    strong: '#073CA4',
    strongDown: '#0E3176',
  },
  grayScale: {
    gray1: '#616D8D',
    gray2: '#313E62',
    gray3: '#222B44',
    gray4: '#121825',
    gray5: '#374151',
    gray6: '#9CA3AF',
  },
  other: {
    premiumGradient: ['#1C64F2', '#D41CF2'],
    critic: '#FE4242',
    green: '#1ABB34',
  }
};

const theme = {
  colors: darkColors,
  // spacer: {
  //   desktop: {
  //     'lvl1': '1.6rem',
  //     'lvl2': '2.0rem',
  //     'lvl3': '3.4rem',
  //     'lvl4': '4.2rem',
  //     'lvl5': '5.2rem',
  //     'lvl6': '6.4rem',
  //     'lvl7': '7.2rem',
  //     'lvl8': '8.6rem'
  //   },
  //   tablet: {
  //     'lvl1': '1.4rem',
  //     'lvl2': '1.8rem',
  //     'lvl3': '3.0rem',
  //     'lvl4': '3.8rem',
  //     'lvl5': '4.6rem',
  //     'lvl6': '5.6rem',
  //     'lvl7': '6.6rem',
  //     'lvl8': '7.4rem'
  //   },
  //   mobile: {
  //     'lvl1': '1.0rem',
  //     'lvl2': '1.4rem',
  //     'lvl3': '2.4rem',
  //     'lvl4': '3.0rem',
  //     'lvl5': '3.8rem',
  //     'lvl6': '4.4rem',
  //     'lvl7': '5.6rem',
  //     'lvl8': '6.4rem'
  //   },
  //   const: {
  //     'lvl1': '.8rem',
  //     'lvl2': '1.2rem',
  //     'lvl3': '1.4rem',
  //     'lvl4': '1.6rem',
  //   },
  // },
  // breakpoints: {
  //   table: '768px',
  //   mobile: '640px'
  // }
};

export const tableQuery = (css: string) => `
  @media screen and (max-width: 768px) { ${css} }
`;

export const mobileQuery = (css: string) => `
  @media screen and (max-width: 576px) { ${css} }
`;

export default theme;
