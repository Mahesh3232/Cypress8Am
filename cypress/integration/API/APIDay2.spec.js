describe('Verify the APIS',()=>{
    it('Verify the GET Api',()=>{
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2"
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.duration).to.be.lessThan(50)
            expect(res.body.data.first_name).to.eq('Janet')
        })
    })
})