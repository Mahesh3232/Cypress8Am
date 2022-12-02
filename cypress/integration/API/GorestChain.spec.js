

describe('Verify the gorest APIs', () => {
    it('Verify the gorest APIs', () => {
        cy.request({
            method: "POST",
            url: 'https://gorest.co.in/public/v2/users',
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `Tenali.ramakrishna@15${Math.random() * 4}ce.com`,
                "status": "active"
            },
            headers: {
                Authorization: "Bearer b293d7e93b8cf0581e47b8288e9808cad0b1ced103c84d9c2dc83a1e4ad43a06"
            }
        }).then((res) => {
           // cy.log(res)
            return res.body.id
        }).then((id) => {
            cy.request({
                method: "PUT",
                url: `https://gorest.co.in/public/v2/users/${id}`,
                body: {
                    "name": "Mahesh Aher",
                    "email": `mahesh.aher1999${Math.random()*3}@gmail.com`,
                    "status": "active"
                },
                headers: {
                    Authorization: "Bearer b293d7e93b8cf0581e47b8288e9808cad0b1ced103c84d9c2dc83a1e4ad43a06"
                }
            }).then((res)=>{
                return  res.body.id
            }).then((id)=>{
                cy.request({
                    method: "Delete",
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: "Bearer b293d7e93b8cf0581e47b8288e9808cad0b1ced103c84d9c2dc83a1e4ad43a06"
                    }
                }).then((res)=>{
                    //cy.log(res)
                    expect(res.status).to.eql(204)
                })
            })
        })
    })
})