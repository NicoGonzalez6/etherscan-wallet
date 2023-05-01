import styled from "styled-components";

const StyledLayout = styled.main`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.spacing.xxlg};
`;

export { StyledLayout };
