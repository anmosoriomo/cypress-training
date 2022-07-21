import {PersonalFormPage,
  FormConfirmationPage} from "../page/index";
import {Information} from "../test_objects/objects-types";

describe("Fill personal form", () => {
  let personalFormPage: PersonalFormPage;
  let formConfirmationPage: FormConfirmationPage;

  before(() => {
    personalFormPage = new PersonalFormPage;
    formConfirmationPage = new FormConfirmationPage;
  });

  it("then the from should be filled", () => {
    // Arrange
    const validationMessage: string = "Thanks for submitting the form";
    const personalInformation: Information = {
      name: "Holmes",
      lastName: "Salazar",
      email: "test@email.com",
      gender: "Male",
      dateOfBirth: "29 Jul 2016",
      mobileNumber: 3656589156,
      hobbies: ["Music", "Reading"],
      currentAddress: "Av siempreViva # 123",
    };
    personalFormPage.visitPersonalFormPage();

    // Action
    personalFormPage.fillForm(personalInformation);

    // Assertion
    formConfirmationPage.validateFilledForm(validationMessage);
  });
});

