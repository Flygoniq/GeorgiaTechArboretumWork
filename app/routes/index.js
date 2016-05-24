import Ember from 'ember';

export default Ember.Route.extend({
    afterModel: function() {
        this.store.push({
            data: [{    
                id: 1,
                type: 'tree',
                attributes: {
                    species: 'Pine',
                    information: "Wow! It's a pine tree!"
                },
                relationships: {}
            }, {
                id: 2,
                type: 'tree',
                attributes: {
                    species: 'Oak',
                    information: "Wow! It's an oak tree!"
                },
                relationships: {}
            }]
        });
        this.transitionTo('home');
    }
});