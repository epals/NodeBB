
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
    return "<ul class=\"nav nav-pills\">\r\n\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=online\">[[global:online]]</a></li>\r\n\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/users?section=sort-posts\">[[users:top_posters]]</a></li>\r\n\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\r\n\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=sort-reputation\">[[users:most_reputation]]</a></li>\r\n\t") + 
      "\r\n\t" + 
      (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
        "\r\n\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=flagged\">[[users:most_flags]]</a></li>\r\n\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/users?section=banned\">[[user:banned]]</a></li>\r\n\t" :
        "") + 
      "\r\n</ul>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
