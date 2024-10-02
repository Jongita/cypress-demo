const pageUrl = 'https://www.automationexercise.com';

describe('Login User with incorrect email and password', () => {

    it('should display an error message for incorrect login', () => {
        // Step 1: Launch browser and Step 2: Navigate to URL
        cy.visit(pageUrl);

        // Step 3: Verify that home page is visible successfully
        cy.get('.logo img').should('be.visible');
        cy.get('.shop-menu').should('be.visible');

        // Step 4: Click on 'Signup / Login' button
        cy.contains('Signup / Login').click();

        // Step 5: Verify 'Login to your account' is visible
        cy.contains('Login to your account').should('be.visible');

        // Step 6: Enter incorrect email address and password
        cy.get('input[data-qa="login-email"]').type('admin@gmail.com');
        cy.get('input[data-qa="login-password"]').type('123456');

        // Step 7: Click 'login' button
        cy.get('button[data-qa="login-button"]').click();

        // Step 8: Verify error 'Your email or password is incorrect!' is visible
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });
});