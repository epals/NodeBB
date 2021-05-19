
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
    return (guard((context != null && context['posts'] != null) ? context['posts']['display_moderator_tools'] : null) ?
        "\r\n<li role=\"presentation\" class=\"dropdown-header\">[[topic:tools]]</li>\r\n<li role=\"presentation\">\r\n\t<a component=\"post/edit\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-pencil\"></i></span> [[topic:edit]]\r\n\t</a>\r\n</li>\r\n<li role=\"presentation\">\r\n\t<a component=\"post/delete\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" class=\"" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
            "hidden" :
            "") + 
          "\">\r\n\t\t<div class=\"menu-icon\"><i class=\"fa fa-fw fa-trash-o\"></i></div> <span>[[topic:delete]]</span>\r\n\t</a>\r\n</li>\r\n<li role=\"presentation\">\r\n\t<a component=\"post/restore\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" class=\"" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
            "" :
            "hidden") + 
          "\">\r\n\t\t<div class=\"menu-icon\"><i class=\"fa fa-fw fa-history\"></i></div> <span>[[topic:restore]]</span>\r\n\t</a>\r\n</li>\r\n<li role=\"presentation\">\r\n\t<a component=\"post/purge\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" class=\"" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
            "" :
            "hidden") + 
          "\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-eraser\"></i></span> [[topic:purge]]\r\n\t</a>\r\n</li>\r\n\r\n" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_move_tools'] : null) ?
            "\r\n<li role=\"presentation\">\r\n\t<a component=\"post/move\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-arrows\"></i></span> [[topic:move]]\r\n\t</a>\r\n</li>\r\n" :
            "") + 
          "\r\n" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['ip'] : null) ?
            "\r\n<li role=\"presentation\">\r\n\t<a component=\"post/copy-ip\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" data-clipboard-text=\"" + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['ip'] : null)) + 
              "\">\r\n\t\t<span class=\"menu-icon\" ><i class=\"fa fa-fw fa-copy\"></i></span> [[topic:copy-ip]] " + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['ip'] : null)) + 
              "\r\n\t</a>\r\n</li>\r\n" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['display_ip_ban'] : null) ?
                "\r\n<li role=\"presentation\">\r\n\t<a component=\"post/ban-ip\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" data-ip=\"" + 
                  __escape(guard((context != null && context['posts'] != null) ? context['posts']['ip'] : null)) + 
                  "\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-ban\"></i></span> [[topic:ban-ip]] " + 
                  __escape(guard((context != null && context['posts'] != null) ? context['posts']['ip'] : null)) + 
                  "\r\n\t</a>\r\n</li>\r\n" :
                "") + 
              "\r\n" :
            "") + 
          "\r\n" :
        "") + 
      "\r\n\r\n" + 
      compiled.blocks['posts.tools'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['deleted'] : null) ?
        "" :
        "\r\n\t" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_history'] : null) ?
            "\r\n\t<li role=\"presentation\">\r\n\t\t<a component=\"post/view-history\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">\r\n\t\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw fa-history\"></i></span> [[topic:view-history]]\r\n\t\t</a>\r\n\t</li>\r\n\t" :
            "") + 
          "\r\n\r\n\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\r\n\t<li role=\"presentation\">\r\n\t\t<a component=\"post/bookmark\" role=\"menuitem\" tabindex=\"-1\" href=\"#\" data-bookmarked=\"" + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['bookmarked'] : null)) + 
              "\">\r\n\r\n\t\t\t<span class=\"bookmark-text\">[[topic:bookmark]]</span>\r\n\t\t\t<span component=\"post/bookmark-count\" class=\"bookmarkCount\" data-bookmarks=\"" + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['bookmarks'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null) ? context['posts']['bookmarks'] : null)) + 
              "</span>&nbsp;\r\n\r\n\t\t\t<i component=\"post/bookmark/on\" class=\"fa fa-fw fa-heart " + 
              (guard((context != null && context['posts'] != null) ? context['posts']['bookmarked'] : null) ?
                "" :
                "hidden") + 
              "\"></i>\r\n\t\t\t<i component=\"post/bookmark/off\" class=\"fa fa-fw fa-heart-o " + 
              (guard((context != null && context['posts'] != null) ? context['posts']['bookmarked'] : null) ?
                "hidden" :
                "") + 
              "\"></i>\r\n\t\t</a>\r\n\t</li>\r\n\t" :
            "") + 
          "\r\n\r\n\t" + 
          (guard((context != null && context['postSharing'] != null) ? context['postSharing']['length'] : null) ?
            "\r\n\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t<li role=\"presentation\" class=\"dropdown-header\">[[topic:share_this_post]]</li>\r\n\t" :
            "") + 
          "\r\n\t" + 
          compiled.blocks['postSharing'](helpers, context, guard, iter, helper) + 
          "\r\n\r\n\t" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_flag_tools'] : null) ?
            "\r\n\t<li class=\"divider\"></li>\r\n\r\n\t<li " + 
              (guard((context != null && context['posts'] != null && context['posts']['flags'] != null) ? context['posts']['flags']['flaggged'] : null) ?
                "hidden" :
                "") + 
              ">\r\n\t\t<a component=\"post/flag\" role=\"menuitem\" tabindex=\"-1\" href=\"#\"><i class=\"fa fa-fw fa-flag\"></i> [[topic:flag-post]]</a>\r\n\t</li>\r\n\t<li " + 
              (guard((context != null && context['posts'] != null && context['posts']['flags'] != null) ? context['posts']['flags']['flagged'] : null) ?
                "" :
                "hidden") + 
              " class=\"disabled text-muted\">\r\n\t\t<a component=\"post/already-flagged\" role=\"menuitem\" tabindex=\"-1\" href=\"#\"><i class=\"fa fa-fw fa-flag\"></i> [[topic:already-flagged]]</a>\r\n\t</li>\r\n\r\n\t" + 
              ((!guard((context != null && context['posts'] != null) ? context['posts']['selfPost'] : null) && guard((context != null && context['posts'] != null) ? context['posts']['uid'] : null)) ?
                "\r\n\t<li>\r\n\t\t<a component=\"post/flagUser\" role=\"menuitem\" tabindex=\"-1\" href=\"#\"><i class=\"fa fa-fw fa-flag\"></i> [[topic:flag-user]]</a>\r\n\t</li>\r\n\t" :
                "") + 
              "\r\n\t" :
            "") + 
          "\r\n\r\n\t" + 
          (guard((context != null && context['posts'] != null) ? context['posts']['display_moderator_tools'] : null) ?
            "\r\n\t" + 
              (guard((context != null && context['posts'] != null && context['posts']['flags'] != null) ? context['posts']['flags']['exists'] : null) ?
                "\r\n\t<li><a role=\"menuitem\" tabindex=\"-1\" href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/flags/" + 
                  __escape(guard((context != null && context['posts'] != null && context['posts']['flags'] != null) ? context['posts']['flags']['flagId'] : null)) + 
                  "\"><i class=\"fa fa-fw fa-exclamation-circle\"></i> [[topic:view-flag-report]]</a></li>\r\n\t" :
                "") + 
              "\r\n\t" :
            "") + 
          "\r\n");
  }

  compiled.blocks = {
    'posts.tools': function poststools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['posts'] != null) ? context['posts']['tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li role=\"presentation\">\r\n\t<a component=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['tools'] != null && context['posts']['tools'][key0] != null) ? context['posts']['tools'][key0]['action'] : null)) + 
          "\" role=\"menuitem\" tabindex=\"-1\" href=\"#\">\r\n\t\t<span class=\"menu-icon\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['posts'] != null && context['posts']['tools'] != null && context['posts']['tools'][key0] != null) ? context['posts']['tools'][key0]['icon'] : null)) + 
          "\"></i></span> " + 
          guard((context != null && context['posts'] != null && context['posts']['tools'] != null && context['posts']['tools'][key0] != null) ? context['posts']['tools'][key0]['html'] : null) + 
          "\r\n\t</a>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    },
    'postSharing': function postSharing(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['postSharing'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<li role=\"presentation\">\r\n\t\t\t<a role=\"menuitem\" component=\"share/" + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['id'] : null)) + 
          "\" tabindex=\"-1\" href=\"#\"><span class=\"menu-icon\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['class'] : null)) + 
          "\"></i></span> " + 
          __escape(guard((context != null && context['postSharing'] != null && context['postSharing'][key0] != null) ? context['postSharing'][key0]['name'] : null)) + 
          "</a>\r\n\t\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
