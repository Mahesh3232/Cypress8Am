


describe('Verify the functionality of alerts',()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it('Verify the basic javaScript Alert',()=>{
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert',function(str){
            expect(str).to.eql('I am a JS Alert')
            return true
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('Verify the confirm javaScript Alert',()=>{
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm',function(str){
            expect(str).to.eql('I am a JS Confirm')
            return true
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it('Verify the confirm javaScript Alert',()=>{
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm',function(str){
            expect(str).to.eql('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('Verify the prompt javaScript Alert',()=>{
        cy.window().then(($win)=>{
            cy.stub($win,'prompt').returns('I am new to javaScript')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text','You entered: I am new to javaScript')
    })

    it('Verify the basic alert with stub',()=>{
        cy.window().then(($win)=>{
            cy.stub($win,'alert').returns(true)
            cy.contains('Click for JS Alert').click()
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it.only('Verify the basic alert with stub',()=>{
        cy.window().then(($win)=>{
            cy.stub($win,'confirm').returns(true)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text','You clicked: Ok')
    })

    it.only('Verify the basic alert with stub',()=>{
        cy.window().then(($win)=>{
            cy.stub($win,'confirm').returns(false)
            cy.contains('Click for JS Confirm').click()
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
    })
})