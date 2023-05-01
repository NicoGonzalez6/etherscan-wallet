export interface IinitialFormValues {
  label: string;
  name: string;
  id: string;
}

export interface IexchangeRate {
  id?: number;
  currency: string;
  rate: number;
}

export interface InewWalletForm {
  address: string;
}

export type IformatInitialFormValues = IinitialFormValues[];
