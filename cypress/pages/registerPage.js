const { ClickButton } = require("./loginPage");

class registerPage {
    elements = {
        emailImput: () => cy.xpath("//form[@class='styles__ContainerFormRegister-sc-7fhc7g-0 keVbpY']//input[@placeholder='Informe seu e-mail']"),
        nameImput: () => cy.xpath("//input[@placeholder='Informe seu Nome']"),
        passwordImput: () => cy.xpath("//form[@class='styles__ContainerFormRegister-sc-7fhc7g-0 keVbpY']//input[@placeholder='Informe sua senha']"),
        confirmePasswordImput: () => cy.xpath("//input[@placeholder='Informe a confirmação da senha']"),
        clickButtonCadastrar: () => cy.xpath("//button[normalize-space()='Cadastrar']"),
        checkText: () => cy.contains("criada com sucesso"),
        closeSucessBox: () => cy.xpath("//a[@id='btnCloseModal']"),
    };
  
    fillEmail(email){
      this.elements.emailImput().type(email, { force: true })
    }

    fillName(name){
      this.elements.nameImput().type(name, { force: true })
    }

    fillpassword(password){
      this.elements.passwordImput().type(password, { force: true })
    }

    fillconfirmePasswordImput(password){
      this.elements.confirmePasswordImput().type(password, { force: true })
    }

    clickButton(){
        this.elements.clickButtonCadastrar().click({ force: true })
    }

    checkTextSucess(){
      this.elements.checkText().should('be.visible')
    }

    clickCloseSucessBox(){
        this.elements.closeSucessBox().click()
    }
  }

  module.exports = new registerPage();