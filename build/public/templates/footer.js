
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
    return "\t</div><!-- /.container#content -->\n\t" + 
      (guard((context != null) ? context['isSpider'] : null) ?
        "" :
        "\n\t<div class=\"topic-search hidden\">\n\t\t<div class=\"btn-group\">\n\t\t\t<button type=\"button\" class=\"btn btn-default count\"></button>\n\t\t\t<button type=\"button\" class=\"btn btn-default prev\"><i class=\"fa fa-fw fa-angle-up\"></i></button>\n\t\t\t<button type=\"button\" class=\"btn btn-default next\"><i class=\"fa fa-fw fa-angle-down\"></i></button>\n\t\t</div>\n\t</div>\n\n\t<div component=\"toaster/tray\" class=\"alert-window\">\n\t\t<div id=\"reconnect-alert\" class=\"alert alert-dismissable alert-warning clearfix hide\" component=\"toaster/toast\">\n\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n\t\t\t<p>[[global:reconnecting-message, " + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['siteTitle'] : null)) + 
          "]]</p>\n\t\t</div>\n\t</div>\n\t") + 
      "\n\n\t<div class=\"hide\">\n\t<script>\n\twindow.addEventListener('load', function () {\n\t\tdefine(config.relative_path + '/assets/templates/500.js', function () {\n\t\t\tfunction compiled(helpers, context, get, iter, helper) {\n\t\t\t\treturn '<div class=\"alert alert-danger\">\\n\\t<strong>[[global:500.title]]</strong>\\n\\t<p>[[global:500.message]]</p>\\n\\t<p>' + \n\t\t\t\t\thelpers.__escape(get(context && context['path'])) + '</p>\\n\\t' + \n\t\t\t\t\t(get(context && context['error']) ? '<p>' + helpers.__escape(get(context && context['error'])) + '</p>' : '') + '\\n\\n\\t' + \n\t\t\t\t\t(get(context && context['returnLink']) ? '\\n\\t<p>[[error:goback]]</p>\\n\\t' : '') + '\\n</div>\\n';\n\t\t\t}\n\n\t\t\treturn compiled;\n\t\t});\n\t});\n</script>\n\t</div>\n\t<script defer src=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/nodebb.min.js?" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
      "\"></script>\n\n" + 
      compiled.blocks['scripts'](helpers, context, guard, iter, helper) + 
      "\n\n<script>\n    if (document.readyState === 'loading') {\n        document.addEventListener('DOMContentLoaded', prepareFooter);\n    } else {\n        prepareFooter();\n    }\n\n    function prepareFooter() {\n        " + 
      (guard((context != null) ? context['useCustomJS'] : null) ?
        "\n        " + 
          guard((context != null) ? context['customJS'] : null) + 
          "\n        " :
        "") + 
      "\n\n        $(document).ready(function () {\n            app.coldLoad();\n        });\n    }\n</script>\n</body>\n</html>\n";
  }

  compiled.blocks = {
    'scripts': function scripts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['scripts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<script defer type=\"text/javascript\" src=\"" + 
          __escape(guard((context != null && context['scripts'] != null && context['scripts'][key0] != null) ? context['scripts'][key0]['src'] : null)) + 
          "\"></script>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
