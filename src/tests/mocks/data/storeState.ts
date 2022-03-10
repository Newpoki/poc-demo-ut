import { RootState } from "../../../redux/store";
import { mockedCounter } from "./counter/counter";

/**
 * Mocks the whole store state
 */
export const mockedStoreState: RootState = {
  counter: mockedCounter.reducer.data,
};
