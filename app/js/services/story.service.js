angular.module('app.services')

  .factory('StoryContainer', function() {
    return function(story) {
      var self = this;

      self.findCard = function(id) {
        for (var i in story.chapters) {
          for (var j in story.chapters[i].cards) {
            var c = story.chapters[i].cards[j];
            if (c.id == id) {
              return c;
            }
          }
        }
        return null;
      };

      self.filterCards = function(ids) {
        return _.reduce(
          ids,
          function(list, id) {
            // find id in story
            var card = self.findCard(id);
            if (card) {
              list.push(card);
            }
            return list;
          }, []);
      };

      return self;
    };
  })
;
