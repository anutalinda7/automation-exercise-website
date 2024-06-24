import { url, urlCart} from "./shared/dataPage"
import selector from "./shared/selectorsPage"


describe('Cart', () => {
  
  beforeEach(() => {
    cy.visit(url)
  })

  const addThreeProducts = () => {
    cy.get(selector.addFirstProductInTheCart).click({force: true, multiple :true});
    cy.get(selector.btnContinueShopping).click();
    cy.get(selector.addSecondProductInTheCart).click({force: true, multiple :true});
    cy.get(selector.btnContinueShopping).click();
    cy.get(selector.addThirdProductInTheCart).click({force: true, multiple :true});
    cy.get(selector.btnContinueShopping).click();
    cy.wait(2000)
  }

  const visitCart = () => {
    cy.contains('Cart').click();
    cy.url().should('include', urlCart);
  }

  const goToCart = () => {
    cy.contains('View Cart').click();
    cy.url().should('include', urlCart);
  }
  const checkCartsItems = (items) => {
    cy.get(selector.cartItemsQuantities).should('have.length', items);
  }

  it('View items in the cart.', () => {
    visitCart();
    cy.get(selector.informCartIsEmpty).should('be.visible').then((inform) => {
        expect(inform.text().trim()).be.equal('Cart is empty!')
    })
    checkCartsItems(0);

  })
  it('Add items in the cart and View items in the cart.', () => {
    addThreeProducts();
    goToCart();
    cy.get('tbody tr').should('have.length', 3);

  })

  it('Update item quantities', () => {
    addThreeProducts();
    cy.get(selector.addFourthProductInTheCart).click({force: true, multiple :true});
    cy.get(selector.btnContinueShopping).click();
    goToCart();
    checkCartsItems(4);
  })

  it('Remove items from the cart', () => {
    addThreeProducts();
    goToCart();
    checkCartsItems(3);
    cy.get(selector.cartItemsQuantities).find('.cart_quantity_delete').eq(2).click();
    checkCartsItems(2);
  })
})

