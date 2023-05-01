import { defaultTheme } from "styled-components";

const theme: defaultTheme = {
  colors: {
    primary: "#313A58",
    secondary: "#53B9EA",
    softPrimary: "#828CAE",
    softWhite: "#E8F0FE",
    white: "#fff",
    black: "#000",
    border: "#474e63",
    error: "#ED5353",
  },
  spacing: {
    sm: "8px",
    md: "12px",
    lg: "15px",
    xlg: "20px",
    xxlg: "25px",
  },
  radiusses: {
    sm: "6px",
    md: "10px",
    lg: "12px",
  },
  breakpoints: {
    sm: "768px",
    md: "968px",
    lg: "1256px",
  },
};

export { theme };
