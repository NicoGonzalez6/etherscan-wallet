import { Iwallet } from "../../store/walletSlice/interface";

export interface IwalletCard extends Pick<Iwallet, "address" | "isFavorite"> {
  onClick: () => void;
}
