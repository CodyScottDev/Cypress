/// <reference types="cypress" />

context('Assignment 1', () => {

    it('Do something on google.com', () => {
        cy.visit('https://www.target.com')
        cy.get('#search').type('toys')
        //Click on search result for toys for 1 year old
        cy.get('#typeahead > li:nth-child(1) > div > a > span > b:nth-child(2)').click()
        //Click on toy vehicles
        cy.get('#pageBodyContainer > div:nth-child(1) > div > div:nth-child(4) > div > div.styles__StyledRow-sc-wmoju4-0.iYeeUz > div.styles__StyledCol-sc-fw90uk-0.ePYoxU > div > div.styles__FacetsStyledContainer-sc-y0hm-0.kuIhGP.h-margin-b-default > div.h-margin-b-tight > div > div > li:nth-child(6) > a > div > div.AspectRatio__AspectRatioContainer-sc-1c5hpa0-0.fYdYdY.styles__StyledAspectRatio-sc-12vb1rw-1.bOZiSc.styles__PictureElement-sc-15suhkx-3.jvDEU > div > div').click()
        //Click on first toy
        cy.wait(2000)
        cy.get('#pageBodyContainer > div:nth-child(1) > div > div:nth-child(4) > div > div > div.styles__StyledCol-sc-fw90uk-0.ePYoxU > div > section > div > div:nth-child(1) > div > div > div.styles__ImageAndInfoWrapper-sc-1iglypx-3.lmjkvZ > div.styles__StyledProductCardBody-sc-bcz5ql-0.ciEEqI > div > div > div.styles__ProductCardItemInfoDiv-sc-h3r0um-0.idUsSc > div.h-display-flex > div.Truncate-sc-10p6c43-0.flAIvs > a').click()
        //Click on age
        //cy.get('#pageBodyContainer > div:nth-child(1) > div > div:nth-child(4) > div > div > div.styles__StyledCol-sc-fw90uk-0.ePYoxU > div > div.styles__FacetsStyledContainer-sc-y0hm-0.kuIhGP.h-margin-b-default > div.h-display-flex > div.styles__NicolletFilmstripDiv-sc-13ttrxt-0.ibVfbp.styles__PaddedFilmstrip-sc-1uuyhp1-0.cNvsjB.h-margin-b-tight > div > div:nth-child(8) > button').click()
        //Click on age input box
        //cy.get('#chk-5zl3y').check({force: true})
    })

})
