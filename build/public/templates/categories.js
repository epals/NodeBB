
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
    return "<div class=\"categories\" itemscope itemtype=\"http://www.schema.org/ItemList\">\r\n    <div class=\"row categories-header hidden-xs hidden-sm\">\r\n        <div class=\"col-md-8 col-xs-12\"><div class=\"header-title\">[[category:category]]</div></div>\r\n        <div class=\"col-md-1\"><div class=\"header-title\">[[global:topics]]</div></div>\r\n        <div class=\"col-md-1\"><div class=\"header-title\">[[global:posts]]</div></div>\r\n        <div class=\"col-md-2\"><div class=\"header-title\">Last Post</div></div>\r\n    </div>\r\n    " + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n    <div component=\"pagination\" class=\"text-center pagination-container" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t<ul class=\"pagination hidden-xs\">\n\t\t<li class=\"previous pull-left" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\n\n\t\t<li class=\"next pull-right" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg\">\n\t\t<li class=\"first" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
      "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\n\t\t</li>\n\n\t\t<li class=\"previous" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\n\t\t</li>\n\n\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\n\t\t\t<a href=\"#\">" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "</a>\n\t\t</li>\n\n\t\t<li class=\"next" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\n\t\t<li class=\"last" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\r\n</div>";
  }

  compiled.blocks = {
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n    <div class=\"row\" component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
          "\" data-numRecentReplies=\"1\">\r\n        <div class=\"col-md-8 col-xs-12\">\r\n            <div class=\"category-info\">\r\n                <div class=\"category-info-content\">\r\n                    <div class=\"category-icon\">\r\n                        <i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
          "\"></i>\r\n                    </div>\r\n                    " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isSection'] : null) ?
            "\r\n<span class=\"category-title\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "</span>\r\n" :
            "\r\n" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "\r\n<a class=\"category-title\" href=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\" title=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
                  "\">\r\n" :
                "\r\n<a class=\"category-title\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\" title=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
                  "\">\r\n") + 
              "\r\n" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\r\n</a>\r\n") + 
          "\r\n\r\n                    <div class=\"category-description\">\r\n                        " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
          "\r\n                    </div>\r\n                </div>\r\n\r\n                " + 
          (guard((context != null && context['config'] != null) ? context['config']['hideSubCategories'] : null) ?
            "" :
            "\r\n                <div class=\"subcategories\">\r\n                    " + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['categories'] != null) ? context['categories'][key0]['categories']['children'] : null) ?
                iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['categories'] != null) ? context['categories'][key0]['categories']['children'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\r\n                    <div class=\"subcategory\">\r\n                        <i class=\"fa fa-fw " + 
                      __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['categories'] != null && context['categories'][key0]['categories']['children'] != null && context['categories'][key0]['categories']['children'][key1] != null) ? context['categories'][key0]['categories']['children'][key1]['icon'] : null)) + 
                      " subcategory-icon\"></i>\r\n                        " + 
                      (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['categories'] != null && context['categories'][key0]['categories']['children'] != null && context['categories'][key0]['categories']['children'][key1] != null) ? context['categories'][key0]['categories']['children'][key1]['link'] : null) ?
                        "\r\n                        <a class=\"subcategory-title\" href=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['categories'] != null && context['categories'][key0]['categories']['children'] != null && context['categories'][key0]['categories']['children'][key1] != null) ? context['categories'][key0]['categories']['children'][key1]['link'] : null)) + 
                          "\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['categories'] != null && context['categories'][key0]['categories']['children'] != null && context['categories'][key0]['categories']['children'][key1] != null) ? context['categories'][key0]['categories']['children'][key1]['name'] : null)) + 
                          "\">" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['categories'] != null && context['categories'][key0]['categories']['children'] != null && context['categories'][key0]['categories']['children'][key1] != null) ? context['categories'][key0]['categories']['children'][key1]['name'] : null)) + 
                          "</a>\r\n                        " :
                        "\r\n                        <a class=\"subcategory-title\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/category/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['categories'] != null && context['categories'][key0]['categories']['children'] != null && context['categories'][key0]['categories']['children'][key1] != null) ? context['categories'][key0]['categories']['children'][key1]['slug'] : null)) + 
                          "\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['categories'] != null && context['categories'][key0]['categories']['children'] != null && context['categories'][key0]['categories']['children'][key1] != null) ? context['categories'][key0]['categories']['children'][key1]['name'] : null)) + 
                          "\">" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['categories'] != null && context['categories'][key0]['categories']['children'] != null && context['categories'][key0]['categories']['children'][key1] != null) ? context['categories'][key0]['categories']['children'][key1]['name'] : null)) + 
                          "</a>\r\n                        ") + 
                      "\r\n                    </div>\r\n                    ";
                  }, function alt() {
                    return "";
                  }) :
                iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['children'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\r\n                    <div class=\"subcategory\">\r\n                        <i class=\"fa fa-fw " + 
                      __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['icon'] : null)) + 
                      " subcategory-icon\"></i>\r\n                        " + 
                      (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['link'] : null) ?
                        "\r\n                        <a class=\"subcategory-title\" href=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['link'] : null)) + 
                          "\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['name'] : null)) + 
                          "\">" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['name'] : null)) + 
                          "</a>\r\n                        " :
                        "\r\n                        <a class=\"subcategory-title\" href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/category/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['slug'] : null)) + 
                          "\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['name'] : null)) + 
                          "\">" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['children'] != null && context['categories'][key0]['children'][key1] != null) ? context['categories'][key0]['children'][key1]['name'] : null)) + 
                          "</a>\r\n                        ") + 
                      "\r\n                    </div>\r\n                    ";
                  }, function alt() {
                    return "";
                  })) + 
              "\r\n                </div>\r\n                ") + 
          "\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-1 hidden-xs hidden-sm\">\r\n            <div class=\"total-topic-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)) + 
          "\">\r\n                " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)) + 
          "\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-1 hidden-xs hidden-sm\">\r\n            <div class=\"total-post-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)) + 
          "\">\r\n                " + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)) + 
          "\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-2 hidden-xs hidden-sm\">\r\n            <div class=\"teaser\" component=\"topic/teaser\">\r\n                " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['posts'] : null) ?
            iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['posts'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n        \t    " + 
                  (index === 0 ?
                    "\r\n                <div component=\"category/posts\">\r\n                    <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/user/" + 
                      __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['userslug'] : null)) + 
                      "\">\r\n                \t\t" + 
                      (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['picture'] : null) ?
                        "\r\n                \t\t<img class=\"user-avatar\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['username'] : null)) + 
                          "\" alt=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['username'] : null)) + 
                          "\" src=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['picture'] : null)) + 
                          "\" />\r\n                \t\t" :
                        "\r\n                \t\t<div class=\"user-icon\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['username'] : null)) + 
                          "\" style=\"background-color: " + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['icon:bgColor'] : null)) + 
                          ";\">" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['icon:text'] : null)) + 
                          "</div>\r\n                \t\t") + 
                      "\r\n            \t\t</a>\r\n\r\n            \t\t<a class=\"permalink\" href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/topic/" + 
                      __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                      (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null) ?
                        "/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null)) :
                        "") + 
                      "\">\r\n            \t\t    " + 
                      __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['displayname'] : null)) + 
                      "\r\n            \t\t\t<small class=\"timeago\" title=\"" + 
                      __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['timestampISO'] : null)) + 
                      "\"></small>\r\n            \t\t</a>\r\n        \t\t</div>\r\n        \t\t" :
                    "") + 
                  "\r\n        \t    ";
              }, function alt() {
                return "";
              }) :
            iter(guard((context != null) ? context['posts'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n        \t    " + 
                  (index === 0 ?
                    "\r\n                <div component=\"category/posts\">\r\n                    <a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/user/" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['userslug'] : null)) + 
                      "\">\r\n                \t\t" + 
                      (guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['picture'] : null) ?
                        "\r\n                \t\t<img class=\"user-avatar\" title=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['username'] : null)) + 
                          "\" alt=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['username'] : null)) + 
                          "\" src=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['picture'] : null)) + 
                          "\" />\r\n                \t\t" :
                        "\r\n                \t\t<div class=\"user-icon\" title=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['username'] : null)) + 
                          "\" style=\"background-color: " + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['icon:bgColor'] : null)) + 
                          ";\">" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['icon:text'] : null)) + 
                          "</div>\r\n                \t\t") + 
                      "\r\n            \t\t</a>\r\n\r\n            \t\t<a class=\"permalink\" href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/topic/" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['topic'] != null) ? context['posts'][key1]['topic']['slug'] : null)) + 
                      (guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['index'] : null) ?
                        "/" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['index'] : null)) :
                        "") + 
                      "\">\r\n            \t\t    " + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['displayname'] : null)) + 
                      "\r\n            \t\t\t<small class=\"timeago\" title=\"" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['timestampISO'] : null)) + 
                      "\"></small>\r\n            \t\t</a>\r\n        \t\t</div>\r\n        \t\t" :
                    "") + 
                  "\r\n        \t    ";
              }, function alt() {
                return "";
              })) + 
          "\r\n\r\n        \t    " + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null) ? context['categories'][key0]['posts']['length'] : null) ?
            "" :
            "\r\n    \t\t\t[[category:no_new_posts]]\r\n    \t        ") + 
          "\r\n            </div>\r\n        </div>\r\n    </div>\r\n    ";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\n\t\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\n\t\t\t</li>\n\t\t\t" :
            "\n\t\t\t<li class=\"page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\n\t\t\t\t<a href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\n\t\t\t</li>\n\t\t\t") + 
          "\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
