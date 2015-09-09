angular.module('app.controllers', []);
angular.module('app.services', []);
angular.module('app.directives', []);

angular.module('app', 
               ['ngSanitize', 
                'ngResource', 
                'ngAnimate',
                'templates',
                'ui.router', 
                'ui.bootstrap', 
                'app.controllers',
                'app.directives',
                'app.services'
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

  .value('Constants', {
    YOU: 351
  })

  .config(function($stateProvider, $urlRouterProvider) {

    var resolveStory = {story: ['APIService', 'AuthService', '$stateParams', function(APIService, AuthService, $stateParams) {
      return AuthService.isAuthorized().then(function() {
        return APIService.get('goldenage/storydata', {id: $stateParams.storyId});
      });
    }]};

    $stateProvider

      .state('start', {
        url: "/start",
        views: {
          master: {
            controller: 'StartCtrl'
          }
        }
      })

      .state('login', {
        url: "/login",
        views: {
          "master": {
            templateUrl: "app/templates/login.html",
            controller: 'LoginCtrl'
          }
        }
      })

      .state('story', {
        url: "/:storyId", // root route
        resolve: resolveStory,
        views: {
          "master": {
            templateUrl: "app/templates/story.html",
            controller: function($scope, story, $state) {
              $scope.story = story;
              $scope.$state = $state;
            }
          }
        }
      })

      .state('story.choose', {
        url: "/choose", // root route
        templateUrl: "app/templates/choosestories.html",
        controller: 'ChooseStoriesCtrl'
      })

      .state('story.timeline', {
        url: "/timeline", // root route
        views: {
          "detail@story": {
            templateUrl: "app/templates/timeline.html",
            controller: 'TimelineCtrl'
          }
        }
      })

      .state('story.favorites', {
        url: "/favorites",
        views: {
          "detail@story": {
            templateUrl: "app/templates/favorites.html",
            controller: 'FavoritesCtrl'
          }
        }
      })

      .state('story.profile', {
        url: "/profile",
        views: {
          "detail@story": {
            templateUrl: "app/templates/profile.html",
            controller: 'ProfileCtrl',
          }
        }
      })

      .state('story.person', {
        url: "/person/:personId",
        views: {
          "detail@story": {
            templateUrl: "app/templates/person.html",
            controller: 'PersonCtrl',
          }
        }
      })

      .state('story.group', {
        url: "/group/:groupId",
        views: {
          "detail@story": {
            templateUrl: "app/templates/group.html",
            controller: 'GroupCtrl',
          }
        }
      })

      .state('story.hashtag', {
        url: "/hashtag/:hashtagId",
        views: {
          "detail@story": {
            templateUrl: "app/templates/hashtag.html",
            controller: 'HashtagCtrl',
          }
        }
      })
    ;
    
    $urlRouterProvider.otherwise("/start");
  });
