

describe('Validate iframe functionality',()=>{

    it('Validate Iframe with Jquery method',()=>{
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then((ele)=>{
            let body = ele.contents().find('body')
            cy.wrap(body).as('IframeBody')
            cy.get('@IframeBody').find('[href="products.html"]').should('have.text','Our Products')
        })
    })

   
})