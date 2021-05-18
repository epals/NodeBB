
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
        "\n<section class=\"menu-section\" data-section=\"chats\">\n\t<h3 class=\"menu-section-title\">\n\t\t[[global:header.chats]]\n\t\t<i class=\"counter unread-count\" component=\"chat/icon\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['chat'] : null)) + 
          "\"></i>\n\t</h3>\n\t<ul class=\"menu-section-list chat-list\" component=\"chat/list\">\n\t\t<a class=\"navigation-link\" href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
          "/chats\">[[modules:chat.see_all]]</a>\n\t</ul>\n</section>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
