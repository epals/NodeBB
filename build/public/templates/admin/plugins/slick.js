
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
    return "<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">Slick Theme Settings</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\r\n\t\t<form role=\"form\" class=\"slick-settings\">\r\n\t\t    <div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"hideSubCategories\" name=\"hideSubCategories\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Hide subcategories on categories page</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<label for=\"skinOption\">Select a skin</label>\r\n\t\t\t\t<select id=\"skinOption\" name=\"skinOption\" class=\"form-control\">\r\n\t\t\t\t\t<option value=\"default\">Default</option>\r\n\t\t\t\t\t<option value=\"dark\">Dark</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n    <i class=\"material-icons\">save</i>\r\n</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
