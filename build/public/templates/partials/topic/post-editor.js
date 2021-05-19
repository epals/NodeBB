
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
    return "<span component=\"post/editor\" class=\"" + 
      (guard((context != null && context['editor'] != null) ? context['editor']['username'] : null) ?
        "" :
        " hidden") + 
      "\">, [[global:last_edited_by, " + 
      __escape(guard((context != null && context['editor'] != null) ? context['editor']['username'] : null)) + 
      "]] <span class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['editedISO'] : null)) + 
      "\"></span></span>\r\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
