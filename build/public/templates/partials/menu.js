
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
    return "\t\t\t<div class=\"navbar-header\">\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<div>\n\t\t\t\t\t<a href=\"" + 
      (guard((context != null) ? context['brand:logo:url'] : null) ?
        __escape(guard((context != null) ? context['brand:logo:url'] : null)) :
        __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/") + 
      "\">\n\t\t\t\t\t\t<img alt=\"" + 
      __escape(guard((context != null) ? context['brand:logo:alt'] : null)) + 
      "\" class=\"" + 
      __escape(guard((context != null) ? context['brand:logo:display'] : null)) + 
      " forum-logo\" src=\"" + 
      __escape(guard((context != null) ? context['brand:logo'] : null)) + 
      "\" />\n\t\t\t\t\t</a>\n\t\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null) ?
        "\n\t\t\t\t\t<a href=\"" + 
          (guard((context != null) ? context['title:url'] : null) ?
            __escape(guard((context != null) ? context['title:url'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/") + 
          "\">\n\t\t\t\t\t\t<h1 class=\"navbar-brand forum-title\">" + 
          __escape(guard((context != null) ? context['title'] : null)) + 
          "</h1>\n\t\t\t\t\t</a>\n\t\t\t\t\t" :
        "") + 
      "\n\n\t\t\t\t\t<div component=\"navbar/title\" class=\"visible-xs\">\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"navbar-collapse collapse navbar-ex1-collapse\" id=\"nav-dropdown\">\n\t\t\t\t" + 
      (guard((context != null) ? context['maintenanceHeader'] : null) ?
        "\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right pull-right\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/login\">\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-in visible-xs-inline\"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t" :
        "\n\t\t\t\t<ul id=\"main-nav\" class=\"nav navbar-nav pull-left\">\n\t\t\t\t\t" + 
          compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t</ul>\n\n\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\n\t\t\t\t<ul id=\"logged-in-menu\" class=\"nav navbar-nav navbar-right pull-right\">\n\t\t\t\t\t<li class=\"notifications dropdown text-center hidden-xs\" component=\"notifications\">\n\t\t\t\t\t\t<a href=\"#\" title=\"[[global:header.notifications]]\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"notif_dropdown\">\n\t\t\t\t\t\t\t<i component=\"notifications/icon\" class=\"notification-icon fa fa-fw fa-bell-o\" data-content=\"0\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"notif_dropdown\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul id=\"notif-list\" component=\"notifications/list\">\n\t\t\t\t\t\t\t\t\t<li class=\"loading-text\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:notifications.loading]]</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\"><a href=\"#\" class=\"mark-all-read\">[[notifications:mark_all_read]]</a></li>\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\"><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/notifications\">[[notifications:see_all]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t" + 
              (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
                "\n\t\t\t\t\t<li class=\"visible-xs\">\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/search\">\n\t\t\t\t\t\t\t<i class=\"fa fa-search fa-fw\"></i> [[global:search]]\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
                "") + 
              "\n\n\t\t\t\t\t<li class=\"visible-xs\">\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/notifications\" title=\"[[notifications:title]]\">\n\t\t\t\t\t\t\t<i component=\"notifications/icon\" class=\"notification-icon fa fa-bell-o fa-fw\" data-content=\"0\"></i> [[notifications:title]]\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\n\t\t\t\t\t" + 
              (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
                "" :
                "\n\t\t\t\t\t<li class=\"chats dropdown\">\n\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" title=\"[[global:header.chats]]\" id=\"chat_dropdown\" component=\"chat/dropdown\">\n\t\t\t\t\t\t\t<i component=\"chat/icon\" class=\"fa fa-comment-o fa-fw\"></i> <span class=\"visible-xs-inline\">[[global:header.chats]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"chat_dropdown\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<ul id=\"chat-list\" component=\"chat/list\">\n\t\t\t\t\t\t\t\t\t<li class=\"loading-text\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:chats.loading]]</a>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\"><a href=\"#\" class=\"mark-all-read\" component=\"chats/mark-all-read\">[[modules:chat.mark_all_read]]</a></li>\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\"><a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
                  "/chats\">[[modules:chat.see_all]]</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t") + 
              "\n\n\t\t\t\t\t<li id=\"user_label\" class=\"dropdown\">\n\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\"user_dropdown\" title=\"[[global:header.profile]]\">" + 
              __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
              "</a>\n\t\t\t\t\t\t<ul component=\"header/usercontrol\" id=\"user-control-list\" class=\"dropdown-menu\" aria-labelledby=\"user_dropdown\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a component=\"header/profilelink\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status " + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
              "\"></i> <span component=\"header/username\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"online\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status online\"></i><span> [[global:online]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"away\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status away\"></i><span> [[global:away]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"dnd\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status dnd\"></i><span> [[global:dnd]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"offline\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status offline\"></i><span> [[global:invisible]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['showModMenu'] : null) ?
                "\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\n\t\t\t\t\t\t\t<li class=\"dropdown-header\">[[pages:moderator-tools]]</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/flags\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-flag\"></i> <span>[[pages:flagged-content]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/post-queue\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t" + 
                  (guard((context != null) ? context['isAdmin'] : null) ?
                    "\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"" + 
                      __escape(guard((context != null) ? context['relative_path'] : null)) + 
                      "/ip-blacklist\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-ban\"></i> <span>[[pages:ip-blacklist]]</span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t" :
                    "") + 
                  "\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\n\t\t\t\t\t\t\t<li component=\"user/logout\">\n\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-fw fa-sign-out\"></i><span> [[global:logout]]</span></a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t" :
            "\n\t\t\t\t<ul id=\"logged-out-menu\" class=\"nav navbar-nav navbar-right pull-right\">\n\t\t\t\t\t" + 
              (guard((context != null) ? context['allowRegistration'] : null) ?
                "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/register\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil visible-xs-inline\"></i>\n\t\t\t\t\t\t\t<span>[[global:register]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/login\">\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-in visible-xs-inline\"></i>\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t") + 
          "\n\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
            "\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<form id=\"search-form\" class=\"navbar-form navbar-right hidden-xs\" role=\"search\" method=\"GET\" action=\"\">\n\t\t\t\t\t\t\t<button id=\"search-button\" type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-search fa-fw\" title=\"[[global:header.search]]\"></i></button>\n\t\t\t\t\t\t\t<div class=\"hidden\" id=\"search-fields\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<input autocomplete=\"off\" type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-gears fa-fw advanced-search-link\"></i></a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default hide\">[[global:search]]</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t\t<div id=\"quick-search-container\" class=\"quick-search-container hidden\">\n\t\t\t\t\t\t\t<div class=\"quick-search-results-container\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t" :
            "") + 
          "\n\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right pull-right\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"#\" id=\"reconnect\" class=\"hide\" title=\"Connection to " + 
          __escape(guard((context != null) ? context['title'] : null)) + 
          " has been lost, attempting to reconnect...\">\n\t\t\t\t\t\t\t<i class=\"fa fa-check\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<div class=\"header-topic-title hidden-xs\">\n\t\t\t\t\t<span></span>\n\t\t\t\t</div>\n\t\t\t\t") + 
      "\n\t\t\t</div>\n";
  }

  compiled.blocks = {
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t" + 
          (helper(context, helpers, 'displayMenuItem', [context, index]) ?
            "\n\t\t\t\t\t<li class=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
              "\">\n\t\t\t\t\t\t<a class=\"navigation-link\" href=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
              "\" title=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['title'] : null)) + 
              "\" id=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
              "\"" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null && context['navigation'][key0]['properties'] != null) ? context['navigation'][key0]['properties']['targetBlank'] : null) ?
                " target=\"_blank\"" :
                "") + 
              ">\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
                "\n\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) + 
                  "\" data-content=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
                  "\"></i>\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null) ?
                "\n\t\t\t\t\t\t\t<span class=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['textClass'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null)) + 
                  "</span>\n\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
