require('models/task');

App.Task.FIXTURES = [{
  id: 1,
  project: 1,
  name: "First task",
  isDone: true
},{
  id: 2,
  project: 1,
  name: "Another task",
  isDone: false
},{
  id: 3,
  project: 2,
  name: "Do this",
  isDone: false
},{
  id: 4,
  project: 2,
  name: "Task",
  isDone: false
}];
