const usuario = require('../fixtures/usuario.json')

class HomePage {
    elements = {
        checkText: () => cy.contains(`Olá ${usuario.name}`),
    };
  
    checkTextLogin(){
      this.elements.checkText().should('be.visible')
    }

  }

  module.exports = new HomePage();