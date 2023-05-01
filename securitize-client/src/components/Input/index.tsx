import React from "react";
import { Iinput } from "./interface";
import { StyledInput } from "./styles";
import { Text } from "../Text";

const Input: React.FC<Iinput> = ({
  id,
  label,
  name,
  onChange,
  value,
  placeholder,
  error,
  errorMsg,
  onBlur,
  transparent,
}) => {
  return (
    <StyledInput transparent={transparent} label={label}>
      {label && (
        <label htmlFor={name}>
          <Text tColor="secondary" tType="text">
            {label}
          </Text>
        </label>
      )}
      <input
        placeholder={placeholder}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && (
        <Text tColor="error" tType="text">
          {errorMsg}
        </Text>
      )}
    </StyledInput>
  );
};

export { Input };
