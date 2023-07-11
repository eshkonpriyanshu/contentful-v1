import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CardState {
  Img: string;
  heading: string;
  description: string;
}

const initialState: CardState = {
  Img: "",
  heading: "",
  description: "",
};

const cardSlice = createSlice({
  name: "navbarData",
  initialState,
  reducers: {
    navBarSliceData: (state, action: PayloadAction<CardState>) => {},
  },
});

export const { navBarSliceData } = cardSlice.actions;

export default cardSlice.reducer;
