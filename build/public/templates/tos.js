
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
    return "<h3>[[register:terms_of_use]]</h3>\r\n<hr/>\r\n\r\n" + 
      __escape(guard((context != null) ? context['termsOfUse'] : null)) + 
      "\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
