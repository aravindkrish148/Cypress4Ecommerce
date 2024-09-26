class HomePage {
    visit() {
      cy.visit('/')
    }

    signInBtn(){
      return cy.get('.preheader a[href$="login"] span')
    }
    username() {
      return cy.get('#login-form-email')
    }
    password() {
      return cy.get('#login-form-password')
    }
    loginBtn() {
      return cy.get('.login button')
    }
    profileMail(){
      return cy.xpath('//dt[contains(text(),"Email")]/following-sibling::dd')
    }
    profilePhone(){
      return cy.xpath('//dt[contains(text(),"Phone")]/following-sibling::dd')
    }
  
    //Sign in
    signIn(){
      this.signInBtn().click();
      this.username().type('cypressauto@yopmail.com');
      this.password().type('Sirius@123');
      this.loginBtn().click();
    }

    //Validate Acc details
    validateProfile(){
      this.profileMail().should('contain', 'cypressauto@yopmail.com');
      this.profilePhone().should('contain', '9876543211');
    }


  }
  
  export default new HomePage()