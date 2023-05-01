import styled from "styled-components";
import { IbuttonSection } from "./interface";

const StyledWalletDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  box-sizing: border-box;
`;

const SectionContainer = styled.div<IbuttonSection>`
  display: flex;
  flex-direction: ${({ row }) => {
    return row ? "row" : "column";
  }};
  gap: ${({ theme }) => theme.spacing.sm};
`;

export { StyledWalletDetails, SectionContainer };
