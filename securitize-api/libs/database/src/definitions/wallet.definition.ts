export interface Iwallets {
  id?: number;
  address: string;
  balance_in_weight: string;
  balance_in_eth: string;
  isFavorite: boolean;
  isOld: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
