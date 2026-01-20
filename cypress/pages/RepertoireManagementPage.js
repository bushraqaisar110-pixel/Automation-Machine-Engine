class RepertoireManagementPage {

    scrollToAdditionalFeatures() {
      cy.contains('h2', 'Additional Features')
        .should('be.visible')
        .scrollIntoView({ block: 'center' });
    }
  
    clickProductsSupported() {
      cy.contains('span', 'Products Supported')
      //cy.contains('span', 'Products Supported')

        .should('be.visible')
        .click();
    }
  
    verifyProductsSupportedHeading() {
      cy.contains('h3', 'There are several types of Product Supported:')
        .should('be.visible');
    }
  
    verifySupportedProductsList() {
        const expectedProducts = [
            'Cue Sheet / AV Work',
            'Recording',
            'Bundle',
            'Advertisement'
          ];
        
          cy.contains('h3', 'There are several types of Product Supported:')
            .should('be.visible')
            .parent()
            .find('ul li span')
            .should('have.length', expectedProducts.length)
            .each(($el, index) => {
              cy.wrap($el)
                .invoke('text')
                .then((text) => {
                  const normalizedText = text.replace(/\u00a0/g, '').trim();
                  expect(normalizedText).to.eq(expectedProducts[index]);
                });
            });
    }
  
  }
  
  export default RepertoireManagementPage;
  