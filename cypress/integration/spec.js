/// <reference types="cypress" />

it('adds and deletes todos', () => {
  cy.request('POST', '/reset', { todos: [] })
  cy.visit('/')
  cy.get('.new-todo').type('Learn Cypress{enter}').type('Code more{enter}')
  cy.get('.todo-list li')
    .should('have.length', 2)
    .first()
    .find('.destroy')
    .click({ force: true })
  cy.get('.todo-list li').should('have.length', 1)
  cy.contains('.todo-list li', 'Code more')
})
