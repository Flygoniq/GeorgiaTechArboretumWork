import Ember from 'ember';

export default Ember.Route.extend({
    afterModel: function(tree, transition) {
        if (tree.get('Common_Name') === 'White Oak') {
            localStorage.badgeOne = "true";
        }
    }
});
