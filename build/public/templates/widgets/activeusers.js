
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
    return "<div class=\"active-users\">\r\n\t" + 
      compiled.blocks['active_users'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n\r\n<script type=\"text/javascript\">\r\n\t(function() {\r\n\t\tfunction handleActiveUsers() {\r\n\t\t\tfunction onNewTopic(topic) {\r\n\t\t\t\tvar activeUser = $('.active-users').find('a[data-uid=\"' + topic.uid + '\"]');\r\n\r\n\t\t\t\tif (activeUser.length) {\r\n\t\t\t\t\treturn activeUser.prependTo($('.active-users'));\r\n\t\t\t\t}\r\n\r\n\t\t\t\tapp.parseAndTranslate('widgets/activeusers', 'active_users', {\r\n\t\t\t\t\trelative_path: config.relative_path,\r\n\t\t\t\t\tactive_users: [{\r\n\t\t\t\t\t\tuid: topic.uid,\r\n\t\t\t\t\t\tusername: topic.user.username,\r\n\t\t\t\t\t\tuserslug: topic.user.userslug,\r\n\t\t\t\t\t\tpicture: topic.user.picture,\r\n\t\t\t\t\t\t'icon:bgColor': topic.user['icon:bgColor'],\r\n\t\t\t\t\t\t'icon:text': topic.user['icon:text']\r\n\t\t\t\t\t}]\r\n\t\t\t\t}, function (html) {\r\n\t\t\t\t\thtml.prependTo($('.active-users'))\r\n\t\t\t\t\tapp.createUserTooltips();\r\n\t\t\t\t});\r\n\t\t\t}\r\n\r\n\t\t\tfunction onAjaxifyEnd() {\r\n\t\t\t\tsocket.removeListener('event:new_topic', onNewTopic);\r\n\t\t\t\tif ($('.active-users').length) {\r\n\t\t\t\t\tsocket.on('event:new_topic', onNewTopic);\r\n\t\t\t\t} else {\r\n\t\t\t\t\t$(window).off('action:ajaxify.end', onAjaxifyEnd);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t$(window).on('action:ajaxify.end', onAjaxifyEnd);\r\n\t\t}\r\n\r\n\t\tif (window.jQuery) {\r\n\t\t\thandleActiveUsers();\r\n\t\t} else {\r\n\t\t\twindow.addEventListener('DOMContentLoaded', handleActiveUsers);\r\n\t\t}\r\n\t})();\r\n</script>";
  }

  compiled.blocks = {
    'active_users': function active_users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['active_users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<a data-uid=\"" + 
          __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['uid'] : null)) + 
          "\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['userslug'] : null)) + 
          "\">\r\n\t\t" + 
          (guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['picture'] : null) ?
            "\r\n\t\t<img title=\"" + 
              __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['username'] : null)) + 
              "\" src=\"" + 
              __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['picture'] : null)) + 
              "\" class=\"avatar avatar-sm avatar-rounded not-responsive\" />\r\n\t\t" :
            "\r\n\t\t<div title=\"" + 
              __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['username'] : null)) + 
              "\" class=\"avatar avatar-sm avatar-rounded not-responsive\" style=\"background-color: " + 
              __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['active_users'] != null && context['active_users'][key0] != null) ? context['active_users'][key0]['icon:text'] : null)) + 
              "</div>\r\n\t\t") + 
          "\r\n\t</a>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
