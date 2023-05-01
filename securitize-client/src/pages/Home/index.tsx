import { SetStateAction, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Layout } from "../../containers/Layout";
import { SectionLayout } from "../../containers/SectionLayout";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  StyledHome,
  StyledForm,
  Container,
  RateCardsContainer,
  WalletsContainer,
} from "./styles";
import {
  getAllExchangeRates,
  editExchangeRate,
} from "../../store/exchangeSlice/actions";
import { RateCard } from "../../components/RateCard";
import { Modal } from "../../components/Modal";
import { useForm } from "../../hooks/useForm";
import {
  IinitialFormValues,
  IexchangeRate,
  InewWalletForm,
} from "../../global/interfaces/form.interface";
import {
  initialExchangeFormValues,
  editExchangeValidationSchema,
  initialNewWalletValues,
  newWalletValidationSchema,
} from "./constants";
import {
  createWallet,
  deleteWallet,
  getAllWallets,
  toogleWalletIsFavorite,
} from "../../store/walletSlice/actions";
import { WalletCard } from "../../components/WalletCard";
import {
  selectWallet,
  cleanSelectedWallet,
} from "../../store/walletSlice/slice";
import { WalletDetails } from "../../components/WalletDetails";
import { Iwallet } from "../../store/walletSlice/interface";
import { Text } from "../../components/Text";
import { EloadingStates } from "../../global/interfaces/loading.interface";

const Home = () => {
  const [showEditExchange, setShowEditExchange] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [orderBy] = useState<{ label: string; id: number }[]>([
    {
      label: "by creation date",
      id: 0,
    },
    {
      label: "by favorites",
      id: 1,
    },
  ]);
  const [selectedOrder, setSelectedOrder] = useState(0);

  const [selectedIdExchange, setSelectedIdExchange] = useState<
    number | undefined
  >(undefined);

  const { isRateLoading, exchangeRates } = useAppSelector(
    (state) => state.exchangeReducer
  );

  const {
    isWalletLoading,
    wallets,
    errorMsg,
    isWalletError,
    selectedWallet,
    convertedCurrencyValue,
  } = useAppSelector((state) => state.walletReducer);

  const Dispatch = useAppDispatch();

  const editSubmitHandler = async (values: IexchangeRate): Promise<void> => {
    const payload = {
      id: selectedIdExchange as number,
      rate: values.rate,
    };
    await Dispatch(editExchangeRate(payload));
    await Dispatch(getAllExchangeRates());
    selectedWallet &&
      (await Dispatch(selectWallet(selectedWallet?.id as number)));
    setShowEditExchange(false);
  };

  const editExchangeForm = useForm(
    initialExchangeFormValues,
    editSubmitHandler,
    editExchangeValidationSchema
  );

  const newWalletHandler = async (values: InewWalletForm): Promise<void> => {
    await Dispatch(createWallet(values));
    await Dispatch(getAllWallets(selectedOrder as number));
  };

  const newWalletForm = useForm(
    initialNewWalletValues,
    newWalletHandler,
    newWalletValidationSchema
  );

  const showEditExchangeHandler = (id?: number): void => {
    if (id) {
      setSelectedIdExchange(id);
    } else if (!id) {
      setSelectedIdExchange(undefined);
    }
    setShowEditExchange(!showEditExchange);
  };

  const orderHandler: any = (evt: {
    target: { value: SetStateAction<number> };
  }) => {
    setSelectedOrder(evt.target.value);
  };

  useEffect(() => {
    Dispatch(getAllExchangeRates());
  }, [Dispatch]);

  useEffect(() => {
    Dispatch(getAllWallets(selectedOrder as number));
  }, [Dispatch, selectedOrder]);

  const favoriteHandler = async (id: number) => {
    await Dispatch(toogleWalletIsFavorite(id));
    await Dispatch(getAllWallets(selectedOrder as number));
    await Dispatch(selectWallet(id));
  };

  const deleteModalHandler = () => {
    setDeleteModal(!deleteModal);
  };

  const deleteHandler = async (id: number) => {
    await Dispatch(deleteWallet(id));
    await Dispatch(getAllWallets(selectedOrder as number));
    await Dispatch(cleanSelectedWallet());
    setDeleteModal(false);
  };

  const selectWalletHandler = (id: number) => {
    Dispatch(selectWallet(id));
  };

  return (
    <Layout>
      <StyledHome>
        {showEditExchange && (
          <Modal
            onCancel={showEditExchangeHandler}
            title="Edit exchange rate"
            onConfirm={editExchangeForm.handleSubmit}
            isDisabled={isRateLoading == EloadingStates.updating}
            isLoading={isRateLoading == EloadingStates.updating}
          >
            {initialExchangeFormValues.map((field: IinitialFormValues, i) => {
              return (
                <Input
                  key={i}
                  name={field.name}
                  id={field.id}
                  onChange={editExchangeForm.handleChange}
                  onBlur={editExchangeForm.handleBlur}
                  value={editExchangeForm.values[field["name"]]}
                  error={editExchangeForm.errors[field["name"]] ? true : false}
                  errorMsg={editExchangeForm.errors[field["name"]]}
                  transparent
                />
              );
            })}
          </Modal>
        )}

        {deleteModal && (
          <Modal
            onCancel={deleteModalHandler}
            title="Delete Wallet"
            onConfirm={() => deleteHandler(selectedWallet?.id as number)}
            isDisabled={isWalletLoading == EloadingStates.erasing}
            isLoading={isWalletLoading == EloadingStates.erasing}
          >
            <Text tColor="primary" tType="text">
              Please confirm this action
            </Text>
          </Modal>
        )}

        <Container>
          <SectionLayout sectionTitle="New Wallet">
            <StyledForm>
              {initialNewWalletValues.map((field: IinitialFormValues, i) => {
                return (
                  <Input
                    label="Search by address"
                    key={i}
                    name={field.name}
                    id={field.id}
                    onChange={newWalletForm.handleChange}
                    onBlur={newWalletForm.handleBlur}
                    value={newWalletForm.values[field["name"]]}
                    error={
                      newWalletForm.errors[field["name"]] || isWalletError
                        ? true
                        : false
                    }
                    errorMsg={newWalletForm.errors[field["name"]] || errorMsg}
                    transparent
                  />
                );
              })}
              <Button
                isDisabled={isWalletLoading == EloadingStates.creating}
                isLoading={isWalletLoading == EloadingStates.creating}
                onClick={newWalletForm.handleSubmit}
              >
                Save
              </Button>
            </StyledForm>
          </SectionLayout>
          <SectionLayout
            isLoading={isRateLoading == EloadingStates.getting}
            sectionTitle="Exchange Rates"
          >
            <RateCardsContainer>
              {exchangeRates?.map((currRate) => {
                const { rate, currency, id } = currRate;
                return (
                  <RateCard
                    key={id}
                    currency={currency}
                    rate={rate}
                    editHandler={() => showEditExchangeHandler(id)}
                  />
                );
              })}
            </RateCardsContainer>
          </SectionLayout>
        </Container>
        <Container>
          <SectionLayout
            isLoading={
              isWalletLoading == EloadingStates.getting ||
              isWalletLoading == EloadingStates.erasing
            }
            sectionTitle="Select a wallet"
          >
            <WalletsContainer>
              {wallets && wallets?.length >= 1 ? (
                <>
                  <select value={selectedOrder} onChange={orderHandler}>
                    {orderBy.map((order) => {
                      return <option value={order.id}>{order.label}</option>;
                    })}
                  </select>
                  {wallets.map((wallet) => {
                    return (
                      <WalletCard
                        onClick={() => selectWalletHandler(wallet.id as number)}
                        isFavorite={wallet.isFavorite}
                        key={wallet.id}
                        address={wallet.address}
                      />
                    );
                  })}
                </>
              ) : (
                <Text tType="text" tColor="white">
                  No wallets created
                </Text>
              )}
            </WalletsContainer>
          </SectionLayout>
          <SectionLayout
            isLoading={isWalletLoading == EloadingStates.updating}
            sectionTitle="Wallet Details"
          >
            {selectedWallet ? (
              <WalletDetails
                {...(selectedWallet as Iwallet)}
                onClick={favoriteHandler}
                onDelete={deleteModalHandler}
                rates={exchangeRates as IexchangeRate[]}
                convertedCurrencyValue={convertedCurrencyValue}
              />
            ) : (
              <div>No wallet selected</div>
            )}
          </SectionLayout>
        </Container>
      </StyledHome>
    </Layout>
  );
};

export { Home };
