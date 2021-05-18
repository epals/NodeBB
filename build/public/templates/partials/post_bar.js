
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
    return "<div class=\"clearfix\">\r\n\t<div class=\"tags pull-left hidden-xs\">\r\n\t\t" + 
      compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
      "\r\n\t</div>\r\n\r\n\t<div component=\"topic/browsing-users\" class=\"inline-block hidden-xs\">\n\t" + 
      compiled.blocks['browsingUsers'](helpers, context, guard, iter, helper) + 
      "\n</div>\r\n\r\n\t<div class=\"topic-main-buttons pull-right\">\r\n\t\t<span class=\"loading-indicator btn pull-left hidden\">\r\n\t\t\t<span class=\"hidden-xs\">[[topic:loading_more_posts]]</span> <i class=\"fa fa-refresh fa-spin\"></i>\r\n\t\t</span>\r\n\r\n\t\t<div class=\"stats text-muted\">\n\t<i class=\"fa fa-fw fa-user\" title=\"[[global:posters]]\"></i>\n\t<span title=\"" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "</span>\n</div>\n<div class=\"stats text-muted\">\n\t<i class=\"fa fa-fw fa-pencil\" title=\"[[global:posts]]\"></i>\n\t<span component=\"topic/post-count\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</span>\n</div>\n<div class=\"stats text-muted\">\n\t<i class=\"fa fa-fw fa-eye\" title=\"[[global:views]]\"></i>\n\t<span class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "</span>\n</div>\r\n\r\n\t\t<div component=\"topic/reply/container\" class=\"btn-group action-bar bottom-sheet " + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/compose?tid=" + 
      __escape(guard((context != null) ? context['tid'] : null)) + 
      "&title=" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "\" class=\"btn btn-sm btn-primary\" component=\"topic/reply\" data-ajaxify=\"false\" role=\"button\"><i class=\"fa fa-reply visible-xs-inline\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[topic:reply]]</span></a>\n\t<button type=\"button\" class=\"btn btn-sm btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t<span class=\"caret\"></span>\n\t</button>\n\t<ul class=\"dropdown-menu pull-right\" role=\"menu\">\n\t\t<li><a href=\"#\" component=\"topic/reply-as-topic\">[[topic:reply-as-topic]]</a></li>\n\t</ul>\n</div>\n\n" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n" + 
              (guard((context != null) ? context['locked'] : null) ?
                "\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n" :
                "") + 
              "\n") + 
          "\n\n" + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "\n<a component=\"topic/reply/locked\" class=\"btn btn-sm btn-primary hidden\" disabled><i class=\"fa fa-lock\"></i> [[topic:locked]]</a>\n") + 
          "\n\n" :
        "\n\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
            "" :
            "\n<a component=\"topic/reply/guest\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/login\" class=\"btn btn-sm btn-primary\">[[topic:guest-login-reply]]</a>\n") + 
          "\n") + 
      "\r\n\r\n\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\r\n\t\t<button component=\"topic/mark-unread\" class=\"btn btn-sm btn-default\">\r\n\t\t\t<i class=\"fa fa-inbox\"></i><span class=\"visible-sm-inline visible-md-inline visible-lg-inline\"> [[topic:mark_unread]]</span>\r\n\t\t</button>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<div class=\"btn-group topic-watch-dropdown bottom-sheet\" component=\"topic/watch\">\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\"\n\t\t" + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "title=\"[[topic:watching]]\"" :
            "") + 
          "\n\t\t" + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "title=\"[[topic:not-watching]]\"" :
            "") + 
          "\n\t\t" + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "title=\"[[topic:ignoring]]\"" :
            "") + 
          "\n\t>\n\t\t<span component=\"topic/following/menu\" " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-o\"></i></span>\n\n\t\t<span component=\"topic/not-following/menu\" " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-bell-slash-o\"></i></span>\n\n\t\t<span component=\"topic/ignoring/menu\" " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "" :
            "class=\"hidden\"") + 
          "><i class=\"fa fa-fw fa-eye-slash\"></i></span>\n\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t<li><a href=\"#\" component=\"topic/following\"><i component=\"topic/following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-o\"></i> [[topic:watching]]<p class=\"help-text hidden-xs\"><small>[[topic:watching.description]]</small></p></a></li>\n\t\t<li><a href=\"#\" component=\"topic/not-following\"><i component=\"topic/not-following/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isNotFollowing'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-bell-slash-o\"></i> [[topic:not-watching]]<p class=\"help-text hidden-xs\"><small>[[topic:not-watching.description]]</small></p></a></li>\n\t\t<li><a href=\"#\" component=\"topic/ignoring\"><i component=\"topic/ignoring/check\" class=\"fa fa-fw " + 
          (guard((context != null) ? context['isIgnoring'] : null) ?
            "fa-check" :
            "") + 
          "\"></i><i class=\"fa fa-fw fa-eye-slash\"></i> [[topic:ignoring]]<p class=\"help-text hidden-xs\"><small>[[topic:ignoring.description]]</small></p></a></li>\n\t</ul>\n</div>\n" :
        "") + 
      "\r\n\r\n\t\t<div title=\"[[topic:sort_by]]\" class=\"btn-group bottom-sheet hidden-xs\" component=\"thread/sort\">\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t<span><i class=\"fa fa-fw fa-sort\"></i></span></button>\n\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t<li><a href=\"#\" class=\"oldest_to_newest\" data-sort=\"oldest_to_newest\"><i class=\"fa fa-fw\"></i> [[topic:oldest_to_newest]]</a></li>\n\t\t<li><a href=\"#\" class=\"newest_to_oldest\" data-sort=\"newest_to_oldest\"><i class=\"fa fa-fw\"></i> [[topic:newest_to_oldest]]</a></li>\n\t\t<li><a href=\"#\" class=\"most_votes\" data-sort=\"most_votes\"><i class=\"fa fa-fw\"></i> [[topic:most_votes]]</a></li>\n\t</ul>\n</div>\n\r\n\r\n\t\t" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\n<div title=\"[[topic:thread_tools.title]]\" class=\"btn-group thread-tools bottom-sheet\">\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\n\t\t<i class=\"fa fa-fw fa-gear\"></i>\n\t</button>\n\t<ul class=\"dropdown-menu dropdown-menu-right\"></ul>\n</div>\n" :
        "") + 
      "\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
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
        return "\n\t<div class=\"pull-left\" data-uid=\"" + 
          __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['uid'] : null)) + 
          "\">\n\t\t<a href=\"" + 
          (guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['userslug'] : null)) :
            "#") + 
          "\">\n\t\t\t" + 
          (guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['picture'] : null) ?
            "\n\t\t\t<img class=\"avatar avatar-sm avatar-rounded\" component=\"user/picture\" src=\"" + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['picture'] : null)) + 
              "\" align=\"left\" itemprop=\"image\" title=\"" + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['username'] : null)) + 
              "\"/>\n\t\t\t" :
            "\n\t\t\t<div class=\"avatar avatar-sm avatar-rounded\" component=\"user/picture\" title=\"" + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['username'] : null)) + 
              "\" style=\"background-color: " + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['browsingUsers'] != null && context['browsingUsers'][key0] != null) ? context['browsingUsers'][key0]['icon:text'] : null)) + 
              "</div>\n\t\t\t") + 
          "\n\t\t</a>\n\t</div>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
