import React from "react";
import { Ibutton } from "./interface";
import { StyledButton } from "./styles";
import { Text } from "../Text";
import { Spinner } from "../Spinner";

const Button: React.FC<Ibutton> = ({
  children,
  isDisabled = false,
  isLoading,
  onClick,
}) => {
  const disableHandler = () => {
    if (isDisabled || isLoading) {
      return;
    }
    return onClick();
  };

  return (
    <StyledButton isDisabled={isDisabled} onClick={disableHandler}>
      {isLoading ? (
        <Spinner />
      ) : (
        <Text tColor="primary" tType="text" tbold>
          {children}
        </Text>
      )}
    </StyledButton>
  );
};

export { Button };
