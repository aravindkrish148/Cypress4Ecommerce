class PCPage {
    
    selectProduct(){
      cy.get('li:has(#men)').click();
      cy.contains('h5', 'Tops').click();
      cy.contains('button', 'More Results').click();
      cy.get('[title="Cargo Khaki / Zion Orange"]').click();
    }

  }
  
  export default new PCPage()