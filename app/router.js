import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('companies', function(){
    this.route('index', { path: '/' });
    this.route('show', { path: ':company_id' });
    this.route('edit', { path: ':company_id/edit' });
  });
});

export default Router;
