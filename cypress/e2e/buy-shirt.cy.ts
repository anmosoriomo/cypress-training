describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    // goes to the website
    cy.visit("http://automationpractice.com/");
    // click on the T-shirt button
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    // click on add to cart
    cy.get(".ajax_add_to_cart_button > span").click();
    // click on Proceed to checkout
    // cy.get("[style*='display: block;'] .button-container > a").click();
    cy.get(".layer_cart_cart > .button-container").click();
    // again Proceed to checkout
    cy.get(".cart_navigation span").click();

    cy.get("#email").type("aperdomobo@gmail.com");
    cy.get("#passwd").type("WorkshopProtractor");
    cy.get("#SubmitLogin > span").click();

    // again Proceed to checkout
    cy.get(".cart_navigation > .button").click();
    // check terms of service checkbox
    cy.get("#cgv").check();
    // again Proceed to checkout
    cy.get(".cart_navigation > .button").click();

    // click on pay by bank wire
    cy.get(".bankwire > span").click();
    // confirm order
    cy.get("#cart_navigation > .button").click();

    cy.get("#center_column > div > p > strong")
        .should("have.text", "Your order on My Store is complete.");
  });
});
