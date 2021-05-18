
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
    return "<div id=\"chat-modal\" class=\"chat-modal hide\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Chat\" aria-hidden=\"true\" data-backdrop=\"none\">\r\n\t<div class=\"modal-dialog\">\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t<button id=\"chat-close-btn\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\"><i class=\"fa fa-times\"></i></span></button>\r\n\t\t\t\t<button type=\"button\" class=\"close hidden-xs hidden-sm\" data-action=\"maximize\"><span aria-hidden=\"true\"><i class=\"fa fa-expand\"></i></span><span class=\"sr-only\">[[modules:chat.maximize]]</span></button>\r\n\r\n\t\t\t\t<div class=\"dropdown pull-right\">\r\n\t\t\t\t\t<button class=\"close\" data-toggle=\"dropdown\" component=\"chat/controlsToggle\"><i class=\"fa fa-gear\"></i></button>\r\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right pull-right\" component=\"chat/controls\">\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\r\n\t\t\t\t\t\t<li class=\"dropdown-header\">[[modules:chat.in-room]]</li>\r\n\t\t\t\t\t\t" + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t\t<li class=\"dropdown-header\">[[modules:chat.options]]</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\" data-action=\"members\"><i class=\"fa fa-fw fa-cog\"></i> [[modules:chat.manage-room]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\" data-action=\"rename\"><i class=\"fa fa-fw fa-edit\"></i> [[modules:chat.rename-room]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\" data-action=\"leave\"><i class=\"fa fa-fw fa-sign-out\"></i> [[modules:chat.leave]]</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<h4 component=\"chat/room/name\">" + 
      (guard((context != null) ? context['roomName'] : null) ?
        __escape(guard((context != null) ? context['roomName'] : null)) :
        __escape(guard((context != null) ? context['usernames'] : null))) + 
      "</h4>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t<ul class=\"chat-content\" component=\"chat/messages\">\r\n\t\t\t\t\t" + 
      compiled.blocks['messages'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</ul>\r\n\r\n\t\t\t\t<div component=\"chat/composer\">\r\n\t\t\t\t\t<textarea component=\"chat/input\" placeholder=\"[[modules:chat.placeholder]]\" class=\"form-control chat-input mousetrap\" rows=\"1\"></textarea>\r\n\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"send\"><i class=\"fa fa-fw fa-2x fa-paper-plane\"></i></button>\r\n\t\t\t\t\t<span component=\"chat/message/remaining\">" + 
      __escape(guard((context != null) ? context['maximumChatMessageLength'] : null)) + 
      "</span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['picture'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t<img class=\"avatar avatar-sm\" component=\"user/picture\" src=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['picture'] : null)) + 
              "\" itemprop=\"image\" />\r\n\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t<div class=\"avatar avatar-sm\" component=\"user/picture\" style=\"background-color: " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['icon:text'] : null)) + 
              "</div>") + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t";
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
