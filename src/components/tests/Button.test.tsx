import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockedOnClick } from "../../tests/mocks/utils/mockedOnClick";
import { Button, ButtonProps } from "../Button";

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
describe("Button", () => {
  describe("isLoading is true", () => {
    it("should display the loading text instead of the children", () => {
      // We simply render the button with the props we want
      render(<Button isLoading>Button text</Button>);

      const actual = screen.getByRole("button");
      const expected = "loading";

      expect(actual).toHaveTextContent(expected);
    });

    it("onClick should not be called", () => {
      render(
        <Button onClick={mockedOnClick} isLoading>
          Button text
        </Button>
      );

      const button = screen.getByRole<HTMLButtonElement>("button", { name: "loading" });

      userEvent.click(button);

      expect(mockedOnClick).toHaveBeenCalledTimes(0);
    });
  });

  describe("there is no type prop", () => {
    it('should have a "button" type by default', () => {
      render(<Button>Button text</Button>);

      const actual = screen.getByRole<HTMLButtonElement>("button");
      const expected: ButtonProps["type"] = "button";

      expect(actual.type).toBe(expected);
    });
  });

  describe("button is disabled", () => {
    it("onClick should not be called", () => {
      render(
        <Button onClick={mockedOnClick} isDisabled>
          Button text
        </Button>
      );

      const button = screen.getByRole<HTMLButtonElement>("button", { name: "Button text" });

      userEvent.click(button);

      expect(mockedOnClick).toHaveBeenCalledTimes(0);
    });
  });

  describe("isDisabled and isLoading are false, and button is clicked", () => {
    it("should trigger the onClick", () => {
      render(<Button onClick={mockedOnClick}>Button text</Button>);

      const button = screen.getByRole<HTMLButtonElement>("button", { name: "Button text" });

      userEvent.click(button);

      expect(mockedOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
