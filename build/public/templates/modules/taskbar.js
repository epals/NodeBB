
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
    return "<div id=\"taskbar\" class=\"taskbar navbar navbar-default navbar-fixed-bottom\">\n\t<div class=\"navbar-inner\"><ul class=\"nav navbar-nav pull-right\"></ul></div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
