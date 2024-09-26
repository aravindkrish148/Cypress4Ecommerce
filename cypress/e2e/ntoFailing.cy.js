import homePage from "../PageObjects/homePage";
import productCategoryPage from "../PageObjects/productCategoryPage";
import productPage from "../PageObjects/productPage";

describe('Should Fail 1', () => {
    it('Should Fail 1', () => {

      cy.visit('https://www.northerntrailoutfitters.com/default/homepage') //launching Page

      homePage.signIn();
      homePage.validateProfile();
      // productCategoryPage.selectProduct();
      productPage.selectTypeAndAddProduct();
      
    })
  })


//   element(by.css('')).sendKeys('testPassword1234') 
//   element(by.cssContainingText('button', 'Create new account')).click()