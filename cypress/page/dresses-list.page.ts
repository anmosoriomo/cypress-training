class DressesListPage {
  private dressItem: string;
  private dressName: string;

  constructor() {
    this.dressItem = ".product-container";
    this.dressName = `${this.dressItem} .product-name`;
  }

  private getDressProduct() {
    // get object with all the dresses
    return cy.get(this.dressItem);
  }

  public validateItemsNumber(itemsNumber: number): void {
    this.getDressProduct().should("have.length", itemsNumber);
  }

  public validateItemsName(names: string[]): void {
    // get object with all the dresses' names
    cy.get(this.dressName).each((item, index) => {
      // wrap yield the object passed into .wrap()
      cy.wrap(item).should("contain.text", names[index]);
    });
  }
}

export {DressesListPage};
