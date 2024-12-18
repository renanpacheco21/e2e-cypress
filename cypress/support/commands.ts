import "@testing-library/cypress/add-commands";

Cypress.Commands.add("login", (usuario, senha) => {
  cy.get("input[name='username']").type(usuario);
  cy.get("input[name='password']").type(senha);
  cy.contains("button", "Login").click();
});
