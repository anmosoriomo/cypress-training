class UploadConfirmationPage {
  private uploadedFileMessage: string;

  constructor() {
    this.uploadedFileMessage = "#content > div > h3";
  }

  public validateUpload(message: string): void {
    cy.get(this.uploadedFileMessage)
        .should("have.text", message);
  }
}

export {UploadConfirmationPage};
