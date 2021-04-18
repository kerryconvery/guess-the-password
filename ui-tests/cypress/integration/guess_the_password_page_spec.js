describe('When the page loads', () => {
  it('should display the password hint', () => {
    cy.visit("http://localhost:8080");

    cy.get('[data-test-id="password-hint"]')
    .should('exist')
  });
});

describe('When the user enters a password guess and pressed the submit button', () => {
  it('should display the guessed password in a list of previous guesses', () => {
    cy.visit("http://localhost:8080");

    cy.get('input')
      .type('345');
    
    cy.get('button')
      .click();

    cy.contains('3');
    cy.contains('4');
    cy.contains('5');
  });

  it('should display whether the guess was correct or wrong and highlight the matched characters', () => {
    cy.visit("http://localhost:8080");

    cy.get('input')
      .type('345');
    
    cy.get('button')
      .click();

    cy.contains('Attempt 1: Wrong guess');
  });
})