
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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['topics:reply'] : null) ?
        "\r\n<div class=\"row quick-reply\">\r\n    <div class=\"col-sm-2 hidden-xs reply-user\">\r\n    \t<a href=\"" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t\t" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['picture'] : null) ?
            "\r\n\t\t\t<img component=\"user/picture\" data-uid=\"" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['uid'] : null)) + 
              "\" class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['picture'] : null)) + 
              "\" align=\"left\" itemprop=\"image\" />\r\n\t\t\t" :
            "\r\n\t\t\t<div component=\"user/picture\" data-uid=\"" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['uid'] : null)) + 
              "\" class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t") + 
          "\r\n\t\t</a>\r\n\t\t<div class=\"author\">\r\n\t\t\t<a href=\"" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['username'] : null)) + 
          "\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xs-12 col-sm-10 quickreply-message\">\r\n\t\t<textarea component=\"topic/quickreply/text\" class=\"form-control\" rows=\"5\"></textarea>\r\n\t</div>\r\n\t<button component=\"topic/quickreply/button\" class=\"btn btn-primary\">Post quick reply</button>\r\n</div>\r\n" :
        "");
  }

  compiled.blocks = {
    
  };

  return compiled;
})
