const BasePage = require("../BasePage");
const allure = require('@wdio/allure-reporter').default;


class ShopingCard extends BasePage {

    get ShopingCardHeader() {
        return $('//single-modal-window//h3[text()=\' Кошик \']');
    }

    validateShpengCardHeaderIsPresent() {
        allure.startStep('Validate title');
        expect(this.ShopingCardHeader).toBeDisplayed();
    } 

}

module.exports = new ShopingCard();