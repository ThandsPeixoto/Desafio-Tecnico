describe('Cadastro de Funcionario Ativo', () => {
  it('acessar URL do sistema', () => {
    cy.visit('https://analista-teste.seatecnologia.com.br/')
        cy.get('#root > main > div.c-ijpWJD > div.c-ctDlKA > div.c-jqbATT > button').click(); 
  })
    it('Cadastrar Funcionario ativo ', () => {
        cy.viewport(1920, 1080);
        cy.visit('https://analista-teste.seatecnologia.com.br/')
        cy.get('#root > main > div.c-ijpWJD > div.c-ctDlKA > div.c-jqbATT > button').click(); 
        cy.get('#root > main > div.c-ijpWJD > div.c-ctDlKA > form > div:nth-child(2) > button').click();
        cy.get(':nth-child(1) > .c-jzRMpM').type('Raimundo Neto')
        cy.get(':nth-child(2) > .ant-radio > .ant-radio-input').click()
        cy.get(':nth-child(3) > .c-jzRMpM').type('70989087623')
        cy.get('#root > main > div.c-ijpWJD > div.c-ctDlKA > form > div:nth-child(3) > div > div:nth-child(4) > input').invoke('val', '2025-07-16').trigger('change');
        cy.get(':nth-child(5) > .c-jzRMpM').type('81901034').should('have.value', '81901034');
        //Trabalhando o select
        cy.get('#root > main > div.c-ijpWJD > div.c-ctDlKA > form > div:nth-child(3) > div > div:nth-child(6) > div').click();
        cy.get('.ant-select-dropdown .ant-select-item').contains('Cargo 03').click();
        //Cadastrando EPI
        //Tratando  as Atividades
        cy.get('#root > main > div.c-ijpWJD > div.c-ctDlKA > form > div:nth-child(4) > div > div > div.c-hJlbiD > div > div').click();
        cy.get('.ant-select-item').contains('Ativid 03').click();
        //Tratando as EPIS
        cy.get('#root > main > div.c-ijpWJD > div.c-ctDlKA > form > div:nth-child(4) > div > div > div.c-loVSMs > div > div:nth-child(1) > div').click();
        cy.get('.ant-select-item').contains('Calçado de Segurança').click();
        //Tratando numero CA
        cy.get(':nth-child(2) > .c-jzRMpM').type('9090')
        
        //tratando documentos de uploads
        cy.get('input[type="file"]', { timeout: 10000 }).should('exist');
        cy.get('input[type="file"]').attachFile('documentoTeste.pdf', { force: true });
        //Salvando
       cy.get('#root > main > div.c-ijpWJD > div.c-ctDlKA > form > button').click();
       cy.reload();
  })
})