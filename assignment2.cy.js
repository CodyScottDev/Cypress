/// <reference types="cypress" />

context('Assignment 2', () => {

    it('Do something on google.com', () => {
        cy.visit('https://www.target.com')
        cy.get('#search').type('the last of us part 1 ps5')
        //Click on search button
        cy.get('#headerPrimary > div.styles__SearchWrapper-sc-1n3stlg-0.cfjMFb > form > button.styles__SearchButton-sc-srf2ow-7.iqtmAK').click()
        cy.wait(6000)
        //Click Last of Us Part 2
        cy.contains('Last of Us Part 1').click()
        cy.wait(2000)
        //Click shipping
        cy.contains('Shipping').click()
        //Click quantity options
        cy.contains('Qty').click()
        //Click quantity 2
        //cy.contains(2).select(2)
        //cy.get('aria-label="2"').click()
        cy.get('a[aria-label="2"]').click()
        //cy.get('a[href*="questions"]').click()
        cy.wait(5000)

        //Add to cart
        cy.contains('Add to cart').click()
        cy.wait(2000)
        //Click yes for age confirmation
        cy.contains('Yes').click({force:true})
        //Click decline coverage
        cy.contains('Decline coverage').click({force:true})
        //Click on cart
        cy.get('#headerPrimary > a.styles__PrimaryHeaderLink-sc-srf2ow-1.styles__CartLink-sc-vxcbjb-0.hamxlk.fZoSdJ').click()
        cy.wait(10000)
        //Click on quantity to change quantity to zero
        cy.get('#\\:ro\\:-The\\ Last\\ of\\ Us\\ Part\\ 1\\ -\\ PlayStation\\ 5').select('0')

        cy.get('#search').type('the last of us part 1 ps5')
        //Click on search button
        cy.get('#headerPrimary > div.styles__SearchWrapper-sc-1n3stlg-0.cfjMFb > form > button.styles__SearchButton-sc-srf2ow-7.iqtmAK').click()
        cy.wait(6000)
        //Click Last of Us Part 2
        cy.contains('Last of Us Part 1').click()
        cy.wait(2000)
        //Click shipping
        cy.contains('Shipping').click()
        //Click quantity options
        cy.contains('Qty').click()
        //Click quantity 2
        //cy.contains(2).select(2)
        //cy.get('aria-label="2"').click()
        cy.get('a[aria-label="2"]').click()
        //cy.get('a[href*="questions"]').click()
        cy.wait(5000)

        //Add to cart
        cy.contains('Add to cart').click()
        cy.wait(2000)
        //Click yes for age confirmation
        cy.contains('Yes').click({force:true})
        //Click decline coverage
        cy.contains('Decline coverage').click({force:true})
        //Click on cart
        cy.get('#headerPrimary > a.styles__PrimaryHeaderLink-sc-srf2ow-1.styles__CartLink-sc-vxcbjb-0.hamxlk.fZoSdJ').click()
        cy.wait(10000)
        //Click on quantity to change quantity to zero
        cy.get('#\\:ro\\:-The\\ Last\\ of\\ Us\\ Part\\ 1\\ -\\ PlayStation\\ 5').select('0')

    })

})
