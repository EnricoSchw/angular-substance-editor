
describe('The test page', function () {
  it('should load the editor', function () {
    browser.driver.get('/');
    browser.waitForAngular();


    var editor = element(by.className('sc-prose-editor'));
    //var editor = element(by.className('Enrico'));
    //browser.wait(editor.isPresent(), 5 * 1000, 'Server should start within 5 seconds');
    expect(editor.isPresent()).toBe(true);
  });

  describe('loaded editor container', function() {

    it('should display paragraph 1', function() {
      var containerParagraph1 = element(by.css('div[data-id="p1"]'));
      var contentParagraph1 = element(by.css('span[data-path="p1.content"]'));
      expect(containerParagraph1.isPresent()).toBe(true);
      expect(contentParagraph1.getText()).toEqual('Insert a new image using the image tool.');
    });

    it('should display paragraph 2', function() {
      var containerParagraph2 = element(by.css('div[data-id="p2"]'));
      var contentParagraph2 = element(by.css('span[data-path="p2.content"]'));
      expect(containerParagraph2.isPresent()).toBe(true);
      expect(contentParagraph2.getText()).toEqual('Please note that images are not actually uploaded in this example. You would need to provide a custom file client that talks to an image store. See FileClientStub which reveals the API you have to implement.');
    });
  });

});
