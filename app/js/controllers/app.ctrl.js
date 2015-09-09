angular.module('app.controllers')

  .controller('AppCtrl', function AppCtrl($scope, $modal, $rootScope, $state, AuthState) {
    $scope.$state = $state;
    $scope.state = AuthState;
    $rootScope.lang = navigator.language.substr(0,2) == 'nl' ? 'nl' : 'en';
    $scope.blurred = true;
  })

  .controller('StartCtrl', function StartCtrl($scope, $state, AuthService, AuthState) {

    AuthService.isAuthorized().then(
      function(auth) {
        $state.go('choose');
      },
      function() {
        $state.go('login');
      });

  })

;
