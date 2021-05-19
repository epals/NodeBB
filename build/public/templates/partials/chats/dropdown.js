
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
        "\r\n" + 
          compiled.blocks['rooms'](helpers, context, guard, iter, helper) + 
          "\r\n" :
        "\r\n<a href=\"#\" class=\"no_active\">[[modules:chat.no_active]]</a>\r\n");
  }

  compiled.blocks = {
    'rooms': function rooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['rooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<a data-ajaxify=\"false\" data-roomid=\"" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomId'] : null)) + 
          "\" class=\"" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "unread" :
            "") + 
          "\">\r\n\t" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['lastUser'] : null) ?
            "\r\n\t<div class=\"chat-image\">\r\n\t\t" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['picture'] : null) ?
                "\r\n\t\t<img class=\"user-avatar\" src=\"" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['picture'] : null)) + 
                  "\" title=\"" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['username'] : null)) + 
                  "\" />\r\n\t\t" :
                "\r\n\t\t<div class=\"user-icon\" style=\"background-color: " + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['icon:bgColor'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['icon:text'] : null)) + 
                  "</div>\r\n\t\t") + 
              "\r\n\t</div>\r\n\r\n\t<div class=\"chat-room-name\">\r\n\t\t" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['groupChat'] : null) ?
                "\r\n\t\t" + 
                  (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null) ?
                    __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null)) :
                    __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['usernames'] : null))) + 
                  "\r\n\t\t" :
                "") + 
              "\r\n\t\t" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['groupChat'] : null) ?
                "" :
                "\r\n\t\t" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['usernames'] : null)) + 
                  "\r\n\t\t") + 
              "\r\n\t</div>\r\n\t" :
            "") + 
          "\r\n</a>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
