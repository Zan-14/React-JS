import { createStore } from "redux";
import { reducer } from "./combinedReducer";

const initialState = {};
export const store = createStore(reducer, initialState);
