import { useSelector } from "react-redux";
import { MULTIPLY } from "../actions/multiply/multiplyActionsTypes";

const initialState = {
  multiplyCount: 2,
};

const calculateMultiply = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MULTIPLY:
      return { ...state, multiplyCount: state.multiplyCount * payload };

    default:
      return state;
  }
};

export const useSelectCalculateMultiply = () =>
  useSelector(state => state.calculateMultiply);

export default calculateMultiply;
