import { createSlice } from "@reduxjs/toolkit";
import { initialWalletValues } from "./constants";
import {
  getAllWallets,
  createWallet,
  getCurrencyExchangeValues,
  toogleWalletIsFavorite,
  deleteWallet,
} from "./actions";
import { EwalletLoadingStates } from "./interface";

const walletSlice = createSlice({
  name: "wallet",
  initialState: initialWalletValues,
  reducers: {
    selectWallet: (state, { payload }: { payload: number }) => {
      state.selectedWallet = state.wallets?.find(
        (wallet) => wallet.id == payload
      );
    },
    cleanSelectedWallet: (state) => {
      state.selectedWallet = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllWallets.pending, (state) => {
      state.isWalletLoading = EwalletLoadingStates.getting;
    });
    builder.addCase(getAllWallets.fulfilled, (state, { payload }) => {
      state.isWalletLoading = undefined;
      state.wallets = payload;
    });

    builder.addCase(createWallet.pending, (state) => {
      state.isWalletLoading = EwalletLoadingStates.creating;
      state.errorMsg = undefined;
      state.isWalletError = false;
    });
    builder.addCase(createWallet.fulfilled, (state) => {
      state.isWalletLoading = undefined;
    });
    builder.addCase(createWallet.rejected, (state, { payload }) => {
      state.errorMsg = payload as string;
      state.isWalletError = true;
      state.isWalletLoading = undefined;
    });

    builder.addCase(
      getCurrencyExchangeValues.fulfilled,
      (state, { payload }) => {
        state.isWalletLoading = EwalletLoadingStates.gettingExchange;
        state.convertedCurrencyValue = payload as number;
      }
    );

    builder.addCase(toogleWalletIsFavorite.pending, (state) => {
      state.isWalletLoading = EwalletLoadingStates.updating;
    });

    builder.addCase(toogleWalletIsFavorite.fulfilled, (state) => {
      state.isWalletLoading = undefined;
    });
    builder.addCase(deleteWallet.pending, (state) => {
      state.isWalletLoading = EwalletLoadingStates.erasing;
    });

    builder.addCase(deleteWallet.fulfilled, (state) => {
      state.isWalletLoading = undefined;
    });
  },
});

export default walletSlice.reducer;

export const { selectWallet, cleanSelectedWallet } = walletSlice.actions;
