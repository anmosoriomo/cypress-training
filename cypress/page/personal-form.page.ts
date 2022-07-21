import {Information, FormFields}
  from "../test_objects/objects-types";

class PersonalFormPage {
  private personalFormPageURL: string;
  private calendarBtn: string;
  private submitBtn: string;
  private formFields: FormFields;

  constructor() {
    this.personalFormPageURL = "https://demoqa.com/automation-practice-form/";
    this.calendarBtn = "#dateOfBirthInput";
    this.submitBtn = "#submit";
    this.formFields = {
      nameInput: "#firstName",
      lastNameInput: "#lastName",
      emailInput: "#userEmail",
      genderInput: ".custom-radio",
      dateInput: {
        month: ".react-datepicker__month-select",
        year: ".react-datepicker__year-select",
        day: ".react-datepicker__day--0",
      },
      mobileNumberInput: "#userNumber",
      hobbiesInput: ".custom-checkbox",
      addresInput: "#currentAddress",
    };
  }

  private selectGender(info: Information): void {
    cy.get(this.formFields.genderInput)
        .filter(`:contains("${info.gender}")`)
        .click();
  }

  private selectDate(info: Information): void {
    const excludeDayOutOfMonth: string = ".react-datepicker__day--outside-month";
    const dateOfBirth = new Date(info.dateOfBirth);

    cy.get(this.calendarBtn).click().then(() => {
      cy.get(this.formFields.dateInput.month)
          .select(`${dateOfBirth.getMonth()}`);
      cy.get(this.formFields.dateInput.year).select(`${dateOfBirth.getFullYear()}`);
      if (`${dateOfBirth.getDate()}`.length > 1) {
        cy.get(`${this.formFields.dateInput.day}${dateOfBirth.getDate()}`)
            .not(excludeDayOutOfMonth).click();
      } else {
        cy.get(`${this.formFields.dateInput.day}0${dateOfBirth.getDate()}`)
            .not(excludeDayOutOfMonth).click();
      }
    });
  }

  private selectHobbies(info: Information): void {
    info.hobbies.forEach((hobbie) => {
      cy.get(this.formFields.hobbiesInput)
          .filter(`:contains("${hobbie}")`)
          .click();
    });
  }

  public visitPersonalFormPage(): void {
    cy.visit(this.personalFormPageURL);
  }

  public fillForm(personalInfo: Information): void {
    cy.get(this.formFields.nameInput).type(personalInfo.name);
    cy.get(this.formFields.lastNameInput).type(personalInfo.lastName);
    cy.get(this.formFields.emailInput).type(personalInfo.email);
    this.selectGender(personalInfo);
    cy.get(this.formFields.mobileNumberInput).type(`${personalInfo.mobileNumber}`);
    this.selectDate(personalInfo);
    this.selectHobbies(personalInfo);
    cy.get(this.formFields.addresInput).type(personalInfo.currentAddress);
    cy.get(this.submitBtn).click({force: true});
  }
}

export {PersonalFormPage};
