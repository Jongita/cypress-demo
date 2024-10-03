
describe('Logout User', () => {

    it('should register user, log in and log out successfully and delete user', () => {

        cy.fixture('users').then((userData) => {
            // 1/2. Launch browser and navigate to URL
            // 3. Verify that home page is visible successfully
            cy.launchBrowser();

            // Register user for creating and delete later on
            cy.registerUser(userData.user4.username, userData.user4.email, userData.user4.password);

            // Logout user
            cy.get('a[href="/logout"]').click();

            // 4: Click on 'Signup / Login' button
            cy.contains('Signup / Login').click();

            // 5: Verify 'Login to your account' is visible
            cy.contains('Login to your account').should('be.visible');

            // 6: Enter correct email address and password
            cy.get('input[data-qa="login-email"]').type(userData.user4.email);
            cy.get('input[data-qa="login-password"]').type(userData.user4.password);

            // 7: Click 'login' button
            cy.get('button[data-qa="login-button"]').click();

            // 8: Verify that 'Logged in as username' is visible
            cy.get('li > a').should('be.visible').and('contain.text', `Logged in as ${userData.user4.username}`);

            // 9: Click 'Logout' button
            cy.contains('Logout').click();

            // 10: Verify that user is navigated to login page
            cy.url().should('include', '/login');
            cy.contains('Login to your account').should('be.visible');

            // Login user to delete account
            cy.loginUser(userData.user4.email, userData.user4.password);
            cy.deleteAccount();
        })
    });
});

