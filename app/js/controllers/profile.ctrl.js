angular.module('app.controllers')

  .controller('ProfileCtrl', function ProfileCtrl($scope, story, $modal, AuthState, AuthService) {

    $scope.logout = AuthService.logout;

    $scope.network = _.map(story.network, function(id) {
      return story.persons[id];
    });
    console.log($scope.network);


  })
;
