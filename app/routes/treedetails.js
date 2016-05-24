import Ember from 'ember';

export default Ember.Route.extend({
    afterModel: function(tree, transition) {
        if (tree.get('species') === 'Pine') {
            localStorage.badgeOne = "true";
        }
    }
});
