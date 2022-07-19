class AddressStepPage {
  private shippingMenu: string;

  constructor() {
    this.shippingMenu = ".cart_navigation > button.button-medium";
  }

  public goToShippingMenu(): void {
    cy.get(this.shippingMenu).click();
  }
}

export {AddressStepPage};
