describe('user logs in', () => {
  it('and clicks on Login Button on Navbar', () => {
    cy.visit('http://localhost:3001/');
    cy.get('[data-testid = "login-button"]').click();
  });
  it('and user inputs email address and password', () => {
    cy.get('[data-testid="email-input-field"]').type('email@web.com');
    cy.get('[data-testid="password-input-field"]').type('password1');
  });
  it('clicks on login submit button', () => {
    cy.get('[data-testid="login-button-loginform"]').click();
  });
  it('redirects to first-page', () => {
    cy.url().should('eq', 'http://localhost:3001/test-pages/first-post');
  });
});
