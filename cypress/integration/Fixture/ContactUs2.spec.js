import data from "../../fixtures/Contact2.js"

data.forEach((el, index) => {
    console.log(el)
})

describe('Contact_Us using fixture file export', () => {
    data.forEach((el, index) => {
        it('form functionality using fixture File', () => {
            cy.log(data)
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.title().should('contain', 'WebDriver | Contact Us')
            cy.get('input[name="first_name"]').type(el.name)
            cy.get('input[name="last_name"]').type(el.LName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.msg)
            cy.get('input[type="submit"]').click()
            cy.get('#contact_reply').should('contain', 'Thank You for your Message!')
            cy.url().should('contain', 'thank-you.html')
            cy.title().should('contain', 'Gianni Bruno - Designer')
        })
    })
})