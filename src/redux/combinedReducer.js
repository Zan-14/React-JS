import { combineReducers } from "redux";
import multiplySlice from "./slice/multiplySlice";
// import calculateMultiply from "./reducers/multiplyReducer";

export const reducer = combineReducers({
  calculateMultiply: multiplySlice.reducer,
});
