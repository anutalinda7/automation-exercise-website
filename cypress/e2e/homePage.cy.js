import { url, mainBtn} from "./shared/dataPage"
import selector from "./shared/selectorsPage"


describe('Home Page', () => {
  
  beforeEach(() => {
    cy.visit(url)
  })
  it('Verify that the home page loads successfully.', () => {
    cy.get('.logo.pull-left').should('be.visible');
    cy.get(selector.subscriptionLabel).scrollIntoView().should('be.visible');
  })

  it('Verify that the shop menu is displayed', () => {
    cy.get(selector.shopMenu).should('be.visible');
  })

  it('Verify that all sections of shop menu is displayed', () => {
    mainBtn.forEach((btn, index) => {
      cy.get(selector.shopMenu).find('a').eq(index).should('include.text', btn) 
    })
    // cy.get('.shop-menu').find('a').then( btn => {
    //   cy.get(btn).eq(0).should('have.text', mainBtn[0])
    // })
  })

  it('Verify that all main sections are displayed correctly', () => {
    cy.contains('Category').should('be.visible');
    cy.contains('Features Items').should('be.visible');
    cy.contains('Brands').scrollIntoView().should('be.visible');
    cy.contains('recommended items').scrollIntoView().should('be.visible');
    cy.contains('Category').should('be.visible');
    cy.get(selector.subscriptionLabel).scrollIntoView().should('be.visible');

  })
})

