describe('Validate fileUplode functionality',()=>{

    it('Verify file uplode functionality',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('fileUplode.jpeg')
        cy.get('#file-submit').click()
        cy.get('.example > h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('fileUplode')
    })

    it('Verify file uplode functionality',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'fileUplode.jpeg',fileName:"Mahesh.jpeg"})
        cy.get('#file-submit').click()
        cy.get('.example > h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').contains('Mahesh')
    })

    it.only('Verify file multiple file uplode functionality',()=>{
        let fileArr = ['fileUplode.jpeg','fileUplode2.jpeg','fileUplode3.jpeg']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(fileArr)
        cy.get('#fileList').children().should('have.length',fileArr.length)
        cy.get('#fileList').children().first().should('have.text',fileArr[0])
    })
})