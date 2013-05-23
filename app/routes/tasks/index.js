App.TasksIndexRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find(App.Task);
  }
});
