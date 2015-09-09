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
        url: "/",
        controller: 'StartCtrl',
      })

      .state('login', {
        url: "/login",
        templateUrl: "app/templates/login.html",
        controller: 'LoginCtrl',
      })

      .state('story', {
        url: "/:storyId", // root route
        templateUrl: "app/templates/story.html",
        resolve: resolveStory,
        controller: function($scope, story, $state) {
          $scope.story = story;
          $scope.$state = $state;
        }
      })

      .state('story.timeline', {
        url: "/timeline", // root route
        templateUrl: "app/templates/cardlist.html",
        controller: 'TimelineCtrl'
      })

      .state('story.favorites', {
        url: "/favorites",
        templateUrl: "app/templates/cardlist.html",
        controller: 'FavoritesCtrl'
      })

      .state('story.profile', {
        url: "/profile",
        templateUrl: "app/templates/profile.html",
        controller: 'ProfileCtrl',
      })

      .state('story.person', {
        url: "/person/:personId",
        templateUrl: "app/templates/person.html",
        controller: 'PersonCtrl',
      })

      .state('story.group', {
        url: "/group/:groupId",
        templateUrl: "app/templates/group.html",
        controller: 'GroupCtrl',
      })

      .state('story.hashtag', {
        url: "/hashtag/:hashtagId",
        templateUrl: "app/templates/hashtag.html",
        controller: 'HashtagCtrl',
      })

    ;
    $urlRouterProvider.otherwise("/");
  });
