const pageUrl = 'https://www.automationexercise.com'

describe('Check User Registration and Deletion Flow', () => {

  it('should register and delete a user successfully', () => {
    // 1/2. Launch browser and navigate to URL
    cy.visit(pageUrl);

    // 3. Verify that home page is visible successfully
    cy.get('.logo img').should('be.visible');
    cy.get('.shop-menu').should('be.visible');

    // 4. Click on 'Signup / Login' button
    cy.contains('Signup / Login').click();

    // 5. Verify 'New User Signup!' is visible
    cy.contains('New User Signup!').should('be.visible');

    // 6. Enter name and email address
    cy.get('input[data-qa="signup-name"]').type('Admin');
    cy.get('input[data-qa="signup-email"]').should('be.visible').type('admin@gmail7.com');
    cy.get('button[data-qa="signup-button"]').click();  // 7

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get('h2.title.text-center').should('be.visible').and('contain.text', 'Enter Account Information');

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get('input[name="title"][value="Mr"]').check();
    cy.get('input[name="password"]').type('123456');
    cy.get('select[name="days"]').select('15');
    cy.get('select[name="months"]').select('January');
    cy.get('select[name="years"]').select('1980');

    // 10. Select checkbox 'Sign up for our newsletter!'
    cy.get('input[name="newsletter"]').check();
    cy.get('input[name="optin"]').check();

    // 11. Select checkbox 'Receive special offers from our partners!'
    cy.get('input[name="optin"]').check();

    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
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

    // 13. Click 'Create Account button'
    cy.get('button[data-qa="create-account"]').click();

    // 14. Verify that 'ACCOUNT CREATED!' is visible
    cy.get('h2.title.text-center').should('be.visible').and('contain.text', 'Account Created!'); // Optionally, check for the specific text

    // 15. Click 'Continue' button
    cy.contains('Continue').click();

    // 16. Verify that 'Logged in as username' is visible
    cy.get('li > a').should('be.visible').and('contain.text', 'Logged in as Admin');

    // 17. Click 'Delete Account' button
    cy.contains('Delete Account').click();

    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.get('h2[data-qa="account-deleted"]').should('be.visible').and('contain.text', 'Account Deleted!');
    cy.contains('Continue').click();
  });

});