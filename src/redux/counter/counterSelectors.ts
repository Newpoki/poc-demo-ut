import { RootState } from "../store";

/**
 * This is a callback that takes in parameter the redux store state
 * and returns the counter slice count value.
 *
 * This function is meant to be called inside a `useAppSelector` hooks
 */
export const selectCount = (state: RootState) => {
  return state.counter.count;
};
