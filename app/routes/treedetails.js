import Ember from 'ember';

export default Ember.Route.extend({
    store: Ember.inject.service()
    /*afterModel: function(tree, transition) {
        if (tree.get('Common_Name') === 'White Oak') {
            localStorage.treeOne = "true";
        }
        if (tree.get('Common_Name') === 'Japanese Maple') {
            localStorage.treeTwo = "true";
        }
    }*/
});
