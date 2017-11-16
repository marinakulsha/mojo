exports.config = {

    specs: ['features/FeatureHome.feature'],

    'seleniumAddress': 'http://localhost:4444/wd/hub',
    'capabilities': {
        //'browserstack.user': 'marina281',
       // 'browserstack.key': 'tsuASfyNotsCV3fSCqqL',
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'Chrome',
        'browser_version': '61.0',
        'resolution': '1024x768'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: [
            'support/world.js',
            'step_difinitions/*.js',
            'cucumber-reporting.js'
        ],
        // format: 'rerun:test/e2e/reports/@rerun.txt'
    },

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        // browser.driver.manage().window().maximize();
        let chai = require('chai');
        chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(require('chai-smoothie'));
        chai.use(chaiAsPromised);

    }
};