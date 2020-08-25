it("Place Order", () => {
  // cy.visit("http://localhost:3000/signin");
  // cy.contains("I am Supplier") // 6.
  //   .click();
  // cy.get("input[id='username']").type("newsup@gmail.com");
  // cy.get("input[id='password']").type("Nopass123");
  // cy.get("form").submit();
  // cy.wait(5000);

  const uniqueId = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  for (var i = 0; i < 100; i++) {
    cy.wait(3000);
    cy.visit("http://localhost:3000/category/1");

    cy.wait(10000);

    cy.get("img")[1].click();
    cy.contains("Civil Works").click();

    cy.get("input[id='quantity']").type("10");

    cy.get("div[id='brand']").click();
    cy.contains("Fauji Cement").click();

    cy.get("input[id='price']").type("10");

    cy.get("div[id='sampleAvailable']").click();
    cy.contains("Available").click();

    cy.contains("Save Changes").click();

    cy.wait(3000);
    cy.contains("OK").click();
  }
});
