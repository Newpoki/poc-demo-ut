import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockedOnClick } from "../../tests/mocks/utils/mockedOnClick";
import { SimpleButton, SimpleButtonProps } from "../SimpleButton";

/**
 * Those tests are using `@testing-library`, that comes with the CRA.
 * This is also a well known testing library that came up with the goal
 * to replace libraries like enzyme
 *
 * This library is really enjoyed by the community, as it's maintained and have
 * been created by Kent C Dodds, a well known developer
 *
 * Also, there is a nice post on his blog that I think goes well
 * with the official doc: https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
 */
describe("SimpleButton", () => {
  describe("there is no type prop", () => {
    it('should have a "button" type by default', () => {
      render(<SimpleButton>SimpleButton text</SimpleButton>);

      const actual = screen.getByRole<HTMLButtonElement>("button");
      const expected: SimpleButtonProps["type"] = "button";

      expect(actual.type).toBe(expected);
    });
  });

  describe("button is clicked", () => {
    it("should trigger the onClick", () => {
      render(<SimpleButton onClick={mockedOnClick}>SimpleButton text</SimpleButton>);

      const button = screen.getByRole<HTMLButtonElement>("button", { name: "SimpleButton text" });

      userEvent.click(button);

      expect(mockedOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
