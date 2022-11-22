

describe('Verify the status codes of basic APIs', () => {
    it('Verify the status code of GET Api', () => {
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2"
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
        })
    })

    it('Verify the status code of Post Api', () => {
        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(201)
        })
    })

    it('Verify the status code of PUT Api', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
        })
    })

    
    it('Verify the status code of DELETE Api', () => {
        cy.request({
            method: "DELETE",
            url: "https://reqres.in/api/users/2"
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(204)
        })
    })
})