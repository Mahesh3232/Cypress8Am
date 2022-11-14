describe('Verify the contactUs form functionality',()=>{
    it('form functionality',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.title().should('contain','WebDriver | Contact Us')
        cy.get('input[name="first_name"]').type('Mahesh')
        cy.get('input[name="last_name"]').type('Aher')
        cy.get('input[name="email"]').type('abc.199@gmail.com')
        cy.get('textarea[name="message"]').type('I am new in cypress')
        cy.get('input[type="submit"]').click()
        cy.get('#contact_reply').should('contain','Thank You for your Message!')
        cy.url().should('contain','thank-you.html')
        cy.title().should('contain','Gianni Bruno - Designer')
    })
   
})