class LoginPage {
    elements = {
        SiteVisit: () => cy.visit('https://bugbank.netlify.app/'),
        emailImput: () => cy.xpath("//form[@class='style__ContainerFormLogin-sc-1wbjw6k-0 eTrcYr']//input[@placeholder='Informe seu e-mail']"),
        passwordImput: () => cy.xpath("//form[@class='style__ContainerFormLogin-sc-1wbjw6k-0 eTrcYr']//input[@placeholder='Informe sua senha']"),
        clickButtonLogin: () => cy.xpath("//button[normalize-space()='Acessar']"),
        checkText: () => cy.contains("Usuário ou senha inválido."),
        clickButtonRegister: () => cy.xpath("//button[normalize-space()='Registrar']"),
    };
  
    SiteVisitLogin() {
      this.elements.SiteVisit();
    }

    fillEmail(email) {
      this.elements.emailImput().type(email)
    }

    fillPassword(password){
      this.elements.passwordImput().type(password)
    }

    ClickButton(){
      this.elements.clickButtonLogin().click()
    }

    checkTextErro(){
      this.elements.checkText().should('be.visible')
    }

    registerUser(){
      this.elements.clickButtonRegister().click()
    }

  }

  module.exports = new LoginPage();
