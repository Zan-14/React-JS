import { MULTIPLY } from "./multiplyActionsTypes";

export const multiply = payload => {
  return {
    // the return is an object
    type: MULTIPLY,
    payload,
  };
};
