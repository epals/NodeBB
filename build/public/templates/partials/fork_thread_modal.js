
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
    return "<div class=\"panel panel-primary fork-thread-card\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">[[topic:fork_topic]]</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<label for=\"title\">[[topic:title]]</label>\r\n\t\t\t<input id=\"fork-title\" type=\"text\" class=\"form-control\" placeholder=\"[[topic:enter-new-topic-title]]\">\r\n\t\t</div>\r\n\t\t<p>\r\n\t\t\t[[topic:fork_topic_instruction]]<br />\r\n\t\t\t<strong><span id=\"fork-pids\"></span></strong>\r\n\t\t</p>\r\n\t</div>\r\n\t<div class=\"panel-footer\">\r\n\t\t&nbsp;\r\n\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t<button class=\"btn btn-link btn-xs\" id=\"fork_thread_cancel\">[[global:buttons.close]]</button>\r\n\t\t\t<button class=\"btn btn-primary btn-xs\" id=\"fork_thread_commit\" disabled>[[topic:fork_topic]] <i class=\"fa fa-arrow-circle-right\"></i></button>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
