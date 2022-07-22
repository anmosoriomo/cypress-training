import {UploadPage, DownloadPage, FileTransferValidationPage}
  from "../page/index";

describe("upload a file then download another one", () => {
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;
  let fileTransferValidationPage: FileTransferValidationPage;

  before(() => {
    uploadPage = new UploadPage;
    fileTransferValidationPage = new FileTransferValidationPage;
    downloadPage = new DownloadPage;
  });

  it("then the file should be uploaded", () => {
    // Arrange
    const uploadedFile: string = "the-song.txt";
    const validationMessage: string = "File Uploaded!";
    uploadPage.visitUploadDemoSite();

    // Action
    uploadPage.uploadFile(uploadedFile);

    // Assertion
    fileTransferValidationPage.validateUpload(validationMessage);
  });

  it("then a file should be downloaded", () => {
    // Arrange
    const downloadedFile: string = "sampleFile.jpeg";
    downloadPage.visitDownloadDemoSite();

    // Action
    downloadPage.downloadFile();

    // Assertion
    downloadPage.validateDownload(downloadedFile);
  });
});
