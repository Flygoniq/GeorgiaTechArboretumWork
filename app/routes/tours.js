import Ember from 'ember';
//import App from './app/app.js';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('tour');
    }
});