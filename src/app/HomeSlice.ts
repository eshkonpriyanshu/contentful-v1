import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CardState {
  data: any[];
  detailsData: [];
}

const initialState: CardState = {
  data: [],
  detailsData: [],
};

const homeSlice = createSlice({
  name: "homeData",
  initialState,
  reducers: {
    homeData: (state, action: PayloadAction<CardState>) => {
      state.data = action.payload.data;
      state.detailsData = action.payload.detailsData;
    },
  },
});

export const { homeData } = homeSlice.actions;

export default homeSlice.reducer;
