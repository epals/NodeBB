
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
    return "<div class=\"alert alert-danger\">\n\t<strong>[[global:403.title]]</strong>\n\t" + 
      (guard((context != null) ? context['error'] : null) ?
        "\n\t<p>" + 
          __escape(guard((context != null) ? context['error'] : null)) + 
          "</p>\n\t" :
        "\n\t<p>[[global:403.message]]</p>\n\t") + 
      "\n\n\t" + 
      (guard((context != null) ? context['returnLink'] : null) ?
        "\n\t<p>[[error:goback]]</p>\n\t" :
        "") + 
      "\n\n\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "" :
        "\n\t<p>[[global:403.login, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "]]</p>\n\t") + 
      "\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
