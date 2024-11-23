import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addTobag: (state, action) => {
      state.push(action.payload);
    },
    removeBag: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const bagActions = bagSlice.actions;

export default bagSlice;
