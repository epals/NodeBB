
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
    return "<div class=\"account\">\r\n\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\r\n\r\n\t<div class=\"row account-menu\">\r\n\t<div class=\"col-xs-12\">\r\n\t\t<ul class=\"nav nav-pills pull-right\">\r\n\t\t\t" + 
      (guard((context != null) ? context['false'] : null) ?
        "\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "\" class=\"inline-block\" id=\"profile\">[[user:profile]]</a>\r\n\t\t\t\t</li>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\r\n\t\t\t" + 
          (guard((context != null) ? context['false'] : null) ?
            "\r\n\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/edit\">[[user:edit]]</a></li>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\">[[user:settings]]</a></li>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t" + 
      (guard((context != null) ? context['false'] : null) ?
        "\r\n\t\t\t\t<li class=\"dropdown bottom-sheet\">\r\n\r\n\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t[[user:more]] <span class=\"caret\"></span>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['loggedIn'] : null) ?
            "\r\n\t\t\t\t\t\t" + 
              (guard((context != null) ? context['isSelf'] : null) ?
                "" :
                "\r\n\t\t\t\t\t\t" + 
                  (guard((context != null) ? context['banned'] : null) ?
                    "" :
                    "\r\n\t\t\t\t\t\t" + 
                      (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
                        "" :
                        "\r\n\t\t\t\t\t\t<li><a component=\"account/chat\" href=\"#\">[[user:chat_with, " + 
                          __escape(guard((context != null) ? context['username'] : null)) + 
                          "]]</a></li>\r\n\t\t\t\t\t\t") + 
                      "\r\n\r\n\t\t\t\t\t\t<li><a component=\"account/flag\" href=\"#\">[[user:flag-profile]]</a></li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a component=\"account/block\" href=\"#\">" + 
                      (guard((context != null) ? context['isBlocked'] : null) ?
                        "[[user:unblock_user]]" :
                        "[[user:block_user]]") + 
                      "</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t" + 
              (guard((context != null) ? context['canBan'] : null) ?
                "\r\n\t\t\t\t\t\t<li class=\"" + 
                  (guard((context != null) ? context['banned'] : null) ?
                    "hide" :
                    "") + 
                  "\">\r\n\t\t\t\t\t\t\t<a component=\"account/ban\" href=\"#\">[[user:ban_account]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li class=\"" + 
                  (guard((context != null) ? context['banned'] : null) ?
                    "" :
                    "hide") + 
                  "\">\r\n\t\t\t\t\t\t\t<a component=\"account/unban\" href=\"#\">[[user:unban_account]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t" + 
              (guard((context != null) ? context['isAdmin'] : null) ?
                "\r\n\t\t\t\t\t\t<li><a component=\"account/delete\" href=\"#\" class=\"\">[[user:delete_account]]</a></li>\r\n\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t") + 
          "\r\n\r\n\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/following\">[[user:following]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/followers\">[[user:followers]]</a></li>\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['showHidden'] : null) ?
            "\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/blocks\">[[user:blocks]]</a></li>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/topics\">[[global:topics]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/posts\">[[global:posts]]</a></li>\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/best\">[[global:best]]</a></li>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/groups\">[[global:header.groups]]</a></li>\r\n\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['showHidden'] : null) ?
            "\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/bookmarks\">[[user:bookmarks]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/watched\">[[user:watched]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/ignored\">[[user:ignored]]</a></li>\r\n\t\t\t\t\t\t" + 
              (guard((context != null) ? context['reputation:disabled'] : null) ?
                "" :
                "\r\n\t\t\t\t\t\t<li><a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null) ? context['userslug'] : null)) + 
                  "/upvoted\">[[global:upvoted]]</a></li>\r\n\t\t\t\t\t\t" + 
                  (guard((context != null) ? context['downvote:disabled'] : null) ?
                    "" :
                    "\r\n\t\t\t\t\t\t<li><a href=\"" + 
                      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                      "/user/" + 
                      __escape(guard((context != null) ? context['userslug'] : null)) + 
                      "/downvoted\">[[global:downvoted]]</a></li>\r\n\t\t\t\t\t\t") + 
                  "\r\n\t\t\t\t\t\t") + 
              "\r\n\t\t\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/uploads\">[[global:uploads]]</a></li>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t\t" + 
          compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-2 col-sm-4\">\r\n\t\t\t<div class=\"account-picture-block text-center\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-xs-12\">\r\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['picture'] : null) ?
        "\r\n\t\t\t\t\t\t<img id=\"user-current-picture\" class=\"user-avatar\" src=\"" + 
          __escape(guard((context != null) ? context['picture'] : null)) + 
          "\" />\r\n\t\t\t\t\t\t" :
        "\r\n\t\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
          __escape(guard((context != null) ? context['icon:bgColor'] : null)) + 
          ";\">" + 
          __escape(guard((context != null) ? context['icon:text'] : null)) + 
          "</div>\r\n\t\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"list-group\">\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['allowProfilePicture'] : null) ?
        "\r\n\t\t\t\t\t<a id=\"changePictureBtn\" href=\"#\" class=\"list-group-item\">[[user:change_picture]]</a>\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['username:disableEdit'] : null) ?
        "" :
        "\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/username\" class=\"list-group-item\">[[user:change_username]]</a>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['email:disableEdit'] : null) ?
        "" :
        "\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/email\" class=\"list-group-item\">[[user:change_email]]</a>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['canChangePassword'] : null) ?
        "\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/password\" class=\"list-group-item\">[[user:change_password]]</a>\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t" + 
      compiled.blocks['editButtons'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['requireEmailConfirmation'] : null) ?
        "\r\n\t\t\t\t" + 
          (guard((context != null) ? context['email'] : null) ?
            "\r\n\t\t\t\t" + 
              (guard((context != null) ? context['isSelf'] : null) ?
                "\r\n\t\t\t\t<a id=\"confirm-email\" href=\"#\" class=\"btn btn-warning " + 
                  (guard((context != null) ? context['email:confirmed'] : null) ?
                    "hide" :
                    "") + 
                  "\">[[user:confirm_email]]</a><br/><br/>\r\n\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['allowAccountDelete'] : null) ?
        "\r\n\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "\r\n\t\t\t\t<a id=\"deleteAccountBtn\" href=\"#\" class=\"btn btn-danger\">[[user:delete_account]]</a><br/><br/>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-10 col-sm-8\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"" + 
      (guard((context != null && context['sso'] != null) ? context['sso']['length'] : null) ?
        "col-md-7 col-sm-12" :
        "col-md-12 col-sm-12") + 
      "\">\r\n\t\t\t\t\t<form>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputFullname\">[[user:fullname]]</label>\r\n\t\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"inputFullname\" placeholder=\"[[user:fullname]]\" value=\"" + 
      __escape(guard((context != null) ? context['fullname'] : null)) + 
      "\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['allowWebsite'] : null) ?
        "\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputWebsite\">[[user:website]]</label>\r\n\t\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"inputWebsite\" placeholder=\"http://...\" value=\"" + 
          __escape(guard((context != null) ? context['website'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputLocation\">[[user:location]]</label>\r\n\t\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"inputLocation\" placeholder=\"[[user:location]]\" value=\"" + 
      __escape(guard((context != null) ? context['location'] : null)) + 
      "\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputBirthday\">[[user:birthday]]</label>\r\n\t\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t\t\t<input class=\"form-control\" id=\"inputBirthday\" value=\"" + 
      __escape(guard((context != null) ? context['birthday'] : null)) + 
      "\" placeholder=\"mm/dd/yyyy\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"grouptitle\">[[user:grouptitle]]</label>\r\n\t\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t\t\t<select class=\"form-control\" id=\"groupTitle\" data-property=\"groupTitle\" " + 
      (guard((context != null) ? context['allowMultipleBadges'] : null) ?
        " multiple" :
        "") + 
      ">\r\n\t\t\t\t\t\t\t\t\t<option value=\"\">[[user:no-group-title]]</option>\r\n\t\t\t\t\t\t\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['allowAboutMe'] : null) ?
        "\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputAboutMe\">[[user:aboutme]]</label> <small><label id=\"aboutMeCharCountLeft\"></label></small>\r\n\t\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"inputAboutMe\" rows=\"5\">" + 
          __escape(guard((context != null) ? context['aboutme'] : null)) + 
          "</textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t\t\t" + 
      (guard((context != null) ? context['allowSignature'] : null) ?
        "\r\n\t\t\t\t\t\t" + 
          (guard((context != null) ? context['disableSignatures'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label class=\"control-label\" for=\"inputSignature\">[[user:signature]]</label> <small><label id=\"signatureCharCountLeft\"></label></small>\r\n\t\t\t\t\t\t\t<div class=\"controls\">\r\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" id=\"inputSignature\" rows=\"5\">" + 
              __escape(guard((context != null) ? context['signature'] : null)) + 
              "</textarea>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t\t\t<input type=\"hidden\" id=\"inputUID\" value=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\"><br />\r\n\r\n\t\t\t\t\t\t<div class=\"form-actions\">\r\n\t\t\t\t\t\t\t<a id=\"submitBtn\" href=\"#\" class=\"btn btn-primary\">[[global:save_changes]]</a>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t" + 
      (guard((context != null && context['sso'] != null) ? context['sso']['length'] : null) ?
        "\r\n\t\t\t\t<div class=\"col-md-5 col-sm-12\">\r\n\t\t\t\t\t<hr class=\"visible-xs visible-sm\" />\r\n\t\t\t\t\t<label class=\"control-label\">[[user:sso.title]]</label>\r\n\t\t\t\t\t<div class=\"list-group\">\r\n\t\t\t\t\t\t" + 
          compiled.blocks['sso'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">") + 
          "\n\t\t\t<span itemprop=\"name\">\n\t\t\t\t" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\n\t\t\t\t" + 
          (index === length - 1 ?
            "\n\t\t\t\t" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\n\t\t\t\t" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</span>\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\n\t</li>\n\t";
      }, function alt() {
        return "";
      });
    },
    'profile_links': function profile_links(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['profile_links'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t" + 
          (index === 0 ?
            "\r\n\t\t\t\t\t\t<li class=\"divider\"></li>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t<li id=\"" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['id'] : null)) + 
          "\" class=\"plugin-link " + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['public'] : null) ?
            "public" :
            "private") + 
          "\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/" + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['route'] : null)) + 
          "\">" + 
          (guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null) ?
            "<i class=\"fa fa-fw " + 
              __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          __escape(guard((context != null && context['profile_links'] != null && context['profile_links'][key0] != null) ? context['profile_links'][key0]['name'] : null)) + 
          "</a></li>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'editButtons': function editButtons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['editButtons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null && context['editButtons'] != null && context['editButtons'][key0] != null) ? context['editButtons'][key0]['link'] : null)) + 
          "\" class=\"list-group-item\">" + 
          __escape(guard((context != null && context['editButtons'] != null && context['editButtons'][key0] != null) ? context['editButtons'][key0]['text'] : null)) + 
          "</a>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitleEnabled'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['name'] : null)) + 
              "\" " + 
              (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['selected'] : null) ?
                "selected" :
                "") + 
              ">" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitle'] : null)) + 
              "</option>\r\n\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sso': function sso(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sso'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<div class=\"list-group-item\">\r\n\t\t\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['deauthUrl'] : null) ?
            "\r\n\t\t\t\t\t\t\t<a class=\"btn btn-default btn-xs pull-right\" href=\"" + 
              __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['deauthUrl'] : null)) + 
              "\">[[user:sso.dissociate]]</a>\r\n\t\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['url'] : null)) + 
          "\" target=\"" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['associated'] : null) ?
            "_blank" :
            "_top") + 
          "\">\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['icon'] : null)) + 
              "\"></i>" :
            "") + 
          "\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['associated'] : null) ?
            "[[user:sso.associated]]" :
            "[[user:sso.not-associated]]") + 
          "\r\n\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['name'] : null)) + 
          "\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
