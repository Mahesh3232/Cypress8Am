



describe('Verify the functionality of calender', () => {

    it('Veridy the functionality of calender', () => {
        let date = new Date()
        date.setDate(date.getDate() + 200)
        let day = date.getDate()
        let month = date.getMonth() //index of current month
        let monthInText = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()
        let monthAndYear = `${monthInText} ${year}`
        cy.log(monthAndYear)
        cy.log(day)
        //cy.log(month)
       // cy.log(monthInText)
        //cy.log(year)
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('#datepicker').click()
        function getYear() {
            cy.get('.datepicker-switch').first().then((el) => {
                //cy.log(el.text())
                if (!el.text().includes(monthAndYear)) {
                    cy.get('.next').first().click()
                    getYear()
                }
            })
        }
        getYear()
        cy.get('.day').contains(day).click()
    })
})