import React from "react";
import { IwalletCard } from "./interface";
import { StyledWalledCard } from "./styles";
import { Text } from "../Text";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const WalletCard: React.FC<IwalletCard> = ({
  address,
  isFavorite,
  onClick,
}) => {
  return (
    <StyledWalledCard
      isFavorite={isFavorite}
      address={address}
      onClick={onClick}
    >
      <Text tColor="white" tType="text">
        {address}
      </Text>
      {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
    </StyledWalledCard>
  );
};

export { WalletCard };
