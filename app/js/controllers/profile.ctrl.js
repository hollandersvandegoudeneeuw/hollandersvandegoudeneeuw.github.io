angular.module('app.controllers')

  .controller('ProfileCtrl', function ProfileCtrl($scope, $modal, AuthState, AuthService) {

    $scope.logout = AuthService.logout;
  })
;
