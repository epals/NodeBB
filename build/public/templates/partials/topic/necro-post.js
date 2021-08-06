
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
    return "<li component=\"topic/necro-post\" class=\"necro-post timeline-event\">\r\n\t<span class=\"timeline-text\">" + 
      __escape(guard((context != null) ? context['text'] : null)) + 
      "</span>\r\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
