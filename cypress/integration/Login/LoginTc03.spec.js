//<reference types="cypress" />
//AAA ==> Arrange,Action,Asertions
describe('Verify the login functionality',()=>{
    it('Verify the login functionality with valid credentials',()=>{
        //Action
        //Visit the URl
        cy.visit('https://www.saucedemo.com/')
        //Fill Username
        cy.get('input[id="user-name"]').type('standard_user')
        //Fill Password
        cy.get('#password').type('secret_sauce')
        //Click on login button
        cy.get('#login-button').click()
        //Assetions
        //Implicit assertions ==> Should
        //Explicit Assertions ==> Expect 
        //Verify the logo
        cy.get('div[class="app_logo"]').should('be.visible')
        //Verify the Url
        cy.url().should('contains','inventory.html')
        //Verify the text
        cy.get('span[class="title"]').should('have.text','Products')
    })

    it('Verify the login functionality with invalid credentials',()=>{
        //Action
        //Visit the URl
        cy.visit('https://www.saucedemo.com/')
        //Fill Username
        cy.get('input[id="user-name"]').type('standard_user2345')
        //Fill Password
        cy.get('#password').type('secret_sauce1234')
        //Click on login button
        cy.get('#login-button').click()
        //Assetions
        cy.get('button[class="error-button"]').should('be.visible')
        cy.get('h3[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')

    })
})
//<button>Text
//Mahesh Sunil Aher 
//</botton>