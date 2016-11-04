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

Use as an Editor:

```html
<substance type="editor"></substance>
```

...or use the Viewer:

```html
<substance type="viewer"></substance>
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
        .factory('SubstanceService', SubstanceService);

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
            }
        };
    }
})();
```

## Running the demo
If you want to view the included demo, you have to run `bower` first in order to retrieve the dependencies. Then run `gulp`


## Running the test

Integration test run: `gulp protractor` or `npm test` for ci


## Development

You can create a new library file with `gulp build`


### Create new bower version

All valid semver tags on git@github.com:EnricoSchw/angular-substance-editor.git will be available as versions.
To publish a new version, just release a valid semver tag. For this

  1. Change Version in `bower.json` and `package.json`.
  2. Tag the current commit `git tag -a v1.0.1-beta -m 'Version 1.0.1-beta'`.
  3. Push new Tag `git push origin v1.0.1-beta`.

Run bower info angular-substance-editor to list the available versions.

