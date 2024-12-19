import "@testing-library/cypress/add-commands";

//comando reutilizável para login
Cypress.Commands.add("login", (usuario, senha) => {
  cy.get("input[name='username']").type(usuario);
  cy.get("input[name='password']").type(senha);
  cy.contains("button", "Login").click();
});

//Ignorar erros da aplicação
Cypress.on("uncaught:exception", (err, runnable) => {
  if (
    err.message.includes(
      "Cannot read properties"
    )
  ) {
    return false;
  }
  return true;
});

