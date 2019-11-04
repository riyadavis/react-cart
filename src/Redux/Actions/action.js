import { INCREMENT, DECREMENT } from "./type";

export const incrementHandler = data => ({
  type: INCREMENT,
  payload: data
});

export const decrementHandler = id => ({
  type: DECREMENT,
  payload: id
});
