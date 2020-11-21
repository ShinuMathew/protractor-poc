const CommonActions = require('./Actions/commonactions');

let commonactions = new CommonActions();

describe('Submit an order using PPCO GBR', function()
{
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('Create cart and navigate upto Paypal page', function()
    {
        browser.ignoreSynchronization = true; 
        browser.driver.manage().window().maximize();
        //browser.get('https://qashop.samsung.com/uk/web/cart/?&addItem[]=SM-G973FZWGBTU,1');
        // let commonactions = new CommonActions();
        // commonactions.goToUrl(browser, 'http://qa.marykayintouch.ca')
        commonactions.goToUrl(browser, 'https://qashop.samsung.com/uk/web/cart/?&addItem[]=SM-G973FZWGBTU,1')
        var title = browser.getTitle();
        expect(title).toContain('Samsung UK');

        console.log('Title verified..');
        console.log('Click continue..');
        element(by.xpath('//div[@class=\'os-action-holder\']/a')).click();
        
        console.log('Click name dropdown.');
        element(by.xpath('//b[@class=\'button\']')).click();
        console.log('Click name from dropdown.');
        element(by.xpath('//li[@data-index=\'0\']')).click();

        console.log('Type first name.');
        element(by.xpath('//input[@name=\'firstName\']')).sendKeys('Shinu');
        element(by.xpath('//input[@name=\'lastName\']')).sendKeys('Mathew');
        element(by.xpath('//input[@name=\'email\']')).sendKeys('samsung135test@gmail.com');
        element(by.xpath('//input[@name=\'phone\']')).sendKeys('7911123456');

        element(by.xpath('//button[text()=\'Enter Address Manually\']')).click();
        
        element(by.xpath('//input[@name=\'postalCode\']')).sendKeys('LU2 8NF');
        element(by.xpath('//input[@name=\'line1\']')).sendKeys('Barton Hill Farm');
        element(by.xpath('//input[@name=\'line2\']')).sendKeys('Barton Hill Road,');
        element(by.xpath('//input[@name=\'city\']')).sendKeys('Luton');

        element(by.xpath('(//b[@class=\'button\'])[2]')).click();
        element(by.xpath('//li[text()=\'Aberdeen City\']')).click();
        element(by.xpath('//button[text()=\'Continue\']')).click();

        element(by.xpath('(//span[@class=\'cc-box-checkbox\'])[1]')).click();
        element(by.xpath('//button[text()=\'Continue\']')).click();
        element(by.xpath('//input[@name=\'Paypal\']/..//span[@class=\'cc-box-checkbox\']')).click();
        element(by.xpath('//div[@class=\'paypal-form\']/div[1]/div[2]/div[1]/label/span[1]')).click();
        element(by.xpath('//div[@class=\'paypal-form\']/div[1]/div[2]/div[2]/label/span[1]')).click();
        element(by.xpath('//div[@id=\'paypal-button-container\']/div/div')).click();



        var header = element(by.className('welcome page-header'));
        expect(header.getText()).toContain("Lucie");
        element(by.css('div#shopping-bag')).click();

        console.log("Successfully completed the test case");
        
    });

    // it('It should take the user to his Review Order page', function()
    // {
    //     browser.ignoreSynchronization = true; 
    //     browser.driver.manage().window().maximize();
    //     browser.get('http://qa.marykayintouch.ca');
    //     // let commonactions = new CommonActions();
    //     // commonactions.goToUrl(browser, 'http://qa.marykayintouch.ca')
        
    //     element(by.id('txtConsultantID')).sendKeys('BU6865');
    //     element(by.id('txtPassword')).sendKeys('MKqa2015');
    //     element(by.id('btnSubmit')).click();

    //     var header = element(by.className('welcome page-header'));
    //     expect(header.getText()).toContain("Lucie");
    //     element(by.css('div#shopping-bag')).click();

    //     console.log("Successfully completed the test case");
        
    // });
});