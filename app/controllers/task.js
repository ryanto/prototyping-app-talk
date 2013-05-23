App.TaskController = Ember.ObjectController.extend({
  content: null,

  status: function() {
    return this.get('isDone') ? 'complete' : 'incomplete';
  }.property('isDone'),

  complete: function() {
    this.get('content').set('isDone', true);
    this.get('store').commit();
  },

  incomplete: function() {
    this.get('content').set('isDone', false);
    this.get('store').commit();
  },

  toggle: function() {
    this.toggleProperty('isDone');
    this.get('store').commit();
  }
});
