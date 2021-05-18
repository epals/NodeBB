
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
    return "<div class=\"pagination-block text-center\">\r\n    <div class=\"progress-bar\"></div>\r\n    <div class=\"wrapper dropup\">\r\n        <i class=\"fa fa-2x fa-angle-double-up pointer fa-fw pagetop\"></i>\r\n\r\n        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            <span class=\"pagination-text\"></span>\r\n        </a>\r\n\r\n        <i class=\"fa fa-2x fa-angle-double-down pointer fa-fw pagebottom\"></i>\r\n        <ul class=\"dropdown-menu dropdown-menu-right\" role=\"menu\">\r\n            <li>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-8 post-content\"></div>\r\n                    <div class=\"col-xs-4 text-right\">\r\n                        <div class=\"scroller-content\">\r\n                            <span class=\"pointer pagetop\">[[topic:first-post]] <i class=\"fa fa-angle-double-up\"></i></span>\r\n                            <div class=\"scroller-container\">\r\n                                <div class=\"scroller-thumb\">\r\n                                    <span class=\"thumb-text\"></span>\r\n                                    <div class=\"scroller-thumb-icon\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <span class=\"pointer pagebottom\">[[topic:last-post]] <i class=\"fa fa-angle-double-down\"></i></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"indexInput\" placeholder=\"[[global:pagination.enter_index]]\">\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
