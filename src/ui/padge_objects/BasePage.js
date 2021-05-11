const { default: AllureReporter } = require('@wdio/allure-reporter');
const conf = require('../../../wdio.conf');

module.exports = class BasePage {

    openHamePage() {
        AllureReporter.startStep("Open main page");
        browser.url(conf.config.baseUrl);
        AllureReporter.endStep('passed');
    }
    
}
