describe('Verify the APIS',()=>{
    it('Verify the GET Api',()=>{
        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2"
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.duration).to.be.lessThan(200)
            expect(res.body.data.first_name).to.eq('Janet')
        })
    })

    it('Verify the User per page',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(200)
            expect(res.duration).to.be.lessThan(500)
            expect(res.body.per_page).to.eq(res.body.data.length)
        })
    })

    it('Validate the Keys in object',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"
        }).then((res)=>{
            //cy.log(res)
           res.body.data.forEach(element => {
                cy.log(element)
                expect(element).to.have.keys('id','email','first_name','last_name','avatar')            
           });
           
        })
    })


    it.only('Validate the Keys in object',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                    "name": "morpheus",
                    "job": "leader"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eq(201)
            expect(res.duration).to.be.lessThan(500)
            expect(res.body).to.have.keys('createdAt','id','job','name')
            expect(res.body.id).not.to.be.null
            expect(res.body.createdAt).not.to.be.null
            expect(res.body.job).not.to.be.null
            expect(res.body.name).not.to.be.null
        })
    })
})

