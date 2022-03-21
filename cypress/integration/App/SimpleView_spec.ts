describe("SimpleView", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("initial page state", () => {
    /** Checking the input default "state" */
    cy.get("#cy_simple_view_count_input").should((input) => {
      /** input.val() returns a string but `should('have.value')` number ! */
      expect(input.val()).to.eq("0");
      expect(input.prop("readonly")).to.eq(true);
    });

    /** Checking the decrement button default "state" */
    cy.get("#cy_simple_view_decrement_button").should((button) => {
      expect(button.text()).to.eq("Decrement");
      expect(button.prop("type")).to.eq("button");
    });

    /** Checking the increment button default "state" */
    cy.get("#cy_simple_view_increment_button").should((button) => {
      expect(button.text()).to.eq("Increment");
      expect(button.prop("type")).to.eq("button");
    });
  });

  /** Testing that the input value is decremented when
   * decremented button is clicked.
   */
  describe("decrement button is clicked", () => {
    it("should decrement the input value", () => {
      cy.get("#cy_simple_view_decrement_button").click();

      cy.get("#cy_simple_view_count_input").should("have.value", -1);
    });
  });

  /**
   * This is testing the same points than in the decremented test
   * but written in a different way. I personally tend to prefer
   * the decrement test case style
   */
  describe("increment button is clicked", () => {
    it("should increment the input value", () => {
      cy.get("#cy_simple_view_increment_button").click();

      cy.get("#cy_simple_view_count_input")
        .invoke("val")
        .should((updatedValue) => {
          expect(updatedValue).to.eq("1");
        });
    });
  });
});
