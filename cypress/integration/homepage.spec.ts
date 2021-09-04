describe('PokeAPI Explorer', () => {
  it('loads the homepage', () => {
    cy.visit('/');

    cy.contains('PokeAPI Explorer');
  });
});
