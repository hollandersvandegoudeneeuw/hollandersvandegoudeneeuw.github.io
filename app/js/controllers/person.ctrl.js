angular.module('app.controllers')

  .controller('PersonCtrl', function ProfileCtrl($scope, $stateParams, story) {
    $scope.person = story.persons[$stateParams.personId];
  })
;
