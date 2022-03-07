import { getActualDate } from "../getActualDate";

jest.mock("../getActualDate");

describe("getActualDate", () => {
  beforeEach(() => {
    /** Saying that each time the `getActualDate` function is called
     * the function will return the provided data
     */
    (getActualDate as jest.Mock).mockImplementation(() => new Date(2022, 1, 14));
  });

  it("should return the actual date", () => {
    /** The function is using `new Date` to get the user actual date
     * And so, the result will be different each time we run the tests
     * So in order to prevent this, we have to mock the function returned value
     */

    const actual = getActualDate();
    const expected = new Date(2022, 1, 14);

    expect(actual).toEqual(expected);
  });
});
