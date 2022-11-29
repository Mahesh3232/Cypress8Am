describe('Varidy the functionality of calender', () => {
    it('Varify the calender', () => {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        let date = new Date()
        date.setDate(date.getDate() + 300)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let monthInText = date.toLocaleString('default', { month: "long" })
        let year = date.getFullYear()
        // cy.log(year)
        // cy.log(day)
        // cy.log(month)
        cy.log(monthInText)
        cy.get('#datepicker').click()
        function getYearMonth() {
            cy.get('.datepicker-switch').first()
                .then((el) => {
                    // cy.log(el.text())
                    if (!el.text().includes(year)) {
                        cy.get('.next').first().click()
                        getYearMonth()
                    }
                }).then(() => {
                    cy.get('.datepicker-switch').first().then((el) => {
                        if (!el.text().includes(monthInText)) {
                            cy.get('.next').first().click()
                            getYearMonth()
                        }
                    })
                })
        }
        getYearMonth()

        function getDate() {
            cy.get('.day').contains(day).click()
        }
        getDate()
    })
})