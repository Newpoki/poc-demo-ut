import { mockedStoreState } from "../../../../tests/mocks/data/storeState";
import { selectCount } from "../../counterSelectors/selectCount";

/** Describing the tested file */
describe("counter selectors", () => {
  const state = mockedStoreState;

  /** Describing the tested function */
  describe("selectCount", () => {
    /** Explaining what the use case should to */
    it("should returns the count", () => {
      /** Actual represents the function call */
      const actual = selectCount(state);
      /** Expected is the expected result */
      const expected = state.counter.count;

      /** This way we can have, among all the tests files, the same way to read files
       * and so, it's easier to understand tests cases
       */
      expect(actual).toBe(expected);
    });
  });
});

/**
 * When running tests, with the way the `describe` and `it` are nested,
 * it gives us a nice readable log, that makes it easy to read, understand and debug
 *
 * For this files, it looks like:
 *
 * ```
 *  src/redux/counter/tests/counterSelectors/selectCount.test.ts
 *  counter selectors
 *    selectCount
 *      should returns the count
 * ```
 */
