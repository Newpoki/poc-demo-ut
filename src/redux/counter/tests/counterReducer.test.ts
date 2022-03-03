import { mockedCounter } from "../../../tests/mocks/data/counter/counter";
import { counterActions, counterReducer } from "../counterSlice";
import { CounterSliceState } from "../typings";

/** Describing the tested function */
describe("counterReducer", () => {
  /** Explaining what the use case should to
   * Here, we're testing that when the increment action is called,
   * the count value is incremented
   *
   * Writing the describe with the action like this, will display
   * the action's type `counter/increment` so we don't have to change the test
   * if we rename the action
   */
  describe(`${counterActions.increment}`, () => {
    /** Declaring the needed data for `actual` and `expected`
     * This is better to set it here, to let the `it` the more visible possible
     */
    const action = counterActions.increment();
    const state = mockedCounter.reducer.data;

    it("should increment the count", () => {
      /** Actual represents the function call */
      const actual = counterReducer(state, action);
      const expected: CounterSliceState = {
        /**
         * Here we're not incrementing the same way (+= 1) than in the reducer action.
         * And it's absolutly not a problem as we're testing the function output and not the implementation
         */
        count: state.count + 1,
      };

      expect(actual).toEqual(expected);
    });
  });

  /** Explaining what the use case should to
   * Here, we're testing that when the decrement action is called,
   * the count value is decremented
   *
   * Writing the describe with the action like this, will display
   * the action's type `counter/decrement` so we don't have to change the test
   * if we rename the action
   */
  describe(`${counterActions.decrement}`, () => {
    /** Declaring the needed data for `actual` and `expected`
     * This is better to set it here, to let the `it` the more visible possible
     */
    const action = counterActions.decrement();
    const state = mockedCounter.reducer.data;

    it("should decrement the count", () => {
      /** Actual represents the function call */
      const actual = counterReducer(state, action);
      const expected: CounterSliceState = {
        /**
         * Here we're not incrementing the same way (-= 1) than in the reducer action.
         * And it's absolutly not a problem as we're testing the function output and not the implementation
         */
        count: state.count - 1,
      };

      expect(actual).toEqual(expected);
    });
  });
});
