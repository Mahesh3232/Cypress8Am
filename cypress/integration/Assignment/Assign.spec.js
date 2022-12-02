describe('Verify the login', () => {
    let SecondUrl =
    it('Verify thelogin', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.visit('https://www.trip.com/')
        cy.get('.mc-hd__login-btn').click()
        cy.window().then(win => {
            cy.stub(win, 'open').callsFake((url, target) => {
                //cy.log(url)
                SecondUrl = url
                return win.open.wrappedMethod.call(win, url, '_self')
            }).as('open');
            cy.get('.way_icon_gl').click()
            cy.wait(3000)
           // cy.log(SecondUrl)
            //  cy.get('@open'); 
            cy.origin(SecondUrl)
        });
    })
})