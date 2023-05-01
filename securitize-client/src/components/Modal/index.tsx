import { Button } from "../Button";
import { Text } from "../Text";
import { Imodal } from "./interface";
import {
  StyledModalOverlay,
  StyledModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal: React.FC<Imodal> = ({
  children,
  onCancel,
  onConfirm,
  title,
  isDisabled,
  isLoading,
}) => {
  return (
    <StyledModalOverlay>
      <StyledModalContent>
        <ModalHeader>
          <Text tColor="black" tType="text">
            {title}
          </Text>
          <AiOutlineCloseCircle onClick={onCancel} />
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={onCancel}>Cancel</Button>
          <Button
            isLoading={isLoading}
            isDisabled={isDisabled}
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </ModalFooter>
      </StyledModalContent>
    </StyledModalOverlay>
  );
};

export { Modal };
