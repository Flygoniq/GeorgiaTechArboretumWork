# Ember-two

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* `ember serve --port 9777`

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
* To build android app:
 * Delete /cordova/ path in root
 * `ember generate cordova-init edu.gatech.arch.imagine.arboretum --platform=android`.  The url can be whatever you want when testing.
 * `ember cordova run android`

### Notes on Ember behaviors
* When creating multiple hooks for routes (ie beforeModel, model, afterModel), they must be in the file in their order of execution.  See /app/routes/badges.js for example.
* Generally, each template and its backend route should share the same name (for example, badge.hbs and badge.js).  However, Ember's initial route is an exception.  It is called application.hbs, serves as the starting page, and is backed by index.js.  Currently, this app uses index.js to initialize data and then transitions to home.hbs without showing application.hbs.
* Templates should contain links to other templates.  Any appropriate hooks in their backing routes activate when links are pressed.

### File Organization
* `app` Contains folders and files for code.
 * `models` Models are Ember's objects.
 * `routes` Routes are javascript files which serve as backend functionality for templates.  They load models so that templates can use the model.  Other javascript functionality is also written included here.
 * `styles` Contains app.css, the css file that is shared between all the templates.
 * `templates` Contains handlebars files (.hbs) which are essentially HTML but with sections that change dynamically based on the model data provided.
* `bower_components` Bower manages front-end plugins and component dependencies.  bower.json contains a list of dependencies installed automatically.  Additional dependencies such as Bootstrap will be listed in the json and added to this directory.
* `config` Contains environment.js where app settings can be configured.
* `dist` Contains output files from building the app.
* `node_modules` Contains npm modules.  Similarly to bower, they are listed in package.json.
* `public` Assets that are not compiled go in here (Images, fonts).
* `vendor` Contains dependencies not managed by bower.

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

