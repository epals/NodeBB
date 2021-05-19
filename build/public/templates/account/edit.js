
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
    return "<div class=\"account\">\n\t\n" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\n\n<div class=\"cover\" component=\"account/cover\" style=\"background-image: url(" + 
      __escape(guard((context != null) ? context['cover:url'] : null)) + 
      "); background-position: " + 
      __escape(guard((context != null) ? context['cover:position'] : null)) + 
      ";\">\n\t" + 
      (guard((context != null) ? context['allowCoverPicture'] : null) ?
        "\n\t<div class=\"controls\">\n\t\t<span class=\"upload\"><i class=\"fa fa-fw fa-4x fa-upload\"></i></span>\n\t\t<span class=\"resize\"><i class=\"fa fa-fw fa-4x fa-arrows-alt\"></i></span>\n\t\t<span class=\"remove\"><i class=\"fa fa-fw fa-4x fa-times\"></i></span>\n\t</div>\n\t<div class=\"save\">[[groups:cover-save]] <i class=\"fa fa-fw fa-floppy-o\"></i></div>\n\t<div class=\"indicator\">[[groups:cover-saving]] <i class=\"fa fa-fw fa-refresh fa-spin\"></i></div>\n\t" :
        "") + 
      "\n</div>\n\n<div class=\"account-username-box\" data-userslug=\"" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" data-uid=\"" + 
      __escape(guard((context != null) ? context['uid'] : null)) + 
      "\">\n\t<ul class=\"nav nav-pills account-sub-links\">\n\t\t<li>\n\t\t\t<a href=\"#\" type=\"button\" class=\"dropdown-toggle inline-block\" data-toggle=\"dropdown\">\n\t\t\t\t[[user:more]]\n\t\t\t\t<span class=\"caret\"></span>\n\t\t\t\t<span class=\"sr-only\">Toggle Dropdown</span>\n\t\t\t</a>\n\t\t\t<ul class=\"dropdown-menu pull-right\" role=\"menu\">\n\t\t\t\t" + 
      (guard((context != null) ? context['isSelf'] : null) ?
        "" :
        "\n\t\t\t\t<li>\n\t\t\t\t\t<a component=\"account/flag\" href=\"#\">[[user:flag-profile]]</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a component=\"account/block\" href=\"#\">" + 
          (guard((context != null) ? context['isBlocked'] : null) ?
            "[[user:unblock_user]]" :
            "[[user:block_user]]") + 
          "</a>\n\t\t\t\t</li>\n\t\t\t\t") + 
      "\n\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/following\"><i class=\"fa fa-fw fa-users\"></i> [[user:following]]</a></li>\n\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/followers\"><i class=\"fa fa-fw fa-users\"></i> [[user:followers]]</a></li>\n\t\t\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/blocks\"><i class=\"fa fa-fw fa-ban\"></i> [[user:blocks]]</a></li>\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/topics\"><i class=\"fa fa-fw fa-book\"></i> [[global:topics]]</a></li>\n\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/posts\"><i class=\"fa fa-fw fa-pencil\"></i> [[global:posts]]</a></li>\n\t\t\t\t" + 
      (guard((context != null) ? context['reputation:disabled'] : null) ?
        "" :
        "\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/best\"><i class=\"fa fa-fw fa-star\"></i> [[global:best]]</a></li>\n\t\t\t\t") + 
      "\n\t\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "/groups\"><i class=\"fa fa-fw fa-users\"></i> [[global:header.groups]]</a></li>\n\t\t\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/bookmarks\"><i class=\"fa fa-fw fa-heart\"></i> [[user:bookmarks]]</a></li>\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/watched\"><i class=\"fa fa-fw fa-eye\"></i> [[user:watched]]</a></li>\n\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/ignored\"><i class=\"fa fa-fw fa-eye\"></i> [[user:ignored]]</a></li>\n\n\t\t\t\t" + 
          (guard((context != null) ? context['reputation:disabled'] : null) ?
            "" :
            "\n\t\t\t\t<li><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null) ? context['userslug'] : null)) + 
              "/upvoted\"><i class=\"fa fa-fw fa-chevron-up\"></i> [[global:upvoted]]</a></li>\n\t\t\t\t" + 
              (guard((context != null) ? context['downvote:disabled'] : null) ?
                "" :
                "\n\t\t\t\t<li><a href=\"" + 
                  __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null) ? context['userslug'] : null)) + 
                  "/downvoted\"><i class=\"fa fa-fw fa-chevron-down\"></i> [[global:downvoted]]</a></li>\n\t\t\t\t") + 
              "\n\t\t\t\t") + 
          "\n\n\t\t\t\t" :
        "") + 
      "\n\t\t\t\t" + 
      compiled.blocks['profile_links'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t</ul>\n\t\t</li>\n\t\t<li>\n\t\t\t<a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/user/" + 
      __escape(guard((context != null) ? context['userslug'] : null)) + 
      "\" class=\"inline-block\" id=\"profile\"><i class=\"fa fa-user\"></i> [[user:profile]]</a>\n\t\t</li>\n\t\t" + 
      (guard((context != null) ? context['showHidden'] : null) ?
        "\n\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit\"><i class=\"fa fa-pencil-square-o\"></i> [[user:edit]]</a></li>\n\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/settings\"><i class=\"fa fa-gear\"></i> [[user:settings]]</a></li>\n\t\t" :
        "") + 
      "\n\t</ul>\n</div>\n\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-2 col-sm-4\">\n\t\t\t<div class=\"account-picture-block text-center\">\n\t\t\t\t" + 
      (guard((context != null) ? context['picture'] : null) ?
        "\n\t\t\t\t<img id=\"user-current-picture\" class=\"user-profile-picture\" src=\"" + 
          __escape(guard((context != null) ? context['picture'] : null)) + 
          "\" />\n\t\t\t\t" :
        "\n\t\t\t\t<div class=\"user-icon user-profile-picture\" style=\"background-color: " + 
          __escape(guard((context != null) ? context['icon:bgColor'] : null)) + 
          ";\">" + 
          __escape(guard((context != null) ? context['icon:text'] : null)) + 
          "</div>\n\t\t\t\t") + 
      "\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t" + 
      (guard((context != null) ? context['allowProfilePicture'] : null) ?
        "\n\t\t\t\t\t<a id=\"changePictureBtn\" href=\"#\" class=\"list-group-item\">[[user:change_picture]]</a>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null) ? context['username:disableEdit'] : null) ?
        "" :
        "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/username\" class=\"list-group-item\">[[user:change_username]]</a>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null) ? context['email:disableEdit'] : null) ?
        "" :
        "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/email\" class=\"list-group-item\">[[user:change_email]]</a>\n\t\t\t\t\t") + 
      "\n\t\t\t\t\t" + 
      (guard((context != null) ? context['canChangePassword'] : null) ?
        "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null) ? context['userslug'] : null)) + 
          "/edit/password\" class=\"list-group-item\">[[user:change_password]]</a>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t\t" + 
      compiled.blocks['editButtons'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t</ul>\n\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['requireEmailConfirmation'] : null) ?
        "\n\t\t\t\t" + 
          (guard((context != null) ? context['email'] : null) ?
            "\n\t\t\t\t" + 
              (guard((context != null) ? context['isSelf'] : null) ?
                "\n\t\t\t\t<a id=\"confirm-email\" href=\"#\" class=\"btn btn-warning " + 
                  (guard((context != null) ? context['email:confirmed'] : null) ?
                    "hide" :
                    "") + 
                  "\">[[user:confirm_email]]</a><br/><br/>\n\t\t\t\t" :
                "") + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null) ? context['allowAccountDelete'] : null) ?
        "\n\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "\n\t\t\t\t<a id=\"deleteAccountBtn\" href=\"#\" class=\"btn btn-danger\">[[user:delete_account]]</a><br/><br/>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-5 col-sm-4\">\n\t\t\t<form role=\"form\" component=\"profile/edit/form\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"fullname\">[[user:fullname]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"fullname\" name=\"fullname\" placeholder=\"[[user:fullname]]\" value=\"" + 
      __escape(guard((context != null) ? context['fullname'] : null)) + 
      "\">\n\t\t\t\t</div>\n\t\t\t\t" + 
      (guard((context != null) ? context['allowWebsite'] : null) ?
        "\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"website\">[[user:website]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"website\" name=\"website\" placeholder=\"http://...\" value=\"" + 
          __escape(guard((context != null) ? context['website'] : null)) + 
          "\">\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"location\">[[user:location]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" id=\"location\" name=\"location\" placeholder=\"[[user:location]]\" value=\"" + 
      __escape(guard((context != null) ? context['location'] : null)) + 
      "\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"birthday\">[[user:birthday]]</label>\n\t\t\t\t\t<input class=\"form-control\" type=\"date\" id=\"birthday\" name=\"birthday\" value=\"" + 
      __escape(guard((context != null) ? context['birthday'] : null)) + 
      "\" placeholder=\"mm/dd/yyyy\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"groupTitle\">[[user:grouptitle]]</label>\n\n\t\t\t\t\t<select class=\"form-control\" id=\"groupTitle\" name=\"groupTitle\" " + 
      (guard((context != null) ? context['allowMultipleBadges'] : null) ?
        " size=\"" + 
          __escape(guard((context != null) ? context['groupSelectSize'] : null)) + 
          "\" multiple" :
        "") + 
      ">\n\t\t\t\t\t\t<option value=\"\">[[user:no-group-title]]</option>\n\t\t\t\t\t\t" + 
      compiled.blocks['groups'](helpers, context, guard, iter, helper) + 
      "\n\t\t\t\t\t</select>\n\t\t\t\t\t" + 
      (guard((context != null) ? context['allowMultipleBadges'] : null) ?
        "\n\t\t\t\t\t<span>[[user:group-order-help]]</span>\n\t\t\t\t\t<i role=\"button\" component=\"group/order/up\" class=\"fa fa-chevron-up\"></i> <i role=\"button\" component=\"group/order/down\" class=\"fa fa-chevron-down\"></i>\n\t\t\t\t\t" :
        "") + 
      "\n\t\t\t\t</div>\n\n\t\t\t\t" + 
      (guard((context != null) ? context['allowAboutMe'] : null) ?
        "\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"aboutme\">[[user:aboutme]]</label> <small><label id=\"aboutMeCharCountLeft\"></label></small>\n\t\t\t\t\t<textarea class=\"form-control\" id=\"aboutme\" name=\"aboutme\" rows=\"5\">" + 
          __escape(guard((context != null) ? context['aboutme'] : null)) + 
          "</textarea>\n\t\t\t\t</div>\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t" + 
      (guard((context != null) ? context['allowSignature'] : null) ?
        "\n\t\t\t\t" + 
          (guard((context != null) ? context['disableSignatures'] : null) ?
            "" :
            "\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"signature\">[[user:signature]]</label> <small><label id=\"signatureCharCountLeft\"></label></small>\n\t\t\t\t\t<textarea class=\"form-control\" id=\"signature\" name=\"signature\" rows=\"5\">" + 
              __escape(guard((context != null) ? context['signature'] : null)) + 
              "</textarea>\n\t\t\t\t</div>\n\t\t\t\t") + 
          "\n\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t<a id=\"submitBtn\" href=\"#\" class=\"btn btn-primary\">[[global:save_changes]]</a>\n\t\t\t</form>\n\n\t\t\t<hr class=\"visible-xs visible-sm\"/>\n\t\t</div>\n\n\t\t<div class=\"col-md-5 col-sm-4\">\n\t\t\t" + 
      (guard((context != null && context['sso'] != null) ? context['sso']['length'] : null) ?
        "\n\t\t\t<label class=\"control-label\">[[user:sso.title]]</label>\n\t\t\t<div class=\"list-group\">\n\t\t\t\t" + 
          compiled.blocks['sso'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t</div>\n\t\t\t" :
        "") + 
      "\n\t\t</div>\n\t</div>\n</div>\n\n";
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
        return "\n\t\t\t\t" + 
          (index === 0 ?
            "\n\t\t\t\t<li class=\"divider\"></li>\n\t\t\t\t" :
            "") + 
          "\n\t\t\t\t<li id=\"" + 
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
          "</a></li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'editButtons': function editButtons(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['editButtons'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          __escape(guard((context != null && context['editButtons'] != null && context['editButtons'][key0] != null) ? context['editButtons'][key0]['link'] : null)) + 
          "\" class=\"list-group-item\">" + 
          __escape(guard((context != null && context['editButtons'] != null && context['editButtons'][key0] != null) ? context['editButtons'][key0]['text'] : null)) + 
          "</a>\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'groups': function groups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t" + 
          (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitleEnabled'] : null) ?
            "\n\t\t\t\t\t\t<option value=\"" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['displayName'] : null)) + 
              "\" " + 
              (guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['selected'] : null) ?
                "selected" :
                "") + 
              ">" + 
              __escape(guard((context != null && context['groups'] != null && context['groups'][key0] != null) ? context['groups'][key0]['userTitle'] : null)) + 
              "</option>\n\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'sso': function sso(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['sso'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<div class=\"list-group-item\">\n\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['deauthUrl'] : null) ?
            "\n\t\t\t\t\t<a class=\"btn btn-default btn-xs pull-right\" href=\"" + 
              __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['deauthUrl'] : null)) + 
              "\">[[user:sso.dissociate]]</a>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['url'] : null)) + 
          "\" target=\"" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['associated'] : null) ?
            "_blank" :
            "_top") + 
          "\">\n\t\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['icon'] : null)) + 
              "\"></i>" :
            "") + 
          "\n\t\t\t\t\t\t" + 
          (guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['associated'] : null) ?
            "[[user:sso.associated]]" :
            "[[user:sso.not-associated]]") + 
          "\n\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['sso'] != null && context['sso'][key0] != null) ? context['sso'][key0]['name'] : null)) + 
          "\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
