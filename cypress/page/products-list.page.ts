class ProductListPage {
  private addToCartB: string;

  constructor() {
    this.addToCartB = "#center_column a.button.ajax_add_to_cart_button";
  }

  public addProductToCart(): void {
    cy.get(this.addToCartB).click();
  }
}

export {ProductListPage};
