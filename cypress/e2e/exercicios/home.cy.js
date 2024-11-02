/// <reference types="cypress" />

module.exports = {
    e2e: {
      baseUrl: "https://agenda-contatos-react.vercel.app",
    },
  };

  describe('Testes de Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app');
    });
  
    it('Deve incluir um novo contato', () => {
      cy.get('.adicionar').click();
      cy.get('[type="text"]').type('gian Souza');
      cy.get('[type="tel"]').type('11912345678');
      cy.get('[type="email"]').type('gian@ebac.com.br');
      cy.get('.adicionar').click();
      
      cy.contains('gian Souza').should('exist');
      cy.contains('11912345678').should('exist');
      cy.contains('gian@ebac.com.br').should('exist');
    });

    it('Deve editar um contato existente', () => {
        cy.contains('gian Souza').parents('.contato').find('.sc-gueYoa button.edit').first().click();
        cy.get('[type="text"]').clear().type('João Pedro Silva');
        cy.get('[type="tel"]').clear().type('987654321');
        cy.get('[type="email"]').clear().type('joao.pedro@example.com');
        cy.get('.alterar').click();
        
        cy.contains('João Pedro Silva').should('exist');
        cy.contains('987654321').should('exist');
        cy.contains('joao.pedro@example.com').should('exist');
      });

      it('Deve remover um contato', () => {
        cy.contains('gian Souza').parents('.contato').find('.sc-gueYoa button.delete').click();
        cy.contains('bruna souza').should('not.exist');
      });
    });
