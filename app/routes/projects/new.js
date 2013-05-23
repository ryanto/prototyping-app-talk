App.ProjectsNewRoute = Ember.Route.extend({
  model: function() {
    return App.Project.createRecord();
  }
});
