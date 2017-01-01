import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts', {resetNamespace: true}, function() {
    this.route('new');
    this.route('details', {path: '/details/:contact_id'});
    this.route('edit', {path: '/edit/:contact_id'});
  });
});

export default Router;
