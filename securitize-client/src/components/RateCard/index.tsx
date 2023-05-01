import { StyledCard, ActionsContainer, RateContainer } from "./styles";
import { IexchangeRate } from "./interface";
import { Text } from "../Text";
import { AiOutlineEdit } from "react-icons/ai";

const RateCard: React.FC<IexchangeRate> = ({ currency, rate, editHandler }) => {
  return (
    <StyledCard>
      <ActionsContainer>
        <Text tColor="white" tType="text">
          {currency}
        </Text>

        <AiOutlineEdit onClick={editHandler} />
      </ActionsContainer>
      <RateContainer>
        <Text tColor="white" tType="text">
          {rate}
        </Text>
      </RateContainer>
    </StyledCard>
  );
};

export { RateCard };
