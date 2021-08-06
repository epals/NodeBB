
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
    return "<div class=\"form-group\">\r\n\t<input class=\"form-control\" type=\"text\" placeholder=\"[[global:user-search-prompt]]\" />\r\n\t<p class=\"text-danger\"></p>\r\n\t<p class=\"help-block\">[[modules:chat.add-user-help]]</p>\r\n\r\n\t<hr />\r\n\r\n\t<ul class=\"list-group\">\r\n\t\t<li class=\"list-group-item\"><i class=\"fa fa-spinner fa-spin\"></i> [[modules:chat.retrieving-users]]</li>\r\n\t</ul>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
