
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
    return "<div class=\"stats text-muted\">\r\n\t<i class=\"fa fa-fw fa-user\" title=\"[[global:posters]]\"></i>\r\n\t<span title=\"" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postercount'] : null)) + 
      "</span>\r\n</div>\r\n<div class=\"stats text-muted\">\r\n\t<i class=\"fa fa-fw fa-pencil\" title=\"[[global:posts]]\"></i>\r\n\t<span component=\"topic/post-count\" title=\"" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "\" class=\"human-readable-number\">" + 
      __escape(guard((context != null) ? context['postcount'] : null)) + 
      "</span>\r\n</div>\r\n<div class=\"stats text-muted\">\r\n\t<i class=\"fa fa-fw fa-eye\" title=\"[[global:views]]\"></i>\r\n\t<span class=\"human-readable-number\" title=\"" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "\">" + 
      __escape(guard((context != null) ? context['viewcount'] : null)) + 
      "</span>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
