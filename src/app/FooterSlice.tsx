import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CardState {
  text: any[];
}

const initialState: CardState = {
  text: [],
};

const footerSlice = createSlice({
  name: "footerData",
  initialState,
  reducers: {
    footerDataSlice: (state, action: PayloadAction<CardState>) => {
      state.text = action.payload.text;
    },
  },
});

export const { footerDataSlice } = footerSlice.actions;

export default footerSlice.reducer;
