let { defineSupportCode } = require('cucumber');
let PageFactory = require('../support/pages/PageFactory');
let Page = require('../support/pages/page');

defineSupportCode(function ({ Before, setDefaultTimeout }) {
    setDefaultTimeout(60000);

    Before(function(){
        browser.driver.manage().window().maximize();;
    });

});


