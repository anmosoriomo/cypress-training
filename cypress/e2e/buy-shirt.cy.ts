import {MenuContentPage, ProductListPage,
  ShoppingCartPage, LoginPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage}
  from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

const validationMessage = "Your order on My Store is complete.";
const userId = {
  email: "aperdomobo@gmail.com",
  password: "WorkshopProtractor",
};

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productListPage.addProductToCart();

    shoppingCartPage.goToShoppingCartMenu();
    shoppingCartPage.goToAuthenticationMenu();

    loginPage.signIn(userId.email, userId.password);

    addressStepPage.goToShippingMenu();

    shippingStepPage.markTermsOfServiceCheckbox();
    shippingStepPage.goToPaymentMethodMenu();

    paymentStepPage.selectPaymentMethod();
    paymentStepPage.goToConfirmOrderMenu();

    // assertion
    paymentStepPage.validateOrderMessage(validationMessage);
  });
});
