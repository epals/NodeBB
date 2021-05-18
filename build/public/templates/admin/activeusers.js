
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
    return "<label>Amount of Users to display:</label>\r\n<input type=\"text\" class=\"form-control\" name=\"numUsers\" placeholder=\"4\" />\r\n<label>\r\n\tCustom Category:<br />\r\n\t<small>Leave blank to to dynamically pull from current category</small>\r\n</label>\r\n<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
