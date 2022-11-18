



describe('Verify the functionality of table', () => {

    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    it('Verify the total sum of price colum', () => {
        let sum = 0
        cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
            // cy.log(el.text())
            //cy.log(el.children().last().text())
            // //if(index != 0){
            //     sum = sum + Number(el.children('td').last().text())
            // //}
            //cy.log(typeof(sum))
            //cy.log((el.children('td').last().text()))
            sum = sum + Number(el.children('td').last().text())

        }).then(() => {
            expect(sum).to.eq(7100)
            //cy.log(sum)
        })
    })

    it.only('Verify the total sum of price colum', () => {
        let names = ['', 'Amit', 'Mukesh', 'Animesh', 'Mukesh', 'Amod', 'Amit']
        cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
            if (index != 0) {
                cy.get(el).children().eq(1).should('have.text', names[index])
            }
            console.log(names)
        })
    })
})