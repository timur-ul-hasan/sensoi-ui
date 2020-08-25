it("Click Supplier Registeration", () => {
  cy.visit("http://localhost:3000/signup");
  cy.contains("Register") // 6.
    .click();
  cy.contains("I am Supplier") // 6.
    .click();
  cy.get("input[id='businessName']").type("Hasan Javed");
  cy.get("input[id='name']").type("Hasan Javed");
  cy.get("input[id='contactPersonName']").type("Hasan Javed CH");
  cy.get("input[id='businessPhone']").type("03474134762");
  cy.get("input[id='phone']").type("03474134762");
  cy.get("input[id='businessEmail']").type("hasanjaved063@gmail.com");
  cy.get("input[id='email']").type("hasanjaved063@gmail.com");
  cy.get("input[id='cnic']").type("34201-0928340-9");
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
  cy.wait(3000);
  cy.contains("Continue").click();
});
