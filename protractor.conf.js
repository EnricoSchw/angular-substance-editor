/*jshint node: true*/
/*global exports: true*/

// An example configuration file.
// https://raw.github.com/angular/protractor/master/example/conf.js
exports.config = {
    //directConnect: true,
    // The address of a running selenium server.
    'seleniumServerJar': 'node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.53.1.jar',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
