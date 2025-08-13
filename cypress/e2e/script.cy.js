const loginPage = require('../pages/loginPage')
const homePage = require('../pages/homePage')
const registerPage = require('../pages/registerPage')
const usuario = require('../fixtures/usuario.json')

require('cypress-xpath');

describe('Teste de Login no BugBank', () => {

  beforeEach(() => {
    loginPage.SiteVisitLogin();
  });

  it('Registrar Usuário', () => {
    loginPage.registerUser();
    registerPage.fillEmail(usuario.email)
    registerPage.fillName(usuario.name)
    registerPage.fillpassword(usuario.password)
    registerPage.fillconfirmePasswordImput(usuario.password)
    registerPage.clickButton()
    registerPage.checkTextSucess()
  })

  it('Login inválido', () => {
    loginPage.fillEmail(usuario.email);
    loginPage.fillPassword('ErrorPassword');
    loginPage.ClickButton();
    loginPage.checkTextErro();
  });

    it('Login válido', () => {
    loginPage.registerUser();
    registerPage.fillEmail(usuario.email)
    registerPage.fillName(usuario.name)
    registerPage.fillpassword(usuario.password)
    registerPage.fillconfirmePasswordImput(usuario.password)
    registerPage.clickButton()
    registerPage.clickCloseSucessBox()
    loginPage.fillEmail(usuario.email);
    loginPage.fillPassword(usuario.password);
    loginPage.ClickButton();
    homePage.checkTextLogin();
  });
});
