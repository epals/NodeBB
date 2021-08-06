
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
    return "<p class=\"number-of-diffs\">\r\n\t" + 
      (guard((context != null) ? context['numDiffs'] : null) ?
        "\r\n\t[[topic:diffs.description, " + 
          __escape(guard((context != null) ? context['numDiffs'] : null)) + 
          "]]\r\n\t" :
        "\r\n\t[[topic:diffs.no-revisions-description, " + 
          __escape(guard((context != null) ? context['numDiffs'] : null)) + 
          "]]\r\n\t") + 
      "\r\n</p>\r\n" + 
      (guard((context != null) ? context['numDiffs'] : null) ?
        "\r\n<div class=\"form-group\">\r\n\t<select class=\"form-control\">\r\n\t\t" + 
          compiled.blocks['diffs'](helpers, context, guard, iter, helper) + 
          "\r\n\t</select>\r\n\r\n\t<hr />\r\n\r\n\t<ul class=\"posts-list diffs\"></ul>\r\n\r\n\t" + 
          (guard((context != null) ? context['editable'] : null) ?
            "\r\n\t<button class=\"btn btn-primary\" data-action=\"restore\">[[topic:diffs.restore]]</button>\r\n\t" :
            "") + 
          "\r\n\t" + 
          (guard((context != null) ? context['deletable'] : null) ?
            "\r\n\t<button class=\"btn btn-danger\" data-action=\"delete\">[[topic:diffs.delete]]</button>\r\n\t" :
            "") + 
          "\r\n\t" + 
          (guard((context != null) ? context['editable'] : null) ?
            "\r\n\t<p class=\"help-block\">[[topic:diffs.restore-description]]</p>\r\n\t" :
            "") + 
          "\r\n\r\n</div>\r\n" :
        "") + 
      "\r\n";
  }

  compiled.blocks = {
    'diffs': function diffs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['diffs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t<option value=\"" + 
          __escape(guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['timestamp'] : null)) + 
          "\">\r\n\t\t\t" + 
          __escape(guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['pretty'] : null)) + 
          "\r\n\t\t\t" + 
          (guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['username'] : null) ?
            "[" + 
              __escape(guard((context != null && context['diffs'] != null && context['diffs'][key0] != null) ? context['diffs'][key0]['username'] : null)) + 
              "]" :
            "") + 
          "\r\n\t\t\t" + 
          (index === 0 ?
            "([[topic:diffs.current-revision]])" :
            "") + 
          "\r\n\t\t\t" + 
          (index === length - 1 ?
            "([[topic:diffs.original-revision]])" :
            "") + 
          "\r\n\t\t</option>\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
