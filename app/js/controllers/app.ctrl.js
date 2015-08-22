angular.module('app.controllers')

  .controller('AppCtrl', function StartCtrl($scope, $modal, AuthState) {
    $scope.state = AuthState;
  })

  .controller('StartCtrl', function StartCtrl($scope, $state, AuthService, AuthState) {

    AuthService.isAuthorized().then(
      function(auth) {
        var storyId = AuthState.stories[0].id;
        console.log('go', storyId);

        $state.go('story.timeline', {storyId: storyId});
      },
      function() {
        $state.go('login');
      });

  })

;
