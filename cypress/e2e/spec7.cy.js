
describe('Verify Test Cases Page', () => {

    it('should navigate to test cases page successfully', () => {

        // 1/2. Launch browser and navigate to URL
        // 3. Verify that home page is visible successfully
        cy.launchBrowser();

        // 4. Click on 'Test Cases' button
        cy.contains('Test Cases').click();

        // 5. Verify user is navigated to the test cases page successfully
        cy.url().should('include', '/test_cases');
        cy.get('h2').should('contain', 'Test Cases');
    });
});