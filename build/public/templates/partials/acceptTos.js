
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
    return "<div class=\"form-group\">\r\n\t<label for=\"agree-terms\">[[register:terms_of_use]]</label>\r\n\t<div class=\"tos\">" + 
      __escape(guard((context != null) ? context['termsOfUse'] : null)) + 
      "</div>\r\n\t<div class=\"checkbox\">\r\n\t\t<label>\r\n\t\t\t<input type=\"checkbox\" name=\"agree-terms\" id=\"agree-terms\"> [[register:agree_to_terms_of_use]]\r\n\t\t</label>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
