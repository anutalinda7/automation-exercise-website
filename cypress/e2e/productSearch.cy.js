import { url, searchProductName } from "./shared/dataPage"
import selector from "./shared/selectorsPage"


describe(('Product Search'), () => {
  beforeEach(() => {
    cy.visit(url);
  })

    it('Search for producs using valid keywords', () => {
      cy.contains('Products').click();
      cy.get(selector.inputSearchProducts).type(searchProductName);
      cy.get(selector.btnSubmitSearch).click();
      // cy.get('.product').should('have.length.greaterThan', 0);
      cy.contains('Searched Products').should('be.visible');
    })

    it('Filter search results by category, price, etc.', () => {
      cy.get('.panel-title').find('a').eq(0).click();
      cy.get('.panel-body').find('a').eq(0).click();
      cy.contains('Women - Dress Products').should('be.visible').and('have.text', 'Women - Dress Products')
})
})
