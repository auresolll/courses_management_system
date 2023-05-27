import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cardState {
  id: string;
  name: string;
  star: number;
  isOpenCardDetail: boolean;
}

const initialState: cardState = {
  id: "",
  name: "",
  star: 0,
  isOpenCardDetail: false,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCard: (
      state,
      {
        payload,
      }: PayloadAction<{
        id: string;
        name: string;
        star: number;
      }>
    ) => {
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        star: payload.star,
      };
    },
    setOpenCardDetail: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        isOpenCardDetail: payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCard, setOpenCardDetail } = cardSlice.actions;

export default cardSlice.reducer;
