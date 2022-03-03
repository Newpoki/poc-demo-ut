import { createSlice } from "@reduxjs/toolkit";
import { CounterSliceState } from "./typings";

const initialState: CounterSliceState = {
  count: 0,
};

const counterSlice = createSlice({
  /**
   * This will prefix every slice action by "counter" to ensure
   * there is not conflict between actions with same name in others slice
   */
  name: "counter",
  initialState,
  /**
   * With redux-toolkit, this is deadly simplified, but this will create a redux action, with a type, and a payload if provided
   * the type being: `${counterSlice.name}/${actionName}`
   */
  reducers: {
    /** The increment action
     * This look likes:
     * ```
     * {
     *    type: "counter/increment"
     * }
     * ```
     */
    increment: (state) => {
      state.count += 1;
    },
    /** The decrement action
     * This look likes:
     * ```
     * {
     *    type: "counter/decrement"
     * }
     * ```
     */
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer } = counterSlice;
export { initialState as counterSliceInitialState };
