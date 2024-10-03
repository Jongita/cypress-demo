
describe('Register User with existing email', () => {

    it('should verify error message for already registered email during signup', () => {

        cy.fixture('users').then((userData) => {

            // 1/2. Launch browser and navigate to URL
            // 3. Verify that home page is visible successfully
            cy.launchBrowser();

            // Register user for creating and delete later on
            cy.registerUser(userData.user5.username, userData.user5.email, userData.user5.password);

            // Logout user
            cy.get('a[href="/logout"]').click();

            // 4. Click on 'Signup / Login' button
            cy.get('a[href="/login"]').click();

            // 5. Verify 'New User Signup!' is visible
            cy.contains('New User Signup!').should('be.visible');

            // 6. Enter name and already registered email address
            cy.get('input[data-qa="signup-name"]').type(userData.user5.username);
            cy.get('input[data-qa="signup-email"]').type(userData.user5.email);

            // 7. Click 'Signup' button
            cy.get('button[data-qa="signup-button"]').click();

            // 8. Verify error 'Email Address already exist!' is visible
            cy.contains('Email Address already exist!').should('be.visible');

            // Login user to delete account
            cy.loginUser(userData.user5.email, userData.user5.password);
            cy.deleteAccount();
        })
    });
});