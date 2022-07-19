class LoginPage {
  private emailField: string;
  private passwordField: string;
  private logInMenu: string;

  constructor() {
    this.emailField = "#email";
    this.passwordField = "#passwd";
    this.logInMenu = "#SubmitLogin";
  }

  private fillIdFields(email:string, password:string): void {
    cy.get(this.emailField).type(email);
    cy.get(this.passwordField).type(password);
  }

  public signIn(user:string, password:string): void {
    this.fillIdFields(user, password);
    cy.get(this.logInMenu).click();
  }
}

export {LoginPage};
