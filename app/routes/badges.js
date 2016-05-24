import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var badges = [];
        if (localStorage.badgeOne) {
            if (localStorage.badgeOne === "true") {
                badges.push("Badge One");
            }
        } else {
            localStorage.badgeOne = "false";
        }
        return badges;
    }
});
