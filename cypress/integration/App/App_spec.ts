describe("App", () => {
  beforeEach(() => {
    /**
     * We're going through to the page before every test case
     * Also ensures that it's a new visit on the page each time
     */
    cy.visit("http://localhost:3000");
  });

  it("initial page state", () => {
    /** Checking that we are on simple view */
    cy.get("#cy_simple_view_button").should("have.attr", "aria-pressed", "true");
  });
});
