import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemStore";
import FetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./bagStore";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    fetchStatus: FetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
