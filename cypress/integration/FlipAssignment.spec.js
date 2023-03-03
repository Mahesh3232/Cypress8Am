describe("verify the amazone product", function () {
    it("search the product", function () {
        cy.visit('https://www.flipkart.com/')
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        });
        cy.get('input[title="Search for products, brands and more"]').type('iphone14');
        cy.get('button[type="submit"]').click({ force: true });
        cy.wait(3000);
        let prices = []
        cy.get('._2_R_DZ > :nth-child(1) > :nth-child(1)').each(val => {
            let rating = Number(val.text().replace(' Ratings', '').trim().replace(',', ''))
            prices.push(rating)
        }).then(() => {
            const result = Math.min(...prices)
            cy.log(`lowest ratings are ${result} Ratings`)
            cy.wait(2000)
            cy.contains(`${result} Ratings`).find('[class="col col-5-12 nlI3QM"]').first().then((el)=>{
                let p1 =el.find('[class="_30jeq3 _1_WHN1"]')
                cy.log(`Lowest rating product price is ${p1.text()}`)
            })
        })
    })
})