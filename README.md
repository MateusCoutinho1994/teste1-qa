# TESTE1-QA

Este projeto contém automação de testes end-to-end usando Cypress para o sistema BugBank.

---

## Estrutura do Projeto

- `cypress/` - Pasta principal dos testes Cypress  
  - `e2/` - Arquivos de teste (specs)  
  - `fixtures/` - Dados de teste (ex: JSONs)  
  - `pages/` - Page Objects (modelos de páginas para os testes)  
  - `reports/` - Relatórios gerados dos testes  
  - `screenshots/` - Prints automáticos dos testes  
  - `support/` - Comandos e configurações de suporte do Cypress  

- `node_modules/` - Dependências do Node.js  

- `.gitignore` - Arquivos e pastas ignorados pelo Git  

- `cypress.config.js` - Configurações do Cypress  

- `package.json` - Gerenciamento das dependências e scripts do projeto  

---

## Como usar

### Pré-requisitos

- Node.js instalado ([link para download](https://nodejs.org/))  
- npm ou yarn  

### Instalar dependências

No terminal, dentro da pasta do projeto:

npm install

Executar os testes no modo aberto (UI)
Para abrir o Cypress e executar os testes interativamente:

npx cypress open

Executar os testes no modo headless (linha de comando)
Para rodar os testes diretamente no terminal:

npx cypress run

Estrutura dos testes
Os testes estão em cypress/e2e/ com arquivos .cy.js ou .js.

Os objetos de página estão em cypress/pages/ para facilitar a manutenção e reaproveitamento de código.

Dados de teste podem ser adicionados em cypress/fixtures/.

Gerar relatórios
Os relatórios dos testes (screenshots, vídeos, relatórios HTML) ficam em cypress/reports/ e pastas relacionadas, conforme configurado no projeto.

Utilize comandos customizados em cypress/support/ para facilitar a escrita dos testes.