import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  multiplyCount: 2,
};

const multiplySlice = createSlice({
  name: "multiply",
  initialState,
  reducers: {
    calculateMultiply: (state, action) => {
      return {
        ...state,
        multiplyCount: state.multiplyCount * 2,
      };
    },
  },
});

export const { calculateMultiply } = multiplySlice.actions;

export const useMultipleCount = () => {
  return useSelector(state => state.calculateMultiply);
};

export default multiplySlice;
