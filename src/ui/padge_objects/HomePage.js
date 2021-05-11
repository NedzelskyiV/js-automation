const BasePage = require("./BasePage");
const allure = require('@wdio/allure-reporter').default;
const chai = require('chai').expect;


class HomePage extends BasePage {

    get languageOptions() {
        return $$('//*[contains(@class,\'lang__link\')]');
    }

    get activeLanguage() {
        return $('//*[contains(@class,\'lang__link lang__link--active\')]');
    }

    
    clickOnLanguage(lang) {
        allure.startStep('Click On Language');
        for (const opt of this.languageOptions) {
            if (opt.getText() === lang)
                opt.click();
        }
        allure.endStep('passed');
        return this;
    }

    validateLanguageSelected(lang)  {
        chai(this.activeLanguage.getText()).to.be.eq('UA');
        return this;
    }

}

module.exports = new HomePage();