


describe('Verify the Iframe', () => {

    it('Verify the iframe with jQuery', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((ele) => {
            //cy.log(ele)
            let body = ele.contents().find('body')
            cy.wrap(body).as('Ifrmaebody')
            cy.get('@Ifrmaebody').find('[href="products.html"]')
                .should('be.visible').and('have.text', 'Our Products')
        })
    })

    it.only('Verify the iframe with Javascript', () => {
        // cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        // cy.get('#frame').then((ele) => {
        //     cy.log(ele)
        //     let IframeBody = ele['0'].contentDocument.body
        //    cy.wrap(IframeBody).as('iframe')
        //     cy.get('@iframe').find('[href="products.html"]')
        //         .should('be.visible').and('have.text', 'Our Products')
        //     cy.get('@iframe').find('[href="../Contact-Us/contactus.html"]')
        //         .should('be.visible').and('have.text', 'Contact Us')
        //     cy.get('@iframe').find('[href="index.html"]')
        //         .should('be.visible').and('have.text', 'Home')
        // })

        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.get(':nth-child(2) > .analystic').click()
        cy.get('iframe[src="MultipleFrames.html"]').then($firstIframe => {
            const $secondIframeReference = $firstIframe.contents().find('body');
            cy.wrap($secondIframeReference).as('secondIframeReference');
        })
        // Now we are accessing the second iframe

        cy.get('@secondIframeReference').then($secondIframe => {
            const $elementYouWant = $secondIframe.contents().find('.row');
            cy.wrap('$elementYouWant').type("Hello"); // In case it is an input field, for example
        })
    })
})