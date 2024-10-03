
describe('Verify All Products and product detail page', () => {

    it('should navigate through products and verify product details successfully', () => {

        // 1/2. Launch browser and navigate to URL
        // 3. Verify that home page is visible successfully
        cy.launchBrowser();

        // 3. Click on 'Products' button
        cy.get('a[href="/products"]').click();

        // 4. Verify user is navigated to ALL PRODUCTS page successfully
        cy.url().should('include', '/products');
        cy.contains('All Products').should('be.visible');

        // 5. Verify the products list is visible
        cy.get('.features_items').should('be.visible');

        // 6. Click on 'View Product' of the first product
        cy.get('ul.nav.nav-pills.nav-justified li a').first().click();

        // 7. Verify user is landed on the product detail page
        cy.url().should('include', '/product_details');

        // 8. Verify that product details are visible: name, category, price, availability, condition, brand
        cy.get('.product-information').within(() => {
            cy.get('h2').should('be.visible');
            cy.contains('Category').should('be.visible');
            cy.get('span').contains('Rs').should('be.visible');
            cy.contains('Availability').should('be.visible');
            cy.contains('Condition').should('be.visible');
            cy.contains('Brand').should('be.visible');
        });
    });
});