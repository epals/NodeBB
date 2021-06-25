
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
      "\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t" + 
      (guard((context != null) ? context['false'] : null) ?
        "\r\n\t\t\t\t" + 
          (guard((context != null) ? context['allowUserHomePage'] : null) ?
            "\r\n\t\t\t\t<h4>[[user:select-homepage]]</h4>\r\n\t\t\t\t<div class=\"user-setting\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label for=\"dailyDigestFreq\">[[user:homepage]]</label>\r\n\t\t\t\t\t\t<select class=\"form-control\" data-property=\"homePageRoute\">\r\n\t\t\t\t\t\t\t<option value=\"none\">None</option>\r\n\t\t\t\t\t\t\t" + 
              compiled.blocks['homePageRoutes'](helpers, context, guard, iter, helper) + 
              "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t<p class=\"help-block\">[[user:homepage_description]]</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"homePageCustom\" class=\"form-group\" style=\"display: none;\">\r\n\t\t\t\t\t\t<label for=\"homePageCustom\">[[user:custom_route]]</label>\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" data-property=\"homePageCustom\" id=\"homePageCustom\" value=\"" + 
              __escape(guard((context != null && context['settings'] != null) ? context['settings']['homePageRoute'] : null)) + 
              "\"/>\r\n\t\t\t\t\t\t<p class=\"help-block\">[[user:custom_route_help]]</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<h4>[[global:privacy]]</h4>\r\n\t\t\t<div class=\"user-setting\">\r\n\t\t\t\t" + 
      (guard((context != null) ? context['hideEmail'] : null) ?
        "" :
        "\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"showemail\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['showemail'] : null) ?
            "checked " :
            "") + 
          "/><i class=\"input-helper\"></i> <strong>[[user:show_email]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t") + 
      "\r\n\t\t\t\t" + 
      (guard((context != null) ? context['hideFullname'] : null) ?
        "" :
        "\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"showfullname\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['showfullname'] : null) ?
            "checked" :
            "") + 
          "/><i class=\"input-helper\"></i> <strong>[[user:show_fullname]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t") + 
      "\r\n\r\n\t\t\t\t" + 
      (guard((context != null && context['config'] != null) ? context['config']['disableChat'] : null) ?
        "" :
        "\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"restrictChat\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['restrictChat'] : null) ?
            "checked" :
            "") + 
          "/><i class=\"input-helper\"></i> <strong>[[user:restrict_chats]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t") + 
      "\r\n\t\t\t</div>\r\n\r\n\t\t\t" + 
      (guard((context != null) ? context['false'] : null) ?
        "\r\n\t\t\t<h4>[[user:browsing]]</h4>\r\n\t\t\t<div class=\"user-setting\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"openOutgoingLinksInNewTab\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['openOutgoingLinksInNewTab'] : null) ?
            "checked" :
            "") + 
          "/><i class=\"input-helper\"></i> <strong>[[user:open_links_in_new_tab]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t" + 
          (guard((context != null) ? context['inTopicSearchAvailable'] : null) ?
            "\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"topicSearchEnabled\" " + 
              (guard((context != null && context['settings'] != null) ? context['settings']['topicSearchEnabled'] : null) ?
                "checked" :
                "") + 
              "/><i class=\"input-helper\"></i> <strong>[[user:enable_topic_searching]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<p class=\"help-block\">[[user:topic_search_help]]</p>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"updateUrlWithPostIndex\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['updateUrlWithPostIndex'] : null) ?
            "checked" :
            "") + 
          "/> <strong>[[user:update_url_with_post_index]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"scrollToMyPost\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['scrollToMyPost'] : null) ?
            "checked" :
            "") + 
          "/><i class=\"input-helper\"></i> <strong>[[user:scroll_to_my_post]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\r\n\r\n\t\t\t" + 
      (guard((context != null) ? context['disableEmailSubscriptions'] : null) ?
        "" :
        "\r\n\t\t\t<h4>[[global:email]]</h4>\r\n\t\t\t<div class=\"user-setting\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"dailyDigestFreq\">[[user:digest_label]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"dailyDigestFreq\" data-property=\"dailyDigestFreq\" autocomplete=\"off\">\r\n\t\t\t\t\t\t" + 
          compiled.blocks['dailyDigestFreqOptions'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<p class=\"help-block\">[[user:digest_description]]</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t" + 
      (guard((context != null) ? context['false'] : null) ?
        "\r\n\t\t\t<h4>[[topic:watch]]</h4>\r\n\t\t\t<div class=\"user-setting\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"followTopicsOnCreate\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['followTopicsOnCreate'] : null) ?
            "checked " :
            "") + 
          "/><i class=\"input-helper\"></i> <strong>[[user:follow_topics_you_create]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"followTopicsOnReply\" " + 
          (guard((context != null && context['settings'] != null) ? context['settings']['followTopicsOnReply'] : null) ?
            "checked" :
            "") + 
          "/><i class=\"input-helper\"></i> <strong>[[user:follow_topics_you_reply_to]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label>[[user:default-category-watch-state]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" data-property=\"categoryWatchState\">\r\n\t\t\t\t\t\t<option value=\"watching\" " + 
          (guard((context != null && context['categoryWatchState'] != null) ? context['categoryWatchState']['watching'] : null) ?
            "selected" :
            "") + 
          ">[[category:watching]]</option>\r\n\t\t\t\t\t\t<option value=\"notwatching\" " + 
          (guard((context != null && context['categoryWatchState'] != null) ? context['categoryWatchState']['notwatching'] : null) ?
            "selected" :
            "") + 
          ">[[category:not-watching]]</option>\r\n\t\t\t\t\t\t<option value=\"ignoring\" " + 
          (guard((context != null && context['categoryWatchState'] != null) ? context['categoryWatchState']['ignoring'] : null) ?
            "selected" :
            "") + 
          ">[[category:ignoring]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<h4>[[global:pagination]]</h4>\r\n\t\t\t<div class=\"user-setting\">\r\n\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t<label>\r\n\t\t\t\t\t\t<input type=\"checkbox\" data-property=\"usePagination\" " + 
      (guard((context != null && context['settings'] != null) ? context['settings']['usePagination'] : null) ?
        "checked" :
        "") + 
      "><i class=\"input-helper\"></i> <strong>[[user:paginate_description]]</strong>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"topicsPerPage\">[[user:topics_per_page]] ([[user:max_items_per_page, " + 
      __escape(guard((context != null) ? context['maxTopicsPerPage'] : null)) + 
      "]])</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" data-property=\"topicsPerPage\" value=\"" + 
      __escape(guard((context != null && context['settings'] != null) ? context['settings']['topicsPerPage'] : null)) + 
      "\">\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"postsPerPage\">[[user:posts_per_page]] ([[user:max_items_per_page, " + 
      __escape(guard((context != null) ? context['maxPostsPerPage'] : null)) + 
      "]])</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" data-property=\"postsPerPage\" value=\"" + 
      __escape(guard((context != null && context['settings'] != null) ? context['settings']['postsPerPage'] : null)) + 
      "\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<h4>[[global:language]]</h4>\r\n\t\t\t<div class=\"user-setting\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"form-group col-lg-12\">\r\n\t\t\t\t\t\t<select data-property=\"userLang\" class=\"form-control\">\r\n\t\t\t\t\t\t\t" + 
      compiled.blocks['languages'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\r\n\t\t\t\t" + 
          (guard((context != null) ? context['isSelf'] : null) ?
            "\r\n\t\t\t\t<label>[[user:acp_language]]</label>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"form-group col-lg-12\">\r\n\t\t\t\t\t\t<select data-property=\"acpLang\" class=\"form-control\">\r\n\t\t\t\t\t\t\t" + 
              compiled.blocks['acpLanguages'](helpers, context, guard, iter, helper) + 
              "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t" :
        "") + 
      "\r\n\t\t\t</div>\r\n\r\n\t\t\t" + 
      (guard((context != null) ? context['false'] : null) ?
        "\r\n\t\t\t<h4>[[user:notifications]]</h4>\r\n\t\t\t<div class=\"user-setting\">\r\n\t\t\t\t" + 
          compiled.blocks['notificationSettings'](helpers, context, guard, iter, helper) + 
          "\r\n\r\n\t\t\t\t<label for=\"upvote-notif-freq\">[[user:upvote-notif-freq]]</label>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"form-group col-xs-12\">\r\n\t\t\t\t\t\t<select class=\"form-control\" id=\"upvote-notif-freq\" name=\"upvote-notif-freq\" data-property=\"upvoteNotifFreq\">\r\n\t\t\t\t\t\t\t" + 
          compiled.blocks['upvoteNotifFreq'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      compiled.blocks['customSettings'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"form-actions\">\r\n\t\t<a id=\"submitBtn\" href=\"#\" class=\"btn btn-primary\">[[global:save_changes]]</a>\r\n\t</div>\r\n</div>";
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
    'homePageRoutes': function homePageRoutes(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['homePageRoutes'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['homePageRoutes'] != null && context['homePageRoutes'][key0] != null) ? context['homePageRoutes'][key0]['route'] : null)) + 
          "\" " + 
          (guard((context != null && context['homePageRoutes'] != null && context['homePageRoutes'][key0] != null) ? context['homePageRoutes'][key0]['selected'] : null) ?
            "selected=\"1\"" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['homePageRoutes'] != null && context['homePageRoutes'][key0] != null) ? context['homePageRoutes'][key0]['name'] : null)) + 
          "</option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'dailyDigestFreqOptions': function dailyDigestFreqOptions(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['dailyDigestFreqOptions'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['dailyDigestFreqOptions'] != null && context['dailyDigestFreqOptions'][key0] != null) ? context['dailyDigestFreqOptions'][key0]['value'] : null)) + 
          "\" " + 
          (guard((context != null && context['dailyDigestFreqOptions'] != null && context['dailyDigestFreqOptions'][key0] != null) ? context['dailyDigestFreqOptions'][key0]['selected'] : null) ?
            "selected=\"1\"" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['dailyDigestFreqOptions'] != null && context['dailyDigestFreqOptions'][key0] != null) ? context['dailyDigestFreqOptions'][key0]['name'] : null)) + 
          "</option>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'languages': function languages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['languages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          "\" " + 
          (guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['name'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['languages'] != null && context['languages'][key0] != null) ? context['languages'][key0]['code'] : null)) + 
          ")</option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'acpLanguages': function acpLanguages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['acpLanguages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['code'] : null)) + 
          "\" " + 
          (guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">" + 
          __escape(guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['name'] : null)) + 
          " (" + 
          __escape(guard((context != null && context['acpLanguages'] != null && context['acpLanguages'][key0] != null) ? context['acpLanguages'][key0]['code'] : null)) + 
          ")</option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'notificationSettings': function notificationSettings(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['notificationSettings'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t<label>" + 
          __escape(guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['label'] : null)) + 
          "</label>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"form-group col-xs-12\">\r\n\t\t\t\t\t\t<select class=\"form-control\" data-property=\"" + 
          __escape(guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['name'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t<option value=\"none\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['none'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:none]]</option>\r\n\t\t\t\t\t\t\t<option value=\"notification\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['notification'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:notification_only]]</option>\r\n\t\t\t\t\t\t\t<option value=\"email\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['email'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:email_only]]</option>\r\n\t\t\t\t\t\t\t<option value=\"notificationemail\" " + 
          (guard((context != null && context['notificationSettings'] != null && context['notificationSettings'][key0] != null) ? context['notificationSettings'][key0]['notificationemail'] : null) ?
            "selected" :
            "") + 
          ">[[notifications:notification_and_email]]</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'upvoteNotifFreq': function upvoteNotifFreq(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['upvoteNotifFreq'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['upvoteNotifFreq'] != null && context['upvoteNotifFreq'][key0] != null) ? context['upvoteNotifFreq'][key0]['name'] : null)) + 
          "\" " + 
          (guard((context != null && context['upvoteNotifFreq'] != null && context['upvoteNotifFreq'][key0] != null) ? context['upvoteNotifFreq'][key0]['selected'] : null) ?
            "selected" :
            "") + 
          ">\r\n\t\t\t\t\t\t\t\t[[user:upvote-notif-freq." + 
          __escape(guard((context != null && context['upvoteNotifFreq'] != null && context['upvoteNotifFreq'][key0] != null) ? context['upvoteNotifFreq'][key0]['name'] : null)) + 
          "]]\r\n\t\t\t\t\t\t\t</option>\r\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'customSettings': function customSettings(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['customSettings'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<h4>" + 
          __escape(guard((context != null && context['customSettings'] != null && context['customSettings'][key0] != null) ? context['customSettings'][key0]['title'] : null)) + 
          "</h4>\r\n\t\t\t<div class=\"user-setting\">\r\n\t\t\t\t" + 
          __escape(guard((context != null && context['customSettings'] != null && context['customSettings'][key0] != null) ? context['customSettings'][key0]['content'] : null)) + 
          "\r\n\t\t\t</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
