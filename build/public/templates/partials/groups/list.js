
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
    return "\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper);
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div class=\"col-lg-4 col-md-6 col-sm-12\" component=\"groups/summary\" data-slug=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\">\r\n\t\t<div class=\"panel panel-default\">\r\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/groups/" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['slug'] : null)) + 
          "\" class=\"panel-heading list-cover\" style=\"" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null) ?
            "background-image: url(" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['cover:thumb:url'] : null)) + 
              ");" :
            "") + 
          "\">\r\n\t\t\t\t<h3 class=\"panel-title\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          " <small>" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['memberCount'] : null)) + 
          "</small></h3>\r\n\t\t\t</a>\r\n\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t<ul class=\"members\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['members'] : null) ?
            iter(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['members'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['userslug'] : null)) + 
                  "\">\r\n\t\t\t\t\t\t\t" + 
                  (guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['picture'] : null) ?
                    "\r\n\t\t\t\t\t\t\t<img class=\"user-avatar\" src=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['picture'] : null)) + 
                      "\" alt=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['username'] : null)) + 
                      "\" title=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['username'] : null)) + 
                      "\" />\r\n\t\t\t\t\t\t\t" :
                    "\r\n\t\t\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['icon:bgColor'] : null)) + 
                      ";\" title=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['username'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null && context['groups'][key0]['members'] != null && context['groups'][key0]['members'][key1] != null) ? context['groups'][key0]['members'][key1]['icon:text'] : null)) + 
                      "</div>\r\n\t\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t";
              }, function alt() {
                return "";
              }) :
            iter(guard((context != null) ? context['members'] : null), function each(key1, index, length, value) {
                var key = key1;
                return "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['userslug'] : null)) + 
                  "\">\r\n\t\t\t\t\t\t\t" + 
                  (guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['picture'] : null) ?
                    "\r\n\t\t\t\t\t\t\t<img class=\"user-avatar\" src=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['picture'] : null)) + 
                      "\" alt=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['username'] : null)) + 
                      "\" title=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['username'] : null)) + 
                      "\" />\r\n\t\t\t\t\t\t\t" :
                    "\r\n\t\t\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['icon:bgColor'] : null)) + 
                      ";\" title=\"" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['username'] : null)) + 
                      "\">" + 
                      __escape(guard((context != null && context['groups'] != null && context['groups']['members'] != null) ? context['groups']['members']['icon:text'] : null)) + 
                      "</div>\r\n\t\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t";
              }, function alt() {
                return "";
              })) + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['truncated'] : null) ?
            "\r\n\t\t\t\t\t<li class=\"truncated\"><i class=\"fa fa-ellipsis-h\"></i></li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
