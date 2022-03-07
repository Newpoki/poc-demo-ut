import { renderHook } from "@testing-library/react-hooks";

import { LANGUAGE_CODE } from "../../constants/languageCode";
import { getActualDate } from "../../utils/getActualDate";
import { useGetLocalizedActualDate } from "../useGetLocalizedActualDate";

jest.mock("../../utils/getActualDate");

describe("useGetLocalizedActualDate", () => {
  beforeEach(() => {
    (getActualDate as jest.Mock).mockImplementation(() => new Date(2022, 1, 14));
    /** Saying that each time the `getActualDate` function is called
     * the function will return the provided data
     *
     * Even if we mocked it in `getActualDate`, we have to dit it again here
     * as it is scoped to the file
     */
  });

  describe(`language code is ${LANGUAGE_CODE["fr-FR"]}`, () => {
    const languageCode = LANGUAGE_CODE["fr-FR"];

    it("should return french formatted actual date", () => {
      /** This library allow use to render a hook in jest env.
       * Here we just need to execute it, but we also can execute function
       * returned by a hook, or waiting async, etc
       *
       * We even could have provide a Wrapper component, if we need
       * to use things that need a provider like react-router, redux, etc
       */
      const { result } = renderHook(() => useGetLocalizedActualDate({ languageCode }));

      const expected = "14/02/2022";

      expect(getActualDate).toHaveBeenCalledTimes(1);
      expect(result.current).toEqual(expected);
    });
  });

  describe(`language code is ${LANGUAGE_CODE["en-US"]}`, () => {
    const languageCode = LANGUAGE_CODE["en-US"];

    it("should return french formatted actual date", () => {
      /** We can override a global mock inside a specific test case
       * This can be usefull if we need a specified function to return a certain value for
       * every tests but one.
       */
      (getActualDate as jest.Mock).mockImplementation(() => new Date(2022, 11, 24));
      const { result } = renderHook(() => useGetLocalizedActualDate({ languageCode }));

      const expected = "12/24/2022";

      expect(getActualDate).toHaveBeenCalledTimes(1);
      expect(result.current).toEqual(expected);
    });
  });
});
