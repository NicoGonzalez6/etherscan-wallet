import { IexchangeRate } from "../../global/interfaces/form.interface";

export enum EexchangetLoadingStates {
  updating = "updating",
  getting = "getting",
}

export interface IinitialExchangeValues {
  isRateLoading: keyof typeof EexchangetLoadingStates | undefined;
  exchangeRates: IexchangeRate[] | undefined;
  isError: boolean;
  errorMsg: string | undefined;
}

export interface IeditExchangePayload {
  id: number;
  rate: number;
}
