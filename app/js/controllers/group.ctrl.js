angular.module('app.controllers')

  .controller('GroupCtrl', function ProfileCtrl($scope, $stateParams, story) {
    $scope.group = story.groups[$stateParams.groupId];
  })
;
