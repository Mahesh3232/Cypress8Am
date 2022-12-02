describe('Verify the funcyionality of the APIs', () => {

    it('Verify the Get User List API', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                Authorization: "Bearer b293d7e93b8cf0581e47b8288e9808cad0b1ced103c84d9c2dc83a1e4ad43a06"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eql(200)
            expect(res.body.length).to.eql(10)
            expect(res.duration).to.be.lessThan(600)
        })
    })

    it('Verify the Get User List API', () => {
        let email = `tenali.ramakrishna@15${Math.random() * 6}ce.com`
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": email,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer b293d7e93b8cf0581e47b8288e9808cad0b1ced103c84d9c2dc83a1e4ad43a06"
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eql(201)
            expect(res.duration).to.be.lessThan(800)
        })
    })

    it.only('Verify the PUT API', () => {
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/3885",
            body: {
                "name": "Allasani Peddana",
                "email": "allasani.peddana@15ce.com",
                "status": "active"
            },
            headers: {
                Authorization: "Bearer b293d7e93b8cf0581e47b8288e9808cad0b1ced103c84d9c2dc83a1e4ad43a06"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(200)
            expect(res.duration).to.be.lessThan(600)
        })
    })

    it.only('Verify the PUT API', () => {
        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/3885",
            headers: {
                Authorization: "Bearer b293d7e93b8cf0581e47b8288e9808cad0b1ced103c84d9c2dc83a1e4ad43a06"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(204)
            expect(res.duration).to.be.lessThan(600)
        })
    })
})