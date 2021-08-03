"use strict";define("topicList",["forum/infinitescroll","handleBack","topicSelect","categoryFilter","forum/category/tools"],function(e,t,i,n,o){var a={};var r="";var c={recent:"recent",unread:"unread",popular:"posts",top:"votes"};var s=0;var d=0;var l;var p;const f=[];$(window).on("action:ajaxify.start",function(){a.removeListeners();o.removeListeners()});a.init=function(i,c){p=u();r=i;l=c||m;o.init();a.watchForNewPosts();var s=["watching"];if(ajaxify.data.selectedFilter&&ajaxify.data.selectedFilter.filter==="watched"){s.push("notwatching","ignoring")}else if(i!=="unread"){s.push("notwatching")}n.init($('[component="category/dropdown"]'),{states:s});if(!config.usePagination){e.init(a.loadMoreTopics)}t.init(function(e,t){l(e,1,function(e,i){a.onTopicsLoaded(r,e.topics,ajaxify.data.showSelect,1,function(){t();i()})})});if($("body").height()<=$(window).height()&&p.children().length>=20){$("#load-more-btn").show()}$("#load-more-btn").on("click",function(){a.loadMoreTopics(1)});$(window).trigger("action:topics.loaded",{topics:ajaxify.data.topics})};function u(){return $('[component="category"]').filter(function(e,t){return!$(t).parents("[widget-area],[data-widget-area]").length})}a.watchForNewPosts=function(){$("#new-topics-alert").on("click",function(){$(this).addClass("hide")});d=0;s=0;a.removeListeners();socket.on("event:new_topic",h);socket.on("event:new_post",g)};a.removeListeners=function(){socket.removeListener("event:new_topic",h);socket.removeListener("event:new_post",g)};function h(e){const t=ajaxify.data;const i=t.selectedCids&&t.selectedCids.length&&t.selectedCids.indexOf(parseInt(e.cid,10))===-1;const n=t.selectedFilter&&t.selectedFilter.filter==="watched";const o=t.template.category&&parseInt(t.cid,10)!==parseInt(e.cid,10);if(i||n||o||f.includes(e.tid)){return}if(e.scheduled&&e.tid){f.push(e.tid)}s+=1;w()}function g(e){var t=e.posts[0];if(!t||!t.topic||t.topic.isFollowing){return}const i=ajaxify.data;const n=parseInt(t.topic.mainPid,10)===parseInt(t.pid,10);const o=i.selectedCids&&i.selectedCids.length&&i.selectedCids.indexOf(parseInt(t.topic.cid,10))===-1;const a=i.selectedFilter&&i.selectedFilter.filter==="new";const r=i.selectedFilter&&i.selectedFilter.filter==="watched"&&!t.topic.isFollowing;const c=i.template.category&&parseInt(i.cid,10)!==parseInt(t.topic.cid,10);if(n||o||a||r||c){return}d+=1;w()}function w(){var e="";if(s===0){if(d===1){e="[[recent:there-is-a-new-post]]"}else if(d>1){e="[[recent:there-are-new-posts, "+d+"]]"}}else if(s===1){if(d===0){e="[[recent:there-is-a-new-topic]]"}else if(d===1){e="[[recent:there-is-a-new-topic-and-a-new-post]]"}else if(d>1){e="[[recent:there-is-a-new-topic-and-new-posts, "+d+"]]"}}else if(s>1){if(d===0){e="[[recent:there-are-new-topics, "+s+"]]"}else if(d===1){e="[[recent:there-are-new-topics-and-a-new-post, "+s+"]]"}else if(d>1){e="[[recent:there-are-new-topics-and-new-posts, "+s+", "+d+"]]"}}e+=" [[recent:click-here-to-reload]]";$("#new-topics-alert").translateText(e).removeClass("hide").fadeIn("slow");$("#category-no-topics").addClass("hide")}a.loadMoreTopics=function(e){if(!p.length||!p.children().length){return}var t=p.find('[component="category/topic"]');var i=e>0?t.last():t.first();var n=(parseInt(i.attr("data-index"),10)||0)+(e>0?1:0);if(!utils.isNumber(n)||n===0&&p.find('[component="category/topic"][data-index="0"]').length){return}l(n,e,function(t,i){a.onTopicsLoaded(r,t.topics,ajaxify.data.showSelect,e,i)})};function m(t,i,n){n=n||function(){};var o=utils.params();e.loadMore("topics.loadMoreSortedTopics",{after:t,direction:i,sort:c[r],count:config.topicsPerPage,cid:o.cid,tags:o.tags,query:o,term:ajaxify.data.selectedTerm&&ajaxify.data.selectedTerm.term,filter:ajaxify.data.selectedFilter.filter,set:p.attr("data-set")?p.attr("data-set"):"topics:recent"},n)}function v(e){return e.filter(function(e){return!p.find('[component="category/topic"][data-tid="'+e.tid+'"]').length})}a.onTopicsLoaded=function(t,n,o,a,r){if(!n||!n.length){$("#load-more-btn").hide();return r()}n=v(n);if(!n.length){$("#load-more-btn").hide();return r()}var c;var s;var d=p.find('[component="category/topic"]');if(a>0&&n.length){c=d.last()}else if(a<0&&n.length){s=d.first()}var l={topics:n,showSelect:o,template:{name:t}};l.template[t]=true;app.parseAndTranslate(t,"topics",l,function(o){p.removeClass("hidden");$("#category-no-topics").remove();if(c&&c.length){o.insertAfter(c)}else if(s&&s.length){var d=$(document).height();var l=$(window).scrollTop();o.insertBefore(s);$(window).scrollTop(l+($(document).height()-d))}else{p.append(o)}if(!i.getSelectedTids().length){e.removeExtra(p.find('[component="category/topic"]'),a,Math.max(60,config.topicsPerPage*3))}o.find(".timeago").timeago();app.createUserTooltips(o);utils.makeNumbersHumanReadable(o.find(".human-readable-number"));$(window).trigger("action:topics.loaded",{topics:n,template:t});r()})};return a});
//# sourceMappingURL=topicList.js.map