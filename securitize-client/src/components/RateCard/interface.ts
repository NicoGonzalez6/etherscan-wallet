export interface IexchangeRate {
  currency: string;
  rate: number;
  editHandler?: () => void;
}
