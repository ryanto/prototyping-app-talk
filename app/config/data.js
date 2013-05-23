App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.FixtureAdapter.extend({
    queryFixtures: function(fixtures, query, type) {
      if (type == App.Project && query.search) {
        var searchRegex = new RegExp(query.search, "i");
        return fixtures.filter(function(project) {
          return searchRegex.test(project.name);
        });
      }
    }
  })
});
