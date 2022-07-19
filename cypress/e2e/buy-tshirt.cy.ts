import {MenuContentPage, ProductListPage,
  ShoppingCartPage, LoginPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage}
  from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shoppingCartPage: ShoppingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage;
    productListPage = new ProductListPage;
    shoppingCartPage = new ShoppingCartPage;
    loginPage = new LoginPage;
    addressStepPage = new AddressStepPage;
    shippingStepPage = new ShippingStepPage;
    paymentStepPage = new PaymentStepPage;
  });

  it("then the t-shirt should be bought", () => {
    // Arrange
    const validationMessage = "Your order on My Store is complete.";
    const userId = {
      email: "aperdomobo@gmail.com",
      password: "WorkshopProtractor",
    };
    const fadedShortSleeve = "Faded Short Sleeve T-shirts";
    menuContentPage.visitMenuContentPage();

    // Action
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart(fadedShortSleeve);
    shoppingCartPage.goToShoppingCartMenu();
    shoppingCartPage.goToAuthenticationMenu();
    loginPage.signIn(userId.email, userId.password);
    addressStepPage.goToShippingMenu();
    shippingStepPage.markTermsOfServiceCheckbox();
    shippingStepPage.goToPaymentMethodMenu();
    paymentStepPage.selectPaymentMethod();
    paymentStepPage.goToConfirmOrderMenu();

    // Assertion
    paymentStepPage.validateOrderMessage(validationMessage);
  });
});

