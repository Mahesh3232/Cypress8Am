//Actual ==> System/Application
//<reference types="cypress" />
//Actual vs Expected

//Expected ==> Requirements/Document
describe('Verify the login functionality',()=>{
    it('Verify the login functionality with valid credentials',()=>{
        cy.visit('http://www.testyou.in/Login.aspx')
        cy.get('input[name="ctl00$CPHContainer$txtUserLogin"]').type('Mahesh3232')
        cy.get('input[name="ctl00$CPHContainer$txtPassword"]').type('Sonu@3232')
        cy.get('input[name="ctl00$CPHContainer$btnLoginn"]').click()
        cy.wait(2000)
        cy.get('div[class="logo"]').should('be.visible')
        cy.get('img[src="../Student/Images/DashBoard/dashbord_heading.png"]').should('be.visible')
        cy.get('#ctl00_CPHContainer_spFirstName').should('have.text','mahesh')
    })
})

//<span id="ctl00_CPHContainer_spFirstName">mahesh</span>
//<tagname attr="Value"> Text </span>`

