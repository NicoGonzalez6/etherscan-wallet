import styled from "styled-components";
import { Ispinner } from "./interface";

export const StyledSpinner = styled.div<Ispinner>`
  border: 3px solid #fff;
  border-top: 3px ${({ theme }) => theme.colors.primary} solid;
  border-radius: 50%;
  height: ${({ sSize }) => {
    switch (sSize) {
      case "md":
        return "15px";
      case "lg":
        return "30px";
    }
  }};
  width: ${({ sSize }) => {
    switch (sSize) {
      case "md":
        return "15px";
      case "lg":
        return "30px";
    }
  }};
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
