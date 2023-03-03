

describe('Test', () => {

    it('click the AMOUNT header in the transaction table and check the values are sorted', function () {
        cy.visit('https://sakshingp.github.io/assignment/login.html')
        cy.get('#username').type('pranita')
        cy.get('#password').type('pranita')
        cy.get('[type="checkbox"]').check()
        cy.get('#log-in').click()
        cy.get('[id="amount"]').click()
        let arr = []
        cy.get('[class="text-right bolder nowrap"]').each(function (el) {
            let ele = (el.text().replace('USD', ' ').trim())
            arr.push(parseFloat(ele.split(' ').join('').replace(',', '')))
        }).then(() => {
            expect(arr).to.eq(arr.sort())
        })
    })

    it('TC sorting', function () {
        cy.visit('https://sakshingp.github.io/assignment/login.html')
        cy.get('[id="username"]').type('nik22@gmail.com')
        cy.get('[id="password"]').type('Nikhita@22')
        cy.get('[class="btn btn-primary"]').click()
        cy.get('[id="amount"]').should('be.visible').click()
        let arr = []
        cy.get('table>tbody>tr').each(function (el) {
            let element = (el).find('td').last().text()
            let ele = (element.replace('USD', ' ').trim())
            arr.push(parseFloat(ele.split(' ').join('').replace(',', '')))
        }).then(function () {
            cy.log(arr)
            expect(arr).to.eq(arr.sort())
        })
    })

    it.only("sorts", () => {
        //cy.get('.auth-header').should('include','Login Form')
        cy.visit("https://sakshingp.github.io/assignment/login.html")
        cy.intercept('https://sakshingp.github.io/assignment/home.html').as('Waituntil')

        cy.get('#username').type('Naziya')
        cy.get('#password').type('Naaz@234')
        cy.get('#log-in').click()
        cy.url().should('include', 'home.html')
        cy.get('#transactionsTable tbody tr ').should('have.length', 6)
        cy.get('#amount').click()
        cy.get('#transactionsTable tbody td + td +td +td +td').then(($prices) => {
            const sortcell = Cypress._.map($prices)
            const sortel = Cypress._.sortBy($prices)
            cy.log(sortcell)
            //cy.log(sortel)
            //cy.wait('@Waituntil')
            expect(sortcell, 'cells are sorted').to.deep.equal(sortel)
        })

    })
})