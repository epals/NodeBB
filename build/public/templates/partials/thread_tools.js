
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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['view_thread_tools'] : null) ?
        "\r\n<div title=\"[[topic:thread_tools.title]]\" class=\"btn-group thread-tools bottom-sheet\">\r\n\t<button class=\"btn btn-sm btn-default dropdown-toggle\" data-toggle=\"dropdown\" type=\"button\">\r\n\t\t<i class=\"fa fa-fw fa-gear\"></i>\r\n\t</button>\r\n\t<ul class=\"dropdown-menu dropdown-menu-right\"></ul>\r\n</div>\r\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
