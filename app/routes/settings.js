import Ember from 'ember';
//http://stackoverflow.com/questions/28412001/ember-js-include-external-script-on-specific-page
export default Ember.Route.extend({
    beforeModel: function() {
        Ember.$.getScript('\\js\\jquery.min.js');
        Ember.$.getScript('\\js\\bootstrap.min.js');
        Ember.$.getScript('\\js\\bootstrap-switch.js');
        Ember.$.getScript('\\js\\settingsscript.js');
    }
    
});
