
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
    return "<div class=\"col-lg-9\">\t\r\n\t<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-heading\">Lavender Theme Settings</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<form>\r\n\t\t\t\t<label>Disable Masonry\r\n\t\t\t\t\t<input id=\"disableMasonry\" type=\"checkbox\" data-field=\"disableMasonry\" />\r\n\t\t\t\t</label>\r\n\t\t\t\t\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"col-lg-3 acp-sidebar\">\r\n\t<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-heading\">Save Settings</div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<button class=\"btn btn-primary btn-md\" id=\"save\">Save Changes</button>\r\n\t\t\t<button class=\"btn btn-warning btn-md\" id=\"revert\">Revert Changes</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<script>\r\n\trequire(['admin/settings'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t});\r\n</script>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
