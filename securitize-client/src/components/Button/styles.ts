import styled, { css } from "styled-components";
import { Ibutton } from "./interface";

const StyledButton = styled.div<Ibutton>`
  width: 160px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.softPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radiusses.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  box-sizing: border-box;
  cursor: pointer;
  padding-top: 10px;
  transition: 0.2s ease-out;

  &:hover {
    filter: brightness(90%);
  }

  ${({ isDisabled }) => {
    if (isDisabled) {
      return css`
        background-color: ${({ theme }) => theme.colors.softPrimary};
        filter: brightness(70%);
        &:hover {
          filter: brightness(70%);
        }
      `;
    }
  }}
`;

export { StyledButton };
