describe('Verify the Iframe functionality', () => {

    it('Verify the Iframe With Jquery', () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((ele) => {
            // cy.log(ele)
            let body = ele.contents().find('body')
            cy.wrap(body).as('Iframe')
            cy.get('@Iframe').find('[href="products.html"]').should('have.text', 'Our Products')
        })
    })

    it.only('Verify the Iframe with javaScript',()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((ele)=>{
            //cy.log(ele)
            let body = ele['0'].contentDocument.body
          cy.wrap(body).as('IframeElement')
          cy.get('@IframeElement').find('[href="../Contact-Us/contactus.html"]').should('have.text','Contact Us')
        })
    })
})