class ProductPage {
  
  xlSize(){ return cy.get('[data-attr-value="AEJ"]') }
  quantity(){ return cy.get('select') }
  addToCart(){ return cy.get('.add-to-cart') }

  cartIcon(){ return cy.get('section.preheader .minicart .minicart-total') }
  viewCartBtn(){ return cy.get('.btn-outline-primary') }
  checkoutBtn(){ return cy.get('.checkout-btn') }

  selectTypeAndAddProduct(){
      this.xlSize().click();
      this.quantity().select(8);
      this.addToCart().click();
  }

  openCartAndCheckout() {
    
    this.viewCartBtn().should('be.visible');
    // cy.get('.btn-outline-primary', { timeout: 6000 }).should('not.exist');
    // this.cartIcon().click();
    this.viewCartBtn().click();
    this.checkoutBtn().then($element => {
      // Trigger a click event on the element
      $element[0].click();
    });
  }

}
  
export default new ProductPage()