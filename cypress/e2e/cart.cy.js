import { url, urlCart} from "./shared/dataPage"
import selector from "./shared/selectorsPage"
import { addProductToCart, addProductsToCart, checkCartItems, goToCart } from './shared/functions'


describe('Cart', () => {
  
  beforeEach(() => {
    cy.visit(url)
  })

  const visitCart = () => {
    cy.contains('Cart').click();
    cy.url().should('include', urlCart);
  }

  it('View items in the cart.', () => {
    visitCart();
    cy.get(selector.informCartIsEmpty).should('be.visible').then((inform) => {
        expect(inform.text().trim()).be.equal('Cart is empty!')
    })
    checkCartItems(0);

  })
  it('Add items in the cart', () => {
    addProductsToCart([
      selector.addFirstProductInTheCart,
      selector.addSecondProductInTheCart,
      selector.addThirdProductInTheCart
    ])
    goToCart();
    cy.get('tbody tr').should('have.length', 3);

  })

  it('Update item quantities', () => {
    addProductsToCart([
      selector.addFirstProductInTheCart,
      selector.addSecondProductInTheCart,
      selector.addThirdProductInTheCart
    ])
    addProductToCart(selector.addFourthProductInTheCart)
    goToCart();
    checkCartItems(4);
  })

  it('Remove items from the cart', () => {
    addProductsToCart([
      selector.addFirstProductInTheCart,
      selector.addSecondProductInTheCart,
      selector.addThirdProductInTheCart
    ])
    goToCart();
    checkCartItems(3);
    cy.get(selector.cartItemsQuantities).find('.cart_quantity_delete').eq(2).click();
    checkCartItems(2);
  })
})

