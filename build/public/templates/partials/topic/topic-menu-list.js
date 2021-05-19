
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
    return (guard((context != null && context['privileges'] != null) ? context['privileges']['editable'] : null) ?
        "\n<li>\n\t<a component=\"topic/lock\" href=\"#\" class=\"" + 
          (guard((context != null) ? context['locked'] : null) ?
            "hidden" :
            "") + 
          "\">\n\t\t<i class=\"fa fa-fw fa-lock\"></i> [[topic:thread_tools.lock]]\n\t</a>\n</li>\n<li>\n\t<a component=\"topic/unlock\" href=\"#\" class=\"" + 
          (guard((context != null) ? context['locked'] : null) ?
            "" :
            "hidden") + 
          "\">\n\t\t<i class=\"fa fa-fw fa-unlock\"></i> [[topic:thread_tools.unlock]]\n\t</a>\n</li>\n<li>\n\t<a component=\"topic/move\" href=\"#\">\n\t\t<i class=\"fa fa-fw fa-arrows\"></i> [[topic:thread_tools.move]]\n\t</a>\n</li>\n<li>\n\t<a component=\"topic/fork\" href=\"#\">\n\t\t<i class=\"fa fa-fw fa-code-fork\"></i> [[topic:thread_tools.fork]]\n\t</a>\n</li>\n" + 
          (guard((context != null) ? context['scheduled'] : null) ?
            "" :
            "\n<li>\n\t<a component=\"topic/pin\" href=\"#\" class=\"" + 
              (guard((context != null) ? context['pinned'] : null) ?
                "hidden" :
                "") + 
              "\">\n\t\t<i class=\"fa fa-fw fa-thumb-tack\"></i> [[topic:thread_tools.pin]]\n\t</a>\n</li>\n<li>\n\t<a component=\"topic/unpin\" href=\"#\" class=\"" + 
              (guard((context != null) ? context['pinned'] : null) ?
                "" :
                "hidden") + 
              "\">\n\t\t<i class=\"fa fa-fw fa-thumb-tack fa-rotate-90\"></i> [[topic:thread_tools.unpin]]\n\t</a>\n</li>\n") + 
          "\n<li>\n\t<a component=\"topic/mark-unread-for-all\" href=\"#\">\n\t\t<i class=\"fa fa-fw fa-inbox\"></i> [[topic:thread_tools.markAsUnreadForAll]]\n\t</a>\n</li>\n<li class=\"divider\"></li>\n" :
        "") + 
      "\n\n" + 
      (guard((context != null && context['privileges'] != null) ? context['privileges']['deletable'] : null) ?
        "\n<li>\n\t<a component=\"topic/delete\" href=\"#\" class=\"" + 
          (guard((context != null) ? context['deleted'] : null) ?
            "hidden" :
            "") + 
          "\">\n\t\t<i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread_tools.delete]]\n\t</a>\n</li>\n" + 
          (guard((context != null) ? context['scheduled'] : null) ?
            "" :
            "\n<li>\n\t<a component=\"topic/restore\" href=\"#\" class=\"" + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "\">\n\t\t<i class=\"fa fa-fw fa-history\"></i> [[topic:thread_tools.restore]]\n\t</a>\n</li>\n") + 
          "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['purge'] : null) ?
            "\n<li>\n\t<a component=\"topic/purge\" href=\"#\" class=\"" + 
              (guard((context != null) ? context['deleted'] : null) ?
                "" :
                "hidden") + 
              "\">\n\t\t<i class=\"fa fa-fw fa-eraser\"></i> [[topic:thread_tools.purge]]\n\t</a>\n</li>\n" :
            "") + 
          "\n" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['isAdminOrMod'] : null) ?
            "\n<li><a component=\"topic/delete/posts\" href=\"#\"><i class=\"fa fa-fw fa-trash-o\"></i> [[topic:thread_tools.delete-posts]]</a></li>\n" :
            "") + 
          "\n\n" + 
          compiled.blocks['thread_tools'](helpers, context, guard, iter, helper) + 
          "\n" :
        "");
  }

  compiled.blocks = {
    'thread_tools': function thread_tools(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['thread_tools'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n<li>\n\t<a href=\"#\" class=\"" + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['class'] : null)) + 
          "\"><i class=\"fa fa-fw " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['icon'] : null)) + 
          "\"></i> " + 
          __escape(guard((context != null && context['thread_tools'] != null && context['thread_tools'][key0] != null) ? context['thread_tools'][key0]['title'] : null)) + 
          "</a>\n</li>\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
