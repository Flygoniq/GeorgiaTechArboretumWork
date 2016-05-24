import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

//let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

/*App.Tree = Ember.Object.extend({
    species: '',
    information: '',
    tree_id: function() {
        return this.get('species').dasherize();
    }.property('species'),
});

App.Tree.reopenClass({
    createTree: function(data) {
        var tree = App.Tree.create({species: data.species, information: data.information});
        return tree;
    }
});*/

export default App;
