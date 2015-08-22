angular.module('app.controllers')

  .controller('TimelineCtrl', function TimelineCtrl($scope, $modal, AuthState, story, StoryContainer) {

    var profile = AuthState.profile;
    var container = new StoryContainer(story);
    $scope.cards = container.filterCards(profile.read);
  })
;
