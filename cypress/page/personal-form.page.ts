import {Information, FormFields, Months}
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
        day: ".react-datepicker__day",
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
    const dateOfBirth = info.dateOfBirth.split(" ");
    const month = dateOfBirth[1] as string;
    const months: Months = {
      Jan: "January", Feb: "February", Mar: "March",
      Apr: "April", May: "May", Jun: "June",
      Jul: "July", Aug: "August", Sep: "September",
      Oct: "October", Nov: "November", Dic: "December",
    };

    cy.get(this.calendarBtn).click().then(() => {
      cy.get(this.formFields.dateInput.month)
          .select(months[month as keyof Months]);
      cy.get(this.formFields.dateInput.year).select(dateOfBirth[2]);
      cy.get(this.formFields.dateInput.day)
          .filter(`:contains("${dateOfBirth[0]}")`).then(($elem) => {
            if (dateOfBirth[0].length > 1) {
              cy.wrap($elem).last().click();
            } else {
              cy.wrap($elem).first().click();
            }
          });
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
    this.selectHobbies(personalInfo);
    cy.get(this.formFields.addresInput).type(personalInfo.currentAddress);
    this.selectDate(personalInfo);
    cy.get(this.submitBtn).click({force: true});
  }
}

export {PersonalFormPage};
