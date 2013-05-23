App.ProjectController = Ember.ObjectController.extend({
  content: null,

  deleteRecord: function() {
    this.get('content').deleteRecord();
    this.get('store').commit();
  },

  save: function() {
    var project = this.get('content'),
        controller = this;

    project.save().then(function() {
      controller.transitionToRoute('project', project);
    });
  }
});
