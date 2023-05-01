import React, { useEffect, useState } from "react";
import { IwalletDetails } from "./interface";
import { StyledWalletDetails, SectionContainer } from "./styles";
import { Text } from "../Text";
import { getCurrencyExchangeValues } from "../../store/walletSlice/actions";
import { useAppDispatch } from "../../store/store";
import { Button } from "../Button";

const WalletDetails: React.FC<IwalletDetails> = ({
  address,
  balance_in_eth,
  balance_in_weight,
  isFavorite,
  isOld,
  rates,
  onClick,
  convertedCurrencyValue,
  id,
  onDelete,
}) => {
  const Dispatch = useAppDispatch();

  const [rateOptions] = useState(rates);
  const [selectedRate, setSelectedRate] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (selectedRate) {
      Dispatch(
        getCurrencyExchangeValues({
          id: selectedRate as number,
          balanceInEth: balance_in_eth,
        })
      );
    }
  }, [selectedRate, rates, Dispatch, balance_in_eth]);

  const selectHandler: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRate(+e.currentTarget.value as number);
  };

  return (
    <StyledWalletDetails>
      <SectionContainer>
        <Text tColor="white" tbold tType="text">
          Wallet Addres
        </Text>
        <Text tColor="white" tType="text">
          {address}
        </Text>
      </SectionContainer>
      <SectionContainer>
        <Text tColor="white" tbold tType="text">
          Wallet WEI balance
        </Text>
        <Text tColor="white" tType="text">
          {balance_in_weight}
        </Text>
      </SectionContainer>
      <SectionContainer>
        <Text tColor="white" tbold tType="text">
          Wallet ETH balance
        </Text>
        <Text tColor="white" tType="text">
          {balance_in_eth}
        </Text>
      </SectionContainer>

      <SectionContainer>
        <Text tColor="white" tbold tType="text">
          is Old?
        </Text>
        <Text tColor="white" tType="text">
          {isOld ? "Yes" : "no"}
        </Text>
      </SectionContainer>

      <SectionContainer>
        <Text tColor="white" tbold tType="text">
          is Favorite?
        </Text>
        <Text tColor="white" tType="text">
          {isFavorite ? "Yes" : "No"}
        </Text>
      </SectionContainer>

      <SectionContainer>
        <Text tColor="white" tbold tType="text">
          Balance in USD
        </Text>
        <Text tColor="white" tType="text">
          {isFavorite ? "Yes" : "No"}
        </Text>
      </SectionContainer>

      <SectionContainer>
        <Text tbold tColor="white" tType="text">
          Select currency:
        </Text>
        <select onChange={selectHandler}>
          <option>no currency selected</option>
          {rateOptions.map((rate) => {
            return (
              <option key={rate.id} value={rate.id}>
                {rate.currency}
              </option>
            );
          })}
        </select>
        {selectedRate && (
          <Text tbold tColor="white" tType="text">
            {convertedCurrencyValue}
          </Text>
        )}
      </SectionContainer>
      <SectionContainer row>
        <Button onClick={() => onDelete && onDelete()}>Delete Wallet</Button>
        <Button onClick={() => onClick && onClick(id as number)}>
          Set as favorite
        </Button>
      </SectionContainer>
    </StyledWalletDetails>
  );
};

export { WalletDetails };
