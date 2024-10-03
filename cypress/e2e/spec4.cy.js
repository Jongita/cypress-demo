const pageUrl = 'https://www.automationexercise.com/';

describe('Logout User', () => {

    it('should register user, log in and log out successfully and delete user', () => {
        // 1: Launch browser and 2: Navigate to the URL
        cy.visit(pageUrl);

        // 3: Verify that home page is visible successfully
        cy.get('.logo img').should('be.visible');
        cy.get('.shop-menu').should('be.visible');

        // Register user for creating and delete later on
        cy.registerUser('Admin', 'admin@gmail15.com', '123456');

        // Logout user
        cy.get('a[href="/logout"]').click();

        // 4: Click on 'Signup / Login' button
        cy.contains('Signup / Login').click();

        // 5: Verify 'Login to your account' is visible
        cy.contains('Login to your account').should('be.visible');

        // 6: Enter correct email address and password
        cy.get('input[data-qa="login-email"]').type('admin@gmail15.com');
        cy.get('input[data-qa="login-password"]').type('123456');

        // 7: Click 'login' button
        cy.get('button[data-qa="login-button"]').click();

        // 8: Verify that 'Logged in as username' is visible
        cy.get('li > a').should('be.visible').and('contain.text', 'Logged in as Admin');

        // 9: Click 'Logout' button
        cy.contains('Logout').click();

        // 10: Verify that user is navigated to login page
        cy.url().should('include', '/login');
        cy.contains('Login to your account').should('be.visible');

        // Login user to delete account
        cy.loginUser('admin@gmail15.com', '123456');
        cy.deleteAccount();
    });
});

