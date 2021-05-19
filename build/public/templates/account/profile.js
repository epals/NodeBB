
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
      "\n\r\n\r\n\t<div class=\"profile row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<div class=\"user-info\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\r\n\t\t\t\t" + 
      (guard((context != null) ? context['picture'] : null) ?
        "\r\n\t\t\t\t<img id=\"user-current-picture\" class=\"user-avatar\" src=\"" + 
          __escape(guard((context != null) ? context['picture'] : null)) + 
          "\" alt=\"" + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "\" />\r\n\t\t\t\t" :
        "\r\n\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
          __escape(guard((context != null) ? context['icon:bgColor'] : null)) + 
          ";\">" + 
          __escape(guard((context != null) ? context['icon:text'] : null)) + 
          "</div>\r\n\t\t\t\t") + 
      "\r\n\t\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
      __escape(guard((context != null) ? context['status'] : null)) + 
      "\" title=\"[[global:" + 
      __escape(guard((context != null) ? context['status'] : null)) + 
      "]]\"></i>\r\n\t\t\t\t<h1 class=\"fullname\">\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['fullname'] : null) ?
        __escape(guard((context != null) ? context['fullname'] : null)) + 
          "\r\n\t\t\t\t\t" :
        __escape(guard((context != null) ? context['username'] : null)) + 
          "\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t</h1>\r\n\t\t\t\t<h4 class=\"username\">\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['banned'] : null) ?
        "[[user:banned]]\r\n\t\t\t\t\t" :
        "@" + 
          __escape(guard((context != null) ? context['username'] : null)) + 
          "\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t</h4>\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['isAdminOrGlobalModeratorOrModerator'] : null) ?
        "\r\n\t\t\t\t" + 
          (guard((context != null) ? context['banned'] : null) ?
            "\r\n\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t" + 
              (guard((context != null) ? context['banned_until'] : null) ?
                "\r\n\t\t\t\t[[user:info.banned-until, " + 
                  __escape(guard((context != null) ? context['banned_until_readable'] : null)) + 
                  "]]\r\n\t\t\t\t" :
                "\r\n\t\t\t\t[[user:info.banned-permanently]]\r\n\t\t\t\t") + 
              "\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\r\n\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\r\n\t\t\t\t" + 
              (guard((context != null) ? context['banned'] : null) ?
                "" :
                "\r\n\t\t\t\t" + 
                  (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
                    "" :
                    "\r\n\t\t\t\t<a component=\"account/chat\" href=\"#\" class=\"btn btn-primary btn-sm\"><i class=\"fa fa-fw fa-comment-o\"></i> Chat</a>\r\n\t\t\t\t") + 
                  "\r\n\t\t\t\t<a id=\"follow-btn\" component=\"account/follow\" href=\"#\" class=\"btn btn-success btn-sm " + 
                  (guard((context != null) ? context['isFollowing'] : null) ?
                    "hide" :
                    "") + 
                  "\">[[user:follow]]</a>\r\n\t\t\t\t<a id=\"unfollow-btn\" component=\"account/unfollow\" href=\"#\" class=\"btn btn-warning btn-sm " + 
                  (guard((context != null) ? context['isFollowing'] : null) ?
                    "" :
                    "hide") + 
                  "\">[[user:unfollow]]</a>\r\n\t\t\t\t") + 
              "\r\n\t\t\t\t") + 
          "\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t</div>\r\n\r\n\t\t\t" + 
      (guard((context != null) ? context['aboutme'] : null) ?
        "\r\n\t\t\t<span component=\"aboutme\" class=\"text-center aboutme\">" + 
          __escape(guard((context != null) ? context['aboutmeParsed'] : null)) + 
          "</span>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<div class=\"account-stats\">\r\n\t\t\t\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\r\n\t\t\t\t<div class=\"stat\">\r\n\t\t\t\t\t<div class=\"human-readable-number\" title=\"" + 
          __escape(guard((context != null) ? context['reputation'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['reputation'] : null)) + 
          "</div>\r\n\t\t\t\t\t<span class=\"stat-label\">[[global:reputation]]</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t") + 
      "\r\n\r\n\t\t\t\t<div class=\"stat\">\r\n\t\t\t\t\t<div class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</div>\r\n\t\t\t\t\t<span class=\"stat-label\">[[global:posts]]</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"stat\">\r\n\t\t\t\t\t<div class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['profileviews'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['profileviews'] : null)) + 
      "</div>\r\n\t\t\t\t\t<span class=\"stat-label\">[[user:profile_views]]</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"stat\">\r\n\t\t\t\t\t<div class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['followerCount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['followerCount'] : null)) + 
      "</div>\r\n\t\t\t\t\t<span class=\"stat-label\">[[user:followers]]</span>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"stat\">\r\n\t\t\t\t\t<div class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['followingCount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['followingCount'] : null)) + 
      "</div>\r\n\t\t\t\t\t<span class=\"stat-label\">[[user:following]]</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"text-center profile-meta\">\r\n\t\t\t\t<span>[[user:joined]]</span>\r\n\t\t\t\t<strong class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['joindateISO'] : null)) + 
      "\"></strong>\r\n\r\n\t\t\t\t<span>[[user:lastonline]]</span>\r\n\t\t\t\t<strong class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['lastonlineISO'] : null)) + 
      "\"></strong><br />\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['email'] : null) ?
        "\r\n\t\t\t\t<span>[[user:email]]</span>\r\n\t\t\t\t<strong><i class=\"fa fa-eye-slash " + 
          __escape(guard((context != null) ? context['emailClass'] : null)) + 
          "\" title=\"[[user:email_hidden]]\"></i> " + 
          __escape(guard((context != null) ? context['email'] : null)) + 
          "</strong>\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['websiteName'] : null) ?
        "\r\n\t\t\t\t<span>[[user:website]]</span>\r\n\t\t\t\t<strong><a href=\"" + 
          __escape(guard((context != null) ? context['websiteLink'] : null)) + 
          "\" rel=\"nofollow noopener noreferrer\">" + 
          __escape(guard((context != null) ? context['websiteName'] : null)) + 
          "</a></strong>\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['location'] : null) ?
        "\r\n\t\t\t\t<span>[[user:location]]</span>\r\n\t\t\t\t<strong>" + 
          __escape(guard((context != null) ? context['location'] : null)) + 
          "</strong>\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['age'] : null) ?
        "\r\n\t\t\t\t<span>[[user:age]]</span>\r\n\t\t\t\t<strong>" + 
          __escape(guard((context != null) ? context['age'] : null)) + 
          "</strong>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<hr />\r\n\t<div class=\"row account-menu\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<ul class=\"nav nav-pills pull-right\">\r\n\t\t\t<li>\r\n\t\t\t\t<a href=\"" + 
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
      "\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12 account-block hidden\">\r\n\t\t\t<div class=\"account-picture-block text-center\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<span class=\"account-username\"> " + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "</span>\r\n\t\t\t\t</span>\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\r\n\t\t\t\t" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "\r\n\t\t\t\t<a component=\"account/unfollow\" href=\"#\" class=\"btn btn-warning btn-sm\">[[user:unfollow]]</a>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<a component=\"account/follow\" href=\"#\" class=\"btn btn-success btn-sm\">[[user:follow]]</a>\r\n\t\t\t\t") + 
          "\r\n\t\t\t\t") + 
      "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<h1 class=\"section-title\">[[pages:account/best, " + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "]]</h1>\r\n\r\n\t\t\t" + 
      (guard((context != null && context['bestPosts'] != null) ? context['bestPosts']['length'] : null) ?
        "" :
        "\r\n\t\t\t<div class=\"alert alert-warning\">[[user:has_no_posts]]</div>\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t<div component=\"posts\" class=\"posts-list\">\r\n\t\t\t" + 
      compiled.blocks['bestPosts'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-xs-6\">\r\n\t\t\t<h1 class=\"section-title\">[[pages:account/latest-posts, " + 
      __escape(guard((context != null) ? context['username'] : null)) + 
      "]]</h1>\r\n\r\n\t\t\t" + 
      (guard((context != null && context['latestPosts'] != null) ? context['latestPosts']['length'] : null) ?
        "" :
        "\r\n\t\t\t<div class=\"alert alert-warning\">[[user:has_no_posts]]</div>\r\n\t\t\t") + 
      "\r\n\t\t\t<div component=\"posts\" class=\"posts-list\">\r\n\t\t\t" + 
      compiled.blocks['latestPosts'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div id=\"user-action-alert\" class=\"alert alert-success hide\"></div>\r\n</div>\r\n";
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
    'bestPosts': function bestPosts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['bestPosts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<div component=\"post\" class=\"posts-list-item" + 
          (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null) ? context['bestPosts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['uid'] : null)) + 
          "\">\r\n    <div class=\"post-body\">\r\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['pid'] : null)) + 
          "\">\r\n            " + 
          (guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['topic'] != null) ? context['bestPosts'][key0]['topic']['title'] : null)) + 
          "\r\n        </a>\r\n\r\n        <div component=\"post/content\" class=\"content\">\r\n            " + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['content'] : null)) + 
          "\r\n        </div>\r\n\r\n        <span class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['category'] != null) ? context['bestPosts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted_in, " + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null && context['bestPosts'][key0]['category'] != null) ? context['bestPosts'][key0]['category']['name'] : null)) + 
          "]]</a></span> &bull; <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['bestPosts'] != null && context['bestPosts'][key0] != null) ? context['bestPosts'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n    </div>\r\n</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'latestPosts': function latestPosts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['latestPosts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<div component=\"post\" class=\"posts-list-item" + 
          (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null) ? context['latestPosts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['uid'] : null)) + 
          "\">\r\n    <div class=\"post-body\">\r\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['pid'] : null)) + 
          "\">\r\n            " + 
          (guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['topic'] != null) ? context['latestPosts'][key0]['topic']['title'] : null)) + 
          "\r\n        </a>\r\n\r\n        <div component=\"post/content\" class=\"content\">\r\n            " + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['content'] : null)) + 
          "\r\n        </div>\r\n\r\n        <span class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['category'] != null) ? context['latestPosts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted_in, " + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null && context['latestPosts'][key0]['category'] != null) ? context['latestPosts'][key0]['category']['name'] : null)) + 
          "]]</a></span> &bull; <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['latestPosts'] != null && context['latestPosts'][key0] != null) ? context['latestPosts'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n    </div>\r\n</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
