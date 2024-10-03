// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('launchBrowser', () => {
    const pageUrl = 'https://www.automationexercise.com/'
    cy.visit(pageUrl);
    cy.get('.logo img').should('be.visible');
    cy.get('.shop-menu').should('be.visible');
});

Cypress.Commands.add('deleteAccount', () => {
    cy.contains('Delete Account').click();
    cy.get('h2[data-qa="account-deleted"]').should('be.visible').and('contain.text', 'Account Deleted!');
    cy.contains('Continue').click();
});

Cypress.Commands.add('registerUser', (name, email, password) => {
    cy.contains('Signup / Login').click();
    cy.contains('New User Signup!').should('be.visible');
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();
    cy.get('h2.title.text-center').should('be.visible').and('contain.text', 'Enter Account Information');
    cy.get('input[name="title"][value="Mr"]').check();
    cy.get('input[name="password"]').type(password);
    cy.get('select[name="days"]').select('15');
    cy.get('select[name="months"]').select('January');
    cy.get('select[name="years"]').select('1980');
    cy.get('input[name="newsletter"]').check();
    cy.get('input[name="optin"]').check();

    // Fill in user details
    cy.get('input[name="first_name"]').type('John');
    cy.get('input[name="last_name"]').type('Johaness');
    cy.get('input[name="company"]').type('Test Company');
    cy.get('input[name="address1"]').type('123 Test Street');
    cy.get('input[name="address2"]').type('Suite 1');
    cy.get('select[name="country"]').select('United States');
    cy.get('input[name="state"]').type('Test State');
    cy.get('input[name="city"]').type('Test City');
    cy.get('input[name="zipcode"]').type('12345');
    cy.get('input[name="mobile_number"]').type('1234567890');

    // Click to create the account
    cy.get('button[data-qa="create-account"]').click();
    cy.get('h2.title.text-center').should('be.visible').and('contain.text', 'Account Created!');
    cy.contains('Continue').click();
});

Cypress.Commands.add('loginUser', (email, password) => {
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
    cy.get('li > a').should('be.visible').and('contain.text', 'Logged in as Admin');
});
