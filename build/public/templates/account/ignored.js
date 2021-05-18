
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
    return "<div class=\"account\">\r\n\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\r\n\t<div class=\"row account-menu\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<ul class=\"nav nav-pills pull-right\">\r\n\t\t\t<li>\r\n\t\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"inline-block\" id=\"profile\">[[user:profile]]</a>\r\n\t\t\t</li>\r\n\t\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit\">[[user:edit]]</a></li>\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\">[[user:settings]]</a></li>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t<li class=\"dropdown bottom-sheet\">\r\n\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t      [[user:more]] <span class=\"caret\"></span>\r\n\t\t\t    </a>\r\n\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\r\n\t\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\r\n\t\t\t\t\t" + 
              (guard((context != null) ? context['banned'] : null) ?
                "" :
                "\r\n\t\t\t\t\t" + 
                  (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
                    "" :
                    "\r\n\t\t\t\t\t<li><a component=\"account/chat\" href=\"#\">[[user:chat_with, " + 
                      __escape(guard((context != null) ? context['username'] : null)) + 
                      "]]</a></li>\r\n\t\t\t\t\t") + 
                  "\r\n\r\n\t\t\t\t\t<li><a component=\"account/flag\" href=\"#\">[[user:flag-profile]]</a></li>\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a component=\"account/block\" href=\"#\">" + 
                  (guard((context != null) ? context['isBlocked'] : null) ?
                    "[[user:unblock_user]]" :
                    "[[user:block_user]]") + 
                  "</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\r\n\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\r\n\t\t\t\t\t" + 
          (guard((context != null) ? context['canBan'] : null) ?
            "\r\n\t\t\t\t\t<li class=\"" + 
              (guard((context != null) ? context['banned'] : null) ?
                "hide" :
                "") + 
              "\">\r\n\t\t\t\t\t\t<a component=\"account/ban\" href=\"#\">[[user:ban_account]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"" + 
              (guard((context != null) ? context['banned'] : null) ?
                "" :
                "hide") + 
              "\">\r\n\t\t\t\t\t\t<a component=\"account/unban\" href=\"#\">[[user:unban_account]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null) ? context['isAdmin'] : null) ?
            "\r\n\t\t\t\t\t<li><a component=\"account/delete\" href=\"#\" class=\"\">[[user:delete_account]]</a></li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t") + 
      "\r\n\r\n\r\n\t\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\">[[user:following]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\">[[user:followers]]</a></li>\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/blocks\">[[user:blocks]]</a></li>\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\">[[global:topics]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\">[[global:posts]]</a></li>\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/best\">[[global:best]]</a></li>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\">[[global:header.groups]]</a></li>\r\n\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/bookmarks\">[[user:bookmarks]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/watched\">[[user:watched]]</a></li>\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/ignored\">[[user:ignored]]</a></li>\r\n\t\t\t\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\r\n\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/upvoted\">[[global:upvoted]]</a></li>\r\n\t\t\t\t\t" + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\r\n\t\t\t\t\t<li><a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null) ? context['userslug'] : null)) + 
                  "/downvoted\">[[global:downvoted]]</a></li>\r\n\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/uploads\">[[global:uploads]]</a></li>\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t\t" + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<h1>" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h1>\r\n\t\t\t" + 
      (guard((context != null) ? context['showSort'] : null) ?
        "\r\n\t\t\t<div class=\"row clearfix\">\r\n\t\t\t\t<div class=\"pull-right btn-group bottom-sheet\" component=\"thread/sort\">\r\n\t\t\t\t\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"><span>[[topic:sort_by]]</span> <span class=\"caret\"></span></button>\r\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t" + 
          compiled.blocks['sortOptions'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t<div class=\"alert alert-warning text-center\">" + 
          __escape(guard((context != null) ? context['noItemsFoundKey'] : null)) + 
          "</div>\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t<div class=\"category\">\r\n\t\t\t\t<div component=\"category\" class=\"topic-list\" itemscope itemtype=\"http://www.schema.org/ItemList\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\" data-set=\"" + 
      __escape(guard((context != null) ? context['set'] : null)) + 
      "\">\r\n\t<meta itemprop=\"itemListOrder\" content=\"descending\">\r\n\t" + 
      (guard((context != null && context['topics'] != null) ? context['topics']['length'] : null) ?
        "\r\n\t<div class=\"row topics-header hidden-xs hidden-sm\">\r\n\t\t<div class=\"col-md-8 col-xs-12\"><div class=\"header-title\">[[global:topics]]</div></div>\r\n\t\t<div class=\"col-md-1\"><div class=\"header-title\">[[global:posts]]</div></div>\r\n\t\t<div class=\"col-md-1\"><div class=\"header-title\">[[global:views]]</div></div>\r\n\t\t<div class=\"col-md-2\"><div class=\"header-title\">Last Reply</div></div>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\t" + 
      compiled.blocks['topics'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\r\n\t\t\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
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
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t" + 
          (index === 0 ?
            "\r\n\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t<li id=\"" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['id'] : null)) + 
          "\" class=\"plugin-link " + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['public'] : null) ?
            "public" :
            "private") + 
          "\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['route'] : null)) + 
          "\">" + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null) ?
            "<i class=\"fa fa-fw " + 
              __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['name'] : null)) + 
          "</a></li>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sortOptions': function sortOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sortOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null && context['sortOptions'] != null && context['sortOptions'][key0] != null) ? context['sortOptions'][key0]['url'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          (guard((context != null && context['sortOptions'] != null && context['sortOptions'][key0] != null) ? context['sortOptions'][key0]['selected'] : null) ?
            "fa-check" :
            "") + 
          "\"></i>" + 
          __escape(guard((context != null && context['sortOptions'] != null && context['sortOptions'][key0] != null) ? context['sortOptions'][key0]['name'] : null)) + 
          "</a></li>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'topics': function topics(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['topics'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div component=\"category/topic\" class=\"row category-item " + 
          __escape(helper(context, helpers, 'generateTopicClass', [guard(value)])) + 
          "\" data-tid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['tid'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['cid'] : null)) + 
          "\" itemprop=\"itemListElement\">\r\n\t\t<a id=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['index'] : null)) + 
          "\" component=\"topic/anchor\"></a>\r\n\t\t<meta itemprop=\"name\" content=\"" + 
          __escape(helper(context, helpers, 'stripTags', [guard((context != null) ? context['title'] : null)])) + 
          "\">\r\n\t\t<div class=\"col-md-8 col-xs-12\">\r\n\t\t\t" + 
          (guard((context != null) ? context['showSelect'] : null) ?
            "\r\n\t\t\t<div class=\"checkbox pull-left\" component=\"topic/select\">\r\n\t\t\t\t<label>\r\n\t\t\t\t\t<div class=\"select\"></div>\r\n\t\t\t\t\t<i class=\"input-helper\"></i>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t<div class=\"topic-author\">\r\n\t\t\t\t<a href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" class=\"pull-left\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['thumb'] : null) ?
            "\r\n\t\t\t\t\t<img src=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['thumb'] : null)) + 
              "\" class=\"user-img\" alt=\"" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['username'] : null)) + 
              "\" />\r\n\t\t\t\t\t" :
            "\r\n\t\t\t\t\t" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['picture'] : null) ?
                "\r\n\t\t\t\t\t<img class=\"user-avatar\" component=\"user/picture\" data-uid=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['uid'] : null)) + 
                  "\" src=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['picture'] : null)) + 
                  "\" alt=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['username'] : null)) + 
                  "\" />\r\n\t\t\t\t\t" :
                "\r\n\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['icon:bgColor'] : null)) + 
                  ";\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['icon:text'] : null)) + 
                  "</div>\r\n\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t<div component=\"topic/header\" class=\"title\">\r\n\t\t\t\t<i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinned'] : null) ?
            "" :
            "hide") + 
          "\" title=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiry'] : null) ?
            "[[topic:pinned-with-expiry, " + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['pinExpiryISO'] : null)) + 
              "]]" :
            "[[topic:pinned]]") + 
          "\"></i>\r\n\t\t\t\t<i component=\"topic/locked\" class=\"fa fa-lock " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['locked'] : null) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:locked]]\"></i>\r\n\t\t\t\t<i component=\"topic/moved\" class=\"fa fa-arrow-circle-right " + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['oldCid'] : null) ?
            "" :
            "hide") + 
          "\" title=\"[[topic:moved]]\"></i>\r\n\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['noAnchor'] : null) ?
            "\r\n\t\t\t\t<span>" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</span>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/topic/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null) ?
                "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['bookmark'] : null)) :
                "") + 
              "\" itemprop=\"url\">" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['title'] : null)) + 
              "</a>\r\n\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t<small>\r\n\t\t\t\t\t<a href=\"" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['user'] != null) ? context['topics'][key0]['user']['displayname'] : null)) + 
          "</a> &bull; <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n\t\t\t\t</small>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-1 hidden-xs hidden-sm\">\r\n\t\t\t<div class=\"total-post-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
          "\">\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['postcount'] : null)) + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-1 hidden-xs hidden-sm\">\r\n\t\t\t<div class=\"total-view-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
          "\">\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['viewcount'] : null)) + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-2 hidden-xs hidden-sm\">\r\n\t\t\t<div class=\"teaser\" component=\"topic/teaser\">\r\n\t\t\t\t" + 
          (guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['unreplied'] : null) ?
            "\r\n\t\t\t\t<p>\r\n\t\t\t\t\t[[category:no_replies]]\r\n\t\t\t\t</p>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t" + 
              (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['pid'] : null) ?
                "\r\n\t\t\t\t" + 
                  (guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['picture'] : null) ?
                    "\r\n\t\t\t\t<img title=\"" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['username'] : null)) + 
                      "\" class=\"user-avatar\" src=\"" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['picture'] : null)) + 
                      "\" alt=\"" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['username'] : null)) + 
                      "\" />\r\n\t\t\t\t" :
                    "\r\n\t\t\t\t<div title=\"" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['username'] : null)) + 
                      "\" class=\"user-icon\" style=\"background-color: " + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['icon:bgColor'] : null)) + 
                      ";\">" + 
                      __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['icon:text'] : null)) + 
                      "</div>\r\n\t\t\t\t") + 
                  "\r\n\r\n\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['userslug'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null && context['topics'][key0]['teaser']['user'] != null) ? context['topics'][key0]['teaser']['user']['displayname'] : null)) + 
                  "</a>\r\n\t\t\t\t<a class=\"permalink\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/topic/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null) ? context['topics'][key0]['slug'] : null)) + 
                  "/" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['index'] : null)) + 
                  "\">\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
                  __escape(guard((context != null && context['topics'] != null && context['topics'][key0] != null && context['topics'][key0]['teaser'] != null) ? context['topics'][key0]['teaser']['timestampISO'] : null)) + 
                  "\"></span>\r\n\t\t\t\t</a>\r\n\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t") + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t";
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
