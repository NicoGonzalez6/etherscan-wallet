import { Itext } from "./interface";
import { StyledText } from "./styles";

const Text: React.FC<Itext> = ({
  tColor = "black",
  tType = "subtitle",
  children,
  tbold = false,
}) => {
  return (
    <StyledText tColor={tColor} tType={tType} tbold={tbold}>
      {children}
    </StyledText>
  );
};

export { Text };
