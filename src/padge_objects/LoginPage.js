const BasePage = require('./BasePage');

class LoginPage {

    get authenticationHeader() {
        return $('//div/h1[text()="Authentication"]');
    }


}

module.exports = new LoginPage();