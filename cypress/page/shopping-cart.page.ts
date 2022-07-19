class ShoppingCartPage {
  private shoppingCartMenu: string;
  private authenticationMenu: string;

  constructor() {
    this.shoppingCartMenu = ".layer_cart_cart > .button-container > a.button-medium";
    this.authenticationMenu = ".cart_navigation > a.button.button-medium";
  }

  public goToShoppingCartMenu(): void {
    cy.get(this.shoppingCartMenu).click();
  }

  public goToAuthenticationMenu(): void {
    cy.get(this.authenticationMenu).click();
  }
}

export {ShoppingCartPage};
