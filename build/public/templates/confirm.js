
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
    return (guard((context != null) ? context['error'] : null) ?
        "\n<div class=\"alert alert-danger\">\n\t<strong>" + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          "</strong>\n\t<p>[[notifications:email-confirm-error-message]]</p>\n" :
        "\n<div class=\"alert alert-success\">\n\t<strong>[[notifications:email-confirmed]]</strong>\n\t<p>[[notifications:email-confirmed-message]]</p>\n") + 
      "\n\t<p>\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/\">[[notifications:back_to_home, " + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
      "]]</a>\n\t</p>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
