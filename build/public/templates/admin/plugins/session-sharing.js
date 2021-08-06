
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
    return "<form role=\"form\" class=\"session-sharing-settings\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-9\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">General</div>\n\t\t\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Base Name</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"name\" name=\"name\" title=\"Base Name\" class=\"form-control\" placeholder=\"appId\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"cookieName\">Cookie Name</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"cookieName\" name=\"cookieName\" title=\"Cookie Name\" class=\"form-control\" placeholder=\"token\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"cookieDomain\">Cookie Domain</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"cookieDomain\" name=\"cookieDomain\" title=\"Cookie Domain\" class=\"form-control\" />\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tSpecifying the common cookie domain here will allow NodeBB to delete the common cookie when a user\n\t\t\t\t\t\t\tlogs out of NodeBB. If not set (default), then the user will simply be logged in again as their\n\t\t\t\t\t\t\tcommon cookie still exists. This may actually be what you want.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"secret\">JWT Secret</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"secret\" name=\"secret\" title=\"JWT Secret\" class=\"form-control\" />\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tThis value is the secret key you used to encode your JSON Web Token. NodeBB needs the same secret\n\t\t\t\t\t\t\totherwise the JWT cannot be properly decoded.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">Session Handling</div>\n\t\t\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"behaviour\">Cookie changes</label>\n\t\t\t\t\t\t<select class=\"form-control\" name=\"behaviour\" id=\"behaviour\">\n\t\t\t\t\t\t\t<option value=\"trust\">\"Trust\" &rarr; Shared cookie token used once only to authenticate, session persists even if cookie cleared</option>\n\t\t\t\t\t\t\t<option value=\"revalidate\">\"Revalidate\" &rarr; Shared cookie is checked on every page load, and updated/logged out to reflect changes in cookie</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"adminRevalidate\" name=\"adminRevalidate\" />\n\t\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Apply revalidation rules to administrators as well</strong></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\t\tAdministrators are exempt from the <code>revalidate</code> behaviour because a \n\t\t\t\t\t\t\t\tmisconfiguration could lock them out of the admin panel. Enable this option to force\n\t\t\t\t\t\t\t\tadministrators to also undergo cookie revalidation, and thereby increasing security.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\t\tThis option is disabled by default to allow for smoother setup.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"noRegistration\" name=\"noRegistration\" />\n\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Do not automatically create NodeBB accounts for unrecognized users</strong></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tBy default, an unrecognized user id found in a payload cookie will have a local NodeBB account automatically created for it. If enabled,\n\t\t\t\t\t\t\tthat cookie will not resolve into a session and that client will remain a guest.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"updateProfile\" name=\"updateProfile\" />\n\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Automatically update local profile information with information found in shared cookie</strong></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<div class=\"help-block\">\n\t\t\t\t\t\t\tBasic information such as username and id are required, while others are optional (first name, last name, etc.). Enable this setting to allow\n\t\t\t\t\t\t\tNodeBB to automatically sync up the local profile with the information provided.\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"syncGroupJoin\" name=\"syncGroupJoin\" />\n\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Automatically join groups if present in payload</strong></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"syncGroupLeave\" name=\"syncGroupLeave\" />\n\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Automatically leave groups if not present in payload</strong></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"checkbox\">\n\t\t\t\t\t\t<label class=\"mdl-switch mdl-js-switch mdl-js-ripple-effect\">\n\t\t\t\t\t\t\t<input class=\"mdl-switch__input\" type=\"checkbox\" id=\"syncGroupList\" name=\"syncGroupList\" />\n\t\t\t\t\t\t\t<span class=\"mdl-switch__label\"><strong>Select groups to join/leave</strong></span>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<select class=\"form-control\" id=\"syncGroups\" name=\"syncGroups\" multiple size=\"10\">\n\t\t\t\t\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"logoutRedirect\">Logout Redirection</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"logoutRedirect\" name=\"logoutRedirect\" />\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tIf set, once a user logs out from NodeBB, they will be sent to this link. Setting this option may be useful if you'd like to trigger\n\t\t\t\t\t\t\ta session logout in your own application instead.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"loginOverride\">Login Override</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"loginOverride\" name=\"loginOverride\" />\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tIf set, users clicking the \"Login\" button will be redirected to this link instead\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"registerOverride\">Register Override</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"registerOverride\" name=\"registerOverride\" />\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tIf set, users clicking the \"Register\" button will be redirected to this link instead\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">Payload Keys</div>\n\t\t\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t\t\t<p>\n\t\t\t\t\t\tIn general, you should not need to change these values, as you should be adjusting your app's cookie's\n\t\t\t\t\t\tJWT payload keys to match the defaults. However if circumstances require you to have different values,\n\t\t\t\t\t\tyou can change them here.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\tDefault values are shown as placeholders in the corresponding input fields.\n\t\t\t\t\t</p>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"name\">Unique ID</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:id\" name=\"payload:id\" title=\"Unique ID\" class=\"form-control\" placeholder=\"id\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:email\">Email</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:email\" name=\"payload:email\" title=\"Email\" class=\"form-control\" placeholder=\"email\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:username\">Username</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:username\" name=\"payload:username\" title=\"Username\" class=\"form-control\" placeholder=\"username\">\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tThe plugin will try to generate this value from the fullname, if no username is given.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:fullname\">Full name</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:fullname\" name=\"payload:fullname\" title=\"Full name\" class=\"form-control\" placeholder=\"fullname\">\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tThe plugin will use a combination of first name and last name, if no fullname is given. If given, the following two fields will be ignored.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:firstName\">First Name (deprecated)</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:firstName\" name=\"payload:firstName\" title=\"First Name (deprecated)\" class=\"form-control\" placeholder=\"firstName\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:lastName\">Last Name (deprecated)</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:lastName\" name=\"payload:lastName\" title=\"Last Name (deprecated)\" class=\"form-control\" placeholder=\"lastName\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:website\">Website</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:website\" name=\"payload:website\" title=\"Website\" class=\"form-control\" placeholder=\"website\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:birthday\">Birthday</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:birthday\" name=\"payload:birthday\" title=\"Birthday\" class=\"form-control\" placeholder=\"birthday\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:aboutme\">About</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:aboutme\" name=\"payload:aboutme\" title=\"About\" class=\"form-control\" placeholder=\"aboutme\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:location\">Location</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:location\" name=\"payload:location\" title=\"Location\" class=\"form-control\" placeholder=\"location\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:signature\">Signature</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:signature\" name=\"payload:signature\" title=\"Signature\" class=\"form-control\" placeholder=\"signature\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:signature\">Group Title</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:groupTitle\" name=\"payload:groupTitle\" title=\"Signature\" class=\"form-control\" placeholder=\"groupTitle\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payload:picture\">Picture</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payload:picture\" name=\"payload:picture\" title=\"Picture\" class=\"form-control\" placeholder=\"picture\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"payloadParent\">Parent Key</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"payloadParent\" name=\"payloadParent\" title=\"Parent Key\" class=\"form-control\">\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tIf your user data is contained in a subkey inside of the payload data, specify its key here.\n\t\t\t\t\t\t\tOtherwise, this plugin assumes the relevant data is at the root level.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-2 col-xs-12 settings-header\">Guest Handling</div>\n\t\t\t\t<div class=\"col-sm-10 col-xs-12\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"guestRedirect\">Re-direct unauthenticated sessions (guests) to this address</label>\n\t\t\t\t\t\t<input type=\"text\" id=\"guestRedirect\" name=\"guestRedirect\" class=\"form-control\" placeholder=\"https://...\">\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\tBlank value disables guest redirection.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\t\t<code>%1</code> can be used as a placeholder for the link the user landed on (will be URL encoded)\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">User Search</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"search\" />\n\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\tSearch for a username here to find their associated unique ID.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p id=\"result\"></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"panel panel-default\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<h3 class=\"panel-title\">Remote ID Search</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"remote_search\" />\n\t\t\t\t\t<p class=\"help-block\">\n\t\t\t\t\t\tEnter a remote ID here to find their NodeBB user profile.\n\t\t\t\t\t</p>\n\t\t\t\t\t<p id=\"local_result\"></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n\n<button id=\"save\" class=\"floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\">\n\t<i class=\"material-icons\">save</i>\n</button>\n";
  }

  compiled.blocks = {
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
          "</option>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})