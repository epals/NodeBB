
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
      "\n\t</ul>\n</div>\n\n\n\t<div class=\"favourites\">\n\n\t\t" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\n\t\t<div class=\"alert alert-warning\">" + 
          __escape(guard((context != null) ? context['noItemsFoundKey'] : null)) + 
          "</div>\n\t\t") + 
      "\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t<ul component=\"posts\" class=\"posts-list\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\n</ul>\n<div component=\"posts/loading\" class=\"loading-indicator text-center hidden\">\n\t<i class=\"fa fa-refresh fa-spin\"></i>\n</div>\n\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\n\t\t\t\t\t\n<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n</div>\n\n\t\t\t\t" :
        "") + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
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
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li component=\"post\" class=\"posts-list-item\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "</a>\n\n            <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">\n                <strong><span>" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "</span></strong>\n            </a>\n            <div component=\"post/content\" class=\"content\">\n                <p>" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "</p>\n                <p class=\"fade-out\"></p>\n            </div>\n            <small>\n                <span class=\"pull-right\">\n                    <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted_in, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "]] <i class=\"fa " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['icon'] : null)) + 
          "\"></i> <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span></a> &bull;\n                    <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">[[global:read_more]]</a>\n                </span>\n            </small>\n        </div>\n    </div>\n</li>\n\t";
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
