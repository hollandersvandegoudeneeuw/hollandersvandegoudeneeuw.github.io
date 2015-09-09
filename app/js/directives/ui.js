angular.module('app.directives')

  .directive('cardImage', function($sce, $compile, $state, i18n, Constants) {
    return {
      restrict: 'E',
      scope: {
        card: '=',
        story: '=',
        profile: '=',
        who: '@'
      },
      template: '<img ng-src="{{ image }}" ng-show="visible" class="card-profile-image" />',
      replace: true,
      link: function(scope, ele) {
        scope.visible = !!scope.card[scope.who];
        if (!scope.visible) return;
        var id = scope.card[scope.who];

        var rsc = scope.story.persons[id] || scope.story.groups[id];
        if (id == Constants.YOU) {
          rsc = scope.profile;
        }
        scope.image = rsc.image;
        
      }
    };
  })

  .directive('cardTitle', function($sce, $compile, $state, i18n, Constants) {
    return {
      restrict: 'E',
      scope: {
        card: '=',
        story: '=',
        profile: '='
      },
      replace: true,
      link: function(scope, ele) {
        var cat = scope.card.category;
        switch (cat) {
        case 'checkin':
          if (scope.card.target !== 0) {
            cat += '_target';
          }
          break;
        }
          
        var template = i18n('card_title_' + cat);

        function link(tpl, id) {
          var rsc = scope.story.persons[id] || scope.story.groups[id];
          if (id == Constants.YOU) {
            rsc = scope.profile;
          }
          var a = "<a href ng-click='click(" + id + ")'>" + rsc.title + "</a>";
          return template.replace(tpl, a);
        }
        
        if (scope.card.author) {
          template = link('[author]', scope.card.author);
        }
        if (scope.card.target) {
          template = link('[target]', scope.card.target);
        }

        scope.click = function(id) {
          if (id == Constants.YOU) {
            $state.go('story.profile', {storyId: scope.story.id});
            return;
          }
          if (scope.story.persons[id]) {
            $state.go('story.person', {storyId: scope.story.id, personId: id});
            return;
          }
          if (scope.story.groups[id]) {
            $state.go('story.group', {storyId: scope.story.id, groupId: id});
            return;
          }
        };

        ele.html("<div class='card-title'>" + template + "</div>");
        $compile(ele.contents())(scope);
      }
    };
  })

;
