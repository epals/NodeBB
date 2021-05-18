
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
    return (guard((context != null && context['children'] != null) ? context['children']['length'] : null) ?
        "\r\n<div class=\"subcategory\">\r\n\t" + 
          (guard((context != null) ? context['hasMoreSubCategories'] : null) ?
            "\r\n\t<div><div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
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
              "\n</ul>\n</div></div>\r\n\t" :
            "\r\n\t<p>[[category:subcategories]]</p>\r\n\t") + 
          "\r\n\r\n\t<div component=\"category/subcategory/container\" class=\"categories\" itemscope itemtype=\"http://www.schema.org/ItemList\">\r\n\t\t" + 
          compiled.blocks['children'](helpers, context, guard, iter, helper) + 
          "\r\n\t</div>\r\n\t" + 
          (guard((context != null) ? context['hasMoreSubCategories'] : null) ?
            "\r\n\t<button class=\"btn btn-default\" component=\"category/load-more-subcategories\">[[category:x-more-categories, " + 
              __escape(guard((context != null) ? context['subCategoriesLeft'] : null)) + 
              "]]</button>\r\n\t" :
            "") + 
          "\r\n</div>\r\n" :
        "");
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
    'children': function children(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['children'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<div class=\"row\" component=\"categories/category\" data-cid=\"" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['cid'] : null)) + 
          "\" data-numRecentReplies=\"1\">\r\n\t\t    <div class=\"col-md-8 col-xs-12\">\r\n\t\t        <div class=\"category-info\">\r\n\t\t            <div class=\"category-info-content\">\r\n\t\t            \t<div class=\"category-icon\">\r\n\t\t                \t<i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['icon'] : null)) + 
          "\"></i>\r\n\t\t                </div>\r\n\t\t                <a class=\"category-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['slug'] : null)) + 
          "\" title=\"" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
          "</a>\r\n\r\n\t\t                <div class=\"category-description\">\r\n\t\t                    " + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['descriptionParsed'] : null)) + 
          "\r\n\t\t                </div>\r\n\t\t            </div>\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t    <div class=\"col-md-1 hidden-xs hidden-sm\">\r\n\t\t        <div class=\"total-topic-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalTopicCount'] : null)) + 
          "\">\r\n\t\t            " + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalTopicCount'] : null)) + 
          "\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t    <div class=\"col-md-1 hidden-xs hidden-sm\">\r\n\t\t        <div class=\"total-post-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalPostCount'] : null)) + 
          "\">\r\n\t\t            " + 
          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalPostCount'] : null)) + 
          "\r\n\t\t        </div>\r\n\t\t    </div>\r\n\t\t    <div class=\"col-md-2 hidden-xs hidden-sm\">\r\n\t\t        <div class=\"teaser\" component=\"topic/teaser\">\r\n\t\t            " + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['posts'] : null) ?
            iter(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['posts'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t    \t    " + 
                  (index === 0 ?
                    "\r\n\r\n\t\t    \t\t" + 
                      (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['picture'] : null) ?
                        "\r\n\t\t    \t\t<img class=\"user-avatar\" title=\"" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['username'] : null)) + 
                          "\" alt=\"" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['username'] : null)) + 
                          "\" src=\"" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['picture'] : null)) + 
                          "\" title=\"" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['username'] : null)) + 
                          "\"/>\r\n\t\t    \t\t" :
                        "\r\n\t\t    \t\t<div class=\"user-icon\" title=\"" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['username'] : null)) + 
                          "\" style=\"background-color: " + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['icon:bgColor'] : null)) + 
                          ";\">" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['icon:text'] : null)) + 
                          "</div>\r\n\t\t    \t\t") + 
                      "\r\n\r\n\t\t    \t\t<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/user/" + 
                      __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['userslug'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['username'] : null)) + 
                      "</a>\r\n\r\n\t\t    \t\t<a class=\"permalink\" href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/topic/" + 
                      __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['topic'] != null) ? context['children'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                      (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null) ?
                        "/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null)) :
                        "") + 
                      "\">\r\n\t\t    \t\t\t<small class=\"timeago\" title=\"" + 
                      __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['timestampISO'] : null)) + 
                      "\"></small>\r\n\t\t    \t\t</a>\r\n\t\t    \t\t" :
                    "") + 
                  "\r\n\t\t    \t    ";
              }, function alt() {
                return "";
              }) :
            iter(guard((context != null) ? context['posts'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t    \t    " + 
                  (index === 0 ?
                    "\r\n\r\n\t\t    \t\t" + 
                      (guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['picture'] : null) ?
                        "\r\n\t\t    \t\t<img class=\"user-avatar\" title=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['username'] : null)) + 
                          "\" alt=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['username'] : null)) + 
                          "\" src=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['picture'] : null)) + 
                          "\" title=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['username'] : null)) + 
                          "\"/>\r\n\t\t    \t\t" :
                        "\r\n\t\t    \t\t<div class=\"user-icon\" title=\"" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['username'] : null)) + 
                          "\" style=\"background-color: " + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['icon:bgColor'] : null)) + 
                          ";\">" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['icon:text'] : null)) + 
                          "</div>\r\n\t\t    \t\t") + 
                      "\r\n\r\n\t\t    \t\t<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/user/" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['userslug'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['user'] != null) ? context['posts'][key1]['user']['username'] : null)) + 
                      "</a>\r\n\r\n\t\t    \t\t<a class=\"permalink\" href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/topic/" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null && context['posts'][key1]['topic'] != null) ? context['posts'][key1]['topic']['slug'] : null)) + 
                      (guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['index'] : null) ?
                        "/" + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['index'] : null)) :
                        "") + 
                      "\">\r\n\t\t    \t\t\t<small class=\"timeago\" title=\"" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key1] != null) ? context['posts'][key1]['timestampISO'] : null)) + 
                      "\"></small>\r\n\t\t    \t\t</a>\r\n\t\t    \t\t" :
                    "") + 
                  "\r\n\t\t    \t    ";
              }, function alt() {
                return "";
              })) + 
          "\r\n\r\n\t\t    \t    " + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null) ? context['children'][key0]['posts']['length'] : null) ?
            "" :
            "\r\n\t\t\t\t\t[[category:no_new_posts]]\r\n\t\t\t        ") + 
          "\r\n\t\t\t    </div>\r\n\t\t    </div>\r\n\t\t</div>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
