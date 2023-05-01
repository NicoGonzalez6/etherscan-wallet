import styled from "styled-components";
import { Iinput } from "./interface";

const StyledInput = styled.div<Iinput>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ transparent }) => {
    return transparent ? "transparent" : "#3c476a";
  }};
  border-radius: ${({ theme }) => theme.radiusses.sm};
  min-height: 70px;
  width: 100%;
  box-sizing: border-box;

  input {
    background-color: ${({ theme }) => theme.colors.softWhite};
    outline: none;
    border: none;
    border-radius: ${({ theme }) => theme.radiusses.sm};
    padding: ${({ theme }) => theme.spacing.sm};
    font-family: "Montserrat", sans-serif;
  }
`;

export { StyledInput };
