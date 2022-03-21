describe("AdvancedView", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cy_advanced_view_button").click();
  });

  it("initial page state", () => {
    cy.get("#cy_advanced_view_count_input").should((input) => {
      expect(input.val()).to.eq("0");
      expect(input.prop("readonly")).to.eq(true);
    });

    cy.get("#cy_advanced_view_substract_button").should((button) => {
      expect(button.text()).to.eq("Decrement");
      expect(button.prop("type")).to.eq("button");
    });

    cy.get("#cy_advanced_view_add_button").should((button) => {
      expect(button.text()).to.eq("Increment");
      expect(button.prop("type")).to.eq("button");
    });

    cy.get("#cy_advanced_view_added-value_input").should("have.value", 1);
  });

  describe("clicks on add button", () => {
    it("should increment the text input", () => {
      cy.get("#cy_advanced_view_count_input").should("have.value", 0);
      cy.get("#cy_advanced_view_add_button").click();
      cy.get("#cy_advanced_view_count_input").should("have.value", 1);
    });
  });

  describe("clicks on substract button", () => {
    it("should increment the text input", () => {
      cy.get("#cy_advanced_view_count_input").should("have.value", 0);
      cy.get("#cy_advanced_view_substract_button").click();
      cy.get("#cy_advanced_view_count_input").should("have.value", -1);
    });
  });

  describe("added value input has changed", () => {
    const newAddedValueInput = 10;

    it("add and substract button text must display the operations they will do", () => {
      cy.get("#cy_advanced_view_added-value_input").type(`{backspace}${newAddedValueInput}`);
      cy.get("#cy_advanced_view_substract_button").should("have.text", `- ${newAddedValueInput}`);
      cy.get("#cy_advanced_view_add_button").should("have.text", `+ ${newAddedValueInput}`);
    });

    describe("clicks on add buton", () => {
      it("should add the added value input value to the count", () => {
        cy.get("#cy_advanced_view_added-value_input").type(`{backspace}${newAddedValueInput}`);
        cy.get("#cy_advanced_view_add_button").click();
        cy.get("#cy_advanced_view_count_input").should("have.value", newAddedValueInput);
      });
    });

    describe("clicks on substract buton", () => {
      it("should add the added value input value to the count", () => {
        cy.get("#cy_advanced_view_added-value_input").type(`{backspace}${newAddedValueInput}`);
        cy.get("#cy_advanced_view_substract_button").click();
        cy.get("#cy_advanced_view_count_input").should("have.value", -newAddedValueInput);
      });
    });

    describe("added value input value is not a valid number", () => {
      const testCases = [
        { label: "empty", value: "{backspace}" },
        { label: "e", value: "{backspace}e" },
      ];

      testCases.forEach((testCase) => {
        it(`should have add and substract buttons disabled and not displaying any value when 
        value is ${testCase.label}`, () => {
          cy.get("#cy_advanced_view_added-value_input").type(`{backspace}${testCase.value}`);
          cy.get("#cy_advanced_view_substract_button").should("have.prop", "disabled", true);
          cy.get("#cy_advanced_view_substract_button").should("have.text", "- ");
          cy.get("#cy_advanced_view_add_button").should("have.prop", "disabled", true);
          cy.get("#cy_advanced_view_add_button").should("have.text", "+ ");
        });
      });
    });
  });

  describe("changing to simple view and coming back to advanced view", () => {
    const newAddedValueInput = 10;

    it("should reset the added_value input value", () => {
      cy.get("#cy_advanced_view_added-value_input").type(`{backspace}${newAddedValueInput}`);
      cy.get("#cy_advanced_view_add_button").click();
      cy.get("#cy_advanced_view_count_input").should("have.value", 10);
      cy.get("#cy_simple_view_button").click();
      cy.get("#cy_advanced_view_button").click();
      cy.get("#cy_advanced_view_added-value_input").should("have.value", 1);
      cy.get("#cy_advanced_view_count_input").should("have.value", 10);
    });
  });
});
