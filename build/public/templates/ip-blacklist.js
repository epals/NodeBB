
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n\r\n<div class=\"row ip-blacklist\">\r\n\t<div class=\"col-lg-12\">\r\n\t\t<p class=\"lead\">\r\n\t\t\t[[ip-blacklist:lead]]\r\n\t\t</p>\r\n\t\t<p>\r\n\t\t\t[[ip-blacklist:description]]\r\n\t\t</p>\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">[[ip-blacklist:active-rules]]</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<textarea id=\"blacklist-rules\">" + 
      __escape(guard((context != null) ? context['rules'] : null)) + 
      "</textarea><br />\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning\" data-action=\"test\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-bomb\"></i> [[ip-blacklist:validate]]\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" data-action=\"apply\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-save\"></i> [[ip-blacklist:apply]]\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\">[[ip-blacklist:hints]]</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t[[ip-blacklist:hint-1]]\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t[[ip-blacklist:hint-2]]\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div><canvas id=\"blacklist:hourly\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-footer\"><small>[[ip-blacklist:analytics.blacklist-hourly]]</small></div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div><canvas id=\"blacklist:daily\" height=\"250\"></canvas></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-footer\"><small>[[ip-blacklist:analytics.blacklist-daily]]</small></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\r\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">") + 
          "\r\n\t\t\t<span itemprop=\"name\">\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\r\n\t\t\t\t" + 
          (index === length - 1 ?
            "\r\n\t\t\t\t" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\r\n\t\t\t\t" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</span>\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
