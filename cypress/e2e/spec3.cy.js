
describe('Login User with incorrect email and password', () => {

    it('should display an error message for incorrect login', () => {
        // 1/2. Launch browser and navigate to URL
        // 3. Verify that home page is visible successfully
        cy.launchBrowser();

        // 4: Click on 'Signup / Login' button
        cy.contains('Signup / Login').click();

        // 5: Verify 'Login to your account' is visible
        cy.contains('Login to your account').should('be.visible');

        // 6: Enter incorrect email address and password
        cy.get('input[data-qa="login-email"]').type('admin@gmail.com');
        cy.get('input[data-qa="login-password"]').type('123456');

        // 7: Click 'login' button
        cy.get('button[data-qa="login-button"]').click();

        // 8: Verify error 'Your email or password is incorrect!' is visible
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });
});