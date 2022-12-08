

describe('Verify the fileuplode functionality',()=>{

    it.only('TC01 Fileuplode',()=>{
        let file = 'fileUplode.jpeg'
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile(file)
        cy.get('#file-submit').click()
        cy.get('.example>h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').should('contain',file)
    })

    it('TC02 Multiple file uplode',()=>{
        let filesToUplode = ['fileUplode.jpeg','fileUplode2.jpeg','fileUplode3.jpeg']
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(filesToUplode)
        cy.get('#fileList').children().should('have.length',filesToUplode.length)
    })

    it('TC02 Multiple file uplode',()=>{
        let filesToUplode = 'fileUplode.jpeg'
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile({filePath:filesToUplode,fileName:'MyImage'})
        cy.get('#fileList').children().first().should('contain','MyImage')
    })

})