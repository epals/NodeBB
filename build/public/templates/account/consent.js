
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
      "\n\r\n\r\n\t<div class=\"row account-menu\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<ul class=\"nav nav-pills pull-right\">\r\n\t\t\t" + 
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
      "\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n\t<h2>[[user:consent.title]]</h2>\r\n\t<p class=\"lead\">[[user:consent.lead]]</p>\r\n\t<p>[[user:consent.intro]]</p>\r\n\r\n\t<hr />\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-6\">\r\n\t\t\t" + 
      (guard((context != null) ? context['gdpr_consent'] : null) ?
        "\r\n\t\t\t<div class=\"alert alert-success\">\r\n\t\t\t\t<i class=\"fa fa-check pull-right fa-3x\"></i>\r\n\t\t\t\t[[user:consent.received]]\r\n\t\t\t</div>\r\n\t\t\t" :
        "\r\n\t\t\t<div class=\"alert alert-warning\">\r\n\t\t\t\t[[user:consent.not_received]]\r\n\t\t\t\t<br /><br />\r\n\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t<button class=\"btn btn-warning\" data-action=\"consent\">[[user:consent.give]]</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t") + 
      "\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<p>[[user:consent.email_intro]]</p>\r\n\t\t\t\t\t" + 
      (guard((context != null && context['digest'] != null) ? context['digest']['enabled'] : null) ?
        "\r\n\t\t\t\t\t<p>[[user:consent.digest_frequency, " + 
          __escape(guard((context != null && context['digest'] != null) ? context['digest']['frequency'] : null)) + 
          "]]</p>\r\n\t\t\t\t\t" :
        "\r\n\t\t\t\t\t[[user:consent.digest_off]]\r\n\t\t\t\t\t") + 
      "\r\n\r\n\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t<a class=\"btn btn-default\" href=\"./settings\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-cog\"></i>\r\n\t\t\t\t\t\t\t[[pages:account/settings]]\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-6\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<p><strong>[[user:consent.right_of_access]]</strong></p>\r\n\t\t\t\t\t<p>[[user:consent.right_of_access_description]]</p>\r\n\t\t\t\t\t<p><strong>[[user:consent.right_to_rectification]]</strong></p>\r\n\t\t\t\t\t<p>[[user:consent.right_to_rectification_description]]</p>\r\n\t\t\t\t\t<p><strong>[[user:consent.right_to_erasure]]</strong></p>\r\n\t\t\t\t\t<p>[[user:consent.right_to_erasure_description]]</p>\r\n\t\t\t\t\t<p><strong>[[user:consent.right_to_data_portability]]</strong></p>\r\n\t\t\t\t\t<p>[[user:consent.right_to_data_portability_description]]</p>\r\n\r\n\t\t\t\t\t<div class=\"btn-group-vertical btn-block\">\r\n\t\t\t\t\t\t<a class=\"btn btn-default\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/user/uid/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/export/profile\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-download\"></i> [[user:consent.export_profile]]\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a class=\"btn btn-default\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/user/uid/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/export/posts\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-download\"></i> [[user:consent.export_posts]]\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<a class=\"btn btn-default\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/user/uid/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/export/uploads\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-download\"></i> [[user:consent.export_uploads]]\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>\r\n</div>";
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
