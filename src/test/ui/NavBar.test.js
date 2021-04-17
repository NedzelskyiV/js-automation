const NavBar = require('../../padge_objects/navigation_bar/NavBar');
const homePage = require('../../padge_objects/HomePage');
const LoginModal = require('../../padge_objects/navigation_bar/LoginModal');
const AllureReporter = require('@wdio/allure-reporter').default;
const shopingCard = require('../../padge_objects/navigation_bar/ShopingCard');

describe('Navigation Bar', () => {
    it('Validate Language could be selected', () => {
        NavBar.openHamePage();

        homePage.clickOnLanguage('UA')
            .validateLanguageSelected('UA');

    });

    it('Validate login to account could be oepned', () => {
        AllureReporter.addIssue('12341');
        AllureReporter.addSeverity('critical');
        NavBar.openHamePage();

        NavBar.clickOnUserAccountIcon()
    
        LoginModal.validateLoginHeaderIsPresent();
    });

    it('Validate Shoping Cart is opened', () => {
        NavBar.openHamePage();

        NavBar.clickShopingCart();
        shopingCard.validateShpengCardHeaderIsPresent();
    });

});