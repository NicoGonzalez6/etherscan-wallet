import styled from "styled-components";
import { IsectionLayout } from "./interface";

const StyledSection = styled.div<IsectionLayout>`
  min-height: 280px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radiusses.sm};
  padding: ${({ theme }) => theme.spacing.xxlg};
  box-sizing: border-box;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: ${({ fluid }) => {
      return fluid ? "100%" : "48%";
    }};
  }
`;

const TitleSection = styled.div`
  padding-bottom: 25px;
`;

const SpinnerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;

export { StyledSection, TitleSection, SpinnerSection };
