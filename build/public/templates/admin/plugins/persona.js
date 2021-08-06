
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
    return "<div class=\"row\">\r\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">Theme Settings</div>\r\n\t<div class=\"col-sm-10 col-xs-12\">\t\r\n\t\t<form role=\"form\" class=\"persona-settings\">\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"hideSubCategories\" name=\"hideSubCategories\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Hide subcategories on categories view</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"hideCategoryLastPost\" name=\"hideCategoryLastPost\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Hide last post on categories view</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\r\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"enableQuickReply\" name=\"enableQuickReply\">\r\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Enable quick reply</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\t\r\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\r\n    <i class=\"material-icons\">save</i>\r\n</button>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
