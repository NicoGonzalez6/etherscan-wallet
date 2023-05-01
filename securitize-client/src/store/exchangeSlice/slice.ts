import { createSlice } from "@reduxjs/toolkit";
import { initialExchangeValues } from "./constant";
import { getAllExchangeRates, editExchangeRate } from "./actions";
import { EexchangetLoadingStates } from "./interface";

const exchangeSlice = createSlice({
  name: "exchange",
  initialState: initialExchangeValues,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllExchangeRates.pending, (state) => {
      state.isRateLoading = EexchangetLoadingStates.getting;
      state.errorMsg = undefined;
      state.isError = false;
    });
    builder.addCase(getAllExchangeRates.fulfilled, (state, { payload }) => {
      state.isRateLoading = undefined;
      state.exchangeRates = payload;
    });
    builder.addCase(editExchangeRate.pending, (state) => {
      state.isRateLoading = EexchangetLoadingStates.updating;
    });
    builder.addCase(editExchangeRate.fulfilled, (state) => {
      state.isRateLoading = undefined;
    });
  },
});

export default exchangeSlice.reducer;
