import { IexchangeRate } from "../../global/interfaces/form.interface";
import { EloadingStates } from "../../global/interfaces/loading.interface";

export interface IinitialExchangeValues {
  isRateLoading: keyof typeof EloadingStates | undefined;
  exchangeRates: IexchangeRate[] | undefined;
  isError: boolean;
  errorMsg: string | undefined;
}

export interface IeditExchangePayload {
  id: number;
  rate: number;
}
