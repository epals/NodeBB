
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
    return "<div class=\"inline-block\">\n\n\t<span class=\"tags\">\n\t" + 
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
      "\n</div>\n<div style=\"clear:both;\"></div>";
  }

  compiled.blocks = {
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
    }
  };

  return compiled;
})
