
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
    return "<div class=\"persona-usercard\">\r\n\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\">\r\n\t\t" + 
      (guard((context != null) ? context['picture'] : null) ?
        "\r\n\t\t<div class=\"usercard-picture\" style=\"background-image:url(" + 
          __escape(guard((context != null) ? context['picture'] : null)) + 
          ")\"></div>\r\n\t\t" :
        "\r\n\t\t<div class=\"usercard-picture\" style=\"background-color: " + 
          __escape(guard((context != null) ? context['icon:bgColor'] : null)) + 
          ";\">" + 
          __escape(guard((context != null) ? context['icon:text'] : null)) + 
          "</div>\r\n\t\t") + 
      "\r\n\t</a>\r\n\t<div class=\"usercard-body\">\r\n\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\">\r\n\t\t\t<span class=\"usercard-name\">" + 
      (guard((context != null) ? context['fullname'] : null) ?
        __escape(guard((context != null) ? context['fullname'] : null)) :
        __escape(guard((context != null) ? context['username'] : null))) + 
      "</span><br />\r\n\t\t\t<span class=\"usercard-username\">" + 
      (guard((context != null) ? context['banned'] : null) ?
        "[[user:banned]]" :
        "@" + 
          __escape(guard((context != null) ? context['username'] : null))) + 
      "</span>\r\n\t\t\t" + 
      (guard((context != null) ? context['banned'] : null) ?
        "" :
        "\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null) ? context['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null) ? context['status'] : null)) + 
          "]]\"></i>\r\n\t\t\t") + 
      "\r\n\t\t</a>\r\n\r\n\t\t<div class=\"row usercard-info\">\r\n\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t<small>[[global:posts]]</small>\r\n\t\t\t\t<span class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</span>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-4\">\r\n\t\t\t\t<small>[[global:reputation]]</small>\r\n\t\t\t\t<span class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['reputation'] : null)) + 
      "</span>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<button class=\"btn-morph fab " + 
      (guard((context != null) ? context['banned'] : null) ?
        " hide" :
        "") + 
      "\">\r\n\t\t\t\t<span>\r\n\t\t\t\t\t<span class=\"s1\"></span>\r\n\t\t\t\t\t<span class=\"s2\"></span>\r\n\t\t\t\t\t<span class=\"s3\"></span>\r\n\t\t\t\t</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
