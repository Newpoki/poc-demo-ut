import userEvent from "@testing-library/user-event";
import App from "./App";
import { screen, render } from "./tests/mocks/utils/customRender";

describe("App components", () => {
  describe("input is a number type", () => {
    it("should have a number type", () => {
      render(<App />);

      const input = screen.getByRole<HTMLInputElement>("spinbutton");

      expect(input.type).toBe("number");
    });
  });

  describe("input is read only", () => {
    it("should have read only attributes", () => {
      render(<App />);

      const input = screen.getByRole<HTMLInputElement>("spinbutton");

      expect(input.readOnly).toBe(true);
    });
  });

  describe("decrement button is clicked", () => {
    it("should decrement the input content", () => {
      render(<App />);

      const input = screen.getByRole<HTMLInputElement>("spinbutton");

      // We must convert it as input returns string :(
      const actualInputValue = Number(input.value);
      const decrementButton = screen.getByRole<HTMLButtonElement>("button", { name: "Decrement" });

      userEvent.click(decrementButton);

      expect(input.value).toEqual(`${actualInputValue - 1}`);
    });
  });

  describe("increment button is clicked", () => {
    it("should increment the input content", () => {
      render(<App />);

      const input = screen.getByRole<HTMLInputElement>("spinbutton");

      // We must convert it as input returns string :(
      const actualInputValue = Number(input.value);
      const incrementButton = screen.getByRole<HTMLButtonElement>("button", { name: "Increment" });

      userEvent.click(incrementButton);

      expect(input.value).toEqual(`${actualInputValue + 1}`);
    });
  });
});
