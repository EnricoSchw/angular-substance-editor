// at the top of the test spec:
var browserLogs = require('protractor-browser-logs'),
 ToolBar = require('./../helper/toolBar'),
Container = require('./../helper/container');


describe('The Editor', function () {

    var toolBar = new ToolBar(),
        container = new Container();

    var logs;

    beforeEach(function () {
        logs = browserLogs(browser);
        logs.ignore(logs.DEBUG);
        logs.ignore(logs.INFO);
    });

    afterEach(function () {
        return logs.verify();
    });

    it('should loaded', function () {
        browser.driver.get('http://localhost:9001/index.html');
        browser.waitForAngular();

        var editor = element(by.className('sc-prose-editor'));
        expect(editor.isPresent()).toBe(true);
    });

    describe('container', function () {

        it('should display paragraph 1', function () {
            expect(container.getParagraphElement(1).isPresent()).toBe(true);
            expect(container.getContentOfParagraphElement(1).getText()).toEqual('Insert a new image using the image tool.');
        });

        it('should display paragraph 2', function () {
            expect(container.getParagraphElement(2).isPresent()).toBe(true);
            expect(container.getContentOfParagraphElement(2).getText()).toEqual('Please note that images are not actually uploaded in this example. You would need to provide a custom file client that talks to an image store. See FileClientStub which reveals the API you have to implement.');
        });
    });

    describe('save button', function () {

        it('should be present', function () {
            expect(toolBar.getSaveButton().isPresent()).toBe(true);
        });

        it('should switched off', function () {
             expect(toolBar.getSaveButton().isEnabled()).toBe(false);
        });

        it('should activate save handler', function () {
            container.getContentOfParagraphElement(2).click();
            browser.actions().sendKeys('a').perform();
            toolBar.getSaveButton().click();
            logs.expect(/Save from Angular!/);
        });
    });

});
