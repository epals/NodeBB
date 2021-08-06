
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n<div class=\"row\">\r\n\t<div class=\"topic col-lg-12 col-sm-12\" data-has-widget-class=\"topic col-lg-9 col-sm-12\" data-has-widget-target=\"sidebar\">\r\n\r\n\t\t<h1 component=\"post/header\" class=\"hidden-xs\">\r\n\t\t\t<i component=\"topic/pinned\" class=\"pull-left fa fa-thumb-tack " + 
      (guard((context != null) ? context['pinned'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"" + 
      (guard((context != null) ? context['pinExpiry'] : null) ?
        "[[topic:pinned-with-expiry, " + 
          __escape(guard((context != null) ? context['pinExpiryISO'] : null)) + 
          "]]" :
        "[[topic:pinned]]") + 
      "\"></i>\r\n\t\t\t<i component=\"topic/locked\" class=\"pull-left fa fa-lock " + 
      (guard((context != null) ? context['locked'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:locked]]\"></i>\r\n\t\t\t<i class=\"pull-left fa fa-arrow-circle-right " + 
      (guard((context != null) ? context['oldCid'] : null) ?
        "" :
        "hidden") + 
      "\" title=\"[[topic:moved]]\"></i>\r\n\t\t\t" + 
      compiled.blocks['icons'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t<span class=\"topic-title\" component=\"topic/title\">" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</span>\r\n\t\t</h1>\r\n\r\n\t\t" + 
      (guard((context != null) ? context['merger'] : null) ?
        "\r\n\t\t<div component=\"topic/merged/message\" class=\"alert alert-warning clearfix\">\r\n\t\t\t<span class=\"pull-left\">[[topic:merged_message, " + 
          __escape(guard((context != null) ? context['mergeIntoTid'] : null)) + 
          ", " + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['mergedIntoTitle'] : null)) + 
          "]]</span>\r\n\t\t\t<span class=\"pull-right\">\r\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['userslug'] : null)) + 
          "\">\r\n\t\t\t\t\t<strong>" + 
          __escape(guard((context != null && context['merger'] != null) ? context['merger']['username'] : null)) + 
          "</strong>\r\n\t\t\t\t</a>\r\n\t\t\t\t<small class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['mergedTimestampISO'] : null)) + 
          "\"></small>\r\n\t\t\t</span>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<div component=\"topic/deleted/message\" class=\"alert alert-warning" + 
      (guard((context != null) ? context['deleted'] : null) ?
        "" :
        " hidden") + 
      " clearfix\">\r\n    <span class=\"pull-left\">[[topic:deleted_message]]</span>\r\n    <span class=\"pull-right\">\r\n        " + 
      (guard((context != null) ? context['deleter'] : null) ?
        "\r\n        <a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['userslug'] : null)) + 
          "\">\r\n            <strong>" + 
          __escape(guard((context != null && context['deleter'] != null) ? context['deleter']['username'] : null)) + 
          "</strong>\r\n        </a>\r\n        <small class=\"timeago\" title=\"" + 
          __escape(guard((context != null) ? context['deletedTimestampISO'] : null)) + 
          "\"></small>\r\n        " :
        "") + 
      "\r\n    </span>\r\n</div>\r\n\r\n\t\t<div component=\"topic\" class=\"posts\" data-tid=\"" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "\" data-cid=\"" + 
      __escape(guard((context != null) ? context['cid'] : null)) + 
      "\">\r\n\t\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</div>\r\n\r\n\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "\r\n<div class=\"row quick-reply\">\r\n    <div class=\"col-sm-2 hidden-xs reply-user\">\r\n    \t<a href=\"" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t\t" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['picture'] : null) ?
            "\r\n\t\t\t<img component=\"user/picture\" data-uid=\"" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['uid'] : null)) + 
              "\" class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['picture'] : null)) + 
              "\" align=\"left\" itemprop=\"image\" />\r\n\t\t\t" :
            "\r\n\t\t\t<div component=\"user/picture\" data-uid=\"" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['uid'] : null)) + 
              "\" class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t") + 
          "\r\n\t\t</a>\r\n\t\t<div class=\"author\">\r\n\t\t\t<a href=\"" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['username'] : null)) + 
          "\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xs-12 col-sm-10 quickreply-message\">\r\n\t\t<textarea component=\"topic/quickreply/text\" class=\"form-control\" rows=\"5\"></textarea>\r\n\t</div>\r\n\t<button component=\"topic/quickreply/button\" class=\"btn btn-primary\">Post quick reply</button>\r\n</div>\r\n" :
        "") + 
      "\r\n\r\n\t\t<div class=\"post-bar\">\r\n\t\t\t<div class=\"clearfix\">\r\n\t<div class=\"tags pull-left hidden-xs\">\r\n\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n\r\n\t<div component=\"topic/browsing-users\" class=\"inline-block hidden-xs\">\r\n\t" + 
      compiled.blocks['browsingUsers'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n\r\n\t<div class=\"topic-main-buttons pull-right\">\r\n\t\t<span class=\"loading-indicator btn pull-left hidden\">\r\n\t\t\t<span class=\"hidden-xs\">[[topic:loading_more_posts]]</span> <i class=\"fa fa-refresh fa-spin\"></i>\r\n\t\t</span>\r\n\r\n\t\t<div class=\"stats text-muted\">\r\n\t<i class=\"fa fa-fw fa-user\" title=\"[[global:posters]]\"></i>\r\n\t<span title=\"" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "</span>\r\n</div>\r\n<div class=\"stats text-muted\">\r\n\t<i class=\"fa fa-fw fa-pencil\" title=\"[[global:posts]]\"></i>\r\n\t<span component=\"topic/post-count\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</span>\r\n</div>\r\n<div class=\"stats text-muted\">\r\n\t<i class=\"fa fa-fw fa-eye\" title=\"[[global:views]]\"></i>\r\n\t<span class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "</span>\r\n</div>\r\n\r\n\t\t<div component=\"topic/reply/container\" class=\"btn-group action-bar bottom-sheet " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\r\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/compose?tid=" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "&title=" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "\" class=\"btn btn-sm btn-primary\" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-reply visible-xs-inline\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[topic:reply]]</span></a>\r\n\t<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t<span class=\"caret\"></span>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu pull-right\" role=\"menu\">\r\n\t\t<li><a href=\"#\" component=\"topic/reply-as-topic\">[[topic:reply-as-topic]]</a></li>\r\n\t</ul>\r\n</div>\r\n\r\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\r\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\r\n" + 
              (guard((context != null) ? context['locked'] : null) ?
                "\r\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\r\n" :
                "") + 
              "\r\n") + 
          "\r\n\r\n" + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "\r\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\r\n") + 
          "\r\n\r\n" :
        "\r\n\r\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\r\n<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"btn btn-sm btn-primary\">[[topic:guest-login-reply]]</a>\r\n") + 
          "\r\n") + 
      "\r\n\r\n\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\r\n\t\t<button component=\"topic/mark-unread\" class=\"btn btn-sm btn-default\">\r\n\t\t\t<i class=\"fa fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[topic:mark_unread]]</span>\r\n\t\t</button>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\r\n<div class=\"btn-group topic-watch-dropdown bottom-sheet\" component=\"topic/watch\">\r\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"\r\n\t\t" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "title=\"[[topic:watching]]\"" :
            "") + 
          "\r\n\t\t" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "title=\"[[topic:not-watching]]\"" :
            "") + 
          "\r\n\t\t" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "title=\"[[topic:ignoring]]\"" :
            "") + 
          "\r\n\t>\r\n\t\t<span component=\"topic/following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-o\"></i></span>\r\n\r\n\t\t<span component=\"topic/not-following/menu\" " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-slash-o\"></i></span>\r\n\r\n\t\t<span component=\"topic/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i></span>\r\n\r\n\t</button>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t<li><a href=\"#\" component=\"topic/following\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-o\"></i> [[topic:watching]]<p class=\"help-text hidden-xs\"><small>[[topic:watching.description]]</small></p></a></li>\r\n\t\t<li><a href=\"#\" component=\"topic/not-following\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[topic:not-watching]]<p class=\"help-text hidden-xs\"><small>[[topic:not-watching.description]]</small></p></a></li>\r\n\t\t<li><a href=\"#\" component=\"topic/ignoring\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[topic:ignoring]]<p class=\"help-text hidden-xs\"><small>[[topic:ignoring.description]]</small></p></a></li>\r\n\t</ul>\r\n</div>\r\n" :
        "") + 
      "\r\n\r\n\t\t<div title=\"[[topic:sort_by]]\" class=\"btn-group bottom-sheet hidden-xs\" component=\"thread/sort\">\r\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\t<span><i class=\"fa fa-fw fa-sort\"></i></span></button>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t<li><a href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest_to_newest]]</a></li>\r\n\t\t<li><a href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest_to_oldest]]</a></li>\r\n\t\t<li><a href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most_votes]]</a></li>\r\n\t</ul>\r\n</div>\r\n\r\n\r\n\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\r\n<div title=\"[[topic:thread_tools.title]]\" class=\"btn-group thread-tools bottom-sheet\">\r\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\t\t<i class=\"fa fa-fw fa-gear\"></i>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\"></ul>\r\n</div>\r\n" :
        "") + 
      "\r\n\t</div>\r\n</div>\r\n\t\t</div>\r\n\r\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "\r\n\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
            "" :
            " hidden") + 
          "\">\r\n\t<ul class=\"pagination hidden-xs\">\r\n\t\t<li class=\"previous pull-left" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t" + 
          compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
          "\r\n\r\n\t\t<li class=\"next pull-right" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg\">\r\n\t\t<li class=\"first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t<a href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<div class=\"pagination-block text-center\">\r\n    <div class=\"progress-bar\"></div>\r\n    <div class=\"wrapper dropup\">\r\n        <i class=\"fa fa-2x fa-angle-double-up pointer fa-fw pagetop\"></i>\r\n\r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            <span class=\"pagination-text\"></span>\r\n        </a>\r\n\r\n        <i class=\"fa fa-2x fa-angle-double-down pointer fa-fw pagebottom\"></i>\r\n        <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n            <li>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-8 post-content\"></div>\r\n                    <div class=\"col-xs-4 text-right\">\r\n                        <div class=\"scroller-content\">\r\n                            <span class=\"pointer pagetop\">[[topic:first-post]] <i class=\"fa fa-angle-double-up\"></i></span>\r\n                            <div class=\"scroller-container\">\r\n                                <div class=\"scroller-thumb\">\r\n                                    <span class=\"thumb-text\"></span>\r\n                                    <div class=\"scroller-thumb-icon\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <span class=\"pointer pagebottom\">[[topic:last-post]] <i class=\"fa fa-angle-double-down\"></i></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"indexInput\" placeholder=\"[[global:pagination.enter_index]]\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\t</div>\r\n</div>\r\n\r\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['usePagination'] : null) ?
        "" :
        "\r\n<noscript>\r\n\t<div component=\"pagination\" class=\"text-center pagination-container" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
            "" :
            " hidden") + 
          "\">\r\n\t<ul class=\"pagination hidden-xs\">\r\n\t\t<li class=\"previous pull-left" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t" + 
          iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\r\n\t\t\t" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
                "\r\n\t\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n\t\t\t</li>\r\n\t\t\t" :
                "\r\n\t\t\t<li class=\"page" + 
                  (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                    " active" :
                    "") + 
                  "\" >\r\n\t\t\t\t<a href=\"?" + 
                  __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
                  "\" data-page=\"" + 
                  __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
                  "</a>\r\n\t\t\t</li>\r\n\t\t\t") + 
              "\r\n\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\r\n\t\t<li class=\"next pull-right" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg\">\r\n\t\t<li class=\"first" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
          "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"previous" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
          "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t<a href=\"#\">" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
          " / " + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"next" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
          "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"last" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
            "" :
            " disabled") + 
          "\">\r\n\t\t\t<a href=\"?" + 
          __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
          "\" data-page=\"" + 
          __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
          "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n</noscript>\r\n") + 
      "\r\n";
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
    'icons': function icons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['icons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(guard(value));
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<div component=\"post\" class=\"" + 
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
          "\" itemscope itemtype=\"http://schema.org/Comment\">\r\n\t\t\t\t\t<a component=\"post/anchor\" data-index=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) + 
          "\"></a>\r\n\r\n\t\t\t\t\t<meta itemprop=\"datePublished\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\">\r\n\t\t\t\t\t<meta itemprop=\"dateModified\" content=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "\">\r\n\r\n\t\t\t\t\t<div class=\"row post-header\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<div class=\"post-time pull-left\">\r\n\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n\t\t</div>\r\n\t\t<div class=\"post-editor pull-left\">\r\n\t\t\t<i component=\"post/edit-indicator\" class=\"fa fa-pencil-square pointer edit-icon " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null) ?
            "" :
            "hidden") + 
          "\"></i>\r\n\t\t\t<small data-editor=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['userslug'] : null)) + 
          "\" component=\"post/editor\" class=\"hidden\">[[global:last_edited_by, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['editor'] != null) ? context['posts'][key0]['editor']['username'] : null)) + 
          "]] <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['editedISO'] : null)) + 
          "\"></span></small>\r\n\t\t</div>\r\n\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\r\n\t\t<div class=\"votes pull-right\">\r\n\t\t\t<a component=\"post/upvote\" href=\"#\" class=\"" + 
              (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['upvoted'] : null) ?
                "upvoted" :
                "") + 
              "\">\r\n\t\t\t\t<i class=\"fa fa-chevron-up\"></i>\r\n\t\t\t</a>\r\n\r\n\t\t\t<span component=\"post/vote-count\" data-votes=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['votes'] : null)) + 
              "</span>\r\n\r\n\t\t\t" + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\r\n\t\t\t<a component=\"post/downvote\" href=\"#\" class=\"" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['downvoted'] : null) ?
                    "downvoted" :
                    "") + 
                  "\">\r\n\t\t\t\t<i class=\"fa fa-chevron-down\"></i>\r\n\t\t\t</a>\r\n\t\t\t") + 
              "\r\n\t\t</div>\r\n\t\t") + 
          "\r\n\t</div>\r\n</div>\r\n<div class=\"row post\">\r\n\t<div class=\"col-sm-2 col-md-2 col-lg-2 post-author\">\r\n\t\t<a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null) ?
            "\r\n\t\t\t<img component=\"user/picture\" data-uid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\" class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null)) + 
              "\" alt=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\" itemprop=\"image\" />\r\n\t\t\t" :
            "\r\n\t\t\t<div component=\"user/picture\" data-uid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\" class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t") + 
          "\r\n\t\t</a>\r\n\t\t<div class=\"author\">\r\n\t\t\t<a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['displayname'] : null)) + 
          "\r\n\t\t</a>\r\n\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['posts'] != null && context['posts'][key0]['posts']['user'] != null) ? context['posts'][key0]['posts']['user']['selectedGroups'] : null) ?
            iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['posts'] != null && context['posts'][key0]['posts']['user'] != null) ? context['posts'][key0]['posts']['user']['selectedGroups'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t<br>\r\n\t\t\t" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['posts'] != null && context['posts'][key0]['posts']['user'] != null && context['posts'][key0]['posts']['user']['selectedGroups'] != null && context['posts'][key0]['posts']['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['posts']['user']['selectedGroups'][key1]['slug'] : null) ?
                    "\r\n\t\t\t<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/groups/" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['posts'] != null && context['posts'][key0]['posts']['user'] != null && context['posts'][key0]['posts']['user']['selectedGroups'] != null && context['posts'][key0]['posts']['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['posts']['user']['selectedGroups'][key1]['slug'] : null)) + 
                      "\"><small class=\"label group-label\" style=\"color:" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['posts'] != null && context['posts'][key0]['posts']['user'] != null && context['posts'][key0]['posts']['user']['selectedGroups'] != null && context['posts'][key0]['posts']['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['posts']['user']['selectedGroups'][key1]['textColor'] : null)) + 
                      "; background-color: " + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['posts'] != null && context['posts'][key0]['posts']['user'] != null && context['posts'][key0]['posts']['user']['selectedGroups'] != null && context['posts'][key0]['posts']['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['posts']['user']['selectedGroups'][key1]['labelColor'] : null)) + 
                      ";\">" + 
                      (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['posts'] != null && context['posts'][key0]['posts']['user'] != null && context['posts'][key0]['posts']['user']['selectedGroups'] != null && context['posts'][key0]['posts']['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['posts']['user']['selectedGroups'][key1]['icon'] : null) ?
                        "<i class=\"fa " + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['posts'] != null && context['posts'][key0]['posts']['user'] != null && context['posts'][key0]['posts']['user']['selectedGroups'] != null && context['posts'][key0]['posts']['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['posts']['user']['selectedGroups'][key1]['icon'] : null)) + 
                          "\"></i> " :
                        "") + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['posts'] != null && context['posts'][key0]['posts']['user'] != null && context['posts'][key0]['posts']['user']['selectedGroups'] != null && context['posts'][key0]['posts']['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['posts']['user']['selectedGroups'][key1]['userTitle'] : null)) + 
                      "</small></a>\r\n\t\t\t" :
                    "") + 
                  "\r\n\t\t";
              }, function alt() {
                return "";
              }) :
            iter(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['selectedGroups'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t<br>\r\n\t\t\t" + 
                  (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null) ?
                    "\r\n\t\t\t<a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/groups/" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['slug'] : null)) + 
                      "\"><small class=\"label group-label\" style=\"color:" + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['textColor'] : null)) + 
                      "; background-color: " + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['labelColor'] : null)) + 
                      ";\">" + 
                      (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null) ?
                        "<i class=\"fa " + 
                          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['icon'] : null)) + 
                          "\"></i> " :
                        "") + 
                      __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null && context['posts'][key0]['user']['selectedGroups'] != null && context['posts'][key0]['user']['selectedGroups'][key1] != null) ? context['posts'][key0]['user']['selectedGroups'][key1]['userTitle'] : null)) + 
                      "</small></a>\r\n\t\t\t" :
                    "") + 
                  "\r\n\t\t";
              }, function alt() {
                return "";
              })) + 
          "\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-sm-10 col-md-10 col-lg-10 post-content\" component=\"post/content\">\r\n\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\r\n\t</div>\r\n\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null) ?
            "\r\n\t<div class=\"col-sm-10 col-md-10 col-lg-10\">\r\n\t\t<div class=\"post-signature\" component=\"post/signature\" data-uid=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['uid'] : null)) + 
              "\">\r\n\t\t\t" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['signature'] : null)) + 
              "\r\n\t\t</div>\r\n\t</div>\r\n\t" :
            "") + 
          "\r\n</div>\r\n<div class=\"row post-footer\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<div class=\"pull-left\">\r\n\t\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['reactions'] : null)) + 
          "\r\n\t\t</div>\r\n\t\t<div class=\"pull-right\">\r\n\t\t\t<div class=\"post-tools\">\r\n\t\t\t\t<a component=\"post/reply\" href=\"#\" class=\"no-select " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "hidden") + 
          "\">[[topic:reply]]</a>\r\n\t\t\t\t<a component=\"post/quote\" href=\"#\" class=\"no-select " + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "hidden") + 
          "\">[[topic:quote]]</a>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div component=\"post/tools\" class=\"dropdown moderator-tools bottom-sheet " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['display_post_menu'] : null) ?
            "" :
            "hidden") + 
          "\">\r\n\t<a href=\"#\" data-toggle=\"dropdown\"><i class=\"fa fa-fw fa-ellipsis-v\"></i></a>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\"></ul>\r\n</div>\r\n\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
            "" :
            "\r\n\t\t\t\t<div class=\"post-bar-placeholder\"></div>\r\n\t\t\t\t") + 
          "\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) + 
          "\">\r\n\t\t<span class=\"tag-item\" data-tag=\"" + 
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
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['value'] : null)) + 
          "</span>\r\n\t\t<span class=\"tag-topic-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</span></a>\r\n\t\t";
      }, function alt() {
        return "";
      });
    },
    'browsingUsers': function browsingUsers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['browsingUsers'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div class=\"pull-left\" data-uid=\"" + 
          __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['uid'] : null)) + 
          "\">\r\n\t\t<a href=\"" + 
          (guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t\t" + 
          (guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['picture'] : null) ?
            "\r\n\t\t\t<img class=\"avatar avatar-sm avatar-rounded\" component=\"user/picture\" src=\"" + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['picture'] : null)) + 
              "\" align=\"left\" itemprop=\"image\" title=\"" + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['username'] : null)) + 
              "\"/>\r\n\t\t\t" :
            "\r\n\t\t\t<div class=\"avatar avatar-sm avatar-rounded\" component=\"user/picture\" title=\"" + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['username'] : null)) + 
              "\" style=\"background-color: " + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['icon:text'] : null)) + 
              "</div>\r\n\t\t\t") + 
          "\r\n\t\t</a>\r\n\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\r\n\t\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n\t\t\t</li>\r\n\t\t\t" :
            "\r\n\t\t\t<li class=\"page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\r\n\t\t\t\t<a href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\r\n\t\t\t</li>\r\n\t\t\t") + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
