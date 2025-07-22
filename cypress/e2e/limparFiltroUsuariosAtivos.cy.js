describe('Limpar filtro usuario Ativos', () => {
  it('acessar URL do sistema', () => {
    cy.visit('https://analista-teste.seatecnologia.com.br/')
 
  })
    it('Visualizar Funcionarios ativos', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://analista-teste.seatecnologia.com.br/')
        cy.get('#root > main > div.c-ijpWJD > div.c-ctDlKA > div.c-jqbATT > div.c-hfAyug > button:nth-child(1)').click();
  })
  
    it('Limpar Filtro', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://analista-teste.seatecnologia.com.br/');
        cy.get('button.clear').should('be.visible').click();
  })
  
   
})