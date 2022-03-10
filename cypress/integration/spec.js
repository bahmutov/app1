/// <reference types="cypress" />

it('adds and deletes todos', () => {
  cy.request('POST', '/reset', { todos: [] })
  cy.visit('/')
  cy.get('.new-todo').type('Learn Cypress{enter}').type('Code more{enter}')
  cy.get('.todo-list li').should('have.length', 2)
})
