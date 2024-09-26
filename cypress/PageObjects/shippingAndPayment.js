class shippingAndPayment {
  
  goToPaymentBtn(){ return cy.get('.submit-shipping') }
  cardNumber(){ return cy.get('#cardNumber') }
  month(){ return cy.get('#expirationMonth') }
  year(){ return cy.get('#expirationYear') }
  securityCode(){ return cy.get('#securityCode') }
  saveCard(){ return cy.get('#saveCreditCard+label') }
  placeOrderBtn(){ return cy.get('.submit-payment') }
  placeConfirm(){ return cy.get('.place-order') }

  thankyouMsg() { return cy.get('.order-thank-you-msg') }
  orderNumber() { return cy.get('.order-number') }
  orderDate() { return cy.get('.order-date') }

  confirmShippingAndPlaceOrder(){
    this.goToPaymentBtn().click();

    this.cardNumber().type('4111111111111111');
    this.month().select('12')
    this.year().select('2026')
    this.securityCode().type('111')
    this.saveCard().click();
    this.placeOrderBtn().click();
    this.placeConfirm().click();
  }

  validateOrder(){
    this.thankyouMsg().should('contain','Thank You!');
    this.orderNumber().invoke('text').then(text => {
      console.log('Order Number : '+text)
    });
    this.orderDate().invoke('text').then(text => {
      console.log('Order Date : '+text)
    });
  }

}
  
export default new shippingAndPayment()