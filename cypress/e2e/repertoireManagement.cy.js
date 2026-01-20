import HomePage from '../pages/HomePage';
import RepertoireManagementPage from '../pages/RepertoireManagementPage';

describe('Matching Engine – Repertoire Management Module', () => {

  const homePage = new HomePage();
  const repertoirePage = new RepertoireManagementPage();

  beforeEach(() => {
    //Verify website launch successfully
      homePage.visit();
      homePage.handleCookieBanner();
  });
  

  it('Validates supported products under Repertoire Management Module', () => {

    // Verify Modules menu Open successfully
    homePage.openModulesMenu();
    //homePage.handleCookieBanner();

    // Verify Repertoire Management Module navigation
    homePage.clickRepertoireManagementModule();

    // Verify Additional Features section visibility
    repertoirePage.scrollToAdditionalFeatures();

    // Verify Products Supported section
    repertoirePage.clickProductsSupported();

    //Verify supported products list
    repertoirePage.verifyProductsSupportedHeading();
    repertoirePage.verifySupportedProductsList();

  });

});
