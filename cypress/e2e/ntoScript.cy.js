import homePage from "../PageObjects/homePage";
import productCategoryPage from "../PageObjects/productCategoryPage";
import productPage from "../PageObjects/productPage";
import shippingAndPayment from "../PageObjects/shippingAndPayment";

describe('Place Order NTO Retail Site 1', () => {
    it('Regular Order Flow 1',{tags: ['@smoke','@regression']}, () => {

      cy.visit('https://www.northerntrailoutfitters.com/default/homepage') //launching Page

      homePage.signIn();
      homePage.validateProfile();
      productCategoryPage.selectProduct();
      productPage.selectTypeAndAddProduct();
      productPage.openCartAndCheckout();
      shippingAndPayment.confirmShippingAndPlaceOrder();
    })
  })


//   element(by.css('')).sendKeys('testPassword1234') 
//   element(by.cssContainingText('button', 'Create new account')).click()