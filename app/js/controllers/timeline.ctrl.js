angular.module('app.controllers')

  .controller('TimelineCtrl', function TimelineCtrl($scope, $modal, AuthState, story, i18n, StoryContainer) {
    var container = new StoryContainer(story);
    $scope.cards = container.filterCards(AuthState.profile.read);
  })

  .controller('CardListCtrl', function CardListCtrl($scope, i18n, AuthState) {

    function likes(card) {
      return _.contains(AuthState.profile.likes, card.id);
    }
    
    $scope.likeImage = function(card) {
      return likes(card) ? '/img/ic_card_heart_on.png' : '/img/ic_card_heart_off.png';
    };

    $scope.likeText = function(card, story) {
      var names = [];
      if (likes(card)) {
        names.push(i18n('like_text_you'));
      }
      _.each(card.likes || [], function(id) {
        names.push(story.persons[id].title);
      });

      if (!names.length) {
        return '';
      }

      var s = i18n('like_text_template_plural');
      if (names.length == 1) {
        if (likes(card)) {
          s = i18n('like_text_template_single_1stperson');
        } else {
          s = i18n('like_text_template_single');
        }
      }
      var namestr = names.join(", ");
      if (names.length > 1) {
        var pos = namestr.lastIndexOf(', ');
        namestr = namestr.substring(0,pos) + i18n('like_text_and') + namestr.substring(pos+1);
      }
      return s.replace(/%s/, namestr);
    };
    
  })

;
