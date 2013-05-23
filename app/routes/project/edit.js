App.ProjectEditRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', this.controllerFor('project').get('content'));
  }
});
