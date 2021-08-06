
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
    return "<!DOCTYPE html>\r\n<html lang=\"" + 
      __escape(helper(context, helpers, 'localeToHTML', [guard((context != null) ? context['userLang'] : null), guard((context != null) ? context['defaultLang'] : null)])) + 
      "\" " + 
      (guard((context != null) ? context['languageDirection'] : null) ?
        "data-dir=\"" + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          "\" style=\"direction: " + 
          __escape(guard((context != null) ? context['languageDirection'] : null)) + 
          ";\" " :
        "") + 
      ">\r\n\r\n<head>\r\n\t<title>" + 
      __escape(guard((context != null) ? context['browserTitle'] : null)) + 
      "</title>\r\n\t" + 
      compiled.blocks['metaTags'](helpers, context, guard, iter, helper) + 
      "\r\n\t<link rel=\"stylesheet\" type=\"text/css\" href=\"" + 
      __escape(guard((context != null) ? context['relative_path'] : null)) + 
      "/assets/client.css?" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['cache-buster'] : null)) + 
      "\" />\r\n\t" + 
      compiled.blocks['linkTags'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t<script>\r\n\t\tvar config = JSON.parse('" + 
      guard((context != null) ? context['configJSON'] : null) + 
      "');\r\n\t\tvar app = {\r\n\t\t\tuser: JSON.parse('" + 
      guard((context != null) ? context['userJSON'] : null) + 
      "')\r\n\t\t};\r\n\t</script>\r\n\r\n\t" + 
      (guard((context != null) ? context['useCustomHTML'] : null) ?
        "\r\n\t" + 
          guard((context != null) ? context['customHTML'] : null) + 
          "\r\n\t" :
        "") + 
      "\r\n\t" + 
      (guard((context != null) ? context['useCustomCSS'] : null) ?
        "\r\n\t<style type=\"text/css\">" + 
          guard((context != null) ? context['customCSS'] : null) + 
          "</style>\r\n\t" :
        "") + 
      "\r\n</head>\r\n\r\n<body class=\"" + 
      __escape(guard((context != null) ? context['bodyClass'] : null)) + 
      " theme-" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['selectedSkin'] : null)) + 
      "\">\r\n\t<nav id=\"menu\" class=\"hidden\">\r\n\t\t<section class=\"menu-profile\">\r\n\t\t\t" + 
      (guard((context != null && context['user'] != null) ? context['user']['uid'] : null) ?
        "\r\n\t\t\t" + 
          (guard((context != null && context['user'] != null) ? context['user']['picture'] : null) ?
            "\r\n\t\t\t<img class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['picture'] : null)) + 
              "\" />\r\n\t\t\t" :
            "\r\n\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t") + 
          "\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
          __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
          "\"></i>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t</section>\r\n\r\n\t\t<section class=\"menu-section\" data-section=\"navigation\">\r\n\t\t\t<h3 class=\"menu-section-title\">[[global:header.navigation]]</h3>\r\n\t\t\t<ul class=\"menu-section-list\"></ul>\r\n\t\t</section>\r\n\r\n\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
        "\r\n\t\t<section class=\"menu-section\" data-section=\"profile\">\r\n\t\t\t<h3 class=\"menu-section-title\">[[global:header.profile]]</h3>\r\n\t\t\t<ul class=\"menu-section-list\" component=\"header/usercontrol\"></ul>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"menu-section\" data-section=\"notifications\">\r\n\t\t\t<h3 class=\"menu-section-title\">\r\n\t\t\t\t[[global:header.notifications]]\r\n\t\t\t\t<span class=\"counter\" component=\"notifications/icon\" data-content=\"0\"></span>\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"menu-section-list notification-list-mobile\" component=\"notifications/list\"></ul>\r\n\t\t\t<p class=\"menu-section-list\"><a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/notifications\">[[notifications:see_all]]</a></p>\r\n\t\t</section>\r\n\r\n\t\t<section class=\"menu-section\" data-section=\"chats\">\r\n\t\t\t<h3 class=\"menu-section-title\">\r\n\t\t\t\t[[global:header.chats]]\r\n\t\t\t\t<i class=\"counter\" component=\"chat/icon\" data-content=\"0\"></i>\r\n\t\t\t</h3>\r\n\t\t\t<ul class=\"menu-section-list chat-list\" component=\"chat/list\"></ul>\r\n\t\t</section>\r\n\t\t" :
        "") + 
      "\r\n\t</nav>\r\n\r\n\t<main id=\"panel\">\r\n\t\t<nav class=\"navbar navbar-default navbar-fixed-top header\" id=\"header-menu\" component=\"navbar\">\r\n\t\t\t<div class=\"load-bar\">\r\n\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t\t<div class=\"bar\"></div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t\t<div class=\"navbar-header\">\r\n\t\t\t\t<button type=\"button\" class=\"navbar-toggle\" id=\"mobile-menu\">\r\n\t\t\t\t\t<span component=\"notifications/icon\" class=\"notification-icon fa fa-fw fa-bell-o\" data-content=\"0\"></span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t</button>\r\n\r\n\t\t\t\t" + 
      (guard((context != null) ? context['brand:logo'] : null) ?
        "\r\n\t\t\t\t<a href=\"" + 
          (guard((context != null) ? context['brand:logo:url'] : null) ?
            __escape(guard((context != null) ? context['brand:logo:url'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/") + 
          "\">\r\n\t\t\t\t\t<img alt=\"" + 
          __escape(guard((context != null) ? context['brand:logo:alt'] : null)) + 
          "\" class=\"" + 
          __escape(guard((context != null) ? context['brand:logo:display'] : null)) + 
          " forum-logo\" src=\"" + 
          __escape(guard((context != null) ? context['brand:logo'] : null)) + 
          "\" />\r\n\t\t\t\t</a>\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['showSiteTitle'] : null) ?
        "\r\n\t\t\t\t<a href=\"" + 
          (guard((context != null) ? context['title:url'] : null) ?
            __escape(guard((context != null) ? context['title:url'] : null)) :
            __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/") + 
          "\">\r\n\t\t\t\t\t<span class=\"navbar-brand forum-title\">" + 
          __escape(guard((context != null) ? context['title'] : null)) + 
          "</span>\r\n\t\t\t\t</a>\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t</div>\r\n\r\n\t\t\t<div id=\"nav-dropdown\" class=\"hidden-xs\">\r\n\t\t\t\t" + 
      (guard((context != null) ? context['maintenanceHeader'] : null) ?
        "\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null) ? context['relative_path'] : null)) + 
          "/login\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-in visible-xs-inline\"></i>\r\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t" :
        "\r\n\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['loggedIn'] : null) ?
            "\r\n\r\n\t\t\t\t<ul id=\"logged-in-menu\" class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t<li class=\"notifications dropdown text-center hidden-xs\" component=\"notifications\">\r\n\t\t\t\t\t\t<a href=\"#\" title=\"[[global:header.notifications]]\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"notif_dropdown\">\r\n\t\t\t\t\t\t\t<i component=\"notifications/icon\" class=\"fa fa-fw fa-bell-o\" data-content=\"" + 
              __escape(guard((context != null && context['unreadCount'] != null) ? context['unreadCount']['notification'] : null)) + 
              "\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"notif_dropdown\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<ul component=\"notifications/list\" class=\"notification-list\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"loading-text\"><i class=\"fa fa-refresh fa-spin\"></i> [[global:notifications.loading]]</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\"><a href=\"#\" class=\"mark-all-read\">[[notifications:mark_all_read]]</a></li>\r\n\t\t\t\t\t\t\t<li class=\"notif-dropdown-link\"><a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/notifications\">[[notifications:see_all]]</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t" + 
              (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
                "" :
                "\r\n\t\t\t\t\t<li class=\"chats dropdown\">\r\n\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" title=\"[[global:header.chats]]\" id=\"chat_dropdown\" component=\"chat/dropdown\">\r\n\t\t\t\t\t\t\t<i component=\"chat/icon\" class=\"fa fa-comment-o fa-fw\"></i> <span class=\"visible-xs-inline\">[[global:header.chats]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"chat_dropdown\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<div component=\"chat/list\" class=\"chat-list\">\r\n\t\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-refresh fa-spin\"></i> [[global:chats.loading]]\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"chat-dropdown-link\"><a href=\"#\" class=\"mark-all-read\" component=\"chats/mark-all-read\">[[modules:chat.mark_all_read]]</a></li>\r\n\t\t\t\t\t\t\t<li class=\"chat-dropdown-link\"><a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/user/" + 
                  __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
                  "/chats\">[[modules:chat.see_all]]</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t") + 
              "\r\n\r\n\t\t\t\t\t<li id=\"user_label\" class=\"dropdown\">\r\n\t\t\t\t\t\t<a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" id=\"user_dropdown\" title=\"[[global:header.profile]]\">\r\n\t\t\t\t\t\t\t<img component=\"header/userpicture\" class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['picture'] : null)) + 
              "\" alt=\"" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "\"" + 
              (guard((context != null && context['user'] != null) ? context['user']['picture'] : null) ?
                "" :
                " style=\"display: none;\"") + 
              " />\r\n\t\t\t\t\t\t\t<div component=\"header/usericon\" class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['icon:bgColor'] : null)) + 
              ";" + 
              (guard((context != null && context['user'] != null) ? context['user']['picture'] : null) ?
                " display: none;\"" :
                "") + 
              "\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t\t\t\t\t<span id=\"user-header-name\" class=\"visible-xs-inline\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<ul id=\"user-control-list\" component=\"header/usercontrol\" class=\"dropdown-menu\" aria-labelledby=\"user_dropdown\">\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a component=\"header/profilelink\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "\">\r\n\t\t\t\t\t\t\t\t\t<i component=\"user/status\" class=\"fa fa-fw fa-circle status " + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['status'] : null)) + 
              "\"></i> <span component=\"header/username\">" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['username'] : null)) + 
              "</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"online\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status online\"></i><span> [[global:online]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"away\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status away\"></i><span> [[global:away]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"dnd\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status dnd\"></i><span> [[global:dnd]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"user-status\" data-status=\"offline\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-circle status offline\"></i><span> [[global:invisible]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a component=\"header/profilelink/edit\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/edit\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-edit\"></i> <span>[[user:edit-profile]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a component=\"header/profilelink/settings\" href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['user'] != null) ? context['user']['userslug'] : null)) + 
              "/settings\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-gear\"></i> <span>[[user:settings]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t" + 
              (guard((context != null) ? context['showModMenu'] : null) ?
                "\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li class=\"dropdown-header\">[[pages:moderator-tools]]</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/flags\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-flag\"></i> <span>[[pages:flagged-content]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/post-queue\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-list-alt\"></i> <span>[[pages:post-queue]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/ip-blacklist\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-ban\"></i> <span>[[pages:ip-blacklist]]</span>\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\r\n\t\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t\t<li role=\"presentation\" class=\"divider\"></li>\r\n\t\t\t\t\t\t\t<li component=\"user/logout\">\r\n\t\t\t\t\t\t\t\t<form method=\"post\" action=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/logout\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"_csrf\" value=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['csrf_token'] : null)) + 
              "\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"noscript\" value=\"true\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-link\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-sign-out\"></i><span> [[global:logout]]</span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\r\n\t\t\t\t</ul>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<ul id=\"logged-out-menu\" class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t" + 
              (guard((context != null) ? context['allowRegistration'] : null) ?
                "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
                  __escape(guard((context != null) ? context['relative_path'] : null)) + 
                  "/register\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil visible-xs-inline\"></i>\r\n\t\t\t\t\t\t\t<span>[[global:register]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/login\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-sign-in visible-xs-inline\"></i>\r\n\t\t\t\t\t\t\t<span>[[global:login]]</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t") + 
          "\r\n\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['searchEnabled'] : null) ?
            "\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right search-menu\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<form id=\"search-form\" class=\"navbar-form navbar-right hidden-xs\" role=\"search\" method=\"GET\">\r\n\t\t\t\t\t\t\t<button id=\"search-button\" type=\"button\" class=\"btn btn-link\"><i class=\"fa fa-search fa-fw\" title=\"[[global:header.search]]\"></i></button>\r\n\t\t\t\t\t\t\t<div class=\"hidden\" id=\"search-fields\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"[[global:search]]\" name=\"query\" value=\"\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\"><i class=\"fa fa-gears fa-fw advanced-search-link\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default hide\">[[global:search]]</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<ul id=\"quick-search-results\" class=\"dropdown-menu quick-search-results hidden\">\r\n\t\t\t\t\t\t\t<ul id=\"quick-search-results\" class=\"quick-search-results\">\r\n" + 
              compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
              "\r\n</ul>\r\n" + 
              (guard((context != null) ? context['multiplePages'] : null) ?
                "\r\n<div class=\"text-center\">\r\n\t<a href=\"" + 
                  __escape(guard((context != null) ? context['url'] : null)) + 
                  "\">\r\n\t\t[[search:see-more-results, " + 
                  __escape(guard((context != null) ? context['matchCount'] : null)) + 
                  "]]\r\n\t</a>\r\n</div>\r\n" :
                "") + 
              "\r\n" + 
              (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
                "" :
                "\r\n<div class=\"text-center no-results\">[[search:no-matches]]</li>\r\n") + 
              "\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"visible-xs\" id=\"search-menu\">\r\n\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['relative_path'] : null)) + 
              "/search\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-search fa-fw\"></i> [[global:search]]\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right hidden-xs\">\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"#\" id=\"reconnect\" class=\"hide\" title=\"Connection to " + 
          __escape(guard((context != null) ? context['title'] : null)) + 
          " has been lost, attempting to reconnect...\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-check\"></i>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<ul id=\"main-nav\" class=\"nav navbar-nav\">\r\n\t\t\t\t\t" + 
          compiled.blocks['navigation'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t") + 
      "\r\n\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</nav>\r\n\t\t<div class=\"container\" id=\"content\">\r\n\t\t\t<noscript>\n    <div class=\"alert alert-danger\">\n        <p>\n            Your browser does not seem to support JavaScript. As a result, your viewing experience will be diminished, and you have been placed in <strong>read-only mode</strong>.\n        </p>\n        <p>\n            Please download a browser that supports JavaScript, or enable it if it's disabled (i.e. NoScript).\n        </p>\n    </div>\n</noscript>\r\n";
  }

  compiled.blocks = {
    'metaTags': function metaTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['metaTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t" + 
          (guard((context != null && context['metaTags'] != null && context['metaTags'][key0] != null) ? context['metaTags'][key0]['content'] : null) ?
            "\r\n\t" + 
              __escape(helper(context, helpers, 'buildMetaTag', [guard(value)])) + 
              "\r\n\t" :
            "") + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'linkTags': function linkTags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['linkTags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return __escape(helper(context, helpers, 'buildLinkTag', [guard(value)])) + 
          "\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li data-tid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['tid'] : null)) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">\r\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">\r\n\t\t" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['user'] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          "\r\n\t\t<span class=\"quick-search-title\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "</span>\r\n\t\t<br/>\r\n\t\t<p class=\"snippet\">\r\n\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['snippet'] : null)) + 
          "\r\n\t\t</p>\r\n\t\t<small class=\"post-info pull-right\">\r\n\t\t\t<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['category'] : null)])) + 
          "\"><i style=\"color:" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['color'] : null)) + 
          ";\" class=\"fa " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['icon'] : null)) + 
          " fa-stack-1x\"></i></span> " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          " &bull;\r\n\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n\t\t</small>\r\n\t </a>\r\n</li>\r\n" + 
          (index === length - 1 ?
            "" :
            "\r\n<li role=\"separator\" class=\"divider\"></li>\r\n") + 
          "\r\n";
      }, function alt() {
        return "";
      });
    },
    'navigation': function navigation(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['navigation'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t" + 
          (helper(context, helpers, 'displayMenuItem', [context, index]) ?
            "\r\n\t\t\t\t\t<li class=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['class'] : null)) + 
              "\">\r\n\t\t\t\t\t\t<a class=\"navigation-link\" href=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['route'] : null)) + 
              "\" title=\"" + 
              __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['title'] : null)) + 
              "\" " + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null) ?
                "id=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['id'] : null)) + 
                  "\"" :
                "") + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null && context['navigation'][key0]['properties'] != null) ? context['navigation'][key0]['properties']['targetBlank'] : null) ?
                " target=\"_blank\"" :
                "") + 
              ">\r\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null) ?
                "\r\n\t\t\t\t\t\t\t<i class=\"fa fa-fw " + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['iconClass'] : null)) + 
                  "\" data-content=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['content'] : null)) + 
                  "\"></i>\r\n\t\t\t\t\t\t\t" :
                "") + 
              "\r\n\r\n\t\t\t\t\t\t\t" + 
              (guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null) ?
                "\r\n\t\t\t\t\t\t\t<span class=\"" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['textClass'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['navigation'] != null && context['navigation'][key0] != null) ? context['navigation'][key0]['text'] : null)) + 
                  "</span>\r\n\t\t\t\t\t\t\t" :
                "") + 
              "\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
