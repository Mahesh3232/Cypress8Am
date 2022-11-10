//javaScript is object oriented language
//cy ==> object 
describe('Verify the login functionality',()=>{

    it('Verify the login functionality with valid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.get('img[alt ="client brand banner"]').should('be.visible')
    })

    it('Verify the login functionality with invalid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin12345')
        cy.get('button[type="submit"]').click()
        cy.get('.oxd-alert-content-text').should('be.visible')
        cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
    })
    
})

//<h1 class ="One" id="Login">Login</h1>
//tagname[attr=Value]
// h1[id="Login"]
// .one
// #login