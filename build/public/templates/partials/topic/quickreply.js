
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
        "\n<div class=\"clearfix quick-reply\">\n\t<div class=\"icon pull-left hidden-xs\">\n\t\t<a href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts']['user'] != null) ? context['posts']['user']['userslug'] : null)) :
            "#") + 
          "\">\n\t\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['loggedInUser'] : null), "46", guard((context != null) ? context['true'] : null), "", "user/picture"])) + 
          "\n\t\t\t" + 
          (guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null) ?
            "\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
              "\" title=\"[[global:" + 
              __escape(guard((context != null && context['loggedInUser'] != null) ? context['loggedInUser']['status'] : null)) + 
              "]]\"></i>\n\t\t\t" :
            "") + 
          "\n\t\t</a>\n\t</div>\n\t<form method=\"post\" action=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/compose\">\n\t\t<input type=\"hidden\" name=\"tid\" value=\"" + 
          __escape(guard((context != null) ? context['tid'] : null)) + 
          "\" />\n\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
          "\" />\n\t\t<div class=\"quickreply-message\">\n\t\t\t<textarea name=\"content\" component=\"topic/quickreply/text\" class=\"form-control\" rows=\"5\"></textarea>\n\t\t</div>\n\t\t<button type=\"submit\" component=\"topic/quickreply/button\" class=\"btn btn-primary pull-right\">[[persona:post-quick-reply]]</button>\n\t</form>\n</div>\n" :
        "") + 
      "\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
