
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
    return "<div class=\"menu-profile\">\n\t" + 
      (guard((context != null && context['user'] != null) ? context['user']['uid'] : null) ?
        "\n\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "lg", guard((context != null) ? context['true'] : null), "user-icon"])) + 
          "\n\t<i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
          "\"></i>\n\t" :
        "") + 
      "\n</div>\n\n<section class=\"menu-section\" data-section=\"navigation\">\n\t<h3 class=\"menu-section-title\">[[global:header.navigation]]</h3>\n\t<ul class=\"menu-section-list\"></ul>\n</section>\n\n" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\n<section class=\"menu-section\" data-section=\"profile\">\n\t<h3 class=\"menu-section-title\">[[global:header.profile]]</h3>\n\t<ul class=\"menu-section-list\" component=\"header/usercontrol\"></ul>\n</section>\n\n<section class=\"menu-section\" data-section=\"notifications\">\n\t<h3 class=\"menu-section-title\">\n\t\t[[global:header.notifications]]\n\t\t<span class=\"counter unread-count\" component=\"notifications/icon\" data-content=\"" + 
          __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
          "\"></span>\n\t</h3>\n\t<ul class=\"menu-section-list notification-list-mobile\" component=\"notifications/list\"></ul>\n\t<p class=\"menu-section-list\"><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/notifications\">[[notifications:see_all]]</a></p>\n</section>\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
