const BasePage = require("../BasePage");
const allure = require('@wdio/allure-reporter').default;

class LoginModal extends BasePage {

    get modalHeader() {
        return $('//single-modal-window//h3[text()=\' Вхід \']');
    }

    validateLoginHeaderIsPresent() {
        allure.startStep('Validate title');
        expect(this.modalHeader).toBeDisplayed();
    }


}

module.exports = new LoginModal();