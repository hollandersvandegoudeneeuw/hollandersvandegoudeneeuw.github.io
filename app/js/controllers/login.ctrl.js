angular.module('app.controllers')

  .controller('LoginCtrl', function StartCtrl($scope, $state, AuthService, AuthState) {

    $scope.errorMessage = null;

    $scope.login = function() {
      if (!$scope.loginForm.$valid) return;

      AuthService.login($scope.email).then(
        function(r) {
          $state.go('start');
        },
        function(e) {
          console.log(e);
          $scope.errorMessage = "This e-mail address is unknown.";
        });
      
    };
  })

;

