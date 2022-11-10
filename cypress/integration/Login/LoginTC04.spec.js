

describe('Verify the login functionality',()=>{
    it('Varify the login functionality with valid credentilas',()=>{
        //Action 
        //Visit the Url 
        cy.visit('https://www.zoomin.com/sign-in?%2F')
        cy.get('input[name="email"]').type('mahesh.aher1999@gmail.com')
        cy.get('input[type="password"]').type('Sonu@3232')
        cy.get('button[type="submit"]').click()
        cy.get('img[class="MuiAvatar-img"]').should('be.visible')
        cy.url().should('contain','zoomin')
        //'Mahesh Sunil Aher'
        //Sunil
    })

    it('Varify the login functionality with invalid credentilas',()=>{
        //Action 
        //Visit the Url 
        cy.visit('https://www.zoomin.com/sign-in?%2F')
        cy.get('input[name="email"]').type('mahesh.aher1999@gmail.com')
        cy.get('input[type="password"]').type('Sonu@32324532')
        cy.get('button[type="submit"]').click()
        //assertions
    })
})