
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
    return (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\r\n\r\n<div class=\"chats-full\">\r\n\t<div component=\"chat/nav-wrapper\" data-loaded=\"" + 
      (guard((context != null) ? context['roomId'] : null) ?
        "1" :
        "0") + 
      "\">\r\n\t\t<div class=\"chat-search dropdown\">\r\n\t\t\t<input class=\"form-control\" type=\"text\" component=\"chat/search\" placeholder=\"[[users:enter_username]]\" data-toggle=\"dropdown\" />\r\n\t\t\t<ul component=\"chat/search/list\" class=\"dropdown-menu\"></ul>\r\n\t\t</div>\r\n\r\n\t\t<ul component=\"chat/recent\" class=\"chats-list\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\r\n\t\t\t" + 
      compiled.blocks['rooms'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t</ul>\r\n\t</div>\r\n\r\n\t<div component=\"chat/main-wrapper\">\r\n\t\t" + 
      (guard((context != null) ? context['roomId'] : null) ?
        "\n<div component=\"chat/messages\" class=\"expanded-chat\" data-roomid=\"" + 
          __escape(guard((context != null) ? context['roomId'] : null)) + 
          "\">\n\t<div component=\"chat/header\">\n\t\t<button type=\"button\" class=\"close\" data-action=\"pop-out\"><span aria-hidden=\"true\"><i class=\"fa fa-compress\"></i></span><span class=\"sr-only\">[[modules:chat.pop-out]]</span></button>\n\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" data-action=\"close\"><span aria-hidden=\"true\">&times;</span></button>\n\n\t\t<div class=\"dropdown pull-right\">\n\t\t\t<button class=\"close\" data-toggle=\"dropdown\" component=\"chat/controlsToggle\"><i class=\"fa fa-gear\"></i></button>\n\t\t\t<ul class=\"dropdown-menu dropdown-menu-right pull-right\" component=\"chat/controls\">\n\t\t\t\t<li class=\"dropdown-header\">[[modules:chat.options]]</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" data-action=\"members\"><i class=\"fa fa-fw fa-cog\"></i> [[modules:chat.manage-room]]</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" data-action=\"rename\"><i class=\"fa fa-fw fa-edit\"></i> [[modules:chat.rename-room]]</a>\n\t\t\t\t</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"#\" data-action=\"leave\"><i class=\"fa fa-fw fa-sign-out\"></i> [[modules:chat.leave]]</a>\n\t\t\t\t</li>\n\t\t\t\t" + 
          (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
            "\n\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\n\t\t\t\t<li class=\"dropdown-header\">[[modules:chat.in-room]]</li>\n\t\t\t\t" + 
              compiled.blocks['users'](helpers, context, guard, iter, helper) + 
              "\n\t\t\t\t" :
            "") + 
          "\n\t\t\t</ul>\n\t\t</div>\n\t\t<span class=\"members\">\n\t\t\t[[modules:chat.chatting_with]]:\n\t\t\t" + 
          iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/uid/" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
              "</a>" + 
              (index === length - 1 ?
                "" :
                ",") + 
              "\n\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t</span>\n\t</div>\n\t<div component=\"chat/messages/scroll-up-alert\" class=\"scroll-up-alert alert alert-info\" role=\"button\">[[modules:chat.scroll-up-alert]]</div>\n\t<ul class=\"chat-content\">\n\t\t" + 
          compiled.blocks['messages'](helpers, context, guard, iter, helper) + 
          "\n\t</ul>\n\t<div component=\"chat/composer\">\n\t\t<textarea component=\"chat/input\" placeholder=\"[[modules:chat.placeholder]]\" class=\"form-control chat-input mousetrap\" rows=\"2\"></textarea>\n\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"send\"><i class=\"fa fa-fw fa-2x fa-paper-plane\"></i></button>\n\t\t<span component=\"chat/message/remaining\">" + 
          __escape(guard((context != null) ? context['maximumChatMessageLength'] : null)) + 
          "</span>\n\t</div>\n</div>\n" :
        "\n<div class=\"alert alert-info\">\n\t[[modules:chat.no-messages]]\n</div>\n") + 
      "\r\n\t</div>\r\n</div>\r\n";
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
    'rooms': function rooms(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['rooms'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<li component=\"chat/recent/room\" data-roomid=\"" + 
          __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomId'] : null)) + 
          "\" class=\"" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['unread'] : null) ?
            "unread" :
            "") + 
          "\">\r\n\t" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['uid'] : null) ?
            "\r\n\t<div class=\"chat-image\" data-username=\"" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['username'] : null)) + 
              "\" data-uid=\"" + 
              __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['uid'] : null)) + 
              "\">\r\n\t\t" + 
              (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['picture'] : null) ?
                "\r\n\t\t<img class=\"user-avatar\" src=\"" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['picture'] : null)) + 
                  "\" title=\"" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['username'] : null)) + 
                  "\">\r\n\t\t" :
                "\r\n\t\t<div class=\"user-icon\" style=\"background-color: " + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['icon:bgColor'] : null)) + 
                  ";\" title=\"" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['username'] : null)) + 
                  "\">" + 
                  __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null && context['rooms'][key0]['lastUser'] != null) ? context['rooms'][key0]['lastUser']['icon:text'] : null)) + 
                  "</div>\r\n\t\t") + 
              "\r\n\t</div>\r\n\t" :
            "\r\n\t[[modules:chat.no-users-in-room]]\r\n\t") + 
          "\r\n\t<div class=\"chat-body\">\r\n\t\t<div class=\"chat-main\">\r\n\t\t\t<div class=\"chat-room-name\">\r\n\t\t\t\t<span component=\"chat/title\">" + 
          (guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null) ?
            __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['roomName'] : null)) :
            __escape(guard((context != null && context['rooms'] != null && context['rooms'][key0] != null) ? context['rooms'][key0]['usernames'] : null))) + 
          "</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t</div>\r\n</li>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t<li>\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['users'] != null) ? context['users'][key0] : null), "sm", guard((context != null) ? context['true'] : null)])) + 
          " " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\n\t\t\t\t</li>\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'messages': function messages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['messages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li component=\"chat/message\" class=\"chat-message clear" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['deleted'] : null) ?
            " deleted" :
            "") + 
          "\" data-index=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['index'] : null)) + 
          "\" data-mid=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['messageId'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['fromuid'] : null)) + 
          "\" data-self=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null)) + 
          "\" data-break=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['newSet'] : null)) + 
          "\" data-timestamp=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestamp'] : null)) + 
          "\">\r\n\t<div class=\"message-header\">\r\n\t\t<a class=\"chat-avatar\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
          "\">\r\n\t\t\t" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['picture'] : null) ?
            "\r\n\t\t\t<img class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['picture'] : null)) + 
              "\">\r\n\t\t\t" :
            "\r\n\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t") + 
          "\r\n\t\t</a>\r\n\t\t<strong><span class=\"chat-user\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['displayname'] : null)) + 
          "</a></span></strong>\r\n\t\t" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['banned'] : null) ?
            "\r\n\t\t<span class=\"label label-danger\">[[user:banned]]</span>\r\n\t\t" :
            "") + 
          "\r\n\t\t" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null && context['messages'][key0]['fromUser'] != null) ? context['messages'][key0]['fromUser']['deleted'] : null) ?
            "\r\n\t\t<span class=\"label label-danger\">[[user:deleted]]</span>\r\n\t\t" :
            "") + 
          "\r\n\t\t<span class=\"chat-timestamp timeago\" title=\"" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n\t\t" + 
          (guard((context != null) ? context['isAdminOrGlobalMod'] : null) ?
            "\r\n\t\t<small class=\"chat-ip pull-right\" title=\"[[modules:chat.show-ip]]\"><i class=\"fa fa-info-circle chat-ip-button\"></i></small>\r\n\t\t" :
            "") + 
          "\r\n\t</div>\r\n\t<div component=\"chat/message/body\" class=\"message-body\">\r\n\t\t" + 
          (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['edited'] : null) ?
            "\r\n\t\t<small class=\"text-muted pull-right\" title=\"[[global:edited]] " + 
              __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['editedISO'] : null)) + 
              "\"><i class=\"fa fa-edit\"></i></span></small>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChatMessageEditing'] : null) ?
            "" :
            "\r\n\t\t" + 
              (guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['self'] : null) ?
                "\r\n\t\t<div class=\"pull-right btn-group controls\">\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"edit\"><i class=\"fa fa-pencil\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"delete\"><i class=\"fa fa-times\"></i></button>\r\n\t\t\t<button class=\"btn btn-xs btn-link\" data-action=\"restore\"><i class=\"fa fa-repeat\"></i></button>\r\n\t\t</div>\r\n\t\t" :
                "") + 
              "\r\n\t\t") + 
          "\r\n\r\n\t\t" + 
          __escape(guard((context != null && context['messages'] != null && context['messages'][key0] != null) ? context['messages'][key0]['content'] : null)) + 
          "\r\n\t</div>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
