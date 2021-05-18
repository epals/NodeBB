
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
    return "<div class=\"alert alert-success\">\n\t<strong>[[global:alert.success]]</strong>\n\t<p>[[email:unsub.success, " + 
      __escape(guard((context != null && context['payload'] != null) ? context['payload']['template'] : null)) + 
      "]]</p>\n\t<p>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\">[[notifications:back_to_home, " + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
      "]]</a>\n\t</p>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
