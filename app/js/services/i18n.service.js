angular.module('app.services')

  .factory('i18n', function($rootScope) {

    var messages = {
      en: {
        'login_title': 'Welcome to the Golden Age!',
        'login_text': 'This website is part of the app and educational program #goldenAge. Please first visit the exhibition before using this website. Afterwards, log in with the same e-mail address that you used in the app.',
        'login_placeholder': 'E-mail address',
        'login_btn': 'Login',
        
        card_title_attend_event: "[author] created an event",
        card_title_attend_event_you: "You are attending an event",
        card_title_checkin: "[author] checked in",
        card_title_checkin_target: "[author] checked in at [target]",
        card_title_friend_request: "[author] wants to become friends with [target]",
        card_title_friend_request_you: "[author] wants to add you to their network",
        card_title_friendship: "[author] has become friends with [target]",
        card_title_friendship_you: "[author] added you to their network",
        card_title_join_group: "[author] joined the group [target]",
        card_title_join_group_you: "You joined the group [target]",
        card_title_private_message: "[author] wrote a message to [target]",
        card_title_private_message_you: "[author] wrote you a message",
        card_title_status_update: "[author] wrote a status update",
        card_title_tag_picture: "[author] tagged [target] in a picture",
        card_title_tag_picture_no_target: "[author] is tagged in a picture",
        card_title_tag_picture_self: "[author] tagged himself in a picture",
        card_title_tag_picture_you: "[author] tagged you in a picture",
      },
      
      nl: {
        'login_title': 'Welkom in de Gouden Eeuw!',
        'login_text': 'Deze website behoort bij de applicatie en het educatieprogramma #goudenEeuw. Bezoek eerst de tentoonstelling in het kader van dit educatieprogramma voordat je deze website gebruikt. Login met hetzelfde e-mailadres als je hebt gebruikt tijdens je bezoek.',
        'login_placeholder': 'E-mailadres',
        'login_btn': 'Login',

        card_title_attend_event: "[author] heeft een event aangemaakt",
        card_title_attend_event_you: "Je gaat naar een event",
        card_title_checkin: "[author] is ingechecked",
        card_title_checkin_target: "[author] is ingechecked bij [target]",
        card_title_friend_request: "[author] wil vrienden worden met [target]",
        card_title_friend_request_you: "[author] wil met je netwerken",
        card_title_friendship: "[author] is bevriend geworden met [target]",
        card_title_friendship_you: "[author] heeft je toegevoegd aan zijn netwerk",
        card_title_join_group: "[author] is lid geworden van [target]",
        card_title_join_group_you: "Je bent lid geworden van [target]",
        card_title_private_message: "[author] stuurde een bericht naar [target]",
        card_title_private_message_you: "[author] stuurde je een privébericht",
        card_title_status_update: "[author] schreef een statusupdate",
        card_title_tag_picture: "[author] tagde [target] in een schilderij",
        card_title_tag_picture_no_target: "[author] is getagged in een schilderij",
        card_title_tag_picture_self: "[author] tagde zichzelf in een foto",
        card_title_tag_picture_you: "[author] heeft jou in een foto getagd",
      }
    };
    return function selectMessage(msg) {
      return messages[$rootScope.lang][msg] || "?"+msg+"?";
    };
  })

  .filter('i18n', function(i18n) {
    return i18n;
  })

;
