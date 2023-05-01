import React from "react";
import { StyledSpinner } from "./styles";
import { Ispinner } from "./interface";

const Spinner: React.FC<Ispinner> = ({ sSize = "md" }) => {
  return <StyledSpinner sSize={sSize} />;
};

export { Spinner };
