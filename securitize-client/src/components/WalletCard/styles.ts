import styled, { css } from "styled-components";
import { IwalletCard } from "./interface";

const StyledWalledCard = styled.div<IwalletCard>`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 14px;
  }

  svg {
    color: ${({ theme }) => theme.colors.softPrimary};
    font-size: 18px;
  }

  ${({ isFavorite }) => {
    if (isFavorite) {
      return css`
        svg {
          color: ${({ theme }) => theme.colors.secondary};
        }
      `;
    }
  }}

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    p {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export { StyledWalledCard };
