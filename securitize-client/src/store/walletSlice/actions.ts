import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axiosConfig";
import {
  Iwallet,
  IgetCurrencyExchangeValues,
  Ierror,
  ItoogleWalletFavorite,
  IgetWalletsByOrder,
} from "./interface";
import { InewWalletForm } from "../../global/interfaces/form.interface";

export const getAllWallets = createAsyncThunk<
  Iwallet[] | [],
  IgetWalletsByOrder
>("wallet/getAllWallets", async (payload, { rejectWithValue }) => {
  const query = payload == 1 ? "?orderBy=isFavorite" : "";
  try {
    const response = await axiosInstance(`wallets/${query}`).then(
      (res) => res.data
    );
    return response as Iwallet[];
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const createWallet = createAsyncThunk<void, InewWalletForm>(
  "wallet/createWallet",
  async ({ address }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance
        .post(`wallets`, {
          address,
        })
        .then((res) => res.data);

      return response;
    } catch (error) {
      const err = error as Ierror;
      return rejectWithValue(err.response.data.message);
    }
  }
);

export const getCurrencyExchangeValues = createAsyncThunk<
  number,
  IgetCurrencyExchangeValues
>(
  "exchange/getCurrencyExchangeValues",
  async ({ id, balanceInEth }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance
        .post(`exchange/balance/${id}`, {
          balanceInEth,
        })
        .then((res) => res.data);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const toogleWalletIsFavorite = createAsyncThunk<
  void,
  ItoogleWalletFavorite
>(
  "exchange/toogleWalletIsFavorite",

  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance
        .patch(`wallets/${payload}`)
        .then((res) => res.data);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteWallet = createAsyncThunk<void, ItoogleWalletFavorite>(
  "exchange/deleteWallet",

  async (payload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance
        .delete(`wallets/${payload}`)
        .then((res) => res.data);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
