const loginPage = require('../pages/loginPage')
const homePage = require('../pages/homePage')
const registerPage = require('../pages/registerPage')

require('cypress-xpath');

describe('Teste de Login no BugBank', () => {

  beforeEach(() => {
    loginPage.SiteVisitLogin();
  });

  it('Registrar Usuário', () => {
    loginPage.registerUser();
    registerPage.fillEmail('mateussilvacoutinho@gmail.com')
    registerPage.fillName('Mateus')
    registerPage.fillpassword('Teste0011@')
    registerPage.fillconfirmePasswordImput('Teste0011@')
    registerPage.clickButton()
    registerPage.checkTextSucess()
  })

  it('Login inválido', () => {
    loginPage.fillEmail('mateussilvacoutinho@gmail.com');
    loginPage.fillPassword('ErrorPassword');
    loginPage.ClickButton();
    loginPage.checkTextErro();
  });

    it('Login válido', () => {
    loginPage.registerUser();
    registerPage.fillEmail('mateussilvacoutinho@gmail.com')
    registerPage.fillName('Mateus')
    registerPage.fillpassword('Teste0011@')
    registerPage.fillconfirmePasswordImput('Teste0011@')
    registerPage.clickButton()
    registerPage.clickCloseSucessBox()
    loginPage.fillEmail('mateussilvacoutinho@gmail.com');
    loginPage.fillPassword('Teste0011@');
    loginPage.ClickButton();
    homePage.checkTextErro();
  });
});
