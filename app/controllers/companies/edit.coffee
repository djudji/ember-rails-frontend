`import Ember from 'ember'`

CompaniesEditController = Ember.Controller.extend
  actions:
    save: ->
      @get('model').save().then =>
        @transitionToRoute 'companies.index'
    cancel: ->
      @transitionToRoute 'companies.index'

`export default CompaniesEditController`