describe('Traverse methods in cypress', () => {
    it('To get the closest ancestor DOM element, use the .closest() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('div[class="container"]').first().closest('nav').should('have.class', 'navbar navbar-inverse navbar-fixed-top')
        cy.get('button[type="submit"]').closest('div').should('have.class', 'traversal-buttons')
    })

    it('To get parent DOM element of elements, use the .parent() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#nav-container').parent().should('have.class', 'col-sm-12')
        cy.get('.traversal-cite-text').parent().should('have.class', 'thumbnail')
    })

    it('To get parents DOM element of elements, use the .parents() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').parents().should('have.class', 'thumbnail')
        cy.get('div[class="col-sm-12"]').last().parents().should('have.class','row')
        cy.get('div[class="col-sm-12"]').last().parents().should('have.attr','class','row')
    })

    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.', () => {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#espresso').parentsUntil('div[class="thumbnail"]').should('have.length',1)
        cy.get('input[type="reset"]').parentsUntil('form[id="form-textfield"]').should('have.length',1)
    })
})