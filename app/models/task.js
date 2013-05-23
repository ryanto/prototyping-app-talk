App.Task = DS.Model.extend({
  project: DS.belongsTo('App.Project'),
  name: DS.attr('string'),
  isDone: DS.attr('boolean', { defaultValue: false })
});
