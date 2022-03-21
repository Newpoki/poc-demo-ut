import { mockedCounter } from "../../../tests/mocks/data/counter/counter";
import { counterActions, counterReducer } from "../counterSlice";
import {
  CounterAddActionPayload,
  CounterSliceState,
  CounterSubstractActionPayload,
} from "../typings";

/** Describing the tested function */
describe("counterReducer", () => {
  /*
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

    /** Explaining what the use case should to */
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

  /**
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

    /** Explaining what the use case should to */
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

  describe(`${counterActions.add}`, () => {
    const payload: CounterAddActionPayload = {
      value: 12,
    };

    const action = counterActions.add(payload);
    const state = mockedCounter.reducer.data;

    it("should add the payload value to the count", () => {
      const actual = counterReducer(state, action);
      const expected: CounterSliceState = {
        count: state.count + action.payload.value,
      };

      expect(actual).toEqual(expected);
    });
  });

  describe(`${counterActions.substract}`, () => {
    const payload: CounterSubstractActionPayload = {
      value: 24,
    };

    const action = counterActions.substract(payload);
    const state = mockedCounter.reducer.data;

    it("should substract the payload value to the count", () => {
      const actual = counterReducer(state, action);
      const expected: CounterSliceState = {
        count: state.count - action.payload.value,
      };

      expect(actual).toEqual(expected);
    });
  });
});
