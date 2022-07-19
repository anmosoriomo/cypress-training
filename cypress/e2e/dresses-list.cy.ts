import {MenuContentPage, DressesListPage}
  from "../page/index";

describe("the user navigation to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage;
    dressesListPage = new DressesListPage;
  });

  it("show the available dresses", () => {
    // Arrange
    const expectedDressesList = [
      "Printed Dress",
      "Printed Dress",
      "Printed Summer Dress",
      "Printed Summer Dress",
      "Printed Chiffon Dress",
    ];
    const numberOfDresses = 5;
    menuContentPage.visitMenuContentPage();

    // Action
    menuContentPage.goToDressesMenu();

    // Assertion
    dressesListPage.validateItemsNumber(numberOfDresses);
    dressesListPage.validateItemsName(expectedDressesList);
  });
});
