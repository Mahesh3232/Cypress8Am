


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
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((ele) => {
            cy.log(ele)
            let IframeBody = ele['0'].contentDocument.body
           cy.wrap(IframeBody).as('iframe')
            cy.get('@iframe').find('[href="products.html"]')
                .should('be.visible').and('have.text', 'Our Products')
            cy.get('@iframe').find('[href="../Contact-Us/contactus.html"]')
                .should('be.visible').and('have.text', 'Contact Us')
            cy.get('@iframe').find('[href="index.html"]')
                .should('be.visible').and('have.text', 'Home')
        })
    })
})