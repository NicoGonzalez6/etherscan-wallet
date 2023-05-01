import styled from "styled-components";

const StyledModalOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyledModalContent = styled.form`
  width: 90%;
  min-height: 200px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radiusses.sm};
  padding: ${({ theme }) => theme.spacing.md};
  box-sizing: border-box;
  z-index: 1500;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 650px;
  }
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: ${({ theme }) => theme.colors.black};
    font-size: 25px;
    cursor: pointer;
  }
`;
const ModalBody = styled.div`
  min-height: 120px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
const ModalFooter = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
`;

export {
  StyledModalOverlay,
  StyledModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
};
