angular.module('app.services')

  .factory('APIService', function APIService($q, $http, APIConfig, AuthState) {

    function checkAuth(email) {
      if (!email) email = AuthState.getEmail();
      $http.defaults.headers.common.Authorization = email ? 'E-mail ' + email : null;
    }

	return {
      get: function(path, args, email) {
        var qs = args ? ('?' + $.param(args)) : '';
        checkAuth(email);
        return $http({
          url: APIConfig.backend + path + qs,
          method: 'GET',
          cache: true
        }).then(function(r) {
          return r.data;
        });
      }
    };
  })
;
