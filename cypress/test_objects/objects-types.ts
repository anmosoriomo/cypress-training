type Information = {
    name: string,
    lastName: string,
    email: string,
    gender: string,
    dateOfBirth: string,
    mobileNumber: number,
    hobbies: string[],
    currentAddress: string,
  };

  type FormFields = {
    nameInput: string,
    lastNameInput: string,
    emailInput: string,
    genderInput: string,
    dateInput: {
      month: string,
      year: string,
      day: string,
    },
    mobileNumberInput: string,
    hobbiesInput: string,
    addresInput: string,
  };

  type Months = {
    Jan: string,
    Feb: string,
    Mar: string,
    Apr: string,
    May: string,
    Jun: string,
    Jul: string,
    Aug: string,
    Sep: string,
    Oct: string,
    Nov: string,
    Dic: string,
  };

export {Information, FormFields, Months};
