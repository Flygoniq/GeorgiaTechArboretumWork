import Ember from 'ember';

export default Ember.Route.extend({
    afterModel: function(tree, transition) {
        localStorage.badgeOne = "true";
    }
});
