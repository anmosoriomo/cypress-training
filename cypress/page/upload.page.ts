class UploadPage {
  private uploadDemoSiteURL: string;
  private chooseFileBtn: string;
  private submitBtn: string;

  constructor() {
    this.uploadDemoSiteURL = "https://the-internet.herokuapp.com/upload";
    this.chooseFileBtn = "#file-upload";
    this.submitBtn = "#file-submit";
  }

  public visitUploadDemoSite(): void {
    cy.visit(this.uploadDemoSiteURL);
  }

  public uploadFile(fileName: string): void {
    cy.get(this.chooseFileBtn).attachFile(fileName);
    cy.get(this.submitBtn).click();
  }
}

export {UploadPage};
