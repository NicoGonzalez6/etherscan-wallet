export interface Iwallet {
  id?: number;
  address: string;
  balance_in_weight: string;
  balance_in_eth: string;
  isFavorite: boolean;
  isOld: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum EwalletLoadingStates {
  creating = "creating",
  updating = "updating",
  erasing = "erasing",
  getting = "getting",
  gettingExchange = "gettingExchange",
}

export interface IinitialWalletValues {
  wallets: Iwallet[] | undefined;
  isWalletLoading: keyof typeof EwalletLoadingStates | undefined;
  isWalletError: boolean;
  errorMsg: string | undefined;
  selectedWallet: Iwallet | undefined;
  convertedCurrencyValue: number | undefined;
}

export interface IgetCurrencyExchangeValues {
  id: number;
  balanceInEth: string;
}

export type IgetWalletsByOrder = number | undefined;

export type ItoogleWalletFavorite = number;

export interface Ierror {
  response: {
    data: {
      message: string;
    };
  };
}
