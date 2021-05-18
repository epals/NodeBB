
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
    return "<li component=\"topic/event\" class=\"timeline-event\" data-topic-event-id=\"" + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "\">\n\t<div class=\"timeline-badge\">\n\t\t<i class=\"fa " + 
      (guard((context != null) ? context['icon'] : null) ?
        __escape(guard((context != null) ? context['icon'] : null)) :
        "fa-circle") + 
      "\"></i>\n\t</div>\n\t<span class=\"timeline-text\">\n\t\t" + 
      (guard((context != null) ? context['href'] : null) ?
        "\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null) ? context['href'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['text'] : null)) + 
          "</a>&nbsp;\n\t\t" :
        "\n\t\t" + 
          __escape(guard((context != null) ? context['text'] : null)) + 
          "&nbsp;\n\t\t") + 
      "\n\t</span>\n\n\t" + 
      (guard((context != null) ? context['user'] : null) ?
        "\n\t\t" + 
          (guard((context != null && context['user'] != null) ? context['user']['system'] : null) ?
            "" :
            "<span><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "xs", guard((context != null) ? context['true'] : null)])) + 
              "&nbsp;" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</a></span>&nbsp;") + 
          "\n\t\t" + 
          (guard((context != null && context['user'] != null) ? context['user']['system'] : null) ?
            "<span class=\"timeline-text\">[[global:system-user]]</span>&nbsp;" :
            "") + 
          "\n\t" :
        "\n\t\t<span class=\"timeline-text\">[[global:unknown-user]]</span>&nbsp;\n\t") + 
      "\n\n\t<span class=\"timeago timeline-text\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
