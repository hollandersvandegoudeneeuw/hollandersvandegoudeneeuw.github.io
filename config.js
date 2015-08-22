var path = require('path');

exports.config = {

  modules: {
    definition: false,
    wrapper: false
  },

  paths: {
    "public": 'public',
    "watched": ['app', 'vendor']
  },

  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': [
            /^vendor/,

          // external libs
          'bower_components/modernizr/modernizr.js',
          'bower_components/jquery/dist/jquery.js',
          'bower_components/lodash/dist/lodash.js',
          'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',

          // angular
          'bower_components/angular/angular.js',
          'bower_components/angular-resource/angular-resource.js',
          'bower_components/angular-sanitize/angular-sanitize.js',
          'bower_components/angular-ui-router/release/angular-ui-router.js',
          'bower_components/angular-animate/angular-animate.js',

          // ui bootstrap
          'bower_components/angular-bootstrap/ui-bootstrap.js',
          'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'

        ],
      },
      order: {
        before: [
          // jquery
          'bower_components/jquery/jquery.js',

          // angular
          'bower_components/angular/angular.js',

          // bootstrap
          'bower_components/bootstrap/dist/js/bootstrap.js'
        ]
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/
      }
    }
  },

  plugins: {
    ng_annotate: {
      pattern: /^app/
    },
    autoprefixer: {
      browsers: [
        "last 2 version",
        "> 1%", // browsers with > 1% usage
        "ie >= 9"
      ],
      cascade: false
    }
  },

  server: {
    port: 4000
  },

  conventions: {
    assets: /app(\\|\/)assets(\\|\/)/
  },

  sourceMaps: true
};
