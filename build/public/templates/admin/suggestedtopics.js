
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
    return "<label>Amount of Topics to display:</label>\r\n<input type=\"text\" class=\"form-control\" name=\"numTopics\" placeholder=\"8\" />\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
