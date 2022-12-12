//MouseAction
describe('Validation of mouse actions',()=>{

    it('Verify the functionality of scrollintoview',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#datepicker').scrollIntoView().click()
    })

    it('Verify the functionality of DragAndDrop',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').wait(1000).click()
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove')
        .trigger('mouseup',{force:true})
        cy.get('#droppable >p >b').should('have.text','Dropped!')
    })

    it('Verify the functionality of DoubleClick',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').wait(1000).click()
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.class','div-double-click double')
    })

    it('Verify the functionality of DoubleClick',()=>{
        cy.visit('https://practice.automationtesting.in/')
        //cy.get('#actions').invoke('removeAttr','target').wait(1000).click()
        cy.get('[data-product_id="163"]').focus()
        //.scrollIntoView().trigger('mouseover',{force:true})
    })

    it.only('Verify the functionality of DoubleClick',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').wait(1000).click()
        cy.wait(2000)
        cy.contains('Hover Over Me Second!').trigger('mouseover',{ eventConstructor: 'MouseEvent' })
    })

    it('Verify the functionality of mouseDown',()=>{
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').invoke('removeAttr','target').wait(1000).click()
        cy.wait(2000)
        cy.get('#click-box').trigger('mousedown',{which:1})
        cy.get('#click-box').should('have.text','Well done! keep holding that click now.....')
        cy.get('#click-box').trigger('mouseup')
        cy.get('#click-box').should('have.text','Dont release me!!!')
    })
})