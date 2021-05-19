
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
    return (guard((context != null && context['rooms'] != null) ? context['rooms']['length'] : null) ?
        "\n" + 
          compiled.blocks['rooms'](helpers, context, guard, iter, helper) + 
          "\n" :
        "\n<li class=\"no_active\"><a href=\"#\">No active chats</a></li>\n");
  }

  compiled.blocks = {
    'rooms': function rooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['rooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li class=\"" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "unread" :
            "") + 
          "\" data-roomid=\"" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomId'] : null)) + 
          "\">\n\t<a data-ajaxify=\"false\">" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null) ?
            __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null)) :
            __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['usernames'] : null))) + 
          "</a>\n\n\t<ul class=\"members\">\n\t\t" + 
          iter(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['users'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null && context['rooms'][key0]['users'][key1] != null) ? context['rooms'][key0]['users'][key1]['userslug'] : null)) + 
              "\" class=\"user-link\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['users'] != null) ? context['rooms'][key0]['users'][key1] : null), "sm"])) + 
              "</a></li>";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['uid'] : null) ?
            "" :
            "\n\t\t<li>[[modules:chat.no-users-in-room]]</li>\n\t\t") + 
          "\n\t</ul>\n\n\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
