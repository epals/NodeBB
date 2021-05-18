
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
    return "<div class=\"settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-2 col-xs-12 content-header\">\n\t\t\t[[admin/admin:settings-header-contents]]\n\t\t</div>\n\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t<nav class=\"section-content\">\n\t\t\t\t<ul></ul>\n\t\t\t</nav>\n\t\t</div>\n\t</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">\n\t\t[[admin/settings/uploads:posts]]\n\t</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"privateUploads\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/uploads:private]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"stripEXIFData\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/uploads:strip-exif-data]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"privateUploadsExtensions\">[[admin/settings/uploads:private-extensions]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" data-field=\"privateUploadsExtensions\" placeholder=\"\">\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/uploads:private-uploads-extensions-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"resizeImageWidthThreshold\">[[admin/settings/uploads:resize-image-width-threshold]]</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"2000\" data-field=\"resizeImageWidthThreshold\" placeholder=\"2000\">\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\t[[admin/settings/uploads:resize-image-width-threshold-help]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-xs-6\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"resizeImageWidth\">[[admin/settings/uploads:resize-image-width]]</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"760\" data-field=\"resizeImageWidth\" placeholder=\"760\">\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\t[[admin/settings/uploads:resize-image-width-help]]\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"resizeImageQuality\">[[admin/settings/uploads:resize-image-quality]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"60\" data-field=\"resizeImageQuality\" placeholder=\"60\">\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/uploads:resize-image-quality-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"maximumFileSize\">[[admin/settings/uploads:max-file-size]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"2048\" data-field=\"maximumFileSize\">\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/uploads:max-file-size-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"rejectImageWidth\">[[admin/settings/uploads:reject-image-width]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"5000\" data-field=\"rejectImageWidth\" placeholder=\"5000\">\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/uploads:reject-image-width-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"rejectImageHeight\">[[admin/settings/uploads:reject-image-height]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"5000\" data-field=\"rejectImageHeight\" placeholder=\"5000\">\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/uploads:reject-image-height-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowTopicsThumbnail\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/uploads:allow-topic-thumbnails]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"topicThumbSize\">[[admin/settings/uploads:topic-thumb-size]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"120\" data-field=\"topicThumbSize\">\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"allowedFileExtensions\">[[admin/settings/uploads:allowed-file-extensions]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"\" data-field=\"allowedFileExtensions\" data-field-type=\"tagsinput\" />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/uploads:allowed-file-extensions-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"uploadRateLimitThreshold\">[[admin/settings/uploads:upload-limit-threshold]]</label>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" data-field=\"uploadRateLimitThreshold\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t\t<select class=\"form-control\" data-field=\"uploadRateLimitCooldown\">\n\t\t\t\t\t\t\t<option value=\"60\">[[admin/settings/uploads:upload-limit-threshold-per-minute, 1]]</option>\n\t\t\t\t\t\t\t<option value=\"300\">[[admin/settings/uploads:upload-limit-threshold-per-minutes, 5]]</option>\n\t\t\t\t\t\t\t<option value=\"900\">[[admin/settings/uploads:upload-limit-threshold-per-minutes, 15]]</option>\n\t\t\t\t\t\t\t<option value=\"3600\">[[admin/settings/uploads:upload-limit-threshold-per-minutes, 60]]</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">\n\t\t[[admin/settings/uploads:profile-avatars]]\n\t</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"allowProfileImageUploads\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/uploads:allow-profile-image-uploads]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"profile:convertProfileImageToPNG\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/uploads:convert-profile-image-png]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>[[admin/settings/uploads:default-avatar]]</label>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input id=\"defaultAvatar\" type=\"text\" class=\"form-control\" placeholder=\"A custom image to use instead of user icons\" data-field=\"defaultAvatar\" />\n\t\t\t\t\t<span class=\"input-group-btn\">\n\t\t\t\t\t\t<input data-action=\"upload\" data-target=\"defaultAvatar\" data-route=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/api/admin/uploadDefaultAvatar\" type=\"button\" class=\"btn btn-default\" value=\"[[admin/settings/uploads:upload]]\"></input>\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"profileImageDimension\">[[admin/settings/uploads:profile-image-dimension]]</label>\n\t\t\t\t<input id=\"profileImageDimension\" type=\"text\" class=\"form-control\" data-field=\"profileImageDimension\" placeholder=\"200\" />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/uploads:profile-image-dimension-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>[[admin/settings/uploads:max-profile-image-size]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Maximum size of uploaded user images in kibibytes\" data-field=\"maximumProfileImageSize\" />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/uploads:max-profile-image-size-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label>[[admin/settings/uploads:max-cover-image-size]]</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Maximum size of uploaded cover images in kibibytes\" data-field=\"maximumCoverImageSize\" />\n\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t[[admin/settings/uploads:max-cover-image-size-help]]\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"checkbox\">\n\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" data-field=\"profile:keepAllUserImages\">\n\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>[[admin/settings/uploads:keep-all-user-images]]</strong></span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-sm-2 col-xs-12 settings-header\">[[admin/settings/uploads:profile-covers]]</div>\n\t<div class=\"col-sm-10 col-xs-12\">\n\t\t<form>\n\t\t\t<label for=\"profile:defaultCovers\"><strong>[[admin/settings/uploads:default-covers]]</strong></label>\n\t\t\t<p class=\"help-block\">\n\t\t\t\t[[admin/settings/uploads:default-covers-help]]\n\t\t\t</p>\n\t\t\t<input type=\"text\" class=\"form-control input-lg\" id=\"profile:defaultCovers\" data-field=\"profile:defaultCovers\" data-field-type=\"tagsinput\" value=\"/assets/images/cover-default.png\" placeholder=\"https://example.com/group1.png, https://example.com/group2.png\" />\n\t\t</form>\n\t</div>\n</div>\n\n</div>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n\n<script>\n\trequire(['admin/settings'], function(Settings) {\n\t\tSettings.prepare();\n\t\tSettings.populateTOC();\n\t});\n</script>\n\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
