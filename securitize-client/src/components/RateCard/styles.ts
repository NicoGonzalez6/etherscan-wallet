import styled from "styled-components";

const StyledCard = styled.div`
  height: 140px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.softPrimary};
  border-radius: ${({ theme }) => theme.radiusses.md};
  padding: ${({ theme }) => theme.spacing.sm};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 45%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 280px;
  }
`;

const ActionsContainer = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    cursor: pointer;

    &:hover {
      filter: brightness(70%);
    }
  }
`;

const RateContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export { StyledCard, ActionsContainer, RateContainer };
