class FormConfirmationPage {
  private filledFormMessage: string;

  constructor() {
    this.filledFormMessage = "#example-modal-sizes-title-lg";
  }

  public validateFilledForm(message: string): void {
    cy.get(this.filledFormMessage)
        .should("have.text", message);
  }
}

export {FormConfirmationPage};
