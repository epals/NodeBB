
(function (factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  }
})(function () {
  function compiled(helpers, context, guard, iter, helper) {
    var __escape = helpers.__escape;
    var value = context;
    return "<div class=\"recent-replies\">\r\n\t<ul id=\"recent_topics\" data-numtopics=\"" + 
      __escape(guard((context != null) ? context['numTopics'] : null)) + 
      "\">\r\n\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t</ul>\r\n</div>\r\n\r\n<script>\r\n'use strict';\r\n/* globals app, socket*/\r\n(function() {\r\n\tfunction onLoad() {\r\n\t\tvar\ttopics = $('#recent_topics');\r\n\r\n\t\tvar recentTopicsWidget = app.widgets.recentTopics;\r\n\r\n\t\tvar numTopics = parseInt(topics.attr('data-numtopics'), 10) || 8;\r\n\r\n\t\tif (!recentTopicsWidget) {\r\n\t\t\trecentTopicsWidget = {};\r\n\t\t\trecentTopicsWidget.onNewTopic = function(topic) {\r\n\t\t\t\tvar recentTopics = $('#recent_topics');\r\n\t\t\t\tif (!recentTopics.length) {\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tapp.parseAndTranslate('partials/topics', { topics: [topic] }, function(html) {\r\n\t\t\t\t\tprocessHtml(html);\r\n\r\n\t\t\t\t\thtml.hide()\r\n\t\t\t\t\t\t.prependTo(recentTopics)\r\n\t\t\t\t\t\t.fadeIn();\r\n\r\n\t\t\t\t\tapp.createUserTooltips();\r\n\t\t\t\t\tif (recentTopics.children().length > numTopics) {\r\n\t\t\t\t\t\trecentTopics.children().last().remove();\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t};\r\n\r\n\t\t\tapp.widgets.recentTopics = recentTopicsWidget;\r\n\t\t\tsocket.on('event:new_topic', app.widgets.recentTopics.onNewTopic);\r\n\t\t}\r\n\r\n\t\tfunction processHtml(html) {\r\n\t\t\tif ($.timeago) {\r\n\t\t\t\thtml.find('span.timeago').timeago();\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tif (window.jQuery) {\r\n\t\tonLoad();\r\n\t} else {\r\n\t\twindow.addEventListener('DOMContentLoaded', onLoad);\r\n\t}\r\n})();\r\n</script>\r\n";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"clearfix widget-topics\">\r\n\t<a href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null) ?
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['picture'] : null) ?
            "\r\n\t\t<img title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['username'] : null)) + 
              "\" class=\"avatar avatar-sm not-responsive\" src=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['picture'] : null)) + 
              "\" />\r\n\t\t" :
            "\r\n\t\t<div class=\"avatar avatar-sm not-responsive\" style=\"background-color: " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['icon:text'] : null)) + 
              "</div>\r\n\t\t") + 
          "\r\n\t</a>\r\n\r\n\t<p>\r\n\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
          "</a>\r\n\t</p>\r\n\t<span class=\"pull-right post-preview-footer\">\r\n\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['lastposttimeISO'] : null)) + 
          "\"></span>\r\n\t</span>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
