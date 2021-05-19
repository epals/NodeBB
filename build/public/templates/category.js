
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
    return "<div class=\"category row\">\r\n\t<div class=\"" + 
      (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
        "col-lg-9 col-sm-12" :
        "col-lg-12") + 
      "\">\r\n\r\n\t\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\r\n\r\n\t\t<div class=\"subcategories\">\r\n\t\t\t" + 
      (guard((context != null) ? context['hasMoreSubCategories'] : null) ?
        "\r\n\t\t\t<div><div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
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
          "\n</ul>\n</div></div>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t<div class=\"row\" component=\"category/subcategory/container\">\r\n\t\t\t\t" + 
      compiled.blocks['children'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</div>\r\n\t\t\t" + 
      (guard((context != null) ? context['hasMoreSubCategories'] : null) ?
        "\r\n\t\t\t<button class=\"btn btn-default\" component=\"category/load-more-subcategories\">[[category:x-more-categories, " + 
          __escape(guard((context != null) ? context['subCategoriesLeft'] : null)) + 
          "]]</button>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</div>\r\n\r\n\t\t<div class=\"header category-tools clearfix\">\r\n\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:create'] : null) ?
        "\r\n\t\t\t<button id=\"new_topic\" class=\"btn btn-primary\">[[category:new_topic_button]]</button>\r\n\t\t\t" :
        "\r\n\t\t\t\t" + 
          (guard((context != null) ? context['loggedIn'] : null) ?
            "" :
            "\r\n\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"btn btn-primary\">[[category:guest-login-post]]</a>\r\n\t\t\t\t") + 
          "\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t<span class=\"pull-right\" component=\"category/controls\">\r\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group topic-watch-dropdown\" component=\"topic/watch\">\n\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"category/watching/menu\" " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:watching]]</span></span>\n\t\t<span component=\"category/notwatching/menu\" " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-clock-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:not-watching]]</span></span>\n\t\t<span component=\"category/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[category:ignoring]]</span></span>\n\t\t<span class=\"caret\"></span>\n\t</button>\n\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t<li><a href=\"#\" component=\"category/watching\" data-state=\"watching\"><i component=\"category/watching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-inbox\"></i> [[category:watching]]<p class=\"help-text\"><small>[[category:watching.description]]</small></p></a></li>\n\t\t<li><a href=\"#\" component=\"category/notwatching\" data-state=\"notwatching\"><i component=\"category/notwatching/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotWatched'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-clock-o\"></i> [[category:not-watching]]<p class=\"help-text\"><small>[[category:not-watching.description]]</small></p></a></li>\n\t\t<li><a href=\"#\" component=\"category/ignoring\" data-state=\"ignoring\"><i component=\"category/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnored'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[category:ignoring]]<p class=\"help-text\"><small>[[category:ignoring.description]]</small></p></a></li>\n\t</ul>\n</div>\n" :
        "") + 
      "\n\r\n\r\n\t\t\t\t<div class=\"btn-group\" component=\"thread/sort\">\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:sort_by]]</span>\n\t\t<span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-sort\"></i></span>\n\t\t<span class=\"caret\"></span>\n\t</button>\n\n\t<ul class=\"dropdown-menu pull-right\">\n\t\t<li><a href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest_to_oldest]]</a></li>\n\t\t<li><a href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest_to_newest]]</a></li>\n\t\t<li><a href=\"#\" class=\"most_posts\" data-sort=\"most_posts\"><i class=\"fa fa-fw\"></i> [[topic:most_posts]]</a></li>\n\t\t<li><a href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most_votes]]</a></li>\n\t</ul>\n</div>\n\r\n\r\n\t\t\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['editable'] : null) ?
        "\n<div class=\"btn-group thread-tools\">\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:thread_tools.title]]</span>\n\t\t<span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-gear\"></i></span>\n\t\t<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu pull-right\">\n\t\t<li>\n\t\t\t<a component=\"topic/mark-unread-for-all\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread_tools.markAsUnreadForAll]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/pin\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread_tools.pin]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/unpin\" href=\"#\" class=\"hidden\">\n\t\t\t\t<i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread_tools.unpin]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a component=\"topic/lock\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-lock\"></i> [[topic:thread_tools.lock]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/unlock\" href=\"#\" class=\"hidden\">\n\t\t\t\t<i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread_tools.unlock]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class=\"divider\"></li>\n\n\t\t<li>\n\t\t\t<a component=\"topic/move\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/move-all\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move_all]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/merge\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread_tools.merge]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class=\"divider\"></li>\n\n\t\t<li>\n\t\t\t<a component=\"topic/delete\" href=\"#\">\n\t\t\t\t<i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread_tools.delete]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/restore\" href=\"#\" class=\"hidden\">\n\t\t\t\t<i class=\"fa fa-fw fa-history\"></i> [[topic:thread_tools.restore]]\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component=\"topic/purge\" href=\"#\" class=\"hidden\">\n\t\t\t\t<i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread_tools.purge]]\n\t\t\t</a>\n\t\t</li>\n\n\t\t" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n</div>\n" :
        "") + 
      "\r\n\t\t\t</span>\r\n\t\t</div>\r\n\r\n\t\t" + 
      (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
        "" :
        "\r\n\t\t<div class=\"alert alert-warning\" id=\"category-no-topics\">\r\n\t\t\t[[category:no_topics]]\r\n\t\t</div>\r\n\t\t") + 
      "\r\n\r\n\t\t\t\t<ul component=\"category\" id=\"topics-container\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\r\n\t\t\t<meta itemprop=\"itemListOrder\" content=\"descending\">\r\n\t\t\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</ul>\r\n\r\n\r\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\r\n\t\t\t\n<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n</div>\n\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n\r\n\t" + 
      (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
        "\r\n\t<div data-widget-area=\"sidebar\" class=\"col-md-3 col-xs-12 category-sidebar " + 
          (guard((context != null && context['widgets'] != null && context['widgets']['sidebar'] != null) ? context['widgets']['sidebar']['length'] : null) ?
            "" :
            "hidden") + 
          "\">\r\n\t\t" + 
          compiled.blocks['widgets.sidebar'](helpers, context, guard, iter, helper) + 
          "\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n</div>\r\n\r\n<div id=\"move_thread_modal\" class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Move Topic\" aria-hidden=\"true\">\n\t<div class=\"modal-dialog\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n\t\t\t\t<h3>[[topic:move_topic]]</h3>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
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
      iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
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
      }) + 
      "\n</ul>\n</div>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" id=\"move_thread_cancel\">[[global:buttons.close]]</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" id=\"move_thread_commit\" disabled>[[topic:confirm_move]]</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\r\n\r\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "" :
        "\r\n<noscript>\r\n\t\n<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
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
          }) + 
          "\n\n\t\t<li class=\"next pull-right" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n</div>\n\r\n</noscript>\r\n") + 
      "\r\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">") + 
          "\n\t\t\t<span itemprop=\"name\">\n\t\t\t\t" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\n\t\t\t\t" + 
          (index === length - 1 ?
            "\n\t\t\t\t" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\n\t\t\t\t" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</span>\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    },
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
        return "\r\n\t\t\t\t" + 
          (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['isSection'] : null) ?
            "\r\n<div component=\"categories/category\" class=\"col-xs-12 category-item\">\r\n\t<h1 class=\"section\">" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
              "</h1>\r\n</div>\r\n" :
            "\r\n<div component=\"categories/category\" class=\"" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['class'] : null) ?
                __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['class'] : null)) :
                "col-md-3 col-sm-6 col-xs-12") + 
              " category-item\" data-cid=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['cid'] : null)) + 
              "\" data-numRecentReplies=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['numRecentReplies'] : null)) + 
              "\">\r\n\t<meta itemprop=\"name\" content=\"" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
              "\">\r\n\r\n\t<div class=\"category-icon\">\r\n\t\t" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                "\r\n\t\t<a style=\"color: " + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['color'] : null)) + 
                  ";\" href=\"" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\r\n\t\t" :
                "\r\n\t\t<a style=\"color: " + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['color'] : null)) + 
                  ";\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\r\n\t\t") + 
              "\r\n\t\t\t<div\r\n\t\t\t\tid=\"category-" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['cid'] : null)) + 
              "\" class=\"category-header category-header-image-" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['imageClass'] : null)) + 
              "\"\r\n\t\t\t\tstyle=\"\r\n\t\t\t\t\t" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['backgroundImage'] : null) ?
                "background-image: url(" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['backgroundImage'] : null)) + 
                  ");" :
                "") + 
              "\r\n\t\t\t\t\t" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['bgColor'] : null) ?
                "background-color: " + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['bgColor'] : null)) + 
                  ";" :
                "") + 
              "\r\n\t\t\t\t\tcolor: " + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['color'] : null)) + 
              ";\r\n\t\t\t\t\"\r\n\t\t\t>\r\n\t\t\t\t" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                "" :
                "\r\n\t\t\t\t<span class=\"badge " + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['unread-class'] : null)) + 
                  "\"><i class=\"fa fa-book\" data-toggle=\"tooltip\" title=\"[[global:topics]]\"></i> <span class=\"human-readable-number\" title=\"" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalTopicCount'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalTopicCount'] : null)) + 
                  "</span>&nbsp; <i class=\"fa fa-pencil\" data-toggle=\"tooltip\" title=\"[[global:posts]]\"></i> <span class=\"human-readable-number\" title=\"" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalPostCount'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['totalPostCount'] : null)) + 
                  "</span></span>\r\n\t\t\t\t") + 
              "\r\n\r\n\t\t\t\t" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['icon'] : null) ?
                "\r\n\t\t\t\t<div><i class=\"fa " + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['icon'] : null)) + 
                  " fa-4x\"></i></div>\r\n\t\t\t\t" :
                "") + 
              "\r\n\t\t\t</div>\r\n\t\t</a>\r\n\r\n\t\t<div class=\"category-box\">\r\n\t\t\t<div class=\"category-info\">\r\n\t\t\t\t" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                "\r\n\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null)) + 
                  "\" itemprop=\"url\">\r\n\t\t\t\t" :
                "\r\n\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/category/" + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['slug'] : null)) + 
                  "\" itemprop=\"url\">\r\n\t\t\t\t") + 
              "\r\n\t\t\t\t\t<h4>" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['icon'] : null) ?
                "<i class=\"fa " + 
                  __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['icon'] : null)) + 
                  " visible-xs-inline\"></i> " :
                "") + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['name'] : null)) + 
              "</h4>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"description\" itemprop=\"description\">" + 
              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['descriptionParsed'] : null)) + 
              "</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t" + 
              (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['link'] : null) ?
                "" :
                "\r\n\t\t\t" + 
                  (guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['posts'] : null) ?
                    iter(guard((context != null && context['children'] != null && context['children'][key0] != null) ? context['children'][key0]['posts'] : null), function each(key1, index, length, value) {
                        var key = key1;
                        return "\r\n\t\t\t<div component=\"category/posts\" class=\"post-preview clearfix\">\r\n\t\t\t\t<strong><a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['topic'] != null) ? context['children'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          "\">" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['topic'] != null) ? context['children'][key0]['posts'][key1]['topic']['title'] : null)) + 
                          "</a></strong>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<a style=\"color: " + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['color'] : null)) + 
                          ";\" href=\"" + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['userslug'] : null) ?
                            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                              "/user/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['userslug'] : null)) :
                            "#") + 
                          "\">\r\n\t\t\t\t\t" + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['picture'] : null) ?
                            "\r\n\t\t\t\t\t<img src=\"" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['picture'] : null)) + 
                              "\" title=\"" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['username'] : null)) + 
                              "\" class=\"pull-left user-img\" />\r\n\t\t\t\t\t" :
                            "\r\n\t\t\t\t\t<div class=\"pull-left user-img user-icon\" title=\"" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['username'] : null)) + 
                              "\" style=\"background-color: " + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['icon:bgColor'] : null)) + 
                              "\">" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['user'] != null) ? context['children'][key0]['posts'][key1]['user']['icon:text'] : null)) + 
                              "</div>\r\n\t\t\t\t\t") + 
                          "\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"post-preview-content\">\r\n\r\n\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['content'] : null)) + 
                          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"fade-out\"></p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<span class=\"pull-right post-preview-footer\">\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['timestampISO'] : null)) + 
                          "\"></span> &bull;\r\n\t\t\t\t\t<a href=\"" + 
                          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                          "/topic/" + 
                          __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null && context['children'][key0]['posts'][key1]['topic'] != null) ? context['children'][key0]['posts'][key1]['topic']['slug'] : null)) + 
                          (guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null) ?
                            "/" + 
                              __escape(guard((context != null && context['children'] != null && context['children'][key0] != null && context['children'][key0]['posts'] != null && context['children'][key0]['posts'][key1] != null) ? context['children'][key0]['posts'][key1]['index'] : null)) :
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
          "\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<li>\n\t\t\t<a href=\"#\" class=\"" + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a>\n\t\t</li>\n\t\t";
      }, function alt() {
        return "";
      });
    },
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
