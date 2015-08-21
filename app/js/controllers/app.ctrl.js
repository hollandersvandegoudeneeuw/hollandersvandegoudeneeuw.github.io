angular.module('app')

  .controller('AppCtrl', function AppCtrl($scope, $modal) {
    // this is the controller for the whole page

    $scope.modal = function() {
      $modal.open({
        templateUrl: 'partials/modal.html'
      });
    };
  })

;
