
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
    return "<div class=\"pull-right\">\n\t<div component=\"post/tools\" class=\"dropdown moderator-tools " + 
      (guard((context != null && context['posts'] != null) ? context['posts']['display_post_menu'] : null) ?
        "" :
        "hidden") + 
      "\">\n\t\t<button title=\"[[topic:tools]]\" class=\"btn btn-sm btn-default\" data-toggle=\"dropdown\" href=\"#\"><i class=\"fa fa-gear\"></i></button>\n\t\t<ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\"></ul>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
