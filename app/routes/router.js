App.Router.map(function() {
  this.resource('projects', function() {
    this.route('new');
    this.resource('project', { path: '/:project_id' }, function() {
      this.route('edit');
      this.resource('tasks', function() {
        this.resource('task', { path: '/:task_id' }, function() {
          this.route('edit');
        });
      });
    });
  });
});
