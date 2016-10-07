import Ember from 'ember';
//import App from './app/app.js';

export default Ember.Route.extend({
    store: Ember.inject.service(),
    model: function() {
        return this.store.peekAll('tree');
    }
});