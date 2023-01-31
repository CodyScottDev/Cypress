context('Assignment 2', () => {

    it('Do something on google.com', () => {
        cy.visit('https://www.riotgames.com')
        //Click Sign in button
        cy.get('#riotbar-right-content > div.undefined.riotbar-mobile-nav-reset > div.NdBeQYcLqU4Kk0TKCylFc.riotbar-menu-icon').click()
        cy.wait(2000)
        //Click Sign in
        cy.contains('SIGN IN').click({force: true})
        //Click username field and add username
        cy.get('body > div:nth-child(3) > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > div.grid.grid-align-center.grid-justify-space-between.grid-fill.grid-direction__column.grid-panel-web__content.grid-panel__content > div > div > div > div:nth-child(1) > div > input').type('cmoney0531')
        //Click password field and add password
        cy.get('body > div:nth-child(3) > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > div.grid.grid-align-center.grid-justify-space-between.grid-fill.grid-direction__column.grid-panel-web__content.grid-panel__content > div > div > div > div.field.password-field.field--animate > div > input').type('Maovang0531!')
        //Click on sign in button
        cy.get('body > div:nth-child(3) > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > button').click()

    })

})