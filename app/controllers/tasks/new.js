App.TasksNewController = Ember.ObjectController.extend({
  content: null,
  needs: 'project',

  newTask: function() {
    this.set('content', App.Task.createRecord());
  },

  save: function() {
    var task = this.get('content');
    task.set('project', this.get('controllers.project.content'));
    task.save().then(this.newTask.bind(this));
  }
});
