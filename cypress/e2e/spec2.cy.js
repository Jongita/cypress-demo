
describe('Login User with correct email and password', () => {

    it('should create, login and delete the user account successfully', () => {

        cy.fixture('users').then((userData) => {

            // 1/2. Launch browser and navigate to URL
            // 3. Verify that home page is visible successfully
            cy.launchBrowser();

            // Register user for creating and delete later on
            cy.registerUser(userData.user2.username, userData.user2.email, userData.user2.password);

            // Logout user
            cy.get('a[href="/logout"]').click();

            // 4. Click on 'Signup / Login' button
            cy.contains('Signup / Login').click();

            // 5. Verify 'Login to your account' is visible
            cy.contains('Login to your account').should('be.visible');

            // 6. Enter correct email address and password
            cy.get('input[data-qa="login-email"]').type(userData.user2.email);
            cy.get('input[data-qa="login-password"]').type(userData.user2.password);

            // 7. Click 'login' button
            cy.get('button[data-qa="login-button"]').click();

            // 8. Verify that 'Logged in as username' is visible
            cy.get('li > a').should('be.visible').and('contain.text', `Logged in as ${userData.user2.username}`);

            // 9. Click 'Delete Account' button
            // 10. Verify that 'ACCOUNT DELETED!' is visible
            cy.deleteAccount();
        })
    });
});