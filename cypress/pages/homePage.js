class HomePage {
    elements = {
        checkText: () => cy.contains("Olá Mateus,"),
    };
  
    checkTextErro(){
      this.elements.checkText().should('be.visible')
    }

  }

  module.exports = new HomePage();