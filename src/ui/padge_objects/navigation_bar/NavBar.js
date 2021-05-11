const BasePage = require("../BasePage");
const allure = require('@wdio/allure-reporter').default;


class NavBar extends BasePage {

    get userAccountItem() {
        return $('//li[@class=\'header-actions__item header-actions__item--user\']//button');
    }

    get shopingCart() {
        return $('//li[@class=\'header-actions__item header-actions__item--cart\']//button');
    }

    clickOnUserAccountIcon() {
        allure.startStep('Click User Icon from navbar!');
        this.userAccountItem.click();
    }

    clickShopingCart() {
        allure.startStep('Click Shoping Cart');
        this.shopingCart.click();
    }

}

module.exports = new NavBar();