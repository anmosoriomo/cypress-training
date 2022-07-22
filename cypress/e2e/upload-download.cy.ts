import {UploadPage, UploadConfirmationPage}
  from "../page/index";

describe("upload a file", () => {
  let uploadPage: UploadPage;
  let uploadConfirmationPage: UploadConfirmationPage;

  before(() => {
    uploadPage = new UploadPage;
    uploadConfirmationPage = new UploadConfirmationPage;
  });

  it("then the file should be uploaded", () => {
    // Arrange
    const file: string = "the-song.txt";
    const validationMessage: string = "File Uploaded!";
    uploadPage.visitUploadDemoSite();

    // Action
    uploadPage.uploadFile(file);

    // Assertion
    uploadConfirmationPage.validateUpload(validationMessage);
  });
});
