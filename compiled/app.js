Ember.TEMPLATES['application']=Ember.Handlebars.compile("<div class=\"navbar\">\n  {{#linkTo projects}}Projects{{/linkTo}}\n</div>\n\n<div class=\"container\">\n  {{outlet}}\n</div>\n");Ember.TEMPLATES['project']=Ember.Handlebars.compile("{{outlet}}\n");Ember.TEMPLATES['project/edit']=Ember.Handlebars.compile("<h1>Edit: {{unbound name}}</h1>\n\n<form {{action save on=\"submit\"}}>\n  <div>\n    {{input value=name\n      placeholder=\"Name\"}}\n  </div>\n\n  <input type=\"submit\" value=\"Save\">\n</form>\n");Ember.TEMPLATES['project/index']=Ember.Handlebars.compile("<h1>{{name}}</h1>\n\n<div class=\"row\">\n  <div class=\"span6\">\n    <p>\n      This project has {{tasks.length}} tasks.\n    </p>\n\n    {{#each task in tasks itemController=Task}}\n      <div class=\"row\">\n        <div class=\"span4\">\n          {{#linkTo task task}}{{task.name}}{{/linkTo}}\n        </div>\n\n        <div class=\"span2\">\n          <span {{action toggle}}\n            {{bindAttr class=\"task.isDone:label-success:label-important :label\"}}>\n              {{task.status}}\n          </span>\n        </div>\n      </div>\n    {{/each}}\n\n  </div>\n  <div class=\"span6\">\n    {{render \"tasks/new\"}}\n  </div>\n</div>\n");Ember.TEMPLATES['projects']=Ember.Handlebars.compile("{{outlet}}\n");Ember.TEMPLATES['projects/index']=Ember.Handlebars.compile("<h1>All Projects</h1>\n\n<p>{{#linkTo projects.new}}Add{{/linkTo}} a new project</p>\n\n<p>You have {{length}} projects</p>\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Tasks</th>\n      <th>Edit</th>\n      <th>Delete</th>\n    </tr>\n  </thead>\n  <tbody>\n    {{#each project in controller itemController=Project}}\n      <tr>\n        <td>\n          {{#linkTo project project}}\n            {{project.name}}\n          {{/linkTo}}\n        </td>\n        <td>\n          {{project.tasks.length}}\n        </td>\n        <td>\n          {{#linkTo project.edit project}}Edit{{/linkTo}}\n        </td>\n        <td>\n          <a href=\"#\" {{action deleteRecord}}>Delete</a>\n        </td>\n      </tr>\n    {{/each}}\n  </tbody>\n</table>\n");Ember.TEMPLATES['projects/new']=Ember.Handlebars.compile("<h1>New Project</h1>\n\n<form {{action save on=\"submit\"}}>\n  <div>\n    {{input value=name\n      placeholder=\"Name\"}}\n  </div>\n\n  <input type=\"submit\" value=\"Create\">\n</form>\n");Ember.TEMPLATES['task']=Ember.Handlebars.compile("{{outlet}}\n");Ember.TEMPLATES['task/index']=Ember.Handlebars.compile("<h1>{{name}}</h1>\n\n<p>\n  Return to {{#linkTo project project}}{{project.name}}{{/linkTo}}\n</p>\n\n<p>\n  This task has {{#if isDone}}been{{else}}not been{{/if}}\n  completed.\n</p>\n\n{{#if isDone}}\n  <a class=\"btn\" {{action toggle task}}>Complete</a>\n{{else}}\n  <a class=\"btn\" {{action toggle task}}>Not Complete</a>\n{{/if}}\n\n");Ember.TEMPLATES['tasks']=Ember.Handlebars.compile("{{outlet}}\n");Ember.TEMPLATES['tasks/new']=Ember.Handlebars.compile("<h4>New Task</h4>\n\n<form {{action save on=\"submit\"}}>\n  <div>\n    {{input value=name\n      placeholder=\"Name\"}}\n  </div>\n\n  <input type=\"submit\" value=\"Add\">\n</form>\n");minispade.register('config/app', "(function() {App = Ember.Application.create({\n  LOG_TRANSITIONS: true\n});\n\n})();\n//@ sourceURL=config/app");minispade.register('config/boot', "(function() {minispade.requireAll(new RegExp('config/*'));\nminispade.requireAll(new RegExp('.*'));\n\n})();\n//@ sourceURL=config/boot");minispade.register('config/data', "(function() {App.Store = DS.Store.extend({\n  revision: 12,\n  adapter: DS.FixtureAdapter.extend({\n    queryFixtures: function(fixtures, query, type) {\n      if (type == App.Project && query.search) {\n        var searchRegex = new RegExp(query.search, \"i\");\n        return fixtures.filter(function(project) {\n          return searchRegex.test(project.name);\n        });\n      }\n    }\n  })\n});\n\n})();\n//@ sourceURL=config/data");minispade.register('controllers/project', "(function() {App.ProjectController = Ember.ObjectController.extend({\n  content: null,\n\n  deleteRecord: function() {\n    this.get('content').deleteRecord();\n    this.get('store').commit();\n  },\n\n  save: function() {\n    var project = this.get('content'),\n        controller = this;\n\n    project.save().then(function() {\n      controller.transitionToRoute('project', project);\n    });\n  }\n});\n\n})();\n//@ sourceURL=controllers/project");minispade.register('controllers/project/edit', "(function() {App.ProjectEditController = App.ProjectController.extend({});\n\n})();\n//@ sourceURL=controllers/project/edit");minispade.register('controllers/project/index', "(function() {App.ProjectIndexController = App.ProjectController.extend();\n\n})();\n//@ sourceURL=controllers/project/index");minispade.register('controllers/projects/new', "(function() {App.ProjectsNewController = Ember.ObjectController.extend({\n  content: null,\n\n  save: function() {\n    var project = this.get('content'),\n        controller = this;\n\n    project.save().then(function() {\n      controller.transitionToRoute('project', project);\n    });\n  }\n});\n\n})();\n//@ sourceURL=controllers/projects/new");minispade.register('controllers/task', "(function() {App.TaskController = Ember.ObjectController.extend({\n  content: null,\n\n  status: function() {\n    return this.get('isDone') ? 'complete' : 'incomplete';\n  }.property('isDone'),\n\n  complete: function() {\n    this.get('content').set('isDone', true);\n    this.get('store').commit();\n  },\n\n  incomplete: function() {\n    this.get('content').set('isDone', false);\n    this.get('store').commit();\n  },\n\n  toggle: function() {\n    this.toggleProperty('isDone');\n    this.get('store').commit();\n  }\n});\n\n})();\n//@ sourceURL=controllers/task");minispade.register('controllers/task/index', "(function() {App.TaskIndexController = App.TaskController.extend({});\n\n})();\n//@ sourceURL=controllers/task/index");minispade.register('controllers/tasks/new', "(function() {App.TasksNewController = Ember.ObjectController.extend({\n  content: null,\n  needs: 'project',\n\n  newTask: function() {\n    this.set('content', App.Task.createRecord());\n  },\n\n  save: function() {\n    var task = this.get('content');\n    task.set('project', this.get('controllers.project.content'));\n    task.save().then(this.newTask.bind(this));\n  }\n});\n\n})();\n//@ sourceURL=controllers/tasks/new");minispade.register('fixtures/projects', "(function() {minispade.require('models/project');\n\nApp.Project.FIXTURES = [\n  {\n    id: 1,\n    name: \"Test Project 1\",\n    tasks: [1, 2]\n  },\n  {\n    id: 2,\n    name: \"Another Project\",\n    tasks: [3, 4]\n  }\n];\n\n})();\n//@ sourceURL=fixtures/projects");minispade.register('fixtures/tasks', "(function() {minispade.require('models/task');\n\nApp.Task.FIXTURES = [{\n  id: 1,\n  project: 1,\n  name: \"First task\",\n  isDone: true\n},{\n  id: 2,\n  project: 1,\n  name: \"Another task\",\n  isDone: false\n},{\n  id: 3,\n  project: 2,\n  name: \"Do this\",\n  isDone: false\n},{\n  id: 4,\n  project: 2,\n  name: \"Task\",\n  isDone: false\n}];\n\n})();\n//@ sourceURL=fixtures/tasks");minispade.register('models/project', "(function() {App.Project = DS.Model.extend({\n  name: DS.attr('string'),\n  tasks: DS.hasMany('App.Task')\n});\n\n})();\n//@ sourceURL=models/project");minispade.register('models/task', "(function() {App.Task = DS.Model.extend({\n  project: DS.belongsTo('App.Project'),\n  name: DS.attr('string'),\n  isDone: DS.attr('boolean', { defaultValue: false })\n});\n\n})();\n//@ sourceURL=models/task");minispade.register('routes/project/edit', "(function() {App.ProjectEditRoute = Ember.Route.extend({\n  setupController: function(controller) {\n    controller.set('content', this.controllerFor('project').get('content'));\n  }\n});\n\n})();\n//@ sourceURL=routes/project/edit");minispade.register('routes/project/index', "(function() {App.ProjectIndexRoute = Ember.Route.extend({\n  setupController: function(controller, model) {\n    controller.set('content', this.controllerFor('project').get('content'));\n    this.controllerFor('tasks.new').newTask();\n  }\n});\n\n})();\n//@ sourceURL=routes/project/index");minispade.register('routes/projects/index', "(function() {App.ProjectsIndexRoute = Ember.Route.extend({\n  model: function() {\n    return this.get('store').find(App.Project);\n  }\n});\n\n})();\n//@ sourceURL=routes/projects/index");minispade.register('routes/projects/new', "(function() {App.ProjectsNewRoute = Ember.Route.extend({\n  model: function() {\n    return App.Project.createRecord();\n  }\n});\n\n})();\n//@ sourceURL=routes/projects/new");minispade.register('routes/router', "(function() {App.Router.map(function() {\n  this.resource('projects', function() {\n    this.route('new');\n    this.resource('project', { path: '/:project_id' }, function() {\n      this.route('edit');\n    });\n  });\n\n  this.resource('tasks', function() {\n    this.resource('task', { path: '/:task_id' }, function() {\n      this.route('edit');\n    });\n  });\n});\n\n})();\n//@ sourceURL=routes/router");minispade.register('routes/task/index', "(function() {App.TaskIndexRoute = Ember.Route.extend({\n  setupController: function(controller, model) {\n    controller.set('content', this.controllerFor('task').get('content'));\n  }\n});\n\n\n})();\n//@ sourceURL=routes/task/index");minispade.register('routes/tasks/index', "(function() {App.TasksIndexRoute = Ember.Route.extend({\n  model: function() {\n    return this.get('store').find(App.Task);\n  }\n});\n\n})();\n//@ sourceURL=routes/tasks/index");