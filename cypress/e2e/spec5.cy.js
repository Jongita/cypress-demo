
describe('Register User with existing email', () => {

    it('should verify error message for already registered email during signup', () => {

        // 1/2. Launch browser and navigate to URL
        // 3. Verify that home page is visible successfully
        cy.launchBrowser();

        // Register user for creating and delete later on
        cy.registerUser('Admin', 'admin@gmail30.com', '123456');

        // Logout user
        cy.get('a[href="/logout"]').click();

        // 4. Click on 'Signup / Login' button
        cy.get('a[href="/login"]').click();

        // 5. Verify 'New User Signup!' is visible
        cy.contains('New User Signup!').should('be.visible');

        // 6. Enter name and already registered email address
        cy.get('input[data-qa="signup-name"]').type('Admin');
        cy.get('input[data-qa="signup-email"]').type('admin@gmail30.com');

        // 7. Click 'Signup' button
        cy.get('button[data-qa="signup-button"]').click();

        // 8. Verify error 'Email Address already exist!' is visible
        cy.contains('Email Address already exist!').should('be.visible');

        // Login user to delete account
        cy.loginUser('admin@gmail30.com', '123456');
        cy.deleteAccount();

    });
});