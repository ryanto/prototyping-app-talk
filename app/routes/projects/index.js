App.ProjectsIndexRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find(App.Project);
  }
});
