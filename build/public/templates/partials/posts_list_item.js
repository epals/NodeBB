
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
    return "<li component=\"post\" class=\"posts-list-item\" data-pid=\"" + 
      __escape(guard((context != null) ? context['pid'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-body\">\n            <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\">" + 
      __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
      "</a>\n\n            <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
      "\">\n                <strong><span>" + 
      __escape(guard((context != null && context['user'] != null) ? context['user']['displayname'] : null)) + 
      "</span></strong>\n            </a>\n            <div component=\"post/content\" class=\"content\">\n                <p>" + 
      __escape(guard((context != null) ? context['content'] : null)) + 
      "</p>\n                <p class=\"fade-out\"></p>\n            </div>\n            <small>\n                <span class=\"pull-right\">\n                    <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/category/" + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['slug'] : null)) + 
      "\">[[global:posted_in, " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['name'] : null)) + 
      "]] <i class=\"fa " + 
      __escape(guard((context != null && context['category'] != null) ? context['category']['icon'] : null)) + 
      "\"></i> <span class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['timestampISO'] : null)) + 
      "\"></span></a> &bull;\n                    <a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/post/" + 
      __escape(guard((context != null) ? context['pid'] : null)) + 
      "\">[[global:read_more]]</a>\n                </span>\n            </small>\n        </div>\n    </div>\n</li>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
