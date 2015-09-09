angular.module('app.controllers')

  .controller('PersonCtrl', function ProfileCtrl($scope, $stateParams, StoryContainer, story) {
    $scope.person = story.persons[$stateParams.personId];

    var container = new StoryContainer(story);
    $scope.cards = container.filterPersonCards($scope.person.id);
    
  })
;
