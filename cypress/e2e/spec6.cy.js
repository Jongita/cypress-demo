const pageUrl = 'https://www.automationexercise.com/';

describe('Contact Us Form', () => {

    it('should submit a contact form successfully', () => {

        // 1/2. Launch browser and navigate to URL
        // 3. Verify that home page is visible successfully
        cy.launchBrowser();

        // 3. Click on 'Contact Us' button
        cy.get('a[href="/contact_us"]').click();

        // 4. Verify 'GET IN TOUCH' is visible
        cy.contains('h2.title.text-center', 'Get In Touch').should('be.visible');

        // 5. Enter name, email, subject, and message
        cy.get('input[name="name"]').type('Admin');
        cy.get('input[name="email"]').type('admin@gmail60.com');
        cy.get('input[name="subject"]').type('Feedback');
        cy.get('textarea[name="message"]').type('This is a test message.');

        // 6. Upload file
        cy.get('input[type="file"]').selectFile('cypress/fixtures/text.txt')

        // 7. Click 'Submit' button
        cy.get('input[name="submit"]').click();

        // 8. Click OK on the confirmation alert
        cy.on('window:alert', (text) => {
            expect(text).to.contains('Press OK');
        });
        cy.on('window:confirm', () => true); // Automatically click OK

        // 9. Verify success message is visible
        cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

        // 10. Click 'Home' button
        cy.get('a.btn.btn-success').click();

        // 11. Verify that landed back on the home page successfully
        cy.url().should('eq', pageUrl);
    });

});