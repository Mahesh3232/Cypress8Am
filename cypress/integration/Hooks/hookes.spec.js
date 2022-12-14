

describe('Verify the hooks methods in cypress',()=>{
    before(function(){
        //run only ones before execution
        cy.log('I am from before')
    })

    beforeEach(function(){
        //before each it block
        cy.log('I am from beforeEach')
    })

    after(function(){
        //run ones after all execution
        cy.log('I am from After')
    })

    afterEach(function(){
        //after each it block
        cy.log('I am from afterEach')
    })

    it('TestCase One',()=>{
        cy.log('I am from TestCaseOne')
    })

    it('TestCase Two',()=>{
        cy.log('I am from TestCasetwo')
    })
})
