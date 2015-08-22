angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.ui', []);

angular.module('app', 
               ['ngSanitize', 
                'ngResource', 
                'ngAnimate', 
                'ui.router', 
                'ui.bootstrap', 
                'app.controllers',
                'app.services',
                'app.ui'
               ])

  .constant(
    'APIConfig',
    window.location.hostname == 'localhost' ?
      {
        'backend': 'http://goldenage.miraclethings.nl/api/'
        //'backend': 'http://goldenage.dev:8000/api/'
      } : {
        'backend': 'http://goldenage.miraclethings.nl/api/'
      }
  )

  .run(function($cacheFactory, $http) {
    $http.defaults.cache = $cacheFactory('default');
  })

  .config(function($stateProvider, $urlRouterProvider) {

    var resolveStory = {story: ['APIService', 'AuthService', '$stateParams', function(APIService, AuthService, $stateParams) {
      return AuthService.isAuthorized().then(function() {
        return APIService.get('goldenage/storydata', {id: $stateParams.storyId});
      });
    }]};

    $stateProvider

      .state('start', {
        url: "/",
        controller: 'StartCtrl',
      })

      .state('login', {
        url: "/login",
        templateUrl: "partials/login.html",
        controller: 'LoginCtrl',
      })

      .state('story', {
        url: "/:storyId", // root route
        templateUrl: "partials/story.html",
        resolve: resolveStory,
        controller: function($scope, story, $state) {
          $scope.story = story;
          $scope.$state = $state;
        }
      })

      .state('story.timeline', {
        url: "/timeline", // root route
        templateUrl: "partials/cardlist.html",
        controller: 'TimelineCtrl'
      })

      .state('story.favorites', {
        url: "/favorites",
        templateUrl: "partials/cardlist.html",
        controller: 'FavoritesCtrl'
      })

      .state('story.profile', {
        url: "/profile",
        templateUrl: "partials/profile.html",
        controller: 'ProfileCtrl',
      })

    ;
    $urlRouterProvider.otherwise("/");
  });
