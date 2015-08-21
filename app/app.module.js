angular.module('app', ['ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .constant('VERSION', '0.7.0')

  .config(function($stateProvider, $locationProvider, $urlRouterProvider) {

    $stateProvider.state('todo', {
      url: "/todo", // root route
      views: {
        "mainView": {
          templateUrl: "partials/todo.html",
          controller: 'TodoCtrl',
          controllerAs: 'todo'
        }
      }
    }).state('view', {
      url: "/view",
      views: {
        "mainView": {
          templateUrl: "partials/view.html",
          controller: 'ViewCtrl',
          controllerAs: 'view'
        }
      }
    });
    $urlRouterProvider.otherwise("/todo");
  });
