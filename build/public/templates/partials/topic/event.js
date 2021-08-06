
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
      "\">\r\n\t<div class=\"timeline-badge\">\r\n\t\t<i class=\"fa " + 
      (guard((context != null) ? context['icon'] : null) ?
        __escape(guard((context != null) ? context['icon'] : null)) :
        "fa-circle") + 
      "\"></i>\r\n\t</div>\r\n\t<span class=\"timeline-text\">\r\n\t\t" + 
      (guard((context != null) ? context['href'] : null) ?
        "\r\n\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null) ? context['href'] : null)) + 
          "\">" + 
          __escape(guard((context != null) ? context['text'] : null)) + 
          "</a>&nbsp;\r\n\t\t" :
        "\r\n\t\t" + 
          __escape(guard((context != null) ? context['text'] : null)) + 
          "&nbsp;\r\n\t\t") + 
      "\r\n\t</span>\r\n\r\n\t" + 
      (guard((context != null) ? context['user'] : null) ?
        "\r\n\t\t" + 
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
          "\r\n\t\t" + 
          (guard((context != null && context['user'] != null) ? context['user']['system'] : null) ?
            "<span class=\"timeline-text\">[[global:system-user]]</span>&nbsp;" :
            "") + 
          "\r\n\t" :
        "\r\n\t\t<span class=\"timeline-text\">[[global:unknown-user]]</span>&nbsp;\r\n\t") + 
      "\r\n\r\n\t<span class=\"timeago timeline-text\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
