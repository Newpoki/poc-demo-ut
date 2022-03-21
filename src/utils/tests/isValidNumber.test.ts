import { isValidNumber } from "../isValidNumber";

describe("isValidNumber", () => {
  describe("values are positive numbers integer", () => {
    const testValues = [0, -1, -12, -1548454, -5645645848648544];

    testValues.forEach((value) => {
      it(`should return true when value is ${value}`, () => {
        const actual = isValidNumber(value);
        const expected = true;

        expect(actual).toBe(expected);
      });
    });
  });

  describe("values are positive string integer", () => {
    const testValues = ["0", "-1", "-12", "-1548454", "-5645645848648544"];

    testValues.forEach((value) => {
      it(`should return true when value is ${value}`, () => {
        const actual = isValidNumber(value);
        const expected = true;

        expect(actual).toBe(expected);
      });
    });
  });

  describe("values are negative number integer", () => {
    const testValues = [-0, -1, -12, -1548454, -56456458486485446545];

    testValues.forEach((value) => {
      it(`should return true when value is ${value}`, () => {
        const actual = isValidNumber(value);
        const expected = true;

        expect(actual).toBe(expected);
      });
    });
  });

  describe("values are negative string integer", () => {
    const testValues = ["-0", "-1", "-12", "-1548454", "-56456458486485446545"];

    testValues.forEach((value) => {
      it(`should return true when value is ${value}`, () => {
        const actual = isValidNumber(value);
        const expected = true;

        expect(actual).toBe(expected);
      });
    });
  });

  describe("values are number decimals", () => {
    const testValues = [-0.0, 1.2, -1.2, 151.0, 1548.25, 1.12345678987654321];

    testValues.forEach((value) => {
      it(`should return true when value is ${value}`, () => {
        const actual = isValidNumber(value);
        const expected = true;

        expect(actual).toBe(expected);
      });
    });
  });

  describe("values are string decimals", () => {
    const testValues = ["-0.0", "1.2", "-1.2", "151.0", "1548.25", "1.12345678987654321"];

    testValues.forEach((value) => {
      it(`should return true when value is ${value}`, () => {
        const actual = isValidNumber(value);
        const expected = true;

        expect(actual).toBe(expected);
      });
    });
  });

  describe("values are positive decimals with french notation", () => {
    const testValues = ["0,0", "1,2", "151,0", "1548,25", "1,12345678987654321"];

    testValues.forEach((value) => {
      it(`should return true when value is ${value}`, () => {
        const actual = isValidNumber(value);
        const expected = true;

        expect(actual).toBe(expected);
      });
    });
  });

  describe("values are negative decimals with french notation", () => {
    const testValues = ["-0,0", "-1,2", "-151,0", "-1548,25", "-1,12345678987654321"];

    testValues.forEach((value) => {
      it(`should return true when value is ${value}`, () => {
        const actual = isValidNumber(value);
        const expected = true;

        expect(actual).toBe(expected);
      });
    });
  });

  describe("values are special javascript numbers", () => {
    const testValues = [NaN, Infinity, -Infinity];

    testValues.forEach((value) => {
      it(`should return false when value is ${value}`, () => {
        const actual = isValidNumber(value);
        const expected = false;

        expect(actual).toBe(expected);
      });
    });
  });

  describe("values are wrongly formatted decimals", () => {
    const testValues = ["-1,", "-1."];

    testValues.forEach((value) => {
      it(`should return false when value is ${value}`, () => {
        const actual = isValidNumber(value);
        const expected = false;

        expect(actual).toBe(expected);
      });
    });
  });

  // TODO: Improve function to handle exponential writtings
  // describe("values are written with exponential", () => {
  //   const testValues = ["1e+10", 1e10, "-1e+10", -1e10];

  //   testValues.forEach((value) => {
  //     it(`should return true when value is ${value}`, () => {
  //       const actual = isValidNumber(value);
  //       const expected = true;

  //       expect(actual).toBe(expected);
  //     });
  //   });
  // });
});
