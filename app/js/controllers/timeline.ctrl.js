angular.module('app.controllers')

  .controller('TimelineCtrl', function TimelineCtrl($scope, $modal, AuthState, story, StoryContainer) {

    $scope.profile = AuthState.profile;
    var container = new StoryContainer(story);
    $scope.cards = container.filterCards($scope.profile.read);
  })
;
