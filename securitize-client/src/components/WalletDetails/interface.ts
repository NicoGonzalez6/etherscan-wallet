import { IexchangeRate } from "../../global/interfaces/form.interface";
import { Iwallet } from "../../store/walletSlice/interface";

export interface IwalletDetails extends Iwallet {
  onClick?: (id: number) => void;
  onDelete?: () => void;
  rates: IexchangeRate[];
  convertedCurrencyValue?: number | undefined;
}

export interface IbuttonSection {
  row?: boolean;
}
