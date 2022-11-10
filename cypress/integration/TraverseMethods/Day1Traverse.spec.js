


describe('Verify the elements with using traverse methods', () => {
    // <ul>
    //     <li>Apple</li>//0
    //     <li>Mango</li>//1
    //     <li>Gavua</li>//2
    //     <li>Grapes</li>//3
    // </ul>
    //Actual vs expected
    //children()
    it.skip('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
    })

    it.skip('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().should('have.length', 3)
    })

    //eq()
    //<li id="One">Grapes</li> //text 
    it('To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text', 'Milk')
    })

    it('To get a DOM element at a specific index, use the .eq() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(4).should('have.text', 'Cherries')
    })

    //first()
    it('To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-buttons').children().first().should('have.text', 'Link')
    })

    //last()
    it.only('To get the first DOM element within elements, use the .first() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.text','Sugar')
    })
})