import { url} from "./shared/dataPage"
import selector from "./shared/selectorsPage"

describe(('Product Details'), () => {
  beforeEach(() => {
    cy.visit(url);
  })
 
  it('View product details page', () => {
    cy.get(selector.viewProductDetails).click();
     cy.get(selector.productDetailsAvailability)
      .should('be.visible')
      .then(($availability) => {
        expect($availability.text().trim()).to.equal('Availability:');
      });
    cy.get(selector.productDetailsAvailabilityValue)
      .should('be.visible')
      .then(($stockStatus) => {
        expect($stockStatus.text().trim()).to.equal('Availability: In Stock');
      });
  })

  it('Add product to cart from details page', () => {
    cy.get(selector.viewProductDetails).click();
    cy.get(selector.btnAddProductFromDetailsPage).should('be.visible').click({force: true});
    cy.get(selector.btnContinueShopping).then((label) => {
      expect(label.text().trim()).to.be.equal('Continue Shopping')
    })

  })
})