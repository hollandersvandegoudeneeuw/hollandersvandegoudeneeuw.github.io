$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.controllers",[]),angular.module("app.services",[]),angular.module("app.directives",[]),angular.module("app",["ngSanitize","ngResource","ngAnimate","templates","ui.router","ui.bootstrap","angular-carousel","app.controllers","app.directives","app.services"]).constant("APIConfig","localhost"==window.location.hostname?{backend:"http://goldenage.miraclethings.nl/api/"}:{backend:"http://goldenage.miraclethings.nl/api/"}).run(["$cacheFactory","$http",function(e,t){t.defaults.cache=e("default")}]).value("Constants",{YOU:351}).run(function(){var e="WebkitAppearance"in document.documentElement.style;$("body").toggleClass("webkit",e)}).config(["$stateProvider","$urlRouterProvider",function(e,t){var r={login:["AuthService",function(e){return e.isAuthorized()}]},a={story:["APIService","AuthService","$stateParams",function(e,t,r){return t.isAuthorized().then(function(){return e.get("goldenage/storydata",{id:r.storyId})})}],login:r.login};e.state("start",{url:"/start",views:{master:{controller:"StartCtrl"}}}).state("login",{url:"/login",views:{master:{templateUrl:"app/templates/login.html",controller:"LoginCtrl"}}}).state("help",{url:"/help",resolve:r,views:{master:{templateUrl:"app/templates/story.html"},"detail@help":{templateUrl:"app/templates/page.html",controller:"PageCtrl"}}}).state("credits",{url:"/credits",resolve:r,views:{master:{templateUrl:"app/templates/story.html"},"detail@credits":{templateUrl:"app/templates/page.html",controller:"PageCtrl"}}}).state("choose",{url:"/choose",resolve:r,views:{master:{templateUrl:"app/templates/story.html"},"detail@choose":{templateUrl:"app/templates/choose.html",controller:"ChooseCtrl"}}}).state("story",{url:"/:storyId",resolve:a,views:{master:{templateUrl:"app/templates/story.html",controller:["$scope","story","$state",function(e,t,r){e.story=t}]}}}).state("story.timeline",{url:"/timeline",views:{"detail@story":{templateUrl:"app/templates/timeline.html",controller:"TimelineCtrl"}}}).state("story.favorites",{url:"/favorites",views:{"detail@story":{templateUrl:"app/templates/favorites.html",controller:"FavoritesCtrl"}}}).state("story.profile",{url:"/profile",views:{"detail@story":{templateUrl:"app/templates/profile.html",controller:"ProfileCtrl"}}}).state("story.person",{url:"/person/:personId",views:{"detail@story":{templateUrl:"app/templates/person.html",controller:"PersonCtrl"}}}).state("story.group",{url:"/group/:groupId",views:{"detail@story":{templateUrl:"app/templates/group.html",controller:"GroupCtrl"}}}).state("story.hashtag",{url:"/hashtag/:hashtagId",views:{"detail@story":{templateUrl:"app/templates/hashtag.html",controller:"HashtagCtrl"}}}),t.otherwise("/start")}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.controllers").controller("AppCtrl",["$scope","$modal","$rootScope","$state","APIService","AuthState","AuthService",function(e,t,r,a,o,n,i){e.$state=a,e.state=n,r.lang="nl"==(navigator.language||navigator.browserLanguage).substr(0,2)?"nl":"en",e.blurred=!0,o.get("goldenage/stories").then(function(e){return n.stories=e,!0}),e.logout=function(){i.logout()}}]).controller("StartCtrl",["$scope","$state","AuthService","AuthState",function(e,t,r,a){r.isAuthorized().then(function(e){t.go("choose")},function(){t.go("login")})}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.controllers").controller("FavoritesCtrl",["$scope","$modal","AuthState","story","StoryContainer",function(e,t,r,a,o){var n=r.profile,i=new o(a);e.cards=i.filterCards(n.likes),e.context="favorites"}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.controllers").controller("GroupCtrl",["$scope","$stateParams","$window","story",function(e,t,r,a){return e.group=a.groups[t.groupId],e.group?void 0:void r.history.back()}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.controllers").controller("HashtagCtrl",["$scope","$window","$stateParams","story","StoryContainer",function(e,t,r,a,o){if(e.hashtag=a.hashtags[r.hashtagId],!e.hashtag)return void t.history.back();var n=new o(a);e.cards=n.filterHashtagCards(r.hashtagId)}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.controllers").controller("LoginCtrl",["$scope","$state","AuthService","AuthState",function(e,t,r,a){e.errorMessage=null,e.login=function(){e.loginForm.$valid&&r.login(e.email).then(function(e){t.go("start")},function(t){console.log(t),e.errorMessage="This e-mail address is unknown."})}}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.controllers").controller("ChooseCtrl",["$scope","$state",function(e,t){console.log("choose"),e.navCaption="choose_header"}]).controller("PageCtrl",["$scope","$rootScope","$state","$stateParams","$sce",function(e,t,r,a,o){console.log(a,r),e.stateName=r.$current.name,e.navCaption=e.stateName+"_header",e.url="http://goldenage.miraclethings.nl/app/"+e.stateName,e.url=o.trustAsResourceUrl(e.url)}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.controllers").controller("PersonCtrl",["$scope","$window","$stateParams","StoryContainer","story",function(e,t,r,a,o){if(e.person=o.persons[r.personId],!e.person)return void t.history.back();var n=new a(o);e.cards=n.filterPersonCards(e.person.id),e.groups=_(o.groups).filter(function(t){return void 0!==_.find(t.members,{id:e.person.id})}).each(function(e){if(e.members.length>4){var t=e.members.splice(4);e.members.push({rest:t.length})}for(var r=0;r<e.members.length;r++)e.members[r].hiddensm=r>2;return e}).value()}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.controllers").controller("ProfileCtrl",["$scope","story","$modal","AuthState","AuthService",function(e,t,r,a,o){e.logout=o.logout,e.network=_.map(t.network,function(e){return t.persons[e]})}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.controllers").controller("TimelineCtrl",["$scope","$modal","AuthState","story","i18n","StoryContainer",function(e,t,r,a,o,n){var i=new n(a);e.cards=i.filterCards(r.profile.read),e.context="timeline"}]).controller("CardListCtrl",["$scope","i18n","AuthState","APIService",function(e,t,r,a){function o(e){return _.contains(r.profile.likes,e.id)}e.toggleLike=function(e){var t=o(e);a.post("goldenage/favorite",{card_id:e.id,"delete":t}),t?r.profile.likes=_.difference(r.profile.likes,[e.id]):r.profile.likes.push(e.id)},e.likeImage=function(e){return o(e)?"/img/ic_card_heart_on.png":"/img/ic_card_heart_off.png"},e.likeText=function(e,r){var a=[];if(o(e)&&a.push(t("like_text_you")),_.each(e.likes||[],function(e){a.push(r.persons[e].title)}),!a.length)return"";var n=t("like_text_template_plural");1==a.length&&(n=t(o(e)?"like_text_template_single_1stperson":"like_text_template_single"));var i=a.join(", ");if(a.length>1){var s=i.lastIndexOf(", ");i=i.substring(0,s)+t("like_text_and")+i.substring(s+1)}return n.replace(/%s/,i)}}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.directives").filter("unsafe",["$sce",function(e){return e.trustAsHtml}]).directive("errorImageHandler",["$window","$timeout",function(e,t){return{restrict:"A",link:function(e,r){function a(){r.attr("src","/img/ic_profile_empty.png")}$(r).on("error",a),t(function(){r.attr("src")||a()})}}}]).directive("scrollContainer",["$window","$timeout",function(e,t){return{restrict:"A",scope:{scrollContainer:"@"},link:function(e,r){function a(){var e=$(r).height(),t=$(window).height()-$(r).offsetParent().offset().top;e>t&&$(r).css("height",t+"px"),r.toggleClass("scrollbar",r[0].scrollHeight>r[0].clientHeight),r.css("opacity",1)}return r.addClass("scroll-area"),r.css("opacity",0),"force"==e.scrollContainer?void r.css("opacity",1):(t(a,0),t(a,800),void $(window).on("resize",_.debounce(a,500)))}}}]).directive("subnavHeader",["$window",function(e){return{restrict:"E",templateUrl:"app/templates/ui/subnav_header.html",scope:{title:"@"},link:function(t){t.back=function(){e.history.back()}}}}]).directive("cardImage",["$sce","$compile","$state","i18n","Constants","actorClick",function(e,t,r,a,o,n){return{restrict:"E",scope:{card:"=",story:"=",profile:"=",who:"@"},template:'<img ng-src="{{ image }}" ng-show="visible" class="card-profile-image" ng-click="click()" error-image-handler />',replace:!0,link:function(e,t){if(e.visible=!!e.card[e.who],e.visible){var r=e.card[e.who],a=e.story.persons[r]||e.story.groups[r];r==o.YOU&&(a=e.profile),a&&(e.image=a.image),e.click=function(){n(r,e.story)}}}}}]).factory("actorClick",["$state","Constants",function(e,t){return function(r,a){return r==t.YOU?void e.go("story.profile",{storyId:a.id}):a.persons[r]?void e.go("story.person",{storyId:a.id,personId:r}):a.groups[r]?void e.go("story.group",{storyId:a.id,groupId:r}):void 0}}]).directive("cardTitle",["$sce","$compile","$state","i18n","Constants","actorClick",function(e,t,r,a,o,n){return{restrict:"E",scope:{card:"=",story:"=",profile:"="},replace:!0,link:function(e,r){function i(t,r){var a=e.story.persons[r]||e.story.groups[r];r==o.YOU&&(a=e.profile);var n="<a href='javascript:;' ng-click='click("+r+", $event)'>"+a.title+"</a>";return l.replace(t,n)}var s=e.card.category;switch(s){case"checkin":e.card.target>0&&(s+="_target");break;case"tag_picture":e.card.target?e.card.target==e.card.author?s=NaN:e.card.target==o.YOU&&(s=NaN):s+="_no_target";break;case"attend_event":case"friend_request":case"friendship":case"join_group":case"private_message":e.card.author==o.YOU&&(s+="_you")}var l=a("card_title_"+s);e.card.author&&(l=i("[author]",e.card.author)),e.card.target&&(l=i("[target]",e.card.target)),e.click=function(t,r){return r.preventDefault(),n(t,e.story)},r.html("<div class='card-title'>"+l+"</div>"),t(r.contents())(e)}}}]).directive("cardStatusImage",function(){return{restrict:"E",scope:{card:"="},template:'<img ng-src="{{ image }}" ng-show="image" class="card-status" error-image-handler />',replace:!0,link:function(e,t){switch(e.image="/img/ic_card_type_checkin.png",e.card.category){case"checkin":e.image="/img/ic_card_type_checkin.png";break;case"friend_request":e.image="/img/ic_card_type_friend.png";break;case"friendship":e.image="/img/ic_card_type_friend.png";break;case"private_message":e.image="/img/ic_card_type_message.png";break;case"status_update":e.image="/img/ic_card_type_message.png";break;case"attend_event":e.image="/img/ic_card_type_event.png";break;case"tag_picture":e.image="/img/ic_card_type_tag.png";break;case"join_group":e.image="/img/ic_card_type_friend.png"}}}}),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.services").factory("APIService",["$q","$http","APIConfig","AuthState",function(e,t,r,a){function o(e){e||(e=a.getEmail()),t.defaults.headers.common.Authorization=e?"E-mail "+e:null}return{get:function(e,a,n){var i=a?"?"+$.param(a):"";return o(n),t({url:r.backend+e+i,method:"GET",cache:!0}).then(function(e){return e.data})},post:function(e,a){return t.post(r.backend+e,a).then(function(e){return e.data})}}}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.services").value("AuthState",{getEmail:function(){return localStorage.email},setEmail:function(e){e?localStorage.email=e:delete localStorage.email},profile:null,stories:null}).factory("AuthService",["$q","$state","$http","AuthState","APIService",function(e,t,r,a,o){function n(e){return a.profile=e,!0}function i(){return o.get("goldenage/userinfo",{},a.getEmail()).then(n,function(r){return t.go("login"),e.reject()})}function s(e){return o.get("goldenage/userinfo",{},e).then(function(t){return a.setEmail(e),n(t)})}function l(){a.setEmail(null),r.defaults.cache.removeAll(),t.go("start")}return{isAuthorized:i,login:s,logout:l}}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.services").factory("i18n",["$rootScope",function(e){var t={en:{login_title:"Welcome to the Golden Age!",login_text:"This website is part of the app and educational program #goldenAge. Please first visit the exhibition before using this website. Afterwards, log in with the same e-mail address that you used in the app.",login_placeholder:"E-mail address",login_btn:"Login",choose_header:"Choose a story to start",choose_text:"Pick a story from the list on the left.",cards_empty_text_timeline:"You did not view this story in the exhibition space.",cards_empty_text_favorites:"No favorite cards added yet.",help_header:"Help",credits_header:"Credits",menu_logout:"Login with different user",like_text_you:"You",like_text_and:" and ",like_text_template_plural:"%s like this",like_text_template_single:"%s likes this",like_text_template_single_1stperson:"%s like this",person_biography:"Biography",person_details:"Personal details",heading_network:"Network",card_title_attend_event:"[author] created an event",card_title_attend_event_you:"You are attending an event",card_title_checkin:"[author] checked in",card_title_checkin_target:"[author] checked in at [target]",card_title_friend_request:"[author] wants to become friends with [target]",card_title_friend_request_you:"[author] wants to add you to their network",card_title_friendship:"[author] has become friends with [target]",card_title_friendship_you:"[author] added you to their network",card_title_join_group:"[author] joined the group [target]",card_title_join_group_you:"You joined the group [target]",card_title_private_message:"[author] wrote a message to [target]",card_title_private_message_you:"[author] wrote you a message",card_title_status_update:"[author] ",card_title_tag_picture:"[author] tagged [target]",card_title_tag_picture_no_target:"[author] is tagged",card_title_tag_picture_self:"[author] tagged himself",card_title_tag_picture_you:"[author] tagged you"},nl:{login_title:"Welkom in de Gouden Eeuw!",login_text:"Deze website behoort bij de applicatie en het educatieprogramma #goudenEeuw. Bezoek eerst de tentoonstelling in het kader van dit educatieprogramma voordat je deze website gebruikt. Login met hetzelfde e-mailadres als je hebt gebruikt tijdens je bezoek.",login_placeholder:"E-mailadres",login_btn:"Login",choose_header:"Kies een verhaal",choose_text:"Kies een verhaal uit de lijst aan de linkerkant.",cards_empty_text_timeline:"Je hebt dit verhaal niet gebruikt tijdens het bekijken van de tentoonstelling.",cards_empty_text_favorites:"Je hebt nog geen favoriete kaarten.",help_header:"Help",credits_header:"Credits",menu_logout:"Login met andere gebruiker",like_text_you:"Jij",like_text_and:" en ",like_text_template_plural:"%s vindt dit leuk",like_text_template_single:"%s vinden dit leuk",like_text_template_single_1stperson:"%s vindt dit leuk",person_biography:"Biografie",person_details:"Persoonlijke details",heading_network:"Netwerk",card_title_attend_event:"[author] heeft een event aangemaakt",card_title_attend_event_you:"Je gaat naar een event",card_title_checkin:"[author] checked in",card_title_checkin_target:"[author] is ingechecked bij [target]",card_title_friend_request:"[author] heeft je toegevoegd aan zijn netwerk [target]",card_title_friend_request_you:"[author] wil met je netwerken",card_title_friendship:"[author] is bevriend geworden met [target]",card_title_friendship_you:"[author] heeft je toegevoegd aan zijn netwerk",card_title_join_group:"[author] is lid geworden van de groep [target]",card_title_join_group_you:"Je bent lid geworden van de groep [target]",card_title_private_message:"[author] schreef een bericht naar [target]",card_title_private_message_you:"[author] schreen een bericht aan jou",card_title_status_update:"[author]",card_title_tag_picture:"[author] tagged [target]",card_title_tag_picture_no_target:"[author] is getagd",card_title_tag_picture_self:"[author] is getagd",card_title_tag_picture_you:"[author] tagged jou"}};return function(r){return t[e.lang][r]||"?"+r+"?"}}]).filter("i18n",["i18n",function(e){return e}]),{}}),$traceurRuntime.ModuleStore.getAnonymousModule(function(){"use strict";return angular.module("app.services").factory("StoryContainer",function(){return function(e){var t=this;for(var r in e.chapters)for(var a in e.chapters[r].cards){var o=e.chapters[r].cards[a];o.images&&(1==o.images.length?(o.image=o.images[0],delete o.images):o.images.length>1&&delete o.image)}return t.findCard=function(t){for(var r in e.chapters)for(var a in e.chapters[r].cards){var o=e.chapters[r].cards[a];if(o.id==t)return o}return null},t.filterCards=function(e){var r=_.reduce(e,function(e,r){var a=t.findCard(r);return a&&e.push(a),e},[]);return r.reverse(),r},t.filterPersonCards=function(t){var r=[];for(var a in e.chapters)for(var o in e.chapters[a].cards){var n=e.chapters[a].cards[o];(n.author==t||n.target==t)&&r.push(n)}return r},t.filterHashtagCards=function(t){var r=[];for(var a in e.chapters)for(var o in e.chapters[a].cards){var n=e.chapters[a].cards[o];_.find(n.hashtags,{id:parseInt(t,10)})&&r.push(n)}return r},t}}),{}});