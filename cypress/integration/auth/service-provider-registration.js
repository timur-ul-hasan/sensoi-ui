it("Check Service Provider Registeration", () => {
  cy.visit("http://localhost:3000");
  cy.contains("Register") // 6.
    .click();
  cy.contains("I am Service Provider") // 6.
    .click();
  cy.get("input[id='businessName']").type("Hasan Javed");
  cy.get("input[id='contactPersonName']").type("Hasan Javed CH");
  cy.get("input[id='phone']").type("03474134762");
  cy.get("input[id='email']").type("hasanjaved063@gmail.com");
  cy.get("input[id='password']").type("Nopass123");
  cy.get("input[id='passwordConfirmation']").type("Nopass123");
  cy.get("[type='checkbox']")
    .first()
    .check();
  cy.contains("Continue").click();

  cy.get("input[id='bankName']").type("HBL");
  cy.get("input[id='accountTitle']").type("Hasan Account");
  cy.get("input[id='accountNumber']").type("PKKK 1818 1881 1818 1000");

  cy.contains("Continue").click();
  cy.contains("Add Location").click();
  cy.contains("Continue").click();
});
