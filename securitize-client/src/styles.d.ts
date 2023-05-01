import "styled-components";

declare module "styled-components" {
  export interface defaultTheme {
    colors: {
      primary: string;
      secondary: string;
      softPrimary: string;
      black: string;
      softWhite: string;
      white: string;
      border: string;
      error: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
      xlg: string;
      xxlg: string;
    };
    radiusses: {
      sm: string;
      md: string;
      lg: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
