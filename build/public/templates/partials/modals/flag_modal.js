
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
    return "<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"[[flags:modal-title]]\" aria-hidden=\"true\">\r\n\t<div class=\"modal-dialog modal-lg\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n\t\t\t\t<h4 class=\"modal-title\">\r\n\t\t\t\t\t[[flags:modal-title]]\r\n\t\t\t\t</h4>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<p class=\"lead\">\r\n\t\t\t\t\t[[flags:modal-body, " + 
      __escape(guard((context != null) ? context['type'] : null)) + 
      ", " + 
      __escape(guard((context != null) ? context['id'] : null)) + 
      "]]\r\n\t\t\t\t</p>\r\n\t\t\t\t<div class=\"btn-group btn-group-justified\">\r\n\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t<button class=\"btn btn-default flag-reason\">[[flags:modal-reason-spam]]</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t<button class=\"btn btn-default flag-reason\">[[flags:modal-reason-offensive]]</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t<button class=\"btn btn-default toggle-custom\">[[flags:modal-reason-other]]</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<textarea class=\"form-control\" id=\"flag-reason-custom\" placeholder=\"[[flags:modal-reason-custom]]\" disabled=\"disabled\"></textarea>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary pull-right\" id=\"flag-post-commit\" disabled>[[flags:modal-submit]]</button>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
