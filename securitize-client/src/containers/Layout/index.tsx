import { Ilayout } from "./interface";
import { StyledLayout } from "./styles";

const Layout: React.FC<Ilayout> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export { Layout };
