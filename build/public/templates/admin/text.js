
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
    return "<textarea class=\"form-control\" rows=\"6\" name=\"text\" placeholder=\"Enter Text / Markdown\"></textarea>\r\n<hr />\r\n<label>\r\n\tCategory:<br />\r\n\t<small>Set the category ID you want to display this widget on.</small>\r\n</label>\r\n<input type=\"text\" class=\"form-control\" name=\"cid\" placeholder=\"0\" />\r\n<br/>\r\n<div class=\"checkbox\">\r\n\t<label>\r\n\t\t<input type=\"checkbox\" name=\"parseAsPost\" checked />\r\n\t\tParse as a Post? (Take all post-related plugins into effect)\r\n\t</label>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
