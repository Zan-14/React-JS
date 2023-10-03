import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./combinedReducer";

const store2 = configureStore({
  reducer,
});

export default store2;
