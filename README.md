# angular-substance-editor [![Build Status](https://travis-ci.org/EnricoSchw/angular-substance-editor.svg?branch=master)](https://travis-ci.org/EnricoSchw/angular-substance-editor)

AngularJS directive for substance.io editor


## Install

Install with [Bower](https://bower.io/):

```sh
$ bower install --save angular-substance-editor
```

Then add `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-substance-editor/dist/angular-substance-editor.js"></script>
```

Remember to include Angular and [Substance.io editor](https://github.com/substance/substance) before the directive.

Then add `angular-substance-editor` as a dependency for your app:

```javascript
angular.module('myApp', ['angular-substance-editor']);
```
 
## Documentation

Use as an element:
```html
<substance></substance>
```

...or attribute:
```html
<p substance></p>
```

Implement and register an angular Service with Name `SubstanceService` to load and Save Documents. The service have to implements a save method `saveDocument` and a load method `loadDocument`. Please see the example service for more.

## Examples

### In App

Load this service after load your app and the editor.

```javascript
(function () {
    'use strict';
    angular
        .module('your module')
        .factory('SubstanceService', `);

    /**
     * Implement this service to interact with the editor
     *
     * @returns {{saveDocument: saveDocument, loadDocument: loadDocument}}
     * @constructor
     */
    function SubstanceService() {
        return {

            // handler to save Documents in Editor
            saveDocument: function (doc, changes, cb) {
                console.warn('Save from Angular!');
                cb(null);
            },

            // handler to load Documents in Editor
            loadDocument: function (tx) {
                //return function (tx) {
                var body = tx.get('body');

                tx.create({
                    id: 'p1',
                    type: 'paragraph',
                    content: "Enrico Insert a new image using the image tool."
                });
                body.show('p1');

                tx.create({
                    id: 'p2',
                    type: 'paragraph',
                    content: "Please note that images are not actually uploaded in this example. You would need to provide a custom file client that talks to an image store. See FileClientStub which reveals the API you have to implement."
                });
                body.show('p2');
                //};
            }
        };
    }
})();
```

## Running the demo
If you want to view the included demo, you have to run `bower` first in order to retrieve the dependencies. Then run `gulp`


## Running the test

Integration test run: `gulp test` or `npm test` for ci
Unit tests run: `gulp unittest` or `npm run utest` for ci

