App.Project = DS.Model.extend({
  name: DS.attr('string'),
  tasks: DS.hasMany('App.Task')
});
