describe("testes para validação da aplicação da OrangeHRM", () => {
  beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it.only("realizar login com sucesso", function () {
    cy.get("input[name='username']").type("Admin");
    cy.get("input[name='password']").type("admin123");
    cy.contains("button", "Login").click();
  });
});
