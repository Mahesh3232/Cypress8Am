describe('Veridy Todo app apis', () => {

    it('Verify AllTodos Api', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: "allTodos",
                query: `query allTodos {
                    allTodos {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                variables: {}
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
        })
    })

    it('Verify AllTodos Api', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: "AddTodo",
                query: `mutation AddTodo($title: String!) {
                    createTodo(title: $title, completed: false) {
                      id
                      __typename
                    }
                  }`,
                variables: { title: "Learn JavaScript" }
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
        })
    })

    it('Verify AllTodos Api', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: "updateTodo",
                query: `mutation updateTodo($id: ID!, $completed: Boolean!) {
                    updateTodo(id: $id, completed: $completed) {
                      id
                      title
                      completed
                      __typename
                    }
                  }`,
                variables: { id: "211", completed: true }
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
        })
    })

    it.only('Verify AllTodos Api', () => {
        cy.request({
            method: "POST",
            url: "http://localhost:3000/",
            body: {
                operationName: "DeleteTodo",
                query: `mutation DeleteTodo($id: ID!) {
                    removeTodo(id: $id) {
                      id
                      __typename
                    }
                  }`,
                variables: { id: "21" }
            }
        }).then((res) => {
            cy.log(res)
            expect(res.status).to.eq(200)
        })
    })
})