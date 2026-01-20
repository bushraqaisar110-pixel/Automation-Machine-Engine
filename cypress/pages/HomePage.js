class HomePage {

    visit() {
      cy.visit('https://www.matchingengine.com/');

    }
    handleCookieBanner() {
        cy.get('body').then(($body) => {
          if ($body.find('#CybotCookiebotDialogBodyButtonDecline').length > 0) {
            cy.get('#CybotCookiebotDialogBodyButtonDecline')
              //.should('be.visible')
              .click();
          }
        });
      }      
    openModulesMenu() {
        cy.get('#burger').click();
        cy.contains('.navbar-link.is-active', 'Modules')
        .click({ force: true });
      }
    
      clickRepertoireManagementModule() {
        cy.contains('a.navbar-item', 'Repertoire Management Module')
        .should('be.visible')
          .click();
      }
    }
  
  export default HomePage;
