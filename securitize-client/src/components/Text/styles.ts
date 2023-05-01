import styled from "styled-components";
import { Itext } from "./interface";

const StyledText = styled.p<Itext>`
  font-size: ${({ tType }) => {
    switch (tType) {
      case "title":
        return "32px";
      case "subtitle":
        return "25px";
      case "text":
        return "16px";
      default:
        return;
    }
  }};
  font-weight: ${({ tbold }) => {
    return tbold ? "800" : "400";
  }};

  color: ${({ tColor, theme }) => {
    switch (tColor) {
      case "black":
        return theme.colors.black;
      case "white":
        return theme.colors.white;
      case "softWhite":
        return theme.colors.softWhite;
      case "primary":
        return theme.colors.primary;
      case "secondary":
        return theme.colors.secondary;
      case "error":
        return theme.colors.error;
      default:
        return;
    }
  }};
`;

export { StyledText };
