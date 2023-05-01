import { Spinner } from "../../components/Spinner";

import { Text } from "../../components/Text";
import { IsectionLayout } from "./interface";
import { StyledSection, TitleSection, SpinnerSection } from "./styles";

const SectionLayout: React.FC<IsectionLayout> = ({
  children,
  sectionTitle,
  fluid = false,
  isLoading,
}) => {
  return (
    <StyledSection fluid={fluid}>
      <TitleSection>
        <Text tColor="white" tbold tType="subtitle">
          {sectionTitle}
        </Text>
      </TitleSection>
      {isLoading ? (
        <SpinnerSection>
          <Spinner sSize="lg" />
        </SpinnerSection>
      ) : (
        <div>{children}</div>
      )}
    </StyledSection>
  );
};

export { SectionLayout };
