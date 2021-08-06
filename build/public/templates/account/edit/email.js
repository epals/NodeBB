
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
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n\t\r\n\t<div class=\"row account-menu\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<ul class=\"nav nav-pills pull-right\">\r\n\t\t\t" + 
      (guard((context != null) ? context['false'] : null) ?
        "\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "\" class=\"inline-block\" id=\"profile\">[[user:profile]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\r\n\t\t\t" + 
          (guard((context != null) ? context['false'] : null) ?
            "\r\n\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/edit\">[[user:edit]]</a></li>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\">[[user:settings]]</a></li>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t" + 
      (guard((context != null) ? context['false'] : null) ?
        "\r\n\t\t\t\t<li class=\"dropdown bottom-sheet\">\r\n\r\n\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t[[user:more]] <span class=\"caret\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['loggedIn'] : null) ?
            "\r\n\t\t\t\t\t\t" + 
              (guard((context != null) ? context['isSelf'] : null) ?
                "" :
                "\r\n\t\t\t\t\t\t" + 
                  (guard((context != null) ? context['banned'] : null) ?
                    "" :
                    "\r\n\t\t\t\t\t\t" + 
                      (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
                        "" :
                        "\r\n\t\t\t\t\t\t<li><a component=\"account/chat\" href=\"#\">[[user:chat_with, " + 
                          __escape(guard((context != null) ? context['username'] : null)) + 
                          "]]</a></li>\r\n\t\t\t\t\t\t") + 
                      "\r\n\r\n\t\t\t\t\t\t<li><a component=\"account/flag\" href=\"#\">[[user:flag-profile]]</a></li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a component=\"account/block\" href=\"#\">" + 
                      (guard((context != null) ? context['isBlocked'] : null) ?
                        "[[user:unblock_user]]" :
                        "[[user:block_user]]") + 
                      "</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t" + 
              (guard((context != null) ? context['canBan'] : null) ?
                "\r\n\t\t\t\t\t\t<li class=\"" + 
                  (guard((context != null) ? context['banned'] : null) ?
                    "hide" :
                    "") + 
                  "\">\r\n\t\t\t\t\t\t\t<a component=\"account/ban\" href=\"#\">[[user:ban_account]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"" + 
                  (guard((context != null) ? context['banned'] : null) ?
                    "" :
                    "hide") + 
                  "\">\r\n\t\t\t\t\t\t\t<a component=\"account/unban\" href=\"#\">[[user:unban_account]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t" + 
              (guard((context != null) ? context['isAdmin'] : null) ?
                "\r\n\t\t\t\t\t\t<li><a component=\"account/delete\" href=\"#\" class=\"\">[[user:delete_account]]</a></li>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t") + 
          "\r\n\r\n\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/following\">[[user:following]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/followers\">[[user:followers]]</a></li>\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['showHidden'] : null) ?
            "\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/blocks\">[[user:blocks]]</a></li>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/topics\">[[global:topics]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/posts\">[[global:posts]]</a></li>\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/best\">[[global:best]]</a></li>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/groups\">[[global:header.groups]]</a></li>\r\n\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['showHidden'] : null) ?
            "\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/bookmarks\">[[user:bookmarks]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/watched\">[[user:watched]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/ignored\">[[user:ignored]]</a></li>\r\n\t\t\t\t\t\t" + 
              (guard((context != null) ? context['reputation:disabled'] : null) ?
                "" :
                "\r\n\t\t\t\t\t\t<li><a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null) ? context['userslug'] : null)) + 
                  "/upvoted\">[[global:upvoted]]</a></li>\r\n\t\t\t\t\t\t" + 
                  (guard((context != null) ? context['downvote:disabled'] : null) ?
                    "" :
                    "\r\n\t\t\t\t\t\t<li><a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/user/" + 
                      __escape(guard((context != null) ? context['userslug'] : null)) + 
                      "/downvoted\">[[global:downvoted]]</a></li>\r\n\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/uploads\">[[global:uploads]]</a></li>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t\t" + 
          compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<form class=\"form-horizontal edit-form\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-lg-2 control-label\" for=\"inputNewEmail\">[[user:email]]</label>\r\n\t\t\t\t\t<div class=\"col-sm-9 col-lg-10\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"inputNewEmail\" placeholder=\"[[user:email]]\" value=\"" + 
      __escape(guard((context != null) ? context['email'] : null)) + 
      "\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\r\n\t\t\t\t<!-- disables autocomplete on FF --><input type=\"password\" style=\"display:none\">\r\n\t\t\r\n\t\t\t\t" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-sm-3 col-lg-2 control-label\" for=\"inputCurrentPassword\">[[user:current_password]]</label>\r\n\t\t\t\t\t<div class=\"col-sm-9 col-lg-10\">\r\n\t\t\t\t\t\t<input autocomplete=\"off\" class=\"form-control\" type=\"password\" id=\"inputCurrentPassword\" placeholder=\"[[user:current_password]]\" value=\"\"" + 
          (guard((context != null) ? context['hasPassword'] : null) ?
            "" :
            " disabled") + 
          ">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\r\n\t\t\t\t<input type=\"hidden\" name=\"uid\" id=\"inputUID\" value=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\" />\r\n\t\t\r\n\t\t\t\t<br/>\r\n\t\t\t\t<div class=\"form-group form-actions\">\r\n\t\t\t\t\t<div class=\"col-sm-offset-3 col-sm-9 col-lg-offset-2 col-lg-10\">\r\n\t\t\t\t\t\t<a id=\"submitBtn\" href=\"#\" class=\"btn btn-primary btn-block\"><i class=\"hide fa fa-spinner fa-spin\"></i> [[user:change_email]]</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\r\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">") + 
          "\r\n\t\t\t<span itemprop=\"name\">\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\r\n\t\t\t\t" + 
          (index === length - 1 ?
            "\r\n\t\t\t\t" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\r\n\t\t\t\t" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</span>\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t" + 
          (index === 0 ?
            "\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t<li id=\"" + 
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
          "</a></li>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
