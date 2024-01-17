import {PropsWithChildren} from "react";
import {ThemeProvider} from "styled-components";
import theme from "../../common/theme.ts";

const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

export default AppThemeProvider;
