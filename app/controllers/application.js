import Ember from 'ember';

let ApplicationController = Ember.Controller.extend({
  session: Ember.inject.service(),

  //persistedTasks: Ember.computed.filterBy('tasks', 'isNew', false),

  actions: {
    /*addTask() {
      return this.store.createRecord('task', {isEditing: true});
    },*/
    login() {
      return this.get('session').authenticate('authenticator:google', 'google-oauth2');
    },
    logout() {
      return this.get('session').invalidate();
    }
  }
});

export default ApplicationController;