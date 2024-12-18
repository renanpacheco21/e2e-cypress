describe("testes para validação da aplicação da OrangeHRM", () => {
  beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it.only("realizar login com sucesso", function () {
    
    cy.contains('button', 'Login').click();
  });
});
