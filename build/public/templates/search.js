
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
      "\r\n\r\n\r\n<div class=\"search\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-xs-12\">\r\n\t\t\t<form id=\"advanced-search\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<label>[[global:search]]</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"search-input\" placeholder=\"[[global:search]]\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-5\">\r\n\t\t\t\t\t\t\t<label>[[search:in]]</label>\r\n\t\t\t\t\t\t\t<select id=\"search-in\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t<option value=\"titlesposts\">[[search:titles-posts]]</option>\r\n\t\t\t\t\t\t\t\t<option value=\"titles\">[[search:titles]]</option>\r\n\t\t\t\t\t\t\t\t<option value=\"posts\">[[global:posts]]</option>\r\n\t\t\t\t\t\t\t\t<option value=\"users\">[[global:users]]</option>\r\n\t\t\t\t\t\t\t\t<option value=\"tags\">[[tags:tags]]</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t\t<label>&nbsp;</label>\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default form-control\">[[global:search]]</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t\t<div class=\"panel-heading\" data-toggle=\"collapse\" data-target=\".search-options\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-caret-down\"></i> [[search:advanced-search]]</h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body search-options collapse " + 
      (guard((context != null) ? context['expandSearch'] : null) ?
        "in" :
        "") + 
      "\">\r\n\r\n\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t<label>[[search:posted-by]]</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"posted-by-user\" placeholder=\"[[search:posted-by]]\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t<label>[[search:in-categories]]</label>\r\n\t\t\t\t\t\t\t<select multiple class=\"form-control\" id=\"posted-in-categories\" size=\"" + 
      __escape(guard((context != null) ? context['categoriesCount'] : null)) + 
      "\">\r\n\t\t\t\t\t\t\t\t" + 
      compiled.blocks['categories'](helpers, context, guard, iter, helper) + 
      "\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"search-children\"><i class=\"input-helper\"></i>[[search:search-child-categories]]\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t<label>[[search:has-tags]]</label>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"has-tags\">\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t<label>[[search:reply-count]]</label>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<select id=\"reply-count-filter\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"atleast\">[[search:at-least]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"atmost\">[[search:at-most]]</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"reply-count\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t<label>[[search:post-time]]</label>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<select id=\"post-time-filter\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"newer\">[[search:newer-than]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"older\">[[search:older-than]]</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<select id=\"post-time-range\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"\">[[search:any-date]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"86400\">[[search:yesterday]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"604800\">[[search:one-week]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"1209600\">[[search:two-weeks]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"2592000\">[[search:one-month]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"7776000\">[[search:three-months]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"15552000\">[[search:six-months]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"31104000\">[[search:one-year]]</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t<label>[[search:sort-by]]</label>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<select id=\"post-sort-by\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"relevance\">[[search:relevance]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"timestamp\">[[search:post-time]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"votes\">[[search:votes]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"topic.lastposttime\">[[search:last-reply-time]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"topic.title\">[[search:topic-title]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"topic.postcount\">[[search:number-of-replies]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"topic.viewcount\">[[search:number-of-views]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"topic.votes\">[[search:topic-votes]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"topic.timestamp\">[[search:topic-start-date]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"user.username\">[[search:username]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"category.name\">[[search:category]]</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<select id=\"post-sort-direction\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"desc\">[[search:descending]]</option>\r\n\t\t\t\t\t\t\t\t\t\t<option value=\"asc\">[[search:ascending]]</option>\r\n\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group post-search-item\">\r\n\t\t\t\t\t\t\t<label>[[search:show-results-as]]</label>\r\n\t\t\t\t\t\t\t<div id=\"show-results-as\">\r\n\t\t\t\t\t\t\t\t<label class=\"radio radio-inline active\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"show-as-posts\" autocomplete=\"off\" checked>\r\n\t\t\t\t\t\t\t\t\t<i class=\"input-helper\"></i>\r\n\t\t\t\t\t\t\t\t\t[[global:posts]]\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<label class=\"radio radio-inline active\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"options\" id=\"show-as-topics\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"input-helper\"></i>\r\n\t\t\t\t\t\t\t\t\t[[global:topics]]\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"btn-group\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">[[global:search]]</button>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-default\" id=\"save-preferences\" href=\"#\">[[search:save-preferences]]</a>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-default\" id=\"clear-preferences\" href=\"#\">[[search:clear-preferences]]</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"row\">\r\n\t\t<div id=\"results\" class=\"col-md-12\" data-search-query=\"" + 
      __escape(guard((context != null) ? context['search_query'] : null)) + 
      "\">\r\n\t\t\t" + 
      (guard((context != null) ? context['matchCount'] : null) ?
        "\r\n\t\t\t<div class=\"alert alert-info\">[[search:results_matching, " + 
          __escape(guard((context != null) ? context['matchCount'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['search_query'] : null)) + 
          ", " + 
          __escape(guard((context != null) ? context['time'] : null)) + 
          "]] </div>\r\n\t\t\t" :
        "\r\n\t\t\t" + 
          (guard((context != null) ? context['search_query'] : null) ?
            "\r\n\t\t\t<div class=\"alert alert-warning\">[[search:no-matches]]</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t\t") + 
      "\r\n\r\n\t\t\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t\t" + 
      (guard((context != null && context['users'] != null) ? context['users']['length'] : null) ?
        "\r\n\t\t\t<ul id=\"users-container\" class=\"users-container\">\r\n\t\t\t" + 
          compiled.blocks['users'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t</ul>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t" + 
      (guard((context != null && context['tags'] != null) ? context['tags']['length'] : null) ?
        "\r\n\t\t\t<div class=\"tag-list\">\r\n\t\t\t\t" + 
          compiled.blocks['tags'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\r\n\t\t\t<div component=\"pagination\" class=\"text-center pagination-container" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null) ? context['pagination']['pages']['length'] : null) ?
        "" :
        " hidden") + 
      "\">\r\n\t<ul class=\"pagination hidden-xs\">\r\n\t\t<li class=\"previous pull-left" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t" + 
      compiled.blocks['pagination.pages'](helpers, context, guard, iter, helper) + 
      "\r\n\r\n\t\t<li class=\"next pull-right" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class=\"pagination hidden-sm hidden-md hidden-lg\">\r\n\t\t<li class=\"first" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['first'] != null) ? context['pagination']['first']['qs'] : null)) + 
      "\" data-page=\"1\"><i class=\"fa fa-fast-backward\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"previous" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['prev'] != null) ? context['pagination']['prev']['page'] : null)) + 
      "\"><i class=\"fa fa-chevron-left\"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t<a href=\"#\">" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['currentPage'] : null)) + 
      " / " + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "</a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"next" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['page'] : null)) + 
      "\"> <i class=\"fa fa-chevron-right\"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class=\"last" + 
      (guard((context != null && context['pagination'] != null && context['pagination']['next'] != null) ? context['pagination']['next']['active'] : null) ?
        "" :
        " disabled") + 
      "\">\r\n\t\t\t<a href=\"?" + 
      __escape(guard((context != null && context['pagination'] != null && context['pagination']['last'] != null) ? context['pagination']['last']['qs'] : null)) + 
      "\" data-page=\"" + 
      __escape(guard((context != null && context['pagination'] != null) ? context['pagination']['pageCount'] : null)) + 
      "\"><i class=\"fa fa-fast-forward\"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>";
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
    'categories': function categories(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categories'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t\t\t<option value=\"" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['value'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['categories'] != null && context['categories'][key0] != null) ? context['categories'][key0]['text'] : null)) + 
          "</option>\r\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<div class=\"topic-row panel panel-default clearfix\">\r\n\t\t\t\t<div class=\"panel-body\">\r\n\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" class=\"search-result-text\">\r\n\t\t\t\t\t\t<h4>" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "</h4>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t" + 
          (guard((context != null) ? context['showAsPosts'] : null) ?
            "\r\n\t\t\t\t\t<div class=\"search-result-text\">\r\n\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
              "\r\n\t\t\t\t\t\t<p class=\"fade-out\"></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t" :
            "") + 
          "\r\n\r\n\t\t\t\t\t<small>\r\n\t\t\t\t\t\t<span class=\"pull-right post-preview-footer\">\r\n\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t<img class=\"user-avatar\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\" src=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null)) + 
              "\"/>\r\n\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"post-footer-link\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted_in, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "]] <i class=\"fa " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['icon'] : null)) + 
          "\"></i></a> <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</small>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'users': function users(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<li class=\"users-box registered-user\" data-uid=\"" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['uid'] : null)) + 
          "\">\r\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\">\r\n\t\t" + 
          (guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['picture'] : null) ?
            "\r\n\t\t<img class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['picture'] : null)) + 
              "\" alt=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
              "\" />\r\n\t\t" :
            "\r\n\t\t<div class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['icon:text'] : null)) + 
              "</div>\r\n\t\t") + 
          "\r\n\t</a>\r\n\r\n\t<div class=\"user-info\">\r\n\t\t<span class=\"username\">\r\n\t\t\t<i component=\"user/status\" class=\"fa fa-circle status " + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['status'] : null)) + 
          "\" title=\"[[global:" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['status'] : null)) + 
          "]]\"></i>\r\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
          "</a>\r\n\t\t</span>\r\n\r\n\t\t" + 
          (guard((context != null) ? context['section_joindate'] : null) ?
            "\r\n\t\t<div title=\"joindate\" class=\"joindate\">\r\n\t\t\t<span class=\"timeago\" title=\"" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['joindateISO'] : null)) + 
              "\"></span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard((context != null) ? context['section_sort-reputation'] : null) ?
            "\r\n\t\t<div title=\"reputation\" class=\"reputation\">\r\n\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t<span class=\"formatted-number\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['reputation'] : null)) + 
              "</span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard((context != null) ? context['section_sort-posts'] : null) ?
            "\r\n\t\t<div title=\"post count\" class=\"post-count\">\r\n\t\t\t<i class=\"fa fa-pencil\"></i>\r\n\t\t\t<span class=\"formatted-number\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['postcount'] : null)) + 
              "</span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\r\n\t\t" + 
          (guard((context != null) ? context['section_flagged'] : null) ?
            "\r\n\t\t<div title=\"flag count\" class=\"flag-count\">\r\n\t\t\t<i class=\"fa fa-flag\"></i>\r\n\t\t\t<span class=\"formatted-number\"><a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/posts/flags?byUsername=" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['username'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['users'] != null && context['users'][key0] != null) ? context['users'][key0]['flags'] : null)) + 
              "</a></span>\r\n\t\t</div>\r\n\t\t" :
            "") + 
          "\r\n\t</div>\r\n</li>\r\n";
      }, function alt() {
        return "";
      });
    },
    'tags': function tags(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['tags'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n<h4 class=\"pull-left tag-container\">\r\n\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/tags/" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\" data-value=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\"><span class=\"tag-item\" data-tag=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "\" style=\"" + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null) ?
            "color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['color'] : null)) + 
              ";" :
            "") + 
          (guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null) ?
            "background-color: " + 
              __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['bgColor'] : null)) + 
              ";" :
            "") + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['valueEscaped'] : null)) + 
          "</span><span class=\"tag-topic-count human-readable-number\" title=\"" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['tags'] != null && context['tags'][key0] != null) ? context['tags'][key0]['score'] : null)) + 
          "</span></a>\r\n</h4>\r\n";
      }, function alt() {
        return "";
      });
    },
    'pagination.pages': function paginationpages(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['pagination'] != null) ? context['pagination']['pages'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t" + 
          (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['separator'] : null) ?
            "\r\n\t\t\t<li component=\"pagination/select-page\" class=\"page select-page\">\r\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-ellipsis-h\"></i></a>\r\n\t\t\t</li>\r\n\t\t\t" :
            "\r\n\t\t\t<li class=\"page" + 
              (guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['active'] : null) ?
                " active" :
                "") + 
              "\" >\r\n\t\t\t\t<a href=\"?" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['qs'] : null)) + 
              "\" data-page=\"" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['pagination'] != null && context['pagination']['pages'] != null && context['pagination']['pages'][key0] != null) ? context['pagination']['pages'][key0]['page'] : null)) + 
              "</a>\r\n\t\t\t</li>\r\n\t\t\t") + 
          "\r\n\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
