App.ProjectIndexRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('content', this.controllerFor('project').get('content'));
    this.controllerFor('tasks.new').newTask();
  }
});
