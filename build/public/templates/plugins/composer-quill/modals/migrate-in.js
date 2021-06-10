
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
    return "<p class=\"lead\">Use this utility to migrate pre-existing post content to a Quill-compatible format</p>\n<p>\n\tThis plugin will convert Markdown and HTML in post content to Quill deltas, the internal format used by the Quill library. <strong>The old content will be saved in case you ever want to migrate back</strong> (via the \"Migrate from Quill\" option), but any posts made in Quill will be left as-is.\n</p>\n<p>\n\t<strong>Important!</strong> &rarr; Once begun, the migration process cannot be stopped.\n</p>\n\n<div class=\"progress\">\n\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%;\">\n\t\t<span class=\"sr-only\">0% Complete</span>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
