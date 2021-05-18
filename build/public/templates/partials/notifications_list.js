
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
    return "\r\n" + 
      (guard((context != null && context['notifications'] != null) ? context['notifications']['length'] : null) ?
        "" :
        "\r\n<li class=\"no-notifs\">[[notifications:no_notifs]]</li>\r\n") + 
      "\r\n\r\n" + 
      compiled.blocks['notifications'](helpers, context, guard, iter, helper) + 
      "\r\n";
  }

  compiled.blocks = {
    'notifications': function notifications(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notifications'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['readClass'] : null)) + 
          "\" data-nid=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['nid'] : null)) + 
          "\" data-path=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['path'] : null)) + 
          "\" " + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['pid'] : null) ?
            " data-pid=\"" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['pid'] : null)) + 
              "\"" :
            "") + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['tid'] : null) ?
            " data-tid=\"" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['tid'] : null)) + 
              "\"" :
            "") + 
          ">\r\n\t<div class=\"mark-read\" aria-label=\"Mark Read\"></div>\r\n\t<span class=\"relTime\">" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['timeago'] : null)) + 
          "</span>\r\n\r\n\t<div class=\"notification-image\">\r\n\t\t" + 
          (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null) ?
            "\r\n\t\t" + 
              (guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['from'] : null) ?
                "\r\n\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['userslug'] : null)) + 
                  "\"><img class=\"pull-left user-avatar\"src=\"" + 
                  __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['image'] : null)) + 
                  "\" /></a>\r\n\t\t" :
                "") + 
              "\r\n\t\t" :
            "\r\n\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['userslug'] : null)) + 
              "\"><div class=\"pull-left user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null && context['notifications'][key0]['user'] != null) ? context['notifications'][key0]['user']['icon:text'] : null)) + 
              "</div></a>\r\n\t\t") + 
          "\r\n\t</div>\r\n\r\n\t<div class=\"notification-msg\">\r\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['path'] : null)) + 
          "\">\r\n\t\t\t" + 
          __escape(guard((context != null && context['notifications'] != null && context['notifications'][key0] != null) ? context['notifications'][key0]['bodyShort'] : null)) + 
          "\r\n\t\t</a>\r\n\t</div>\r\n\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
