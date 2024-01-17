import {createGlobalStyle} from "styled-components";
import theme from "./theme.ts";

const GlobalStyle = createGlobalStyle<{ $theme: typeof theme }>`
  :root {
    font-family: "IBMPlexSans", Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props) => props.$theme.colors.base.white};
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background: none;
    outline: none;
    border: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: ${(props) => props.$theme.colors.base.black};
    height: 100svh;
  }
  
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  button {
    cursor: pointer;
  }
  
  .lock-scroll {
    overflow: hidden;
  }
  
  @font-face {
    font-family: "IBMPlexSans";
    font-weight: 700;
    src: url("/fonts/IBMPlexSans-Bold.ttf");
  }
  @font-face {
    font-family: "IBMPlexSans";
    font-weight: 600;
    src: url("/fonts/IBMPlexSans-SemiBold.ttf");
  }
  @font-face {
    font-family: "IBMPlexSans";
    font-weight: 500;
    src: url("/fonts/IBMPlexSans-Medium.ttf");
  }
  @font-face {
    font-family: "IBMPlexSans";
    font-weight: 400;
    src: url("/fonts/IBMPlexSans-Regular.ttf");
  }
`;

export default GlobalStyle;
