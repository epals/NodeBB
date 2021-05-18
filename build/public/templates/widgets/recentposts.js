
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
    return "<div class=\"recent-replies\">\r\n\t<ul id=\"recent_posts\" data-numposts=\"" + 
      __escape(guard((context != null) ? context['numPosts'] : null)) + 
      "\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\r\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n</div>\r\n\r\n<script>\r\n'use strict';\r\n/* globals app, socket*/\r\n(function() {\r\n\tfunction onLoad() {\r\n\t\tvar replies = $('#recent_posts');\r\n\r\n\t\tvar recentPostsWidget = app.widgets.recentPosts;\r\n\t\tvar numPosts = parseInt(replies.attr('data-numposts'), 10) || 4;\r\n\r\n\t\tif (!recentPostsWidget) {\r\n\t\t\trecentPostsWidget = {};\r\n\t\t\trecentPostsWidget.onNewPost = function(data) {\r\n\t\t\t\tvar cid = replies.attr('data-cid');\r\n\t\t\t\tvar recentPosts = $('#recent_posts');\r\n\t\t\t\tif (!recentPosts.length) {\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (cid && parseInt(cid, 10) !== parseInt(data.posts[0].topic.cid, 10)) {\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tapp.parseAndTranslate('partials/posts', {\r\n\t\t\t\t\trelative_path: config.relative_path,\r\n\t\t\t\t\tposts: data.posts\r\n\t\t\t\t}, function(html) {\r\n\t\t\t\t\tprocessHtml(html);\r\n\r\n\t\t\t\t\thtml.hide()\r\n\t\t\t\t\t\t.prependTo(recentPosts)\r\n\t\t\t\t\t\t.fadeIn();\r\n\r\n\t\t\t\t\tapp.createUserTooltips();\r\n\t\t\t\t\tif (recentPosts.children().length > numPosts) {\r\n\t\t\t\t\t\trecentPosts.children().last().remove();\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t};\r\n\r\n\t\t\tapp.widgets.recentPosts = recentPostsWidget;\r\n\t\t\tsocket.on('event:new_post', app.widgets.recentPosts.onNewPost);\r\n\t\t}\r\n\r\n\t\tfunction processHtml(html) {\r\n\t\t\thtml.find('img:not(.not-responsive)').addClass('img-responsive');\r\n\t\t\tif ($.timeago) {\r\n\t\t\t\thtml.find('span.timeago').timeago();\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tif (window.jQuery) {\r\n\t\tonLoad();\r\n\t} else {\r\n\t\twindow.addEventListener('DOMContentLoaded', onLoad);\r\n\t}\r\n})();\r\n</script>\r\n";
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" class=\"clearfix widget-posts\">\r\n\t<a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\r\n\r\n\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null) ?
            "\r\n\t\t<img title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\" class=\"avatar avatar-sm not-responsive\" src=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null)) + 
              "\" />\r\n\t\t" :
            "\r\n\t\t<div title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\" class=\"avatar avatar-sm not-responsive\" style=\"background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:text'] : null)) + 
              "</div>\r\n\t\t") + 
          "\r\n\t</a>\r\n\t<div>\r\n\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\r\n\t\t<p class=\"fade-out\"></p>\r\n\t</div>\r\n\t<span class=\"pull-right post-preview-footer\">\r\n\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span> &bull;\r\n\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">[[global:read_more]]</a>\r\n\t</span>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
