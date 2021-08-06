
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
    return (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\r\n<section class=\"menu-section\" data-section=\"chats\">\r\n\t<h3 class=\"menu-section-title\">\r\n\t\t[[global:header.chats]]\r\n\t\t<i class=\"counter unread-count\" component=\"chat/icon\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
          "\"></i>\r\n\t</h3>\r\n\t<ul class=\"menu-section-list chat-list\" component=\"chat/list\">\r\n\t\t<a class=\"navigation-link\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
          "/chats\">[[modules:chat.see_all]]</a>\r\n\t</ul>\r\n</section>\r\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
