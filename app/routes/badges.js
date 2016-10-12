import Ember from 'ember';



export default Ember.Route.extend({
    beforeModel() {
        if (localStorage.treeOne) {
            localStorage.badgeThree = "true";
        }
        if (localStorage.treeOne && localStorage.treeTwo) {
            localStorage.badgeTwo = "true";
        }
    }
});

export default Ember.Route.extend({
    store: Ember.inject.service(),
    model: function() {
        /*
            In order to push actual badges in, make an array, pull the badges out of ember
            Data and into this array, then push the appropriate badge models in.
        
        var badges = [];
        if (localStorage.badgeOne) {
            if (localStorage.badgeOne === "true") {
                badges.push("Badge One");
            }
        }
        if (localStorage.badgeTwo) {
            if (localStorage.badgeTwo) {
                badges.push("Badge Two");
            }
        }
        if (localStorage.badgeThree) {
            if (localStorage.badgeThree) {
                badges.push("Badge Three");
            }
        }
        return badges;*/
        
        return this.store.peekAll('badge');
    }
});
