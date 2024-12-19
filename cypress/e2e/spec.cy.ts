describe("testes para validação da aplicação da OrangeHRM", () => {
  beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("realizar login com sucesso", function () {
    cy.login("Admin", "admin123");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });

  it("realizar tentativa de login inválida", function () {
    cy.login("Admin", "senha_errada");
    cy.get(".oxd-alert-content").should("contain.text", "Invalid credentials");
  });

  it("acessar a página de PIM (Employee List)", function () {
    cy.login("Admin", "admin123");
    cy.contains(".oxd-main-menu-item", "PIM").click();
    cy.contains(".oxd-topbar-body-nav-tab-item", "Employee List")
      .focus()
      .should("have.focus");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
    );
  });

  it.only("adicionar um novo funcionário", function () {
    cy.login("Admin", "admin123");
    cy.contains(".oxd-main-menu-item", "PIM").click();
    cy.contains("button", "Add").click();
    //y.contains("input", "firstname").type("Teste");
  });
});
