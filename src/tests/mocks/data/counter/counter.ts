import { counterSliceInitialState } from "../../../../redux/counter/counterSlice";

/**
 * Exporting every data that could be needed for the units tests
 * Each key could be see as an application use case
 *
 * This is really important to have each `data ̀ key typed, in order to break unit tests
 * when typings change, and so, always have up to date mocks
 */
export const mockedCounter = {
  reducer: {
    data: counterSliceInitialState,
  },
};
