
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
    return "<div class=\"account\">\n\t\n" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\n<div class=\"cover\" component=\"account/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null) ? context['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null) ? context['cover:position'] : null)) + 
      ";\">\n\t" + 
      (guard((context != null) ? context['allowCoverPicture'] : null) ?
        "\n\t<div class=\"controls\">\n\t\t<span class=\"upload\"><i class=\"fa fa-fw fa-4x fa-upload\"></i></span>\n\t\t<span class=\"resize\"><i class=\"fa fa-fw fa-4x fa-arrows-alt\"></i></span>\n\t\t<span class=\"remove\"><i class=\"fa fa-fw fa-4x fa-times\"></i></span>\n\t</div>\n\t<div class=\"save\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n\t<div class=\"indicator\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n\t" :
        "") + 
      "\n</div>\n\n<div class=\"account-username-box\" data-userslug=\"" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\n\t<ul class=\"nav nav-pills account-sub-links\">\n\t\t<li>\n\t\t\t<a href=\"#\" type=\"button\" class=\"dropdown-toggle inline-block\" data-toggle=\"dropdown\">\n\t\t\t\t[[user:more]]\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t<span class=\"sr-only\">Toggle Dropdown</span>\n\t\t\t</a>\n\t\t\t<ul class=\"dropdown-menu pull-right\" role=\"menu\">\n\t\t\t\t" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n\t\t\t\t<li>\n\t\t\t\t\t<a component=\"account/flag\" href=\"#\">[[user:flag-profile]]</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a component=\"account/block\" href=\"#\">" + 
          (guard((context != null) ? context['isBlocked'] : null) ?
            "[[user:unblock_user]]" :
            "[[user:block_user]]") + 
          "</a>\n\t\t\t\t</li>\n\t\t\t\t") + 
      "\n\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\"><i class=\"fa fa-fw fa-users\"></i> [[user:following]]</a></li>\n\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\"><i class=\"fa fa-fw fa-users\"></i> [[user:followers]]</a></li>\n\t\t\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/blocks\"><i class=\"fa fa-fw fa-ban\"></i> [[user:blocks]]</a></li>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\"><i class=\"fa fa-fw fa-book\"></i> [[global:topics]]</a></li>\n\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\"><i class=\"fa fa-fw fa-pencil\"></i> [[global:posts]]</a></li>\n\t\t\t\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/best\"><i class=\"fa fa-fw fa-star\"></i> [[global:best]]</a></li>\n\t\t\t\t") + 
      "\n\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\"><i class=\"fa fa-fw fa-users\"></i> [[global:header.groups]]</a></li>\n\t\t\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/bookmarks\"><i class=\"fa fa-fw fa-heart\"></i> [[user:bookmarks]]</a></li>\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/watched\"><i class=\"fa fa-fw fa-eye\"></i> [[user:watched]]</a></li>\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/ignored\"><i class=\"fa fa-fw fa-eye\"></i> [[user:ignored]]</a></li>\n\n\t\t\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/upvoted\"><i class=\"fa fa-fw fa-chevron-up\"></i> [[global:upvoted]]</a></li>\n\t\t\t\t" + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\n\t\t\t\t<li><a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null) ? context['userslug'] : null)) + 
                  "/downvoted\"><i class=\"fa fa-fw fa-chevron-down\"></i> [[global:downvoted]]</a></li>\n\t\t\t\t") + 
              "\n\t\t\t\t") + 
          "\n\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</ul>\n\t\t</li>\n\t\t<li>\n\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"inline-block\" id=\"profile\"><i class=\"fa fa-user\"></i> [[user:profile]]</a>\n\t\t</li>\n\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\n\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit\"><i class=\"fa fa-pencil-square-o\"></i> [[user:edit]]</a></li>\n\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\"><i class=\"fa fa-gear\"></i> [[user:settings]]</a></li>\n\t\t" :
        "") + 
      "\n\t</ul>\n</div>\n\n\n\t" + 
      (guard((context != null && context['sessions'] != null) ? context['sessions']['length'] : null) ?
        "\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-12 col-md-12\">\n\t\t\t<h4>[[global:sessions]]</h4>\n\t\t\t<ul class=\"list-group\" component=\"user/sessions\">\n\t\t\t\t" + 
          compiled.blocks['sessions'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t" :
        "") + 
      "\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">[[global:recentips]]</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t" + 
      compiled.blocks['ips'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">[[user:info.username-history]]</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t" + 
      compiled.blocks['usernames'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">[[user:info.email-history]]</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t" + 
      compiled.blocks['emails'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">[[user:info.latest-flags]]</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t" + 
      (guard((context != null && context['history'] != null && context['history']['flags'] != null) ? context['history']['flags']['length'] : null) ?
        "\n\t\t\t\t\t<ul class=\"recent-flags\">\n\t\t\t\t\t\t" + 
          compiled.blocks['history.flags'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t</ul>\n\t\t\t\t\t" :
        "\n\t\t\t\t\t<div class=\"alert alert-success\">[[user:info.no-flags]]</div>\n\t\t\t\t\t") + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">\n\t\t\t\t\t\t[[user:info.ban-history]]\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['banned'] : null) ?
        "\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n\t\t\t\t\t\t<button class=\"btn btn-xs pull-right btn-success\" component=\"account/unban\">[[user:unban_account]]</button>\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t" :
        "\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\n\t\t\t\t\t\t<button class=\"btn btn-xs pull-right btn-danger\" component=\"account/ban\">[[user:ban_account]]</button>\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t") + 
      "\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t" + 
      (guard((context != null && context['history'] != null && context['history']['bans'] != null) ? context['history']['bans']['length'] : null) ?
        "\n\t\t\t\t\t<ul class=\"ban-history\">\n\t\t\t\t\t\t" + 
          compiled.blocks['history.bans'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t</ul>\n\t\t\t\t\t" :
        "\n\t\t\t\t\t<div class=\"alert alert-success\">[[user:info.no-ban-history]]</div>\n\t\t\t\t\t") + 
      "\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t" + 
      (guard((context != null) ? context['isAdminOrGlobalModerator'] : null) ?
        "\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">[[user:info.moderation-note]]</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<textarea component=\"account/moderation-note\" class=\"form-control\"></textarea>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<button class=\"btn btn-sm pull-right btn-success\" component=\"account/save-moderation-note\">[[user:info.moderation-note.add]]</button>\n\t\t\t\t\t<br/>\n\t\t\t\t\t<div component=\"account/moderation-note/list\">\n\t\t\t\t\t\t" + 
          compiled.blocks['moderationNotes'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t</div>\n\t\t\t\t\t\n<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n</div>";
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
        return "\n\t\t\t\t" + 
          (index === 0 ?
            "\n\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t<li id=\"" + 
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
          "</a></li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sessions': function sessions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sessions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li class=\"list-group-item\" data-uuid=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['uuid'] : null)) + 
          "\">\n\t\t\t\t\t<div class=\"pull-right\">\n\t\t\t\t\t\t" + 
          (guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['current'] : null) ?
            "" :
            "\n\t\t\t\t\t\t<button class=\"btn btn-xs btn-default\" type=\"button\" data-action=\"revokeSession\">Revoke Session</button>\n\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'userAgentIcons', [guard(value)])) + 
          "\n\t\t\t\t\t\t<i class=\"fa fa-circle text-" + 
          (guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['current'] : null) ?
            "success" :
            "muted") + 
          "\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['browser'] : null)) + 
          " " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['version'] : null)) + 
          " on " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['platform'] : null)) + 
          "<br />\n\t\t\t\t\t<small class=\"timeago text-muted\" title=\"" + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['datetimeISO'] : null)) + 
          "\"></small>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li><strong>[[global:ip_address]]</strong>: " + 
          __escape(guard((context != null && context['sessions'] != null && context['sessions'][key0] != null) ? context['sessions'][key0]['ip'] : null)) + 
          "</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'ips': function ips(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['ips'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<li>" + 
          __escape(guard(value)) + 
          "</li>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'usernames': function usernames(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['usernames'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['usernames'] != null && context['usernames'][key0] != null) ? context['usernames'][key0]['value'] : null)) + 
          "\n\t\t\t\t\t\t\t<small class=\"pull-right\"><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['usernames'] != null && context['usernames'][key0] != null) ? context['usernames'][key0]['timestampISO'] : null)) + 
          "\"></span></small>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'emails': function emails(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['emails'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['value'] : null)) + 
          "\n\t\t\t\t\t\t\t<small class=\"pull-right\"><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['emails'] != null && context['emails'][key0] != null) ? context['emails'][key0]['timestampISO'] : null)) + 
          "\"></span></small>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'history.flags': function historyflags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['history'] != null) ? context['history']['flags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['targetPurged'] : null) ?
            "\n\t\t\t\t\t\t\t\t<div>[[flags:target-purged]]</div>\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t<a class=\"title\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/post/" + 
              __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['pid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['title'] : null)) + 
              "</a><br />\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t<span class=\"timestamp\">[[flags:flagged-timeago-readable, " + 
          __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['timestampISO'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['history'] != null && context['history']['flags'] != null && context['history']['flags'][key0] != null) ? context['history']['flags'][key0]['timestampReadable'] : null)) + 
          "]]</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'history.bans': function historybans(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['history'] != null) ? context['history']['bans'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<span class=\"timestamp timeago\" title=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['timestampISO'] : null)) + 
          "\"></span> &mdash; " + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['timestampReadable'] : null)) + 
          "<br />\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['until'] : null) ?
            "\n\t\t\t\t\t\t\t\t<span class=\"expiry\">[[user:info.banned-until, " + 
              __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['untilReadable'] : null)) + 
              "]]</span><br />\n\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t<span class=\"expiry\">[[user:info.banned-permanently]]</span><br />\n\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t<span class=\"reason\"><strong>[[user:info.banned-reason-label]]</strong>: " + 
          __escape(guard((context != null && context['history'] != null && context['history']['bans'] != null && context['history']['bans'][key0] != null) ? context['history']['bans'][key0]['reason'] : null)) + 
          "</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'moderationNotes': function moderationNotes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['moderationNotes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t<hr/>\n\n\t\t\t\t\t\t<div class=\"clearfix\">\n\t\t\t\t\t\t\t<div class=\"icon pull-left\">\n\t\t\t\t\t\t\t\t<a href=\"" + 
          (guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['user'] : null), "sm"])) + 
          "</a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"pull-left\">\n\t\t\t\t\t\t\t\t<strong>\n\t\t\t\t\t\t\t\t\t<a href=\"" + 
          (guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\" itemprop=\"author\" data-username=\"" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null && context['moderationNotes'][key0]['user'] != null) ? context['moderationNotes'][key0]['user']['username'] : null)) + 
          "</a>\n\t\t\t\t\t\t\t\t</strong>\n\n\t\t\t\t\t\t\t\t<div class=\"visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block\">\n\t\t\t\t\t\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['timestampISO'] : null)) + 
          "\"></span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<br />\n\n\t\t\t\t\t\t\t\t<div class=\"content\">\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['moderationNotes'] != null && context['moderationNotes'][key0] != null) ? context['moderationNotes'][key0]['note'] : null)) + 
          "\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t";
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
    }
  };

  return compiled;
})
