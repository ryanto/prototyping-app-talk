App.TaskIndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', this.controllerFor('task').get('content'));
  }
});
