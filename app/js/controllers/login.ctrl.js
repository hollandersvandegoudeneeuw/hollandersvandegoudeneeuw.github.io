angular.module('app.controllers')

  .controller('LoginCtrl', function StartCtrl($scope, $modal, AuthService, AuthState) {

    $scope.errorMessage = null;

    $scope.login = function() {
      if (!$scope.loginForm.$valid) return;

      AuthService.login($scope.email).then(
        function(r) {
          console.log('jajaja');

          console.log('profile', AuthState.profile);
        },
        function(e) {
          console.log(e);
          $scope.errorMessage = "This e-mail address is unknown.";
        });
      
    };
  })

;

