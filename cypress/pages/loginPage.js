class LoginPage {
  visit() {
    cy.visit('https://bugbank.netlify.app/');
  }
  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }
  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }
  submit() {
    cy.contains('Acessar').click();
  }
  checkErrorMessage(msg) {
    cy.contains(msg).should('be.visible');
  }
}

export default new LoginPage();
