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
};

export const tableQuery = (css: string) => `
  @media screen and (max-width: 768px) { ${css} }
`;

export const mobileQuery = (css: string) => `
  @media screen and (max-width: 576px) { ${css} }
`;

export default theme;
