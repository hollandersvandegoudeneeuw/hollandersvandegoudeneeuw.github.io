angular.module('app.controllers')

  .controller('TimelineCtrl', function TimelineCtrl($scope, $modal, AuthState, story, StoryContainer) {
    var container = new StoryContainer(story);
    $scope.cards = container.filterCards(AuthState.profile.read);
  })
;
