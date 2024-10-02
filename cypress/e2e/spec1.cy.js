const pageUrl = 'https://www.automationexercise.com'

describe('Check User Registration and Deletion Flow', () => {

  it('should register and delete a user successfully', () => {
    // 1/2. Launch browser and navigate to URL
    cy.visit(pageUrl);

    // 3. Verify that home page is visible successfully
    cy.get('.logo img').should('be.visible');
    cy.get('.shop-menu').should('be.visible');

    // 4. Click on 'Signup / Login' button
    // 5. Verify 'New User Signup!' is visible
    // 6. Enter name and email address
    // 7  Click 'Signup' button
    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    // 10. Select checkbox 'Sign up for our newsletter!'
    // 11. Select checkbox 'Receive special offers from our partners!'
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    // 13. Click 'Create Account button'
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    // 15. Click 'Continue' button
    cy.registerUser('Admin', 'admin@gmail6.com', '123456');

    // 16. Verify that 'Logged in as username' is visible
    cy.get('li > a').should('be.visible').and('contain.text', 'Logged in as Admin');

    // 17. Click 'Delete Account' button
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.deleteAccount();
  });

});