import loginPage from '../pages/loginPage';

describe('Teste de Login no BugBank', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Login inválido', () => {
    loginPage.fillEmail('mateussilvacoutinho@gmail.com');
    loginPage.fillPassword('Teste0011@');
    loginPage.submit();
    loginPage.checkErrorMessage('Usuário ou senha inválido.');
  });
});
