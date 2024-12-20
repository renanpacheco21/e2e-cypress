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

  it("adicionar um novo funcionário", function () {
    cy.login("Admin", "admin123");
    cy.contains(".oxd-main-menu-item", "PIM").click();
    cy.contains("button", "Add").click();
    cy.get('input[name="firstName"]')
      .type("Teste")
      .should("have.value", "Teste");
    cy.get('input[name="lastName"]')
      .type("Cypress 2024")
      .should("have.value", "Cypress 2024");
    cy.get("input[data-v-1f99f73c]").eq(4).invoke("val").should("not.be.empty");
    cy.contains("button", "Save").click();
    cy.get("#oxd-toaster_1")
      .should("be.visible")
      .and("contain.text", "Success");
    cy.contains("Personal Details");
    cy.contains("Teste Cypress 2024");
  });

  it("editar funcionário e incluir as informações obrigatórias do salário", function () {
    cy.login("Admin", "admin123");
    cy.acessaBuscaFuncionario();
    cy.get("i.oxd-icon.bi-pencil-fill").click();
    cy.contains(".orangehrm-tabs-item", "Salary").click();
    cy.contains("Assigned Salary Components");
    cy.contains("button", "Add").eq(0).click();
    cy.get("input[data-v-1f99f73c]")
      .eq(1)
      .type("Fixo")
      .should("have.value", "Fixo");
    cy.get(".oxd-select-text-input").eq(2).click();
    cy.get(".oxd-select-dropdown").contains("Brazilian Real").click();
    cy.get(".oxd-select-text-input")
      .eq(2)
      .should("contain.text", "Brazilian Real");
    cy.get("input[data-v-1f99f73c]").eq(2).type("10000");
    cy.contains("button", "Save").click();
    cy.get("#oxd-toaster_1")
      .should("be.visible")
      .and("contain.text", "Success");
    cy.get("div[data-v-6c07a142]").eq(0).should("contain.text", "Fixo");
    cy.get("div[data-v-6c07a142]").eq(1).should("contain.text", "10000");
    cy.get("div[data-v-6c07a142]")
      .eq(2)
      .should("contain.text", "Brazilian Real");
  });

  it("excluir funcionário", function () {
    cy.login("Admin", "admin123");
    cy.acessaBuscaFuncionario();
    cy.get(".oxd-icon.bi-trash").click();
    cy.get(".oxd-button--label-danger").click();
    cy.get("#oxd-toaster_1")
      .should("be.visible")
      .and("contain.text", "Success");
    cy.contains("No Records Found");
  });

  it("realizar logout com sucesso", function () {
    cy.login("Admin", "admin123");
    cy.get(".bi-caret-down-fill.oxd-userdropdown-icon").click();
    cy.contains(".oxd-userdropdown-link", "Logout").click();
    cy.contains("Login");
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
});
