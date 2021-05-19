
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
    return "<div class=\"row categories\" itemscope itemtype=\"http://www.schema.org/ItemList\">\r\n\t<div class=\"" + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\r\n\t\t" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "\r\n\t\t<div><div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
              "\"><i class=\"fa fa-fw fa-stack-1x " + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
              "\" style=\"color: " + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
              ";\"></i></span> " + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) :
            "\n    " + 
              (guard((context != null) ? context['selectCategoryLabel'] : null) ?
                __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
                "[[topic:thread_tools.select_category]]")) + 
          "</span> <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden\">\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n    <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n        <a role=\"menu-item\">[[search:no-matches]]</a>\n    </li>\n    " + 
          compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div></div>\r\n\t\t" :
        "") + 
      "\r\n\t\t<div class=\"row " + 
      (guard((context != null) ? context['disableMasonry'] : null) ?
        "" :
        "masonry") + 
      "\">\r\n\t\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</div>\r\n\t\t\n<div component=\"pagination\" class=\"text-center pagination-container" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\n\t<ul class=\"pagination\">\n\t\t<li class=\"previous pull-left" + 
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
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n</div>\n\r\n\t</div>\r\n\r\n\t<div data-widget-area=\"sidebar\" class=\"col-lg-3 col-sm-12 " + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "" :
        "hidden") + 
      "\">\r\n\t\t" + 
      compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n        <a role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['isSection'] : null) ?
            "\r\n<div component=\"categories/category\" class=\"col-xs-12 category-item\">\r\n\t<h1 class=\"section\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "</h1>\r\n</div>\r\n" :
            "\r\n<div component=\"categories/category\" class=\"" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['class'] : null) ?
                __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['class'] : null)) :
                "col-md-3 col-sm-6 col-xs-12") + 
              " category-item\" data-cid=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
              "\" data-numRecentReplies=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['numRecentReplies'] : null)) + 
              "\">\r\n\t<meta itemprop=\"name\" content=\"" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "\">\r\n\r\n\t<div class=\"category-icon\">\r\n\t\t" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "\r\n\t\t<a style=\"color: " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['color'] : null)) + 
                  ";\" href=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\r\n\t\t" :
                "\r\n\t\t<a style=\"color: " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['color'] : null)) + 
                  ";\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\r\n\t\t") + 
              "\r\n\t\t\t<div\r\n\t\t\t\tid=\"category-" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['cid'] : null)) + 
              "\" class=\"category-header category-header-image-" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['imageClass'] : null)) + 
              "\"\r\n\t\t\t\tstyle=\"\r\n\t\t\t\t\t" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['backgroundImage'] : null) ?
                "background-image: url(" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['backgroundImage'] : null)) + 
                  ");" :
                "") + 
              "\r\n\t\t\t\t\t" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['bgColor'] : null) ?
                "background-color: " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['bgColor'] : null)) + 
                  ";" :
                "") + 
              "\r\n\t\t\t\t\tcolor: " + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['color'] : null)) + 
              ";\r\n\t\t\t\t\"\r\n\t\t\t>\r\n\t\t\t\t" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "" :
                "\r\n\t\t\t\t<span class=\"badge " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['unread-class'] : null)) + 
                  "\"><i class=\"fa fa-book\" data-toggle=\"tooltip\" title=\"[[global:topics]]\"></i> <span class=\"human-readable-number\" title=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalTopicCount'] : null)) + 
                  "</span>&nbsp; <i class=\"fa fa-pencil\" data-toggle=\"tooltip\" title=\"[[global:posts]]\"></i> <span class=\"human-readable-number\" title=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['totalPostCount'] : null)) + 
                  "</span></span>\r\n\t\t\t\t") + 
              "\r\n\r\n\t\t\t\t" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null) ?
                "\r\n\t\t\t\t<div><i class=\"fa " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
                  " fa-4x\"></i></div>\r\n\t\t\t\t" :
                "") + 
              "\r\n\t\t\t</div>\r\n\t\t</a>\r\n\r\n\t\t<div class=\"category-box\">\r\n\t\t\t<div class=\"category-info\">\r\n\t\t\t\t" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "\r\n\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\r\n\t\t\t\t" :
                "\r\n\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\r\n\t\t\t\t") + 
              "\r\n\t\t\t\t\t<h4>" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null) ?
                "<i class=\"fa " + 
                  __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['icon'] : null)) + 
                  " visible-xs-inline\"></i> " :
                "") + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['name'] : null)) + 
              "</h4>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"description\" itemprop=\"description\">" + 
              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['descriptionParsed'] : null)) + 
              "</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t" + 
              (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['link'] : null) ?
                "" :
                "\r\n\t\t\t" + 
                  (guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['posts'] : null) ?
                    iter(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['posts'] : null), function each(key1, index, length, value) {
                        var key = key1;
                        return "\r\n\t\t\t<div component=\"category/posts\" class=\"post-preview clearfix\">\r\n\t\t\t\t<strong><a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          "\">" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['title'] : null)) + 
                          "</a></strong>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<a style=\"color: " + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['color'] : null)) + 
                          ";\" href=\"" + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['userslug'] : null) ?
                            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                              "/user/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['userslug'] : null)) :
                            "#") + 
                          "\">\r\n\t\t\t\t\t" + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['picture'] : null) ?
                            "\r\n\t\t\t\t\t<img src=\"" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['picture'] : null)) + 
                              "\" title=\"" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['username'] : null)) + 
                              "\" class=\"pull-left user-img\" />\r\n\t\t\t\t\t" :
                            "\r\n\t\t\t\t\t<div class=\"pull-left user-img user-icon\" title=\"" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['username'] : null)) + 
                              "\" style=\"background-color: " + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['icon:bgColor'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['user'] != null) ? context['categories'][key0]['posts'][key1]['user']['icon:text'] : null)) + 
                              "</div>\r\n\t\t\t\t\t") + 
                          "\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"post-preview-content\">\r\n\r\n\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['content'] : null)) + 
                          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"fade-out\"></p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<span class=\"pull-right post-preview-footer\">\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['timestampISO'] : null)) + 
                          "\"></span> &bull;\r\n\t\t\t\t\t<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null && context['categories'][key0]['posts'][key1]['topic'] != null) ? context['categories'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null && context['categories'][key0]['posts'] != null && context['categories'][key0]['posts'][key1] != null) ? context['categories'][key0]['posts'][key1]['index'] : null)) :
                            "") + 
                          "\">[[global:read_more]]</a>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t";
                      }, function alt() {
                        return "";
                      }) :
                    iter(guard((context != null) ? context['posts'] : null), function each(key1, index, length, value) {
                        var key = key1;
                        return "\r\n\t\t\t<div component=\"category/posts\" class=\"post-preview clearfix\">\r\n\t\t\t\t<strong><a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['topic'] != null) ? context['posts'][key1]['topic']['slug'] : null)) + 
                          "\">" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['topic'] != null) ? context['posts'][key1]['topic']['title'] : null)) + 
                          "</a></strong>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<a style=\"color: " + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['color'] : null)) + 
                          ";\" href=\"" + 
                          (guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['userslug'] : null) ?
                            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                              "/user/" + 
                              __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['userslug'] : null)) :
                            "#") + 
                          "\">\r\n\t\t\t\t\t" + 
                          (guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['picture'] : null) ?
                            "\r\n\t\t\t\t\t<img src=\"" + 
                              __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['picture'] : null)) + 
                              "\" title=\"" + 
                              __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['username'] : null)) + 
                              "\" class=\"pull-left user-img\" />\r\n\t\t\t\t\t" :
                            "\r\n\t\t\t\t\t<div class=\"pull-left user-img user-icon\" title=\"" + 
                              __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['username'] : null)) + 
                              "\" style=\"background-color: " + 
                              __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['icon:bgColor'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['icon:text'] : null)) + 
                              "</div>\r\n\t\t\t\t\t") + 
                          "\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"post-preview-content\">\r\n\r\n\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['content'] : null)) + 
                          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"fade-out\"></p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<span class=\"pull-right post-preview-footer\">\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['timestampISO'] : null)) + 
                          "\"></span> &bull;\r\n\t\t\t\t\t<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['topic'] != null) ? context['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['index'] : null)) :
                            "") + 
                          "\">[[global:read_more]]</a>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t";
                      }, function alt() {
                        return "";
                      })) + 
                  "\r\n\t\t\t") + 
              "\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n") + 
          "\r\n\t\t\t";
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
                " hidden-xs") + 
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
    },
    'widgets.sidebar': function widgetssidebar(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['widgets'] != null) ? context['widgets']['sidebar'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t" + 
          guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null && context['widgets']['sidebar'][key0] != null) ? context['widgets']['sidebar'][key0]['html'] : null) + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
