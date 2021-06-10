
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
    return "<p class=\"lead\">Use this utility to reverse any previously migrated content back to its old format</p>\n<p>\n\tIf there were posts that were migrated <strong>to</strong> Quill via the bundled utility, a backup of the old content was saved. This migrator will restore the old format. Any posts made in Quill will be left as-is.\n</p>\n<p>\n\t<strong>Important!</strong> &rarr; Once begun, the migration process cannot be stopped.\n</p>\n\n<div class=\"progress\">\n\t<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%;\">\n\t\t<span class=\"sr-only\">0% Complete</span>\n\t</div>\n</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
