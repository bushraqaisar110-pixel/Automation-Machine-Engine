import HomePage from '../pages/HomePage';
import RepertoireManagementPage from '../pages/RepertoireManagementPage';

describe('Matching Engine – Repertoire Management Module', () => {

  const homePage = new HomePage();
  const repertoirePage = new RepertoireManagementPage();

  beforeEach(() => {
      homePage.visit();
      homePage.handleCookieBanner();
  });
  

  it('Validates supported products under Repertoire Management Module', () => {

    // Expand Modules menu
    homePage.openModulesMenu();
    //homePage.handleCookieBanner();

    // Navigate to Repertoire Management Module
    homePage.clickRepertoireManagementModule();

    // Scroll to Additional Features
    repertoirePage.scrollToAdditionalFeatures();

    // Open Products Supported accordion
    repertoirePage.clickProductsSupported();

    // Assertions
    repertoirePage.verifyProductsSupportedHeading();
    repertoirePage.verifySupportedProductsList();

  });

});
