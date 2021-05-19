
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
    return "<div class=\"topic\">\r\n\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\r\n\r\n\t<div component=\"topic/deleted/message\" class=\"alert alert-warning" + 
      (guard((context != null) ? context['deleted'] : null) ?
        "" :
        " hidden") + 
      "\">[[topic:deleted_message]]</div>\r\n\r\n\t<ul component=\"topic\" id=\"post-container\" class=\"posts\" data-tid=\"" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\">\r\n\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n\t</ul>\r\n\r\n\t<div class=\"post-bar col-xs-12\">\r\n\t\t<div class=\"inline-block\">\n\n\t<span class=\"tags\">\n\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\n\t</span>\n\n\t" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "\n\t<span>&bull;</span>\n\t" :
        "") + 
      "\n\n\t<small class=\"topic-stats\">\n\t\t<span>[[global:posts]]</span>\n\t\t<strong><span component=\"topic/post-count\" class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</span></strong> &bull;\n\t\t<span>[[global:views]]</span>\n\t\t<strong><span class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "</span></strong>\n\t</small>\n\t<span class=\"browsing-users hidden\">\n\t\t&bull;\n\t\t<small><span>[[category:browsing]]</span></small>\n\t\t<div component=\"topic/browsing/list\" class=\"thread_active_users active-users inline-block\"></div>\n\t\t<small class=\"hidden\">\n\t\t\t<i class=\"fa fa-users\"></i> <span component=\"topic/browsing/count\" class=\"user-count\"></span>\n\t\t</small>\n\t</span>\n</div>\n\n<div class=\"topic-main-buttons pull-right inline-block\">\n\t<div class=\"loading-indicator\" done=\"0\" style=\"display:none;\">\n\t\t<span class=\"hidden-xs\">[[topic:loading_more_posts]]</span> <i class=\"fa fa-refresh fa-spin\"></i>\n\t</div>\n\n\t<div component=\"topic/reply/container\" class=\"btn-group action-bar " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<button class=\"btn btn-primary\" component=\"topic/reply\">[[topic:reply]]</button>\n\t<button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\" aria-label=\"Dropdown menu\">\n\t\t<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu pull-right\" role=\"menu\">\n\t\t<li><a href=\"#\" component=\"topic/reply-as-topic\" role=\"menuitem\">[[topic:reply-as-topic]]</a></li>\n\t</ul>\n</div>\n\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n" + 
              (guard((context != null) ? context['locked'] : null) ?
                "\n<a component=\"topic/reply/locked\" class=\"btn btn-primary\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n" :
                "") + 
              "\n") + 
          "\n\n" + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "\n<a component=\"topic/reply/locked\" class=\"btn btn-primary hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n") + 
          "\n\n" :
        "\n\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"btn btn-primary\">[[topic:guest-login-reply]]</a>\n") + 
          "\n\n") + 
      "\n\n\n\n\n\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n\t\t<button component=\"topic/mark-unread\" class=\"btn btn-default\">\n\t\t\t<i class=\"fa fa-envelope\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[topic:mark_unread]]</span>\n\t\t</button>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group topic-watch-dropdown\" component=\"topic/watch\">\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t\t<span component=\"topic/following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:watching]]</span></span>\n\n\t\t<span component=\"topic/not-following/menu\" " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-slash-o\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:not-watching]]</span></span>\n\n\t\t<span component=\"topic/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:ignoring]]</span></span>\n\n\t\t<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t<li><a href=\"#\" component=\"topic/following\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-o\"></i> [[topic:watching]]<p class=\"help-text\"><small>[[topic:watching.description]]</small></p></a></li>\n\t\t<li><a href=\"#\" component=\"topic/not-following\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[topic:not-watching]]<p class=\"help-text\"><small>[[topic:not-watching.description]]</small></p></a></li>\n\t\t<li><a href=\"#\" component=\"topic/ignoring\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[topic:ignoring]]<p class=\"help-text\"><small>[[topic:ignoring.description]]</small></p></a></li>\n\t</ul>\n</div>\n" :
        "") + 
      "\n\n\t<div class=\"btn-group dropup\" component=\"thread/sort\">\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:sort_by]]</span>\n\t<span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-sort\"></i></span> <span class=\"caret\"></span></button>\n\n\t<ul class=\"dropdown-menu pull-right\">\n\t\t<li><a href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest_to_newest]]</a></li>\n\t\t<li><a href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest_to_oldest]]</a></li>\n\t\t<li><a href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most_votes]]</a></li>\n\t</ul>\n</div>\n\n\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\n<div class=\"btn-group thread-tools dropup\">\n\t<button class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t\t<span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[topic:thread_tools.title]]</span>\n\t\t<span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-gear\"></i></span>\n\t\t<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu pull-right\"></ul>\n</div>\n" :
        "") + 
      "\n</div>\n<div style=\"clear:both;\"></div>\r\n\t</div>\r\n\r\n\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\r\n\t\t\n<div component=\"pagination\" class=\"text-center pagination-container" + 
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
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\n\t\t</li>\n\t</ul>\n</div>\n\r\n\t" :
        "") + 
      "\r\n\r\n\t<div class=\"pagination-block text-center\">\n    <div class=\"progress-bar\"></div>\n    <div class=\"wrapper dropup\">\n        <i class=\"fa fa-2x fa-angle-double-up pointer fa-fw pagetop\"></i>\n\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"pagination-text\"></span>\n        </a>\n\n        <i class=\"fa fa-2x fa-angle-double-down pointer fa-fw pagebottom\"></i>\n        <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\n            <li>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 post-content\"></div>\n                    <div class=\"col-xs-4 text-right\">\n                        <div class=\"scroller-content\">\n                            <span class=\"pointer pagetop\">[[topic:first-post]] <i class=\"fa fa-angle-double-up\"></i></span>\n                            <div class=\"scroller-container\">\n                                <div class=\"scroller-thumb\">\n                                    <span class=\"thumb-text\"></span>\n                                    <div class=\"scroller-thumb-icon\"></div>\n                                </div>\n                            </div>\n                            <span class=\"pointer pagebottom\">[[topic:last-post]] <i class=\"fa fa-angle-double-down\"></i></span>\n                        </div>\n                    </div>\n                </div>\n                <input type=\"text\" class=\"form-control\" id=\"indexInput\" placeholder=\"[[global:pagination.enter_index]]\">\n            </li>\n        </ul>\n    </div>\n</div>\r\n</div>\r\n\r\n" + 
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
      "\r\n\r\n";
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
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<li component=\"post\" class=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            "deleted" :
            "") + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\" data-timestamp=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestamp'] : null)) + 
          "\" data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\" data-userslug=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\" itemscope itemtype=\"http://schema.org/Comment\">\r\n\t\t\t\t<a component=\"post/anchor\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\" name=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\"></a>\r\n\t\t\t\t<div class=\"post-row\">\r\n\r\n\t\t\t\t\t<meta itemprop=\"datePublished\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\">\r\n\t\t\t\t\t<meta itemprop=\"dateModified\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "\">\r\n\r\n\t\t\t\t\t<div class=\"topic-item\">\r\n\t\t\t\t\t\t<div class=\"topic-body\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"topic-profile-pic hidden-xs text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t\t<img itemprop=\"image\" component=\"user/picture\" data-uid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\" src=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null)) + 
              "\" align=\"left\" class=\"img-thumbnail\" />\r\n\t\t\t\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t<small class=\"username\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\"><a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "</a></small>\r\n\r\n\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['banned'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"label label-danger\">[[user:banned]]</span>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['selectedGroups'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null) ?
                "\n<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/groups/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null)) + 
                  "\"><small class=\"label group-label inline-block\" style=\"color:" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['textColor'] : null)) + 
                  ";background-color: " + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['labelColor'] : null)) + 
                  ";\">" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null) ?
                    "<i class=\"fa " + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null)) + 
                      "\"></i> " :
                    "") + 
                  __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null)) + 
                  "</small></a>\n" :
                "") + 
              "\n";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"topic-text\">\r\n\t\t\t\t\t\t\t\t\t\t" + 
          (index === 0 ?
            "\r\n\t\t\t\t\t\t\t\t\t\t<h1 class=\"topic-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p component=\"post/header\" class=\"topic-title\" itemprop=\"name\"><i component=\"topic/pinned\" class=\"fa fa-thumb-tack " + 
              (guard((context != null) ? context['pinned'] : null) ?
                "" :
                "hidden") + 
              "\"></i> <i component=\"topic/locked\" class=\"fa fa-lock " + 
              (guard((context != null) ? context['locked'] : null) ?
                "" :
                "hidden") + 
              "\"></i> <span component=\"topic/title\">" + 
              __escape(guard((context != null) ? context['title'] : null)) + 
              "</span></p>\r\n\t\t\t\t\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t\t\t\t</h1>\r\n\t\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t\t\t<div component=\"post/content\" class=\"post-content\" itemprop=\"text\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "</div>\r\n\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"post-signature\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null)) + 
              "</div>\r\n\t\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"topic-footer\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t<small class=\"pull-right\">\r\n\t\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
              "\" title='[[global:" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['status'] : null)) + 
              "]]'></i>\r\n\t\t\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t\t\t\t<span data-username=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
              "\" itemprop=\"author\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "</a></strong> | <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
              "\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t\t\t\t\t[[global:guest]] | <span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
              "\"></span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t<span component=\"post/editor\" class=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null) ?
            "" :
            " hidden") + 
          "\">, [[global:last_edited_by, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null)) + 
          "]] <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "\"></span></span>\r\n\r\n\t\t\t\t\t\t\t\t\t</small>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown moderator-tools\" component=\"post/tools\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" data-toggle=\"dropdown\"><i class=\"fa fa-fw fa-gear\"></i></a>\r\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\"></ul>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t\t\t\t&bull;\r\n\t\t\t\t\t\t\t\t\t<a component=\"post/upvote\" href=\"#\" class=\"upvote" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['upvoted'] : null) ?
                " upvoted" :
                "") + 
              "\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-chevron-up\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t<span component=\"post/vote-count\" class=\"votes\" data-votes=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "</span>\r\n\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\r\n\t\t\t\t\t\t\t\t\t<a component=\"post/downvote\" href=\"#\" class=\"downvote" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['downvoted'] : null) ?
                    " downvoted" :
                    "") + 
                  "\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['custom_profile_info'] != null) ? context['posts'][key0]['user']['custom_profile_info']['length'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['custom_profile_info'] : null) ?
                iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['custom_profile_info'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\r\n\t\t\t\t\t\t\t\t\t\t&bull; " + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['custom_profile_info'] != null) ? context['posts'][key0]['user']['custom_profile_info']['content'] : null)) + 
                      "\r\n\t\t\t\t\t\t\t\t\t\t";
                  }, function alt() {
                    return "";
                  }) :
                iter(guard((context != null) ? context['custom_profile_info'] : null), function each(key1, index, length, value) {
                    var key = key1;
                    return "\r\n\t\t\t\t\t\t\t\t\t\t&bull; " + 
                      __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null && context['posts']['user']['custom_profile_info'] != null) ? context['posts']['user']['custom_profile_info']['content'] : null)) + 
                      "\r\n\t\t\t\t\t\t\t\t\t\t";
                  }, function alt() {
                    return "";
                  })) + 
              "\r\n\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t\t<span class=\"post-tools\">\r\n\t\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['selfPost'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
                "\r\n\t\t\t\t\t\t\t\t\t\t" + 
                  (guard((context != null) ? context['loggedIn'] : null) ?
                    "\r\n\t\t\t\t\t\t\t\t\t\t" + 
                      (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
                        "" :
                        "\r\n\t\t\t\t\t\t\t\t\t\t<button component=\"post/chat\" class=\"btn btn-sm btn-link chat\" type=\"button\" title=\"[[topic:chat]]\"><i class=\"fa fa-comment\"></i><span class=\"hidden-xs-inline\"> [[topic:chat]]</span></button>\r\n\t\t\t\t\t\t\t\t\t\t") + 
                      "\r\n\t\t\t\t\t\t\t\t\t\t" :
                    "") + 
                  "\r\n\t\t\t\t\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t\t\t\t\t\t\t<button component=\"post/quote\" class=\"btn btn-sm btn-link " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "hidden") + 
          "\" type=\"button\" title=\"[[topic:quote]]\"><i class=\"fa fa-quote-left\"></i><span class=\"hidden-xs-inline\"> [[topic:quote]]</span></button>\r\n\t\t\t\t\t\t\t\t\t\t<button component=\"post/reply\" class=\"btn btn-sm btn-link " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "hidden") + 
          "\" type=\"button\"><i class=\"fa fa-reply\"></i><span class=\"hidden-xs-inline\"> [[topic:reply]]</span></button>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
            "" :
            "\r\n\t\t\t\t<div class=\"post-bar-placeholder\"></div>\r\n\t\t\t\t") + 
          "\r\n\t\t\t</li>\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) + 
          "\"><span class=\"tag-item\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) + 
          "\" style=\"" + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null) ?
            "color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null)) + 
              ";" :
            "") + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null) ?
            "background-color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null)) + 
              ";" :
            "") + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span><span class=\"tag-topic-count\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</span></a>\n";
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
