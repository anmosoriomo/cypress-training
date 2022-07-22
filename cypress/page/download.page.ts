class DownloadPage {
  private downloadDemoSiteURL: string;
  private downloadFileBtn: string;
  private baseDownloadedFilePath: string;

  constructor() {
    this.downloadDemoSiteURL = "https://demoqa.com/upload-download";
    this.downloadFileBtn = "#downloadButton";
    this.baseDownloadedFilePath = "cypress/downloads/";
  }

  public visitDownloadDemoSite(): void {
    cy.visit(this.downloadDemoSiteURL);
  }

  public downloadFile(): void {
    cy.get(this.downloadFileBtn).click();
  }

  public validateDownload(fileName: string): void {
    cy.readFile(`${this.baseDownloadedFilePath}${fileName}`)
        .should("exist");
  }
}

export {DownloadPage};

