
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
    return "<form role=\"form\" class=\"import-users-csv-settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">Import Users</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<p class=\"lead\">\n\t\t\t\tUpload spreadsheet (.csv file) to create users. Note that the first row will be ignored.\n\t\t\t\tAfter choosing the file, clicking Import file should display the information in the section below.\n\t\t\t\tIf nothing is shown, please reload the page and try again.\n\t\t\t</p>\n\n\t\t\t<!-- Group Name Input -->\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"setting-1\">New group name</label>\n\t\t\t\t<input type=\"text\" class=\"form-text\" id=\"new_group_name\">\n\t\t\t\t<br />\n\t\t\t\t<br />\n\t\t\t\t<div class=\"form-group green-border-focus\">\n\t\t\t\t\t<label for=\"setting-1\">Description</label>\n\t\t\t\t\t<textarea class=\"form-control\" id=\"new_group_description\" rows=\"3\"></textarea>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- CSV File Input -->\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"setting-2\">Choose file here</label>\n\t\t\t\t<input type=\"file\" class=\"form-control-file\" id=\"csv_input_file\">\n\t\t\t\t<br />\n\t\t\t\t<button id=\"csv_submit_button\" type=\"button\" name=\"button\">Import file</button>\n\t\t\t</div>\n\n\t\t\t<!-- Error Checking -->\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"setting-3\">Parsed information</label>\n\t\t\t\t<div id=\"results_table_container\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- Confirm user creation before emailing -->\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<button id=\"confirm_create_users\" type=\"button\" name=\"button\">Create Users and Notify through email</button>\n\t\t\t\t<p id=\"confirmation_display\">\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
