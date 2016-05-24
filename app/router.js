import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/home'});
  this.route('trees');
  this.route('treedetails', {path: '/treedetails/:tree_id'});
  this.route('badges');
});

export default Router;