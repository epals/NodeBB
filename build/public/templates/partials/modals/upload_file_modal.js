
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
    return "\t<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"upload-file\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\r\n\t\t\t\t\t<h3>" + 
      __escape(guard((context != null) ? context['title'] : null)) + 
      "</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t<form id=\"uploadForm\" action=\"\" method=\"post\" enctype=\"multipart/form-data\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t" + 
      (guard((context != null) ? context['description'] : null) ?
        "\r\n\t\t\t\t\t\t\t<label for=\"fileInput\">" + 
          __escape(guard((context != null) ? context['description'] : null)) + 
          "</label>\r\n\t\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t\t\t<input type=\"file\" id=\"fileInput\" name=\"files[]\" " + 
      (guard((context != null) ? context['accept'] : null) ?
        "accept=\"" + 
          __escape(guard((context != null) ? context['accept'] : null)) + 
          "\"" :
        "") + 
      ">\r\n\t\t\t\t\t\t\t" + 
      (guard((context != null) ? context['showHelp'] : null) ?
        "\r\n\t\t\t\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['accept'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t[[global:allowed-file-types, " + 
              __escape(guard((context != null) ? context['accept'] : null)) + 
              "]]\r\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['fileSize'] : null) ?
            "<span id=\"file-size-block\">([[uploads:maximum-file-size, " + 
              __escape(guard((context != null) ? context['fileSize'] : null)) + 
              "]])</span>" :
            "") + 
          "\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<input type=\"hidden\" id=\"params\" name=\"params\" />\r\n\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t<div id=\"upload-progress-box\" class=\"progress progress-striped hide\">\r\n\t\t\t\t\t\t<div id=\"upload-progress-bar\" class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\">\r\n\t\t\t\t\t\t\t<span class=\"sr-only\"> [[success:success]]</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div id=\"alert-status\" class=\"alert alert-info hide\"></div>\r\n\t\t\t\t\t<div id=\"alert-success\" class=\"alert alert-success hide\"></div>\r\n\t\t\t\t\t<div id=\"alert-error\" class=\"alert alert-danger hide\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">[[global:close]]</button>\r\n\t\t\t\t\t<button id=\"fileUploadSubmitBtn\" class=\"btn btn-primary\">" + 
      __escape(guard((context != null) ? context['button'] : null)) + 
      "</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
