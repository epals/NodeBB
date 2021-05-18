
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
    return "<textarea class=\"form-control\" rows=\"6\" name=\"html\" placeholder=\"Enter HTML\"></textarea>\r\n<label>\r\n\tCategory:<br />\r\n\t<small>Set the category IDs you want to display this widget on (separated by commas)</small>\r\n</label>\r\n<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
