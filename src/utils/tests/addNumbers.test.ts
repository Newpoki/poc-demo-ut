import { addNumbers } from "../addNumbers";

describe("addNumbers", () => {
  describe("there is two parameters", () => {
    it("should add both parameters", () => {
      const actual = addNumbers(10, 12);
      const expected = 22;

      expect(actual).toBe(expected);
    });
  });

  describe("there is only one parameters", () => {
    it("should add the first parameters with 0", () => {
      const actual = addNumbers(24);
      const expected = 24;

      expect(actual).toBe(expected);
    });
  });
});
