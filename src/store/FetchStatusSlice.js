import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    CurrentlyFetching: true,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.CurrentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.CurrentlyFetching = false;
    },
  },
});

export const fetchStatusActions = FetchStatusSlice.actions;

export default FetchStatusSlice;
