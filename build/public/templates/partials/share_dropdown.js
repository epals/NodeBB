
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
    return "\n<ul class=\"dropdown-menu pull-right\" role=\"menu\">\n\n\t<li role=\"presentation\" class=\"dropdown-header\">[[category:share_this_category]]</li>\n\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['disableSocialButtons'] : null) ?
        "" :
        "\n\t<li role=\"presentation\">\n\t\t<a role=\"menuitem\" component=\"share/facebook\" class=\"facebook-share\" tabindex=\"-1\" href=\"#\"><span class=\"menu-icon\"><i class=\"fa fa-facebook\"></i></span> Facebook</a>\n\t</li>\n\t<li role=\"presentation\">\n\t\t<a role=\"menuitem\" component=\"share/twitter\" class=\"twitter-share\" tabindex=\"-1\" href=\"#\"><span class=\"menu-icon\"><i class=\"fa fa-twitter\"></i></span> Twitter</a>\n\t</li>\n\t<li role=\"presentation\">\n\t\t<a role=\"menuitem\" component=\"share/google\" class=\"google-share\" tabindex=\"-1\" href=\"#\"><span class=\"menu-icon\"><i class=\"fa fa-google-plus\"></i></span> Google+</a>\n\t</li>\n\t") + 
      "\n\t<li class=\"text-center\">\n\t\t<input id=\"category-link\" readonly=\"true\" type=\"text\" value=\"\" class=\"form-control post-link inline-block\"></input>\n\t</li>\n</ul>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
