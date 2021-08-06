
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
        "\r\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\r\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\r\n</ol>\r\n" :
        "") + 
      "\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-12\">\r\n\t\t<h2 class=\"h4\">\r\n\t\t\t" + 
      __escape(guard((context != null) ? context['target_readable'] : null)) + 
      "\r\n\t\t\t<small><span class=\"timeago\" title=\"" + 
      __escape(guard((context != null) ? context['datetimeISO'] : null)) + 
      "\"></span></small>\r\n\t\t</h2>\r\n\r\n\t\t<hr />\r\n\r\n\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['post'] : null) ?
        "\r\n\t\t<div class=\"media\">\r\n\t\t\t<div class=\"media-left\">\r\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['target'] != null) ? context['target']['user'] : null), "lg", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"media-body\">\r\n\t\t\t\t<h4 class=\"media-heading\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['target'] != null && context['target']['user'] != null) ? context['target']['user']['username'] : null)) + 
          "</a></h4>\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['content'] : null)) + 
          "\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['user'] : null) ?
        "\r\n\t\t<div class=\"media\">\r\n\t\t\t<div class=\"media-left\">\r\n\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null) ? context['target'] : null), "lg", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"media-body\">\r\n\t\t\t\t<h4 class=\"media-heading\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['username'] : null)) + 
          "</a></h4>\r\n\t\t\t\t<p class=\"lead\">\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">[[flags:user-view]]</a> |\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "/edit\">[[flags:user-edit]]</a>\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['empty'] : null) ?
        "\r\n\t\t<div class=\"alert alert-warning\">[[flags:target-purged]]</div>\r\n\t\t" :
        "") + 
      "\r\n\r\n\t\t<hr />\r\n\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<form role=\"form\" id=\"attributes\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<h2 class=\"h4\">[[flags:reports]]</h2>\r\n\t\t\t\t\t\t<ul class=\"list-group\" component=\"flag/reports\">\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['reports'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<h2 class=\"h4\" for=\"state\">[[flags:state]]</h2>\r\n\t\t\t\t\t\t<select class=\"form-control\" id=\"state\" name=\"state\" disabled>\r\n\t\t\t\t\t\t\t<option value=\"open\">[[flags:state-open]]</option>\r\n\t\t\t\t\t\t\t<option value=\"wip\">[[flags:state-wip]]</option>\r\n\t\t\t\t\t\t\t<option value=\"resolved\">[[flags:state-resolved]]</option>\r\n\t\t\t\t\t\t\t<option value=\"rejected\">[[flags:state-rejected]]</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<h2 class=\"h4\" for=\"assignee\">[[flags:assignee]]</h2>\r\n\t\t\t\t\t\t<select class=\"form-control\" id=\"assignee\" name=\"assignee\" disabled>\r\n\t\t\t\t\t\t\t<option value=\"\">[[flags:no-assignee]]</option>\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['assignees'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-block btn-primary\" data-action=\"update\">[[flags:update]]</button>\r\n\t\t\t\t</form>\r\n\r\n\t\t\t\t<hr />\r\n\r\n\t\t\t\t<form role=\"form\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<h2 class=\"h4\" for=\"note\">[[flags:notes]]</h2>\r\n\t\t\t\t\t\t<textarea id=\"note\" class=\"form-control\"></textarea>\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-block btn-primary\" data-action=\"appendNote\">[[flags:add-note]]</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\r\n\t\t\t\t<div component=\"flag/notes\">\r\n\t\t\t\t\t" + 
      (guard((context != null && context['notes'] != null) ? context['notes']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t\t<div class=\"alert alert-success text-center\">[[flags:no-notes]]</div>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t" + 
      compiled.blocks['notes'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t<h2 class=\"h4\">[[flags:quick-actions]]</h2>\r\n\r\n\t\t\t\t<a class=\"btn btn-default btn-block\" href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['type_path'] : null)) + 
      "/" + 
      __escape(guard((context != null) ? context['targetId'] : null)) + 
      "\">\r\n\t\t\t\t\t<i class=\"fa fa-external-link\"></i>\r\n\t\t\t\t\t[[flags:go-to-target]]\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t<a class=\"btn btn-default btn-block\" href=\"#\" data-action=\"assign\">\r\n\t\t\t\t\t<i class=\"fa fa-id-card-o\"></i>\r\n\t\t\t\t\t[[flags:assign-to-me]]\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t" + 
      (guard((context != null && context['type_bool'] != null) ? context['type_bool']['post'] : null) ?
        "\r\n\t\t\t\t" + 
          (guard((context != null && context['target'] != null) ? context['target']['deleted'] : null) ?
            "\r\n\t\t\t\t<a class=\"btn btn-danger btn-block\" href=\"#\" data-action=\"purge-post\"><i class=\"fa fa-trash\"></i> [[flags:purge-post]]</a>\r\n\t\t\t\t<a class=\"btn btn-success btn-block\" href=\"#\" data-action=\"restore-post\"><i class=\"fa fa-reply\"></i><i class=\"fa fa-trash\"></i> [[flags:restore-post]]</a>\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<a class=\"btn btn-danger btn-block\" href=\"#\" data-action=\"delete-post\"><i class=\"fa fa-trash\"></i> [[flags:delete-post]]</a>\r\n\t\t\t\t") + 
          "\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t" + 
      (guard((context != null && context['target'] != null) ? context['target']['uid'] : null) ?
        "\r\n\t\t\t\t<div class=\"btn-group btn-block\" data-uid=\"" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-block dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t<i class=\"fa fa-street-view\"></i>\r\n\t\t\t\t\t\t[[flags:flagged-user]]\r\n\t\t\t\t\t\t<span class=\"caret\"></span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/uid/" + 
          __escape(guard((context != null && context['target'] != null) ? context['target']['uid'] : null)) + 
          "\">[[flags:view-profile]]</a></li>\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t\t<li><a href=\"#\" data-action=\"chat\">[[flags:start-new-chat]]</a></li>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t<li role=\"separator\" class=\"divider\"></li>\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['ban'] : null) ?
            "<li><a href=\"#\" data-action=\"ban\">[[user:ban_account]]</a></li>" :
            "") + 
          "\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['admin:users'] : null) ?
            "\r\n\t\t\t\t\t\t<li><a href=\"#\" data-action=\"delete-account\">[[user:delete_account_as_admin]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" data-action=\"delete-content\">[[user:delete_content]]</a></li>\r\n\t\t\t\t\t\t<li><a href=\"#\" data-action=\"delete-all\">[[user:delete_all]]</a></li>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t\t<hr />\r\n\r\n\t\t\t\t<h2 class=\"h4\">[[flags:history]]</h2>\r\n\t\t\t\t<div component=\"flag/history\">\r\n\t\t\t\t\t" + 
      (guard((context != null && context['history'] != null) ? context['history']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t\t<div class=\"alert alert-success text-center\">[[flags:no-history]]</div>\r\n\t\t\t\t\t") + 
      "\r\n\t\t\t\t\t" + 
      compiled.blocks['history'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
  }

  compiled.blocks = {
    'breadcrumbs': function breadcrumbs(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['breadcrumbs'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<li" + 
          (index === length - 1 ?
            " component=\"breadcrumb/current\"" :
            "") + 
          " itemscope=\"itemscope\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\" " + 
          (index === length - 1 ?
            "class=\"active\"" :
            "") + 
          ">\r\n\t\t<meta itemprop=\"position\" content=\"" + 
          __escape(index) + 
          "\" />\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "<a href=\"" + 
              __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['url'] : null)) + 
              "\" itemprop=\"item\">") + 
          "\r\n\t\t\t<span itemprop=\"name\">\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['breadcrumbs'] != null && context['breadcrumbs'][key0] != null) ? context['breadcrumbs'][key0]['text'] : null)) + 
          "\r\n\t\t\t\t" + 
          (index === length - 1 ?
            "\r\n\t\t\t\t" + 
              (guard((context != null) ? context['feeds:disableRSS'] : null) ?
                "" :
                "\r\n\t\t\t\t" + 
                  (guard((context != null) ? context['rssFeedUrl'] : null) ?
                    "<a target=\"_blank\" href=\"" + 
                      __escape(guard((context != null) ? context['rssFeedUrl'] : null)) + 
                      "\" itemprop=\"item\"><i class=\"fa fa-rss-square\"></i></a>" :
                    "")) + 
              "\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</span>\r\n\t\t" + 
          (index === length - 1 ?
            "" :
            "</a>") + 
          "\r\n\t</li>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'reports': function reports(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['reports'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null && context['reports'][key0]['reporter'] != null) ? context['reports'][key0]['reporter']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['reporter'] : null), "sm", guard((context != null) ? context['false'] : null)])) + 
          "</a>\r\n\t\t\t\t\t\t\t\t&ndash; <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n\t\t\t\t\t\t\t\t<blockquote><em>" + 
          __escape(guard((context != null && context['reports'] != null && context['reports'][key0] != null) ? context['reports'][key0]['value'] : null)) + 
          "</em></blockquote>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'assignees': function assignees(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['assignees'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['assignees'] != null && context['assignees'][key0] != null) ? context['assignees'][key0]['uid'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['assignees'] != null && context['assignees'][key0] != null) ? context['assignees'][key0]['username'] : null)) + 
          "</option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'notes': function notes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<div class=\"media\" data-datetime=\"" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['datetime'] : null)) + 
          "\" data-index=\"" + 
          __escape(index) + 
          "\">\r\n\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['user'] : null), "md", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"media-heading\">\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null && context['notes'][key0]['user'] != null) ? context['notes'][key0]['user']['username'] : null)) + 
          "</a>\r\n\t\t\t\t\t\t\t\t<small><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['datetimeISO'] : null)) + 
          "\"></span></small>\r\n\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['notes'] != null && context['notes'][key0] != null) ? context['notes'][key0]['content'] : null)) + 
          "\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-right\">\r\n\t\t\t\t\t\t\t<a href=\"#\" data-action=\"prepare-edit\"><i class=\"fa fa-pencil\"></i></a>\r\n\t\t\t\t\t\t\t<a href=\"#\" data-action=\"delete-note\"><i class=\"fa fa-trash text-danger\"></i></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'history': function history(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['history'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t<div class=\"media\">\r\n\t\t\t\t\t\t<div class=\"media-left\">\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(helper(context, helpers, 'buildAvatar', [guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['user'] : null), "md", guard((context != null) ? context['false'] : null), "media-object"])) + 
          "</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"media-body\">\r\n\t\t\t\t\t\t\t<h4 class=\"media-heading\">\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['user'] != null) ? context['history'][key0]['user']['username'] : null)) + 
          "</a>\r\n\t\t\t\t\t\t\t\t<small><span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['datetimeISO'] : null)) + 
          "\"></span></small>\r\n\t\t\t\t\t\t\t</h4>\r\n\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['fields'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"label label-primary\">[[flags:" + 
              __escape(key) + 
              "]]</span>" + 
              (guard(value) ?
                " &rarr; <span class=\"label label-default\">" + 
                  __escape(guard(value)) + 
                  "</span>" :
                "") + 
              "\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['history'] != null && context['history'][key0] != null) ? context['history'][key0]['meta'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\r\n\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t<span class=\"label label-" + 
              guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['labelClass'] : null) + 
              "\">" + 
              guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['key'] : null) + 
              "</span>" + 
              (guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['value'] : null) ?
                " &rarr; <span class=\"label label-default\">" + 
                  guard((context != null && context['history'] != null && context['history'][key0] != null && context['history'][key0]['meta'] != null && context['history'][key0]['meta'][key1] != null) ? context['history'][key0]['meta'][key1]['value'] : null) + 
                  "</span>" :
                "") + 
              "\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
