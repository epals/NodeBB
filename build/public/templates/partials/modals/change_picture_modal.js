
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
    return "<div class=\"row\">\r\n\t<div class=\"col-xs-6 col-sm-8 col-md-6\">\r\n\t\t<div class=\"list-group media\">\r\n\t\t\t<button type=\"button\" class=\"list-group-item\" data-type=\"default\">\r\n\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['defaultAvatar'] : null) ?
        "\r\n\t\t\t\t\t<img class=\"media-object\" src=\"" + 
          __escape(guard((context != null) ? context['defaultAvatar'] : null)) + 
          "\"  />\r\n\t\t\t\t\t" :
        "\r\n\t\t\t\t\t<div class=\"user-icon media-object\" style=\"background-color: " + 
          __escape(guard((context != null && context['icon'] != null) ? context['icon']['bgColor'] : null)) + 
          ";\">" + 
          __escape(guard((context != null && context['icon'] != null) ? context['icon']['text'] : null)) + 
          "</div>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t<h4 class=\"media-heading\">[[user:default_picture]]</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</button>\r\n\t\t\t" + 
      compiled.blocks['pictures'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xs-6 col-sm-4 col-md-6\">\r\n\t\t<div class=\"btn-group-vertical btn-block\" role=\"group\">\r\n\t\t\t" + 
      (guard((context != null) ? context['allowProfileImageUploads'] : null) ?
        "\r\n\t\t\t<button type=\"button\" class=\"btn btn-default\" data-action=\"upload\">\r\n\t\t\t\t<span class=\"hidden-xs hidden-sm\">\r\n\t\t\t\t\t[[user:upload_new_picture]]\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"visible-xs-inline visible-sm-inline\">\r\n\t\t\t\t\t<i class=\"fa fa-plus\"></i>\r\n\t\t\t\t\t<i class=\"fa fa-upload\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</button>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t<button type=\"button\" class=\"btn btn-default\" data-action=\"upload-url\">\r\n\t\t\t\t<span class=\"hidden-xs hidden-sm\">\r\n\t\t\t\t\t[[user:upload_new_picture_from_url]]\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"visible-xs-inline visible-sm-inline\">\r\n\t\t\t\t\t<i class=\"fa fa-plus\"></i>\r\n\t\t\t\t\t<i class=\"fa fa-link\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</button>\r\n\t\t\t" + 
      (guard((context != null) ? context['uploaded'] : null) ?
        "\r\n\t\t\t<button type=\"button\" class=\"btn btn-default\" data-action=\"remove-uploaded\">\r\n\t\t\t\t<span class=\"hidden-xs hidden-sm\">\r\n\t\t\t\t\t[[user:remove_uploaded_picture]]\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class=\"visible-xs-inline visible-sm-inline\">\r\n\t\t\t\t\t<i class=\"fa fa-picture-o\"></i>\r\n\t\t\t\t\t<i class=\"fa fa-long-arrow-right\"></i>\r\n\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</button>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<hr />\r\n\r\n<h4>[[user:avatar-background-colour]]</h4>\r\n\r\n<label><input type=\"radio\" name=\"icon:bgColor\" value=\"transparent\" /><span></span></label>\r\n" + 
      compiled.blocks['iconBackgrounds'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'pictures': function pictures(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['pictures'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<button type=\"button\" class=\"list-group-item\" data-type=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['type'] : null)) + 
          "\">\r\n\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t<img class=\"media-object\" src=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['url'] : null)) + 
          "\" title=\"" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['text'] : null)) + 
          "\" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t<h4 class=\"media-heading\">" + 
          __escape(guard((context != null && context['pictures'] != null && context['pictures'][key0] != null) ? context['pictures'][key0]['text'] : null)) + 
          "</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</button>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'iconBackgrounds': function iconBackgrounds(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['iconBackgrounds'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<label><input type=\"radio\" name=\"icon:bgColor\" value=\"" + 
          __escape(guard(value)) + 
          "\" /><span style=\"background-color: " + 
          __escape(guard(value)) + 
          ";\"></span></label>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
