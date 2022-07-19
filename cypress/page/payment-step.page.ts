class PaymentStepPage {
  private paymentMethod: string;
  private confirmOrderMenu: string;
  private orderCompleteMessage: string;

  constructor() {
    this.paymentMethod = ".bankwire";
    this.confirmOrderMenu = "#cart_navigation > .button";
    this.orderCompleteMessage = ".cheque-indent > .dark";
  }

  public selectPaymentMethod(): void {
    cy.get(this.paymentMethod).click();
  }

  public goToConfirmOrderMenu(): void {
    cy.get(this.confirmOrderMenu).click();
  }

  public validateOrderMessage(message: string): void {
    cy.get(this.orderCompleteMessage)
        .should("have.text", message);
  }
}

export {PaymentStepPage};
