import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

//always make sure that the dynamic segments following colons (:) use the full model-name_id syntax.
Router.map(function() {
  this.route('home', {path: '/home'});
  this.route('trees');
  this.route('treedetails', {path: '/treedetails/:tree_id'});
  this.route('badges');
  this.route('badgedetails', {path: '/badgedetails/:badge_id'});
  this.route('settings');
  this.route('tours');
  this.route('tourdetails', {path: '/tourdetails/:tour_id'});
  this.route('about');
  this.route('map');
  this.route('statdetails', {path: '/statdetails/:statistic_id'});
  this.route('attributedetails', {path: '/attributedetails/:attribute_id'});
});

export default Router;