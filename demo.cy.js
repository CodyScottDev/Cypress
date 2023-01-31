/// <reference types="cypress" />

context('My Demo', () => {

    it('Do something on google.com', () => {
        cy.visit('https://www.target.com')
        cy.get('#headerPrimary > a.styles__PrimaryHeaderLink-sc-srf2ow-1.styles__StyledLinkNamedIcon-sc-u2k6h-1.hamxlk.bIgwdA').click()
        cy.get('#listaccountNav-signIn > a > span').click()
    })

})
