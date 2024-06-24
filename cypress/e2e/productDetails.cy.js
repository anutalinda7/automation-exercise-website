import { url} from "./shared/dataPage"
import selector from "./shared/selectorsPage"

describe(('Product Details'), () => {
  beforeEach(() => {
    cy.visit(url);
  })
 
  it('View product details page', () => {
    cy.get(`[href="/product_details/1"]`).click();
     cy.get(':nth-child(6) > b')
      .should('be.visible')
      .then(($availability) => {
        expect($availability.text().trim()).to.equal('Availability:');
      });
    cy.get('.product-information > :nth-child(6)')
      .should('be.visible')
      .then(($stockStatus) => {
        expect($stockStatus.text().trim()).to.equal('Availability: In Stock');
      });
  })

  it('Add product to cart from details page', () => {
    cy.get(`[href="/product_details/1"]`).click();
    cy.get('.btn.btn-default.cart').click({force: true});
    cy.get('.btn.btn-success.close-modal.btn-block').then((label) => {
      expect(label.text().trim()).to.be.equal('Continue Shopping')
    })

  })
})