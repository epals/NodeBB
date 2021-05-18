
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
      "\n\r\n\t\r\n\t<div class=\"row account-menu\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<ul class=\"nav nav-pills pull-right\">\r\n\t\t\t<li>\r\n\t\t\t\t<a href=\"" + 
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
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<h1>[[pages:" + 
      __escape(guard((context != null && context['template'] != null) ? context['template']['name'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "]]</h1>\r\n\t\t\r\n\t\t\t<div class=\"groups list\">\r\n\t\t\t\t<div component=\"groups/container\" id=\"groups-list\" class=\"row\">\r\n\t\t\t\t\t" + 
      (guard((context != null && context['groups'] != null) ? context['groups']['length'] : null) ?
        "\r\n\t\t\t\t\t\t" + 
          compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t" :
        "\r\n\t\t\t\t\t<div class=\"alert alert-warning text-center\">[[groups:no_groups_found]]</div>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
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
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div class=\"col-lg-4 col-md-6 col-sm-12\" component=\"groups/summary\" data-slug=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\" class=\"panel-heading list-cover\" style=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null) ?
            "background-image: url(" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null)) + 
              ");" :
            "") + 
          "\">\r\n\t\t\t\t<h3 class=\"panel-title\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          " <small>" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['memberCount'] : null)) + 
          "</small></h3>\r\n\t\t\t</a>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<ul class=\"members\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['members'] : null) ?
            iter(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['members'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['userslug'] : null)) + 
                  "\">\r\n\t\t\t\t\t\t\t" + 
                  (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['picture'] : null) ?
                    "\r\n\t\t\t\t\t\t\t<img class=\"user-avatar\" src=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['picture'] : null)) + 
                      "\" alt=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['username'] : null)) + 
                      "\" title=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['username'] : null)) + 
                      "\" />\r\n\t\t\t\t\t\t\t" :
                    "\r\n\t\t\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['icon:bgColor'] : null)) + 
                      ";\" title=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['username'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['icon:text'] : null)) + 
                      "</div>\r\n\t\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) :
            iter(guard((context != null) ? context['members'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['userslug'] : null)) + 
                  "\">\r\n\t\t\t\t\t\t\t" + 
                  (guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['picture'] : null) ?
                    "\r\n\t\t\t\t\t\t\t<img class=\"user-avatar\" src=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['picture'] : null)) + 
                      "\" alt=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['username'] : null)) + 
                      "\" title=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['username'] : null)) + 
                      "\" />\r\n\t\t\t\t\t\t\t" :
                    "\r\n\t\t\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['icon:bgColor'] : null)) + 
                      ";\" title=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['username'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['icon:text'] : null)) + 
                      "</div>\r\n\t\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t";
              }, function alt() {
                return "";
              })) + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['truncated'] : null) ?
            "\r\n\t\t\t\t\t<li class=\"truncated\"><i class=\"fa fa-ellipsis-h\"></i></li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
