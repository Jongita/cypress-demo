const pageUrl = 'https://www.automationexercise.com';

describe('Login User with correct email and password', () => {

    it('should create, login and delete the user account successfully', () => {
        // 1. Launch browser and 2. Navigate to URL
        cy.visit(pageUrl);

        // 3. Verify that home page is visible successfully
        cy.get('.logo img').should('be.visible');
        cy.get('.shop-menu').should('be.visible');

        // Register user
        cy.registerUser('Admin', 'admin@gmail8.com', '123456');

        // Logout user
        cy.get('a[href="/logout"]').click();

        // 4. Click on 'Signup / Login' button
        cy.contains('Signup / Login').click();

        // 5. Verify 'Login to your account' is visible
        cy.contains('Login to your account').should('be.visible');

        // 6. Enter correct email address and password
        cy.get('input[data-qa="login-email"]').type('admin@gmail8.com');
        cy.get('input[data-qa="login-password"]').type('123456');

        // 7. Click 'login' button
        cy.get('button[data-qa="login-button"]').click();

        // 8. Verify that 'Logged in as username' is visible
        cy.get('li > a').should('be.visible').and('contain.text', 'Logged in as Admin');

        // 9. Click 'Delete Account' button
        // 10. Verify that 'ACCOUNT DELETED!' is visible
        cy.deleteAccount();

    });
});