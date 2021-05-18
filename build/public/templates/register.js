
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
    return "<div class=\"register\">\r\n" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"register-block\">\r\n\t\t\t\t<div class=\"alert alert-danger" + 
      (guard((context != null) ? context['error'] : null) ?
        "" :
        " hidden") + 
      "\" id=\"register-error-notify\" >\r\n\t\t\t\t\t<strong>[[error:registration-error]]</strong>\r\n\t\t\t\t\t<p>" + 
      __escape(guard((context != null) ? context['error'] : null)) + 
      "</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<form component=\"register/local\" class=\"form-horizontal\" action=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/register\" method=\"post\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"email\" class=\"col-lg-3 control-label\">[[register:email_address]]</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-7\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"email\" placeholder=\"[[register:email_address_placeholder]]\" name=\"email\" id=\"email\" autocorrect=\"off\" autocapitalize=\"off\" />\r\n\t\t\t\t\t\t\t<span class=\"register-feedback\" id=\"email-notify\"></span>\r\n\t\t\t\t\t\t\t<span class=\"help-block\">[[register:help.email]]</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"username\" class=\"col-lg-3 control-label\">[[register:username]]</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-7\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" placeholder=\"[[register:username_placeholder]]\" name=\"username\" id=\"username\" autocorrect=\"off\" autocapitalize=\"off\" autocomplete=\"off\" />\r\n\t\t\t\t\t\t\t<span class=\"register-feedback\" id=\"username-notify\"></span>\r\n\t\t\t\t\t\t\t<span class=\"help-block\">[[register:help.username_restrictions, " + 
      __escape(guard((context != null) ? context['minimumUsernameLength'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['maximumUsernameLength'] : null)) + 
      "]]</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"password\" class=\"col-lg-3 control-label\">[[register:password]]</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-7\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[register:password_placeholder]]\" name=\"password\" id=\"password\" />\r\n\t\t\t\t\t\t\t<span class=\"register-feedback\" id=\"password-notify\"></span>\r\n\t\t\t\t\t\t\t<span class=\"help-block\">[[register:help.minimum_password_length, " + 
      __escape(guard((context != null) ? context['minimumPasswordLength'] : null)) + 
      "]]</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"password-confirm\" class=\"col-lg-3 control-label\">[[register:confirm_password]]</label>\r\n\t\t\t\t\t\t<div class=\"col-lg-7\">\r\n\t\t\t\t\t\t\t<input class=\"form-control\" type=\"password\" placeholder=\"[[register:confirm_password_placeholder]]\" name=\"password-confirm\" id=\"password-confirm\" />\r\n\t\t\t\t\t\t\t<span class=\"register-feedback\" id=\"password-confirm-notify\"></span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t" + 
      compiled.blocks['regFormEntry'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<div class=\"col-lg-offset-3 col-lg-7\">\r\n\t\t\t\t\t\t\t<button class=\"btn btn-primary btn-lg btn-block\" id=\"register\" type=\"submit\">[[register:register_now_button]]</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<input id=\"token\" type=\"hidden\" name=\"token\" value=\"\" />\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t" + 
      (guard((context != null) ? context['alternate_logins'] : null) ?
        "\r\n\t\t<div class=\"col-lg-offset-3 col-lg-7\">\r\n\t\t\t<div class=\"alt-logins\">\r\n\t\t\t\t" + 
          compiled.blocks['authentication'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">") + 
          "\n\t\t\t<span itemprop=\"name\">\n\t\t\t\t" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\n\t\t\t\t" + 
          (index === length - 1 ?
            "\n\t\t\t\t" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\n\t\t\t\t" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</span>\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'regFormEntry': function regFormEntry(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['regFormEntry'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"register-" + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['styleName'] : null)) + 
          "\" class=\"col-lg-3 control-label\">" + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['label'] : null)) + 
          "</label>\r\n\t\t\t\t\t\t<div id=\"register-" + 
          __escape(guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['styleName'] : null)) + 
          "\" class=\"col-lg-7\">\r\n\t\t\t\t\t\t\t" + 
          guard((context != null && context['regFormEntry'] != null && context['regFormEntry'][key0] != null) ? context['regFormEntry'][key0]['html'] : null) + 
          "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'authentication': function authentication(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['authentication'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<div class=\"" + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['name'] : null)) + 
          "\"><a rel=\"nofollow noopener noreferrer\" target=\"_top\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['url'] : null)) + 
          "\"><i class=\"fa " + 
          __escape(guard((context != null && context['authentication'] != null && context['authentication'][key0] != null) ? context['authentication'][key0]['icon'] : null)) + 
          " fa-3x\"></i></a></div>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
