
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
    return "<li component=\"chat/recent/room\" data-roomid=\"" + 
      __escape(guard((context != null && context['rooms'] != null) ? context['rooms']['roomId'] : null)) + 
      "\" class=\"" + 
      (guard((context != null && context['rooms'] != null) ? context['rooms']['unread'] : null) ?
        "unread" :
        "") + 
      "\">\r\n\t" + 
      (guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['uid'] : null) ?
        "\r\n\t<div class=\"chat-image\" data-username=\"" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['username'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['uid'] : null)) + 
          "\">\r\n\t\t" + 
          (guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['picture'] : null) ?
            "\r\n\t\t<img class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['picture'] : null)) + 
              "\" title=\"" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['username'] : null)) + 
              "\">\r\n\t\t" :
            "\r\n\t\t<div class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['icon:bgColor'] : null)) + 
              ";\" title=\"" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['username'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms']['lastUser'] != null) ? context['rooms']['lastUser']['icon:text'] : null)) + 
              "</div>\r\n\t\t") + 
          "\r\n\t</div>\r\n\t" :
        "\r\n\t[[modules:chat.no-users-in-room]]\r\n\t") + 
      "\r\n\t<div class=\"chat-body\">\r\n\t\t<div class=\"chat-main\">\r\n\t\t\t<div class=\"chat-room-name\">\r\n\t\t\t\t<span component=\"chat/title\">" + 
      (guard((context != null && context['rooms'] != null) ? context['rooms']['roomName'] : null) ?
        __escape(guard((context != null && context['rooms'] != null) ? context['rooms']['roomName'] : null)) :
        __escape(guard((context != null && context['rooms'] != null) ? context['rooms']['usernames'] : null))) + 
      "</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
