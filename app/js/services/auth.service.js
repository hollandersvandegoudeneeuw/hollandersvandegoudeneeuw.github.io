angular.module('app.services')
  .value('AuthState', {
      getEmail: function() {
        return localStorage.email;
      },
      setEmail: function(e) {
        localStorage.email = e;
      }, 
      profile: null,
      stories: null
  })

  .factory('AuthService', function AuthService($q, AuthState, APIService) {

    function authSuccess(r) {
      AuthState.profile = r;
      return APIService.get('goldenage/stories').then(
        function(r) {
          AuthState.stories = r;
          return true;
        });
    }

    function isAuthorized() {
      return APIService.get('goldenage/userinfo', {}, AuthState.getEmail()).then(authSuccess);
    }

    function login(email) {
      return APIService.get('goldenage/userinfo', {}, email).then(
        function(r) {
          AuthState.setEmail(email);
          return authSuccess(r);
        });
    }

	return {
      isAuthorized: isAuthorized,
      login: login
    };
  })
;
