


describe('Verify the functionality of Radio buttons and checkbox', () => {
    beforeEach(() => {
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })
    it('TC01 verify the functionality of checkbox using check method', () => {
        //check
        //click
        cy.get('[value="red"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="orange"]').should('not.be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
    })

    it('TC02 verify the functionality of checkbox using check method', () => {
        cy.get('[value="red"]').click().should('be.checked')
        cy.get('[value="yellow"]').click().should('be.checked')
        cy.get('[value="blue"]').click().should('be.checked')
        cy.get('[value="orange"]').should('not.be.checked')
        cy.get('[value="green"]').should('not.be.checked')
        cy.get('[value="purple"]').should('not.be.checked')
        cy.get('[value="blue"]').click().should('not.be.checked')
    })

    it('TC03 check the multiple checkboxes at ones', () => {
        cy.get('[type="checkbox"]').each((el, i) => { //jquery
            cy.wrap(el).check().should('be.checked')
        })
        cy.get('[value="orange"]').uncheck().should('not.be.checked')
    })

    it.only('TC04 check the multiple checkboxes at ones', () => {
        cy.get('[type="checkbox"]').check(['red','yellow','blue','orange','green']).should('be.checked')
    })

    it('TC05 check the functionality of radio buttons', () => {
       cy.get('[type="radio"]').first().should('be.checked')
       cy.get('[type="radio"]').eq(1).check().should('be.checked')
       cy.get('[type="radio"]').last().should('not.be.checked')
    })

    it('TC06 check the functionality of radio buttons', () => {
        cy.get('[type="radio"]').each((el,i)=>{
            cy.wrap(el).check().should('be.checked')
        })
     })
})