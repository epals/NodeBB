
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
    return "\t\t<ul component=\"category\" id=\"topics-container\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\r\n\t\t\t<meta itemprop=\"itemListOrder\" content=\"descending\">\r\n\t\t\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</ul>\r\n";
  }

  compiled.blocks = {
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<li component=\"category/topic\" class=\"category-item " + 
          __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
          "\" itemprop=\"itemListElement\" data-tid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['cid'] : null)) + 
          "\" itemprop=\"itemListElement\">\r\n\t\t\t\t<a id=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" component=\"topic/anchor\"></a>\r\n\t\t\t\t<meta itemprop=\"name\" content=\"" + 
          __escape(helper(context, helpers, 'stripTags', [guard((context != null) ? context['title'] : null)])) + 
          "\">\r\n\r\n\t\t\t\t<div class=\"category-body\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-7 col-sm-8\">\r\n\r\n\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-square-o pull-left select pointer\" component=\"topic/select\"></i>\r\n\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t\t\t<div class=\"category-profile-pic\">\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['thumb'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['thumb'] : null)) + 
              "\" class=\"user-img\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['username'] : null)) + 
              "\" />\r\n\t\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['picture'] : null) ?
                "\r\n\t\t\t\t\t\t\t\t\t<img component=\"user/picture\" data-uid=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['uid'] : null)) + 
                  "\" src=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['picture'] : null)) + 
                  "\" class=\"user-img\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['username'] : null)) + 
                  "\" />\r\n\t\t\t\t\t\t\t\t\t" :
                "\r\n\t\t\t\t\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['icon:bgColor'] : null)) + 
                  ";\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['username'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['icon:text'] : null)) + 
                  "</div>\r\n\t\t\t\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"category-text\">\r\n\t\t\t\t\t\t\t\t<p><strong><i component=\"topic/pinned\" class=\"fa fa-thumb-tack" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinned'] : null) ?
            "" :
            " hide") + 
          "\"></i> <i component=\"topic/locked\" class=\"fa fa-lock" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['locked'] : null) ?
            "" :
            " hide") + 
          "\"></i></strong>\r\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['noAnchor'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t<a component=\"topic/header\" itemprop=\"url\" class=\"topic-title\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</a><br />\r\n\t\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t\t<a component=\"topic/header\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "\" itemprop=\"url\" class=\"topic-title\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</a><br />\r\n\t\t\t\t\t\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t\t\t\t\t\t<small>\r\n\t\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['slug'] : null)) + 
          "\"><span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['category'] : null)])) + 
          "\"><i style=\"color:" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['color'] : null)) + 
          ";\" class=\"fa " + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['icon'] : null)) + 
          " fa-stack-1x\"></i></span> " + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['category'] != null) ? context['topics'][key0]['category']['name'] : null)) + 
          "</a> &bull; <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['unreplied'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t\t\t\t<span class=\"hidden-md hidden-lg\" component=\"topic/teaser\">\r\n\t\t\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
              "\"><span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
              "\"></span></a>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['tags'] != null) ? context['topics'][key0]['tags']['length'] : null) ?
            "\n\t" + 
              iter(guard((context != null) ? context['tags'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\n\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/tags/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['valueEscaped'] : null)) + 
                  "\"><span class=\"tag-item\" data-tag=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['valueEscaped'] : null)) + 
                  "\" style=\"" + 
                  (guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['color'] : null) ?
                    "color: " + 
                      __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['color'] : null)) + 
                      ";" :
                    "") + 
                  (guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['bgColor'] : null) ?
                    "background-color: " + 
                      __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['bgColor'] : null)) + 
                      ";" :
                    "") + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['valueEscaped'] : null)) + 
                  "</span><span class=\"tag-topic-count\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics']['tags'] != null) ? context['topics']['tags']['score'] : null)) + 
                  "</span></a>\n\t";
              }, function alt() {
                return "";
              }) + 
              "\n" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t\t</small>\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-xs-1 category-stat hidden-xs stats-votes\">\r\n\t\t\t\t\t\t\t<strong class=\"human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['votes'] : null)) + 
          "</strong><br />\r\n\t\t\t\t\t\t\t<small>[[global:votes]]</small>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-xs-1 category-stat hidden-xs stats-postcount\">\r\n\t\t\t\t\t\t\t<strong class=\"human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
          "</strong><br />\r\n\t\t\t\t\t\t\t<small>[[global:posts]]</small>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-xs-1 category-stat hidden-xs stats-viewcount\">\r\n\t\t\t\t\t\t\t<strong class=\"human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
          "</strong><br />\r\n\t\t\t\t\t\t\t<small>[[global:views]]</small>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-xs-2 category-stat replies hidden-sm hidden-xs\" component=\"topic/teaser\">\r\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['unreplied'] : null) ?
            "\r\n\t\t\t\t\t\t\t<p class=\"no-replies\"><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "\" itemprop=\"url\">[[category:no_replies]]</a></p>\r\n\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t<a href=\"" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null) ?
                __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) :
                "#") + 
              "\">\r\n\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['picture'] : null) ?
                "\r\n\t\t\t\t\t\t\t\t<img class=\"teaser-pic\" src=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['picture'] : null)) + 
                  "\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['username'] : null)) + 
                  "\"/>\r\n\t\t\t\t\t\t\t\t" :
                "\r\n\t\t\t\t\t\t\t\t<div class=\"teaser-pic user-icon\" style=\"background-color: " + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['icon:bgColor'] : null)) + 
                  ";\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['username'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['icon:text'] : null)) + 
                  "</div>\r\n\t\t\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              "/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
              "\">\r\n\t\t\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
              "\"></span>\r\n\t\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</li>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
