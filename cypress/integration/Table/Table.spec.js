


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

    // it.only('Verify the total sum of price colum', () => {
    //     let names = []
    //     let text3 =
    //     cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
    //         //cy.log(el.children('td').eq(1).text())
    //         if (index != 0) {
    //             //cy.log(el.children('td').eq(1).text())
    //             text3 = el.children('td').eq(1).text()
    //             names.push(text3)
    //         }
    //         return text3
           
    //         //cy.log(names)
    //     }).then((text3)=>{
    //         expect(text3).to.eq(names[index])
    //     })
    // })


})