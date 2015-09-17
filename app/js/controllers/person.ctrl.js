angular.module('app.controllers')

  .controller('PersonCtrl', function ProfileCtrl($scope, $stateParams, StoryContainer, story) {
    $scope.person = story.persons[$stateParams.personId];

    var container = new StoryContainer(story);
    $scope.cards = container.filterPersonCards($scope.person.id);

    $scope.groups = _(story.groups)
      .filter(function(g) {
        return _.find(g.members, {id: $scope.person.id}) !== undefined;
      })
      .each(function(g) {
        if (g.members.length > 4) {
          var rest = g.members.splice(4);
          g.members.push({rest: rest.length});
        }
        for (var i=0; i<g.members.length; i++) {
          g.members[i].hiddensm = i > 2;
        }
        return g;
      })
      .value();
    
  })
;
