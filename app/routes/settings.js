import Ember from 'ember';
//http://stackoverflow.com/questions/28412001/ember-js-include-external-script-on-specific-page
export default Ember.Route.extend({
    beforeModel: function() {
        Ember.$.getScript('assets\\js\\jquery.min.js');
        Ember.$.getScript('assets\\js\\bootstrap.min.js');
        Ember.$.getScript('assets\\js\\bootstrap-switch.js', function() {
            Ember.$.getScript('assets\\js\\settingsscript.js');
        });
        
    }
    
});
