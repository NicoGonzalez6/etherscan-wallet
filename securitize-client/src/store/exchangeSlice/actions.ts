import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axiosConfig";
import { IeditExchangePayload } from "./interface";

export const getAllExchangeRates = createAsyncThunk(
  "exchange/getAllExchangeRates",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance("exchange").then((res) => res.data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editExchangeRate = createAsyncThunk<"", IeditExchangePayload>(
  "exchange/editExchangeRate",
  async ({ id, rate }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance
        .patch(`exchange/${id}`, {
          rate,
        })
        .then((res) => res.data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
