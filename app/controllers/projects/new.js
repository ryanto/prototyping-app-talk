App.ProjectsNewController = Ember.ObjectController.extend({
  content: null,

  save: function() {
    var project = this.get('content'),
        controller = this;

    project.save().then(function() {
      controller.transitionToRoute('project', project);
    });
  }
});
