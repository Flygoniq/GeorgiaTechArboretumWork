import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var badges = [];
        if (localStorage.badgeOne) {
            if (localStorage.badgeOne) {
                badges.push("Badge One");
            }
        }
        return badges;
    }
});

export default Ember.Route.extend({
    afterModel() {
        this.transitionTo('home');
    }
});
