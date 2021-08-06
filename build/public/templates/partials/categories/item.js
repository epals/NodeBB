
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
    return "<li component=\"categories/category\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\" data-numRecentReplies=\"1\" class=\"row clearfix category-" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\r\n\t<meta itemprop=\"name\" content=\"" + 
      __escape(guard((context != null) ? context['name'] : null)) + 
      "\">\r\n\r\n\t<div class=\"content col-xs-12 " + 
      (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
        "col-md-10 col-sm-12" :
        "col-md-7 col-sm-9") + 
      "\">\r\n\t\t<div class=\"icon pull-left\" style=\"" + 
      __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
      "\">\r\n\t\t\t<i class=\"fa fa-fw " + 
      __escape(guard((context != null) ? context['icon'] : null)) + 
      "\"></i>\r\n\t\t</div>\r\n\r\n\t\t<h2 class=\"title\">\r\n\t\t\t" + 
      (guard((context != null) ? context['isSection'] : null) ?
        "\r\n<span class=\"category-title\">" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</span>\r\n" :
        "\r\n" + 
          (guard((context != null) ? context['link'] : null) ?
            "\r\n<a class=\"category-title\" href=\"" + 
              __escape(guard((context != null) ? context['link'] : null)) + 
              "\" itemprop=\"url\" title=\"" + 
              __escape(guard((context != null) ? context['name'] : null)) + 
              "\">\r\n" :
            "\r\n<a class=\"category-title\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null)) + 
              "\" itemprop=\"url\" title=\"" + 
              __escape(guard((context != null) ? context['name'] : null)) + 
              "\">\r\n") + 
          "\r\n" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\r\n</a>\r\n") + 
      "\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t" + 
      (guard((context != null) ? context['descriptionParsed'] : null) ?
        "\r\n\t\t\t<div class=\"description\">\r\n\t\t\t\t" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
        "" :
        "\r\n\t\t\t" + 
          __escape(helper(context, helpers, 'generateChildrenCategories', [guard(value)])) + 
          "\r\n\t\t\t") + 
      "\r\n\t\t</div>\r\n\t\t<span class=\"visible-xs pull-right\">\r\n\t\t\t" + 
      (guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null) ?
        "\r\n\t\t\t<a class=\"permalink\" href=\"" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['url'] : null)) + 
          "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['teaser'] != null) ? context['teaser']['timestampISO'] : null)) + 
          "\"></small>\r\n\t\t\t</a>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</span>\r\n\t</div>\r\n\r\n\t" + 
      (guard((context != null) ? context['link'] : null) ?
        "" :
        "\r\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\r\n\t\t<span class=\"" + 
          __escape(guard((context != null) ? context['unread-class'] : null)) + 
          " human-readable-number\" title=\"" + 
          __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
          "</span><br />\r\n\t\t<small>[[global:topics]]</small>\r\n\t</div>\r\n\t<div class=\"col-md-1 hidden-sm hidden-xs stats\">\r\n\t\t<span class=\"" + 
          __escape(guard((context != null) ? context['unread-class'] : null)) + 
          " human-readable-number\" title=\"" + 
          __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
          "</span><br />\r\n\t\t<small>[[global:posts]]</small>\r\n\t</div>\r\n\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['hideCategoryLastPost'] : null) ?
            "" :
            "\r\n\t<div class=\"col-md-3 col-sm-3 teaser hidden-xs\" component=\"topic/teaser\">\r\n\t\t<div class=\"card background-link-container\" style=\"border-color: " + 
              __escape(guard((context != null) ? context['bgColor'] : null)) + 
              "\">\r\n\t" + 
              compiled.blocks['./posts'](helpers, context, guard, iter, helper) + 
              "\r\n\r\n\t" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
                "" :
                "\r\n\t<div component=\"category/posts\">\r\n\t\t<div class=\"post-content\">\r\n\t\t\t[[category:no_new_posts]]\r\n\t\t</div>\r\n\t</div>\r\n\t") + 
              "\r\n</div>\r\n\r\n\t</div>\r\n\t") + 
          "\r\n\t") + 
      "\r\n</li>\r\n";
  }

  compiled.blocks = {
    './posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          (index === 0 ?
            "\r\n\t<div component=\"category/posts\">\r\n\t\t<a class=\"background-link\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\"></a>\r\n\t\t<p>\r\n\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
              "</a>\r\n\t\t\t<a class=\"permalink\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
                "") + 
              "\">\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
              "\"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class=\"post-content\">\r\n\t\t\t" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\r\n\t\t</div>\r\n\t</div>\r\n\t" :
            "") + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
