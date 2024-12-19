import "@testing-library/cypress/add-commands";

//comando reutilizável para login
Cypress.Commands.add("login", (usuario, senha) => {
  cy.get("input[name='username']").type(usuario);
  cy.get("input[name='password']").type(senha);
  cy.contains("button", "Login").click();
});

Cypress.Commands.add("acessaBuscaFuncionario", function(){
  cy.contains(".oxd-main-menu-item", "PIM").click();
  cy.get("input[data-v-75e744cd]").eq(0).type("Teste Cypress 2024");
  cy.contains("button", "Search").click();
  cy.contains("(1) Record Found");
})

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

