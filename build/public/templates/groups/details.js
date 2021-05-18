
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
    return "<div component=\"groups/container\" class=\"groups details\">\r\n\t" + 
      (guard((context != null && context['breadcrumbs'] != null) ? context['breadcrumbs']['length'] : null) ?
        "\n<ol class=\"breadcrumb\" itemscope=\"itemscope\" itemprop=\"breadcrumb\" itemtype=\"http://schema.org/BreadcrumbList\">\n\t" + 
          compiled.blocks['breadcrumbs'](helpers, context, guard, iter, helper) + 
          "\n</ol>\n" :
        "") + 
      "\n\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-4 col-xs-12\">\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t<i class=\"fa fa-list-ul\"></i> [[groups:details.title]]\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
        "<span class=\"label label-info\">[[groups:details.private]]</span>" :
        "") + 
      "\r\n\t\t\t\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
        "<span class=\"label label-info\">[[groups:details.hidden]]</span>&nbsp;" :
        "") + 
      "\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<h1>" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
      "</h1>\r\n\t\t\t\t\t" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['descriptionParsed'] : null)) + 
      "\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['isAdmin'] : null) ?
        "\r\n\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/admin/manage/groups/" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['nameEncoded'] : null)) + 
          "\" target=\"_blank\" class=\"btn btn-info\"><i class=\"fa fa-gear\"></i> [[user:edit]]</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t\t" + 
      (guard((context != null) ? context['loggedIn'] : null) ?
        "\r\n\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'membershipBtn', [guard((context != null) ? context['group'] : null)])) + 
          "&nbsp;\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t" :
        "") + 
      "\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\"><i class=\"fa fa-users\"></i> [[groups:details.members]]</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<div class=\"row member-search\">\r\n\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\r\n\t<div class=\"col-lg-2\">\r\n\t\t<button component=\"groups/members/add\" type=\"button\" class=\"btn btn-primary\" title=\"[[groups:details.add-member]]\"><i class=\"fa fa-user-plus\"></i></button>\r\n\t</div>\r\n\t" :
        "") + 
      "\r\n\t<div class=\"" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "col-lg-10" :
        "col-lg-12") + 
      "\">\r\n\t\t<div class=\"input-group\">\r\n\t\t\t<input class=\"form-control\" type=\"text\" component=\"groups/members/search\" placeholder=\"[[global:search]]\"/>\r\n\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<table component=\"groups/members\" class=\"table table-striped table-hover\" data-nextstart=\"" + 
      __escape(guard((context != null && context['group'] != null) ? context['group']['membersNextStart'] : null)) + 
      "\">\r\n\t<tbody>\r\n\t" + 
      compiled.blocks['group.members'](helpers, context, guard, iter, helper) + 
      "\r\n\t</tbody>\r\n</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t" + 
      (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
        "\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title clearfix\">\r\n\t\t\t\t\t\t<i class=\"fa fa-clock-o\"></i> [[groups:details.pending]]\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "\r\n\t\t\t\t\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t[[global:more]] <span class=\"caret\"></span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\" data-ajaxify=\"false\" data-action=\"acceptAll\">[[groups:pending.accept_all]]</a></li>\r\n\t\t\t\t\t\t\t\t<li><a href=\"#\" data-ajaxify=\"false\" data-action=\"rejectAll\">[[groups:pending.reject_all]]</a></li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t" :
            "") + 
          "\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<table component=\"groups/pending\" class=\"table table-striped table-hover\">\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null) ? context['group']['pending']['length'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t<div class=\"alert alert-info\">[[groups:pending.none]]</div>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t" + 
          compiled.blocks['group.pending'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title clearfix\">\r\n\t\t\t\t\t\t<i class=\"fa fa-gift\"></i> [[groups:details.invited]]\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" component=\"groups/members/invite\" placeholder=\"[[groups:invited.search]]\"/>\r\n\t\t\t\t\t\t<span class=\"input-group-addon search-button\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t\t\t</div><br />\r\n\r\n\t\t\t\t\t<table component=\"groups/invited\" class=\"table table-striped table-hover\">\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['invited'] != null) ? context['group']['invited']['length'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t<div class=\"alert alert-info\">[[groups:invited.none]]</div>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t" + 
          compiled.blocks['group.invited'](helpers, context, guard, iter, helper) + 
          "\r\n\t\t\t\t\t</table>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"panel panel-default\">\r\n\t\t\t\t<div class=\"panel-heading pointer\" data-toggle=\"collapse\" data-target=\".options\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">\r\n\t\t\t\t\t\t<i class=\"fa fa-caret-down pull-right\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-cogs\"></i> [[groups:details.owner_options]]\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"panel-body options collapse\">\r\n\t\t\t\t\t<form component=\"groups/settings\" role=\"form\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"name\">[[groups:details.group_name]]</label>\r\n\t\t\t\t\t\t\t<input class=\"form-control\" name=\"name\" id=\"name\" type=\"text\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null)) + 
          "\" " + 
          (guard((context != null && context['group'] != null) ? context['group']['system'] : null) ?
            "readonly" :
            "") + 
          " />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"name\">[[groups:details.description]]</label>\r\n\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"description\" id=\"description\" type=\"text\" maxlength=\"255\">" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['description'] : null)) + 
          "</textarea>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<hr />\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"memberPostCids\">[[groups:details.member-post-cids]]</label>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<input id=\"memberPostCids\" type=\"text\" class=\"form-control\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['memberPostCids'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6 member-post-cids-selector\">\r\n\t\t\t\t\t\t\t\t\t<div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
              "\"><i class=\"fa fa-fw fa-stack-1x " + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
              "\" style=\"color: " + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
              ";\"></i></span> " + 
              __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) :
            "\n    " + 
              (guard((context != null) ? context['selectCategoryLabel'] : null) ?
                __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
                "[[topic:thread_tools.select_category]]")) + 
          "</span> <span class=\"caret\"></span>\n</button>\n<div component=\"category-selector-search\" class=\"hidden\">\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\n</div>\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\n    <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\n        <a role=\"menu-item\">[[search:no-matches]]</a>\n    </li>\n    " + 
          compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
          "\n</ul>\n</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<hr />\r\n\r\n\t\t\t\t\t\t<div class=\"form-group user-title-option\">\r\n\t\t\t\t\t\t\t<label for=\"userTitle\">[[groups:details.badge_text]]</label>\r\n\t\t\t\t\t\t\t<input component=\"groups/userTitleOption\" class=\"form-control\" name=\"userTitle\" id=\"userTitle\" type=\"text\" maxlength=\"40\" value=\"" + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null)) + 
          "\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          " />\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group user-title-option\">\r\n\t\t\t\t\t\t\t<label>[[groups:details.badge_preview]]</label><br />\r\n\t\t\t\t\t\t\t<span class=\"label" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " hide") + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) + 
          "; background-color: " + 
          __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) + 
          "\"><i class=\"fa" + 
          (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
            " " + 
              __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
            "") + 
          "\"></i> " + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['userTitle'] : null)) :
            __escape(guard((context != null && context['group'] != null) ? context['group']['displayName'] : null))) + 
          "</span>\r\n\t\t\t\t\t\t\t<hr/>\r\n\t\t\t\t\t\t\t<button component=\"groups/userTitleOption\" type=\"button\" class=\"btn btn-default btn-sm\" data-action=\"icon-select\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          ">[[groups:details.change_icon]]</button>\r\n\r\n\t\t\t\t\t\t\t<button component=\"groups/userTitleOption\" type=\"button\" class=\"btn btn-default btn-sm\" data-action=\"label-color-select\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          ">[[groups:details.change_label_colour]]</button>\r\n\r\n\t\t\t\t\t\t\t<button component=\"groups/userTitleOption\" type=\"button\" class=\"btn btn-default btn-sm\" data-action=\"text-color-select\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            "" :
            " disabled") + 
          ">[[groups:details.change_text_colour]]</button>\r\n\r\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"labelColor\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['labelColor'] : null)) :
            "") + 
          "\" />\r\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"textColor\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['textColor'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['textColor'] : null)) :
            "") + 
          "\" />\r\n\t\t\t\t\t\t\t<input type=\"hidden\" name=\"icon\" value=\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['icon'] : null) ?
            __escape(guard((context != null && context['group'] != null) ? context['group']['icon'] : null)) :
            "") + 
          "\" />\r\n\t\t\t\t\t\t\t<div id=\"icons\" class=\"hidden\">\r\n\t\t\t\t\t\t\t\t<div class=\"icon-container\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row fa-icons\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-doesnt-exist\"></i>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"icon-container\">\n\t<div class=\"form-group\">\n\t\t<label for=\"fa-filter\">Type to filter icons</label>\n\t\t<input type=\"text\" class=\"form-control\" id=\"fa-filter\" data-action=\"filter\" placeholder=\"e.g. umbrella\" />\n\t</div>\n\t<div class=\"row fa-icons\">\n\t\t<i class=\"fa fa-500px\"></i>\n\t\t<i class=\"fa fa-address-book\"></i>\n\t\t<i class=\"fa fa-address-book-o\"></i>\n\t\t<i class=\"fa fa-address-card\"></i>\n\t\t<i class=\"fa fa-address-card-o\"></i>\n\t\t<i class=\"fa fa-adjust\"></i>\n\t\t<i class=\"fa fa-adn\"></i>\n\t\t<i class=\"fa fa-align-center\"></i>\n\t\t<i class=\"fa fa-align-justify\"></i>\n\t\t<i class=\"fa fa-align-left\"></i>\n\t\t<i class=\"fa fa-align-right\"></i>\n\t\t<i class=\"fa fa-amazon\"></i>\n\t\t<i class=\"fa fa-ambulance\"></i>\n\t\t<i class=\"fa fa-american-sign-language-interpreting\"></i>\n\t\t<i class=\"fa fa-anchor\"></i>\n\t\t<i class=\"fa fa-android\"></i>\n\t\t<i class=\"fa fa-angellist\"></i>\n\t\t<i class=\"fa fa-angle-double-down\"></i>\n\t\t<i class=\"fa fa-angle-double-left\"></i>\n\t\t<i class=\"fa fa-angle-double-right\"></i>\n\t\t<i class=\"fa fa-angle-double-up\"></i>\n\t\t<i class=\"fa fa-angle-down\"></i>\n\t\t<i class=\"fa fa-angle-left\"></i>\n\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t<i class=\"fa fa-angle-up\"></i>\n\t\t<i class=\"fa fa-apple\"></i>\n\t\t<i class=\"fa fa-archive\"></i>\n\t\t<i class=\"fa fa-area-chart\"></i>\n\t\t<i class=\"fa fa-arrow-circle-down\"></i>\n\t\t<i class=\"fa fa-arrow-circle-left\"></i>\n\t\t<i class=\"fa fa-arrow-circle-o-down\"></i>\n\t\t<i class=\"fa fa-arrow-circle-o-left\"></i>\n\t\t<i class=\"fa fa-arrow-circle-o-right\"></i>\n\t\t<i class=\"fa fa-arrow-circle-o-up\"></i>\n\t\t<i class=\"fa fa-arrow-circle-right\"></i>\n\t\t<i class=\"fa fa-arrow-circle-up\"></i>\n\t\t<i class=\"fa fa-arrow-down\"></i>\n\t\t<i class=\"fa fa-arrow-left\"></i>\n\t\t<i class=\"fa fa-arrow-right\"></i>\n\t\t<i class=\"fa fa-arrow-up\"></i>\n\t\t<i class=\"fa fa-arrows\"></i>\n\t\t<i class=\"fa fa-arrows-alt\"></i>\n\t\t<i class=\"fa fa-arrows-h\"></i>\n\t\t<i class=\"fa fa-arrows-v\"></i>\n\t\t<i class=\"fa fa-asl-interpreting\"></i>\n\t\t<i class=\"fa fa-assistive-listening-systems\"></i>\n\t\t<i class=\"fa fa-asterisk\"></i>\n\t\t<i class=\"fa fa-at\"></i>\n\t\t<i class=\"fa fa-audio-description\"></i>\n\t\t<i class=\"fa fa-automobile\"></i>\n\t\t<i class=\"fa fa-backward\"></i>\n\t\t<i class=\"fa fa-balance-scale\"></i>\n\t\t<i class=\"fa fa-ban\"></i>\n\t\t<i class=\"fa fa-bandcamp\"></i>\n\t\t<i class=\"fa fa-bank\"></i>\n\t\t<i class=\"fa fa-bar-chart\"></i>\n\t\t<i class=\"fa fa-bar-chart-o\"></i>\n\t\t<i class=\"fa fa-barcode\"></i>\n\t\t<i class=\"fa fa-bars\"></i>\n\t\t<i class=\"fa fa-bath\"></i>\n\t\t<i class=\"fa fa-bathtub\"></i>\n\t\t<i class=\"fa fa-battery\"></i>\n\t\t<i class=\"fa fa-battery-0\"></i>\n\t\t<i class=\"fa fa-battery-1\"></i>\n\t\t<i class=\"fa fa-battery-2\"></i>\n\t\t<i class=\"fa fa-battery-3\"></i>\n\t\t<i class=\"fa fa-battery-4\"></i>\n\t\t<i class=\"fa fa-battery-empty\"></i>\n\t\t<i class=\"fa fa-battery-full\"></i>\n\t\t<i class=\"fa fa-battery-half\"></i>\n\t\t<i class=\"fa fa-battery-quarter\"></i>\n\t\t<i class=\"fa fa-battery-three-quarters\"></i>\n\t\t<i class=\"fa fa-bed\"></i>\n\t\t<i class=\"fa fa-beer\"></i>\n\t\t<i class=\"fa fa-behance\"></i>\n\t\t<i class=\"fa fa-behance-square\"></i>\n\t\t<i class=\"fa fa-bell\"></i>\n\t\t<i class=\"fa fa-bell-o\"></i>\n\t\t<i class=\"fa fa-bell-slash\"></i>\n\t\t<i class=\"fa fa-bell-slash-o\"></i>\n\t\t<i class=\"fa fa-bicycle\"></i>\n\t\t<i class=\"fa fa-binoculars\"></i>\n\t\t<i class=\"fa fa-birthday-cake\"></i>\n\t\t<i class=\"fa fa-bitbucket\"></i>\n\t\t<i class=\"fa fa-bitbucket-square\"></i>\n\t\t<i class=\"fa fa-bitcoin\"></i>\n\t\t<i class=\"fa fa-black-tie\"></i>\n\t\t<i class=\"fa fa-blind\"></i>\n\t\t<i class=\"fa fa-bluetooth\"></i>\n\t\t<i class=\"fa fa-bluetooth-b\"></i>\n\t\t<i class=\"fa fa-bold\"></i>\n\t\t<i class=\"fa fa-bolt\"></i>\n\t\t<i class=\"fa fa-bomb\"></i>\n\t\t<i class=\"fa fa-book\"></i>\n\t\t<i class=\"fa fa-bookmark\"></i>\n\t\t<i class=\"fa fa-bookmark-o\"></i>\n\t\t<i class=\"fa fa-braille\"></i>\n\t\t<i class=\"fa fa-briefcase\"></i>\n\t\t<i class=\"fa fa-btc\"></i>\n\t\t<i class=\"fa fa-bug\"></i>\n\t\t<i class=\"fa fa-building\"></i>\n\t\t<i class=\"fa fa-building-o\"></i>\n\t\t<i class=\"fa fa-bullhorn\"></i>\n\t\t<i class=\"fa fa-bullseye\"></i>\n\t\t<i class=\"fa fa-bus\"></i>\n\t\t<i class=\"fa fa-buysellads\"></i>\n\t\t<i class=\"fa fa-cab\"></i>\n\t\t<i class=\"fa fa-calculator\"></i>\n\t\t<i class=\"fa fa-calendar\"></i>\n\t\t<i class=\"fa fa-calendar-check-o\"></i>\n\t\t<i class=\"fa fa-calendar-minus-o\"></i>\n\t\t<i class=\"fa fa-calendar-o\"></i>\n\t\t<i class=\"fa fa-calendar-plus-o\"></i>\n\t\t<i class=\"fa fa-calendar-times-o\"></i>\n\t\t<i class=\"fa fa-camera\"></i>\n\t\t<i class=\"fa fa-camera-retro\"></i>\n\t\t<i class=\"fa fa-car\"></i>\n\t\t<i class=\"fa fa-caret-down\"></i>\n\t\t<i class=\"fa fa-caret-left\"></i>\n\t\t<i class=\"fa fa-caret-right\"></i>\n\t\t<i class=\"fa fa-caret-square-o-down\"></i>\n\t\t<i class=\"fa fa-caret-square-o-left\"></i>\n\t\t<i class=\"fa fa-caret-square-o-right\"></i>\n\t\t<i class=\"fa fa-caret-square-o-up\"></i>\n\t\t<i class=\"fa fa-caret-up\"></i>\n\t\t<i class=\"fa fa-cart-arrow-down\"></i>\n\t\t<i class=\"fa fa-cart-plus\"></i>\n\t\t<i class=\"fa fa-cc\"></i>\n\t\t<i class=\"fa fa-cc-amex\"></i>\n\t\t<i class=\"fa fa-cc-diners-club\"></i>\n\t\t<i class=\"fa fa-cc-discover\"></i>\n\t\t<i class=\"fa fa-cc-jcb\"></i>\n\t\t<i class=\"fa fa-cc-mastercard\"></i>\n\t\t<i class=\"fa fa-cc-paypal\"></i>\n\t\t<i class=\"fa fa-cc-stripe\"></i>\n\t\t<i class=\"fa fa-cc-visa\"></i>\n\t\t<i class=\"fa fa-certificate\"></i>\n\t\t<i class=\"fa fa-chain\"></i>\n\t\t<i class=\"fa fa-chain-broken\"></i>\n\t\t<i class=\"fa fa-check\"></i>\n\t\t<i class=\"fa fa-check-circle\"></i>\n\t\t<i class=\"fa fa-check-circle-o\"></i>\n\t\t<i class=\"fa fa-check-square\"></i>\n\t\t<i class=\"fa fa-check-square-o\"></i>\n\t\t<i class=\"fa fa-chevron-circle-down\"></i>\n\t\t<i class=\"fa fa-chevron-circle-left\"></i>\n\t\t<i class=\"fa fa-chevron-circle-right\"></i>\n\t\t<i class=\"fa fa-chevron-circle-up\"></i>\n\t\t<i class=\"fa fa-chevron-down\"></i>\n\t\t<i class=\"fa fa-chevron-left\"></i>\n\t\t<i class=\"fa fa-chevron-right\"></i>\n\t\t<i class=\"fa fa-chevron-up\"></i>\n\t\t<i class=\"fa fa-child\"></i>\n\t\t<i class=\"fa fa-chrome\"></i>\n\t\t<i class=\"fa fa-circle\"></i>\n\t\t<i class=\"fa fa-circle-o\"></i>\n\t\t<i class=\"fa fa-circle-o-notch\"></i>\n\t\t<i class=\"fa fa-circle-thin\"></i>\n\t\t<i class=\"fa fa-clipboard\"></i>\n\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t<i class=\"fa fa-clone\"></i>\n\t\t<i class=\"fa fa-close\"></i>\n\t\t<i class=\"fa fa-cloud\"></i>\n\t\t<i class=\"fa fa-cloud-download\"></i>\n\t\t<i class=\"fa fa-cloud-upload\"></i>\n\t\t<i class=\"fa fa-cny\"></i>\n\t\t<i class=\"fa fa-code\"></i>\n\t\t<i class=\"fa fa-code-fork\"></i>\n\t\t<i class=\"fa fa-codepen\"></i>\n\t\t<i class=\"fa fa-codiepie\"></i>\n\t\t<i class=\"fa fa-coffee\"></i>\n\t\t<i class=\"fa fa-cog\"></i>\n\t\t<i class=\"fa fa-cogs\"></i>\n\t\t<i class=\"fa fa-columns\"></i>\n\t\t<i class=\"fa fa-comment\"></i>\n\t\t<i class=\"fa fa-comment-o\"></i>\n\t\t<i class=\"fa fa-commenting\"></i>\n\t\t<i class=\"fa fa-commenting-o\"></i>\n\t\t<i class=\"fa fa-comments\"></i>\n\t\t<i class=\"fa fa-comments-o\"></i>\n\t\t<i class=\"fa fa-compass\"></i>\n\t\t<i class=\"fa fa-compress\"></i>\n\t\t<i class=\"fa fa-connectdevelop\"></i>\n\t\t<i class=\"fa fa-contao\"></i>\n\t\t<i class=\"fa fa-copy\"></i>\n\t\t<i class=\"fa fa-copyright\"></i>\n\t\t<i class=\"fa fa-creative-commons\"></i>\n\t\t<i class=\"fa fa-credit-card\"></i>\n\t\t<i class=\"fa fa-credit-card-alt\"></i>\n\t\t<i class=\"fa fa-crop\"></i>\n\t\t<i class=\"fa fa-crosshairs\"></i>\n\t\t<i class=\"fa fa-css3\"></i>\n\t\t<i class=\"fa fa-cube\"></i>\n\t\t<i class=\"fa fa-cubes\"></i>\n\t\t<i class=\"fa fa-cut\"></i>\n\t\t<i class=\"fa fa-cutlery\"></i>\n\t\t<i class=\"fa fa-dashboard\"></i>\n\t\t<i class=\"fa fa-dashcube\"></i>\n\t\t<i class=\"fa fa-database\"></i>\n\t\t<i class=\"fa fa-deaf\"></i>\n\t\t<i class=\"fa fa-deafness\"></i>\n\t\t<i class=\"fa fa-dedent\"></i>\n\t\t<i class=\"fa fa-delicious\"></i>\n\t\t<i class=\"fa fa-desktop\"></i>\n\t\t<i class=\"fa fa-deviantart\"></i>\n\t\t<i class=\"fa fa-diamond\"></i>\n\t\t<i class=\"fa fa-digg\"></i>\n\t\t<i class=\"fa fa-dollar\"></i>\n\t\t<i class=\"fa fa-dot-circle-o\"></i>\n\t\t<i class=\"fa fa-download\"></i>\n\t\t<i class=\"fa fa-dribbble\"></i>\n\t\t<i class=\"fa fa-drivers-license\"></i>\n\t\t<i class=\"fa fa-drivers-license-o\"></i>\n\t\t<i class=\"fa fa-dropbox\"></i>\n\t\t<i class=\"fa fa-drupal\"></i>\n\t\t<i class=\"fa fa-edge\"></i>\n\t\t<i class=\"fa fa-edit\"></i>\n\t\t<i class=\"fa fa-eercast\"></i>\n\t\t<i class=\"fa fa-eject\"></i>\n\t\t<i class=\"fa fa-ellipsis-h\"></i>\n\t\t<i class=\"fa fa-ellipsis-v\"></i>\n\t\t<i class=\"fa fa-empire\"></i>\n\t\t<i class=\"fa fa-envelope\"></i>\n\t\t<i class=\"fa fa-envelope-o\"></i>\n\t\t<i class=\"fa fa-envelope-open\"></i>\n\t\t<i class=\"fa fa-envelope-open-o\"></i>\n\t\t<i class=\"fa fa-envelope-square\"></i>\n\t\t<i class=\"fa fa-envira\"></i>\n\t\t<i class=\"fa fa-eraser\"></i>\n\t\t<i class=\"fa fa-etsy\"></i>\n\t\t<i class=\"fa fa-eur\"></i>\n\t\t<i class=\"fa fa-euro\"></i>\n\t\t<i class=\"fa fa-exchange\"></i>\n\t\t<i class=\"fa fa-exclamation\"></i>\n\t\t<i class=\"fa fa-exclamation-circle\"></i>\n\t\t<i class=\"fa fa-exclamation-triangle\"></i>\n\t\t<i class=\"fa fa-expand\"></i>\n\t\t<i class=\"fa fa-expeditedssl\"></i>\n\t\t<i class=\"fa fa-external-link\"></i>\n\t\t<i class=\"fa fa-external-link-square\"></i>\n\t\t<i class=\"fa fa-eye\"></i>\n\t\t<i class=\"fa fa-eye-slash\"></i>\n\t\t<i class=\"fa fa-eyedropper\"></i>\n\t\t<i class=\"fa fa-fa\"></i>\n\t\t<i class=\"fa fa-facebook\"></i>\n\t\t<i class=\"fa fa-facebook-f\"></i>\n\t\t<i class=\"fa fa-facebook-official\"></i>\n\t\t<i class=\"fa fa-facebook-square\"></i>\n\t\t<i class=\"fa fa-fast-backward\"></i>\n\t\t<i class=\"fa fa-fast-forward\"></i>\n\t\t<i class=\"fa fa-fax\"></i>\n\t\t<i class=\"fa fa-feed\"></i>\n\t\t<i class=\"fa fa-female\"></i>\n\t\t<i class=\"fa fa-fighter-jet\"></i>\n\t\t<i class=\"fa fa-file\"></i>\n\t\t<i class=\"fa fa-file-archive-o\"></i>\n\t\t<i class=\"fa fa-file-audio-o\"></i>\n\t\t<i class=\"fa fa-file-code-o\"></i>\n\t\t<i class=\"fa fa-file-excel-o\"></i>\n\t\t<i class=\"fa fa-file-image-o\"></i>\n\t\t<i class=\"fa fa-file-movie-o\"></i>\n\t\t<i class=\"fa fa-file-o\"></i>\n\t\t<i class=\"fa fa-file-pdf-o\"></i>\n\t\t<i class=\"fa fa-file-photo-o\"></i>\n\t\t<i class=\"fa fa-file-picture-o\"></i>\n\t\t<i class=\"fa fa-file-powerpoint-o\"></i>\n\t\t<i class=\"fa fa-file-sound-o\"></i>\n\t\t<i class=\"fa fa-file-text\"></i>\n\t\t<i class=\"fa fa-file-text-o\"></i>\n\t\t<i class=\"fa fa-file-video-o\"></i>\n\t\t<i class=\"fa fa-file-word-o\"></i>\n\t\t<i class=\"fa fa-file-zip-o\"></i>\n\t\t<i class=\"fa fa-files-o\"></i>\n\t\t<i class=\"fa fa-film\"></i>\n\t\t<i class=\"fa fa-filter\"></i>\n\t\t<i class=\"fa fa-fire\"></i>\n\t\t<i class=\"fa fa-fire-extinguisher\"></i>\n\t\t<i class=\"fa fa-firefox\"></i>\n\t\t<i class=\"fa fa-first-order\"></i>\n\t\t<i class=\"fa fa-flag\"></i>\n\t\t<i class=\"fa fa-flag-checkered\"></i>\n\t\t<i class=\"fa fa-flag-o\"></i>\n\t\t<i class=\"fa fa-flash\"></i>\n\t\t<i class=\"fa fa-flask\"></i>\n\t\t<i class=\"fa fa-flickr\"></i>\n\t\t<i class=\"fa fa-floppy-o\"></i>\n\t\t<i class=\"fa fa-folder\"></i>\n\t\t<i class=\"fa fa-folder-o\"></i>\n\t\t<i class=\"fa fa-folder-open\"></i>\n\t\t<i class=\"fa fa-folder-open-o\"></i>\n\t\t<i class=\"fa fa-font\"></i>\n\t\t<i class=\"fa fa-font-awesome\"></i>\n\t\t<i class=\"fa fa-fonticons\"></i>\n\t\t<i class=\"fa fa-fort-awesome\"></i>\n\t\t<i class=\"fa fa-forumbee\"></i>\n\t\t<i class=\"fa fa-forward\"></i>\n\t\t<i class=\"fa fa-foursquare\"></i>\n\t\t<i class=\"fa fa-free-code-camp\"></i>\n\t\t<i class=\"fa fa-frown-o\"></i>\n\t\t<i class=\"fa fa-futbol-o\"></i>\n\t\t<i class=\"fa fa-gamepad\"></i>\n\t\t<i class=\"fa fa-gavel\"></i>\n\t\t<i class=\"fa fa-gbp\"></i>\n\t\t<i class=\"fa fa-ge\"></i>\n\t\t<i class=\"fa fa-gear\"></i>\n\t\t<i class=\"fa fa-gears\"></i>\n\t\t<i class=\"fa fa-genderless\"></i>\n\t\t<i class=\"fa fa-get-pocket\"></i>\n\t\t<i class=\"fa fa-gg\"></i>\n\t\t<i class=\"fa fa-gg-circle\"></i>\n\t\t<i class=\"fa fa-gift\"></i>\n\t\t<i class=\"fa fa-git\"></i>\n\t\t<i class=\"fa fa-git-square\"></i>\n\t\t<i class=\"fa fa-github\"></i>\n\t\t<i class=\"fa fa-github-alt\"></i>\n\t\t<i class=\"fa fa-github-square\"></i>\n\t\t<i class=\"fa fa-gitlab\"></i>\n\t\t<i class=\"fa fa-gittip\"></i>\n\t\t<i class=\"fa fa-glass\"></i>\n\t\t<i class=\"fa fa-glide\"></i>\n\t\t<i class=\"fa fa-glide-g\"></i>\n\t\t<i class=\"fa fa-globe\"></i>\n\t\t<i class=\"fa fa-google\"></i>\n\t\t<i class=\"fa fa-google-plus\"></i>\n\t\t<i class=\"fa fa-google-plus-circle\"></i>\n\t\t<i class=\"fa fa-google-plus-official\"></i>\n\t\t<i class=\"fa fa-google-plus-square\"></i>\n\t\t<i class=\"fa fa-google-wallet\"></i>\n\t\t<i class=\"fa fa-graduation-cap\"></i>\n\t\t<i class=\"fa fa-gratipay\"></i>\n\t\t<i class=\"fa fa-grav\"></i>\n\t\t<i class=\"fa fa-group\"></i>\n\t\t<i class=\"fa fa-h-square\"></i>\n\t\t<i class=\"fa fa-hacker-news\"></i>\n\t\t<i class=\"fa fa-hand-grab-o\"></i>\n\t\t<i class=\"fa fa-hand-lizard-o\"></i>\n\t\t<i class=\"fa fa-hand-o-down\"></i>\n\t\t<i class=\"fa fa-hand-o-left\"></i>\n\t\t<i class=\"fa fa-hand-o-right\"></i>\n\t\t<i class=\"fa fa-hand-o-up\"></i>\n\t\t<i class=\"fa fa-hand-paper-o\"></i>\n\t\t<i class=\"fa fa-hand-peace-o\"></i>\n\t\t<i class=\"fa fa-hand-pointer-o\"></i>\n\t\t<i class=\"fa fa-hand-rock-o\"></i>\n\t\t<i class=\"fa fa-hand-scissors-o\"></i>\n\t\t<i class=\"fa fa-hand-spock-o\"></i>\n\t\t<i class=\"fa fa-hand-stop-o\"></i>\n\t\t<i class=\"fa fa-handshake-o\"></i>\n\t\t<i class=\"fa fa-hard-of-hearing\"></i>\n\t\t<i class=\"fa fa-hashtag\"></i>\n\t\t<i class=\"fa fa-hdd-o\"></i>\n\t\t<i class=\"fa fa-header\"></i>\n\t\t<i class=\"fa fa-headphones\"></i>\n\t\t<i class=\"fa fa-heart\"></i>\n\t\t<i class=\"fa fa-heart-o\"></i>\n\t\t<i class=\"fa fa-heartbeat\"></i>\n\t\t<i class=\"fa fa-history\"></i>\n\t\t<i class=\"fa fa-home\"></i>\n\t\t<i class=\"fa fa-hospital-o\"></i>\n\t\t<i class=\"fa fa-hotel\"></i>\n\t\t<i class=\"fa fa-hourglass\"></i>\n\t\t<i class=\"fa fa-hourglass-1\"></i>\n\t\t<i class=\"fa fa-hourglass-2\"></i>\n\t\t<i class=\"fa fa-hourglass-3\"></i>\n\t\t<i class=\"fa fa-hourglass-end\"></i>\n\t\t<i class=\"fa fa-hourglass-half\"></i>\n\t\t<i class=\"fa fa-hourglass-o\"></i>\n\t\t<i class=\"fa fa-hourglass-start\"></i>\n\t\t<i class=\"fa fa-houzz\"></i>\n\t\t<i class=\"fa fa-html5\"></i>\n\t\t<i class=\"fa fa-i-cursor\"></i>\n\t\t<i class=\"fa fa-id-badge\"></i>\n\t\t<i class=\"fa fa-id-card\"></i>\n\t\t<i class=\"fa fa-id-card-o\"></i>\n\t\t<i class=\"fa fa-ils\"></i>\n\t\t<i class=\"fa fa-image\"></i>\n\t\t<i class=\"fa fa-imdb\"></i>\n\t\t<i class=\"fa fa-inbox\"></i>\n\t\t<i class=\"fa fa-indent\"></i>\n\t\t<i class=\"fa fa-industry\"></i>\n\t\t<i class=\"fa fa-info\"></i>\n\t\t<i class=\"fa fa-info-circle\"></i>\n\t\t<i class=\"fa fa-inr\"></i>\n\t\t<i class=\"fa fa-instagram\"></i>\n\t\t<i class=\"fa fa-institution\"></i>\n\t\t<i class=\"fa fa-internet-explorer\"></i>\n\t\t<i class=\"fa fa-intersex\"></i>\n\t\t<i class=\"fa fa-ioxhost\"></i>\n\t\t<i class=\"fa fa-italic\"></i>\n\t\t<i class=\"fa fa-joomla\"></i>\n\t\t<i class=\"fa fa-jpy\"></i>\n\t\t<i class=\"fa fa-jsfiddle\"></i>\n\t\t<i class=\"fa fa-key\"></i>\n\t\t<i class=\"fa fa-keyboard-o\"></i>\n\t\t<i class=\"fa fa-krw\"></i>\n\t\t<i class=\"fa fa-language\"></i>\n\t\t<i class=\"fa fa-laptop\"></i>\n\t\t<i class=\"fa fa-lastfm\"></i>\n\t\t<i class=\"fa fa-lastfm-square\"></i>\n\t\t<i class=\"fa fa-leaf\"></i>\n\t\t<i class=\"fa fa-leanpub\"></i>\n\t\t<i class=\"fa fa-legal\"></i>\n\t\t<i class=\"fa fa-lemon-o\"></i>\n\t\t<i class=\"fa fa-level-down\"></i>\n\t\t<i class=\"fa fa-level-up\"></i>\n\t\t<i class=\"fa fa-life-bouy\"></i>\n\t\t<i class=\"fa fa-life-buoy\"></i>\n\t\t<i class=\"fa fa-life-ring\"></i>\n\t\t<i class=\"fa fa-life-saver\"></i>\n\t\t<i class=\"fa fa-lightbulb-o\"></i>\n\t\t<i class=\"fa fa-line-chart\"></i>\n\t\t<i class=\"fa fa-link\"></i>\n\t\t<i class=\"fa fa-linkedin\"></i>\n\t\t<i class=\"fa fa-linkedin-square\"></i>\n\t\t<i class=\"fa fa-linode\"></i>\n\t\t<i class=\"fa fa-linux\"></i>\n\t\t<i class=\"fa fa-list\"></i>\n\t\t<i class=\"fa fa-list-alt\"></i>\n\t\t<i class=\"fa fa-list-ol\"></i>\n\t\t<i class=\"fa fa-list-ul\"></i>\n\t\t<i class=\"fa fa-location-arrow\"></i>\n\t\t<i class=\"fa fa-lock\"></i>\n\t\t<i class=\"fa fa-long-arrow-down\"></i>\n\t\t<i class=\"fa fa-long-arrow-left\"></i>\n\t\t<i class=\"fa fa-long-arrow-right\"></i>\n\t\t<i class=\"fa fa-long-arrow-up\"></i>\n\t\t<i class=\"fa fa-low-vision\"></i>\n\t\t<i class=\"fa fa-magic\"></i>\n\t\t<i class=\"fa fa-magnet\"></i>\n\t\t<i class=\"fa fa-mail-forward\"></i>\n\t\t<i class=\"fa fa-mail-reply\"></i>\n\t\t<i class=\"fa fa-mail-reply-all\"></i>\n\t\t<i class=\"fa fa-male\"></i>\n\t\t<i class=\"fa fa-map\"></i>\n\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t<i class=\"fa fa-map-o\"></i>\n\t\t<i class=\"fa fa-map-pin\"></i>\n\t\t<i class=\"fa fa-map-signs\"></i>\n\t\t<i class=\"fa fa-mars\"></i>\n\t\t<i class=\"fa fa-mars-double\"></i>\n\t\t<i class=\"fa fa-mars-stroke\"></i>\n\t\t<i class=\"fa fa-mars-stroke-h\"></i>\n\t\t<i class=\"fa fa-mars-stroke-v\"></i>\n\t\t<i class=\"fa fa-maxcdn\"></i>\n\t\t<i class=\"fa fa-meanpath\"></i>\n\t\t<i class=\"fa fa-medium\"></i>\n\t\t<i class=\"fa fa-medkit\"></i>\n\t\t<i class=\"fa fa-meetup\"></i>\n\t\t<i class=\"fa fa-meh-o\"></i>\n\t\t<i class=\"fa fa-mercury\"></i>\n\t\t<i class=\"fa fa-microchip\"></i>\n\t\t<i class=\"fa fa-microphone\"></i>\n\t\t<i class=\"fa fa-microphone-slash\"></i>\n\t\t<i class=\"fa fa-minus\"></i>\n\t\t<i class=\"fa fa-minus-circle\"></i>\n\t\t<i class=\"fa fa-minus-square\"></i>\n\t\t<i class=\"fa fa-minus-square-o\"></i>\n\t\t<i class=\"fa fa-mixcloud\"></i>\n\t\t<i class=\"fa fa-mobile\"></i>\n\t\t<i class=\"fa fa-mobile-phone\"></i>\n\t\t<i class=\"fa fa-modx\"></i>\n\t\t<i class=\"fa fa-money\"></i>\n\t\t<i class=\"fa fa-moon-o\"></i>\n\t\t<i class=\"fa fa-mortar-board\"></i>\n\t\t<i class=\"fa fa-motorcycle\"></i>\n\t\t<i class=\"fa fa-mouse-pointer\"></i>\n\t\t<i class=\"fa fa-music\"></i>\n\t\t<i class=\"fa fa-navicon\"></i>\n\t\t<i class=\"fa fa-neuter\"></i>\n\t\t<i class=\"fa fa-newspaper-o\"></i>\n\t\t<i class=\"fa fa-object-group\"></i>\n\t\t<i class=\"fa fa-object-ungroup\"></i>\n\t\t<i class=\"fa fa-odnoklassniki\"></i>\n\t\t<i class=\"fa fa-odnoklassniki-square\"></i>\n\t\t<i class=\"fa fa-opencart\"></i>\n\t\t<i class=\"fa fa-openid\"></i>\n\t\t<i class=\"fa fa-opera\"></i>\n\t\t<i class=\"fa fa-optin-monster\"></i>\n\t\t<i class=\"fa fa-outdent\"></i>\n\t\t<i class=\"fa fa-pagelines\"></i>\n\t\t<i class=\"fa fa-paint-brush\"></i>\n\t\t<i class=\"fa fa-paper-plane\"></i>\n\t\t<i class=\"fa fa-paper-plane-o\"></i>\n\t\t<i class=\"fa fa-paperclip\"></i>\n\t\t<i class=\"fa fa-paragraph\"></i>\n\t\t<i class=\"fa fa-paste\"></i>\n\t\t<i class=\"fa fa-pause\"></i>\n\t\t<i class=\"fa fa-pause-circle\"></i>\n\t\t<i class=\"fa fa-pause-circle-o\"></i>\n\t\t<i class=\"fa fa-paw\"></i>\n\t\t<i class=\"fa fa-paypal\"></i>\n\t\t<i class=\"fa fa-pencil\"></i>\n\t\t<i class=\"fa fa-pencil-square\"></i>\n\t\t<i class=\"fa fa-pencil-square-o\"></i>\n\t\t<i class=\"fa fa-percent\"></i>\n\t\t<i class=\"fa fa-phone\"></i>\n\t\t<i class=\"fa fa-phone-square\"></i>\n\t\t<i class=\"fa fa-photo\"></i>\n\t\t<i class=\"fa fa-picture-o\"></i>\n\t\t<i class=\"fa fa-pie-chart\"></i>\n\t\t<i class=\"fa fa-pied-piper\"></i>\n\t\t<i class=\"fa fa-pied-piper-alt\"></i>\n\t\t<i class=\"fa fa-pied-piper-pp\"></i>\n\t\t<i class=\"fa fa-pinterest\"></i>\n\t\t<i class=\"fa fa-pinterest-p\"></i>\n\t\t<i class=\"fa fa-pinterest-square\"></i>\n\t\t<i class=\"fa fa-plane\"></i>\n\t\t<i class=\"fa fa-play\"></i>\n\t\t<i class=\"fa fa-play-circle\"></i>\n\t\t<i class=\"fa fa-play-circle-o\"></i>\n\t\t<i class=\"fa fa-plug\"></i>\n\t\t<i class=\"fa fa-plus\"></i>\n\t\t<i class=\"fa fa-plus-circle\"></i>\n\t\t<i class=\"fa fa-plus-square\"></i>\n\t\t<i class=\"fa fa-plus-square-o\"></i>\n\t\t<i class=\"fa fa-podcast\"></i>\n\t\t<i class=\"fa fa-power-off\"></i>\n\t\t<i class=\"fa fa-print\"></i>\n\t\t<i class=\"fa fa-product-hunt\"></i>\n\t\t<i class=\"fa fa-puzzle-piece\"></i>\n\t\t<i class=\"fa fa-qq\"></i>\n\t\t<i class=\"fa fa-qrcode\"></i>\n\t\t<i class=\"fa fa-question\"></i>\n\t\t<i class=\"fa fa-question-circle\"></i>\n\t\t<i class=\"fa fa-question-circle-o\"></i>\n\t\t<i class=\"fa fa-quora\"></i>\n\t\t<i class=\"fa fa-quote-left\"></i>\n\t\t<i class=\"fa fa-quote-right\"></i>\n\t\t<i class=\"fa fa-ra\"></i>\n\t\t<i class=\"fa fa-random\"></i>\n\t\t<i class=\"fa fa-ravelry\"></i>\n\t\t<i class=\"fa fa-rebel\"></i>\n\t\t<i class=\"fa fa-recycle\"></i>\n\t\t<i class=\"fa fa-reddit\"></i>\n\t\t<i class=\"fa fa-reddit-alien\"></i>\n\t\t<i class=\"fa fa-reddit-square\"></i>\n\t\t<i class=\"fa fa-refresh\"></i>\n\t\t<i class=\"fa fa-registered\"></i>\n\t\t<i class=\"fa fa-remove\"></i>\n\t\t<i class=\"fa fa-renren\"></i>\n\t\t<i class=\"fa fa-reorder\"></i>\n\t\t<i class=\"fa fa-repeat\"></i>\n\t\t<i class=\"fa fa-reply\"></i>\n\t\t<i class=\"fa fa-reply-all\"></i>\n\t\t<i class=\"fa fa-resistance\"></i>\n\t\t<i class=\"fa fa-retweet\"></i>\n\t\t<i class=\"fa fa-rmb\"></i>\n\t\t<i class=\"fa fa-road\"></i>\n\t\t<i class=\"fa fa-rocket\"></i>\n\t\t<i class=\"fa fa-rotate-left\"></i>\n\t\t<i class=\"fa fa-rotate-right\"></i>\n\t\t<i class=\"fa fa-rouble\"></i>\n\t\t<i class=\"fa fa-rss\"></i>\n\t\t<i class=\"fa fa-rss-square\"></i>\n\t\t<i class=\"fa fa-rub\"></i>\n\t\t<i class=\"fa fa-ruble\"></i>\n\t\t<i class=\"fa fa-rupee\"></i>\n\t\t<i class=\"fa fa-s15\"></i>\n\t\t<i class=\"fa fa-safari\"></i>\n\t\t<i class=\"fa fa-save\"></i>\n\t\t<i class=\"fa fa-scissors\"></i>\n\t\t<i class=\"fa fa-scribd\"></i>\n\t\t<i class=\"fa fa-search\"></i>\n\t\t<i class=\"fa fa-search-minus\"></i>\n\t\t<i class=\"fa fa-search-plus\"></i>\n\t\t<i class=\"fa fa-sellsy\"></i>\n\t\t<i class=\"fa fa-send\"></i>\n\t\t<i class=\"fa fa-send-o\"></i>\n\t\t<i class=\"fa fa-server\"></i>\n\t\t<i class=\"fa fa-share\"></i>\n\t\t<i class=\"fa fa-share-alt\"></i>\n\t\t<i class=\"fa fa-share-alt-square\"></i>\n\t\t<i class=\"fa fa-share-square\"></i>\n\t\t<i class=\"fa fa-share-square-o\"></i>\n\t\t<i class=\"fa fa-shekel\"></i>\n\t\t<i class=\"fa fa-sheqel\"></i>\n\t\t<i class=\"fa fa-shield\"></i>\n\t\t<i class=\"fa fa-ship\"></i>\n\t\t<i class=\"fa fa-shirtsinbulk\"></i>\n\t\t<i class=\"fa fa-shopping-bag\"></i>\n\t\t<i class=\"fa fa-shopping-basket\"></i>\n\t\t<i class=\"fa fa-shopping-cart\"></i>\n\t\t<i class=\"fa fa-shower\"></i>\n\t\t<i class=\"fa fa-sign-in\"></i>\n\t\t<i class=\"fa fa-sign-language\"></i>\n\t\t<i class=\"fa fa-sign-out\"></i>\n\t\t<i class=\"fa fa-signal\"></i>\n\t\t<i class=\"fa fa-signing\"></i>\n\t\t<i class=\"fa fa-simplybuilt\"></i>\n\t\t<i class=\"fa fa-sitemap\"></i>\n\t\t<i class=\"fa fa-skyatlas\"></i>\n\t\t<i class=\"fa fa-skype\"></i>\n\t\t<i class=\"fa fa-slack\"></i>\n\t\t<i class=\"fa fa-sliders\"></i>\n\t\t<i class=\"fa fa-slideshare\"></i>\n\t\t<i class=\"fa fa-smile-o\"></i>\n\t\t<i class=\"fa fa-snapchat\"></i>\n\t\t<i class=\"fa fa-snapchat-ghost\"></i>\n\t\t<i class=\"fa fa-snapchat-square\"></i>\n\t\t<i class=\"fa fa-snowflake-o\"></i>\n\t\t<i class=\"fa fa-soccer-ball-o\"></i>\n\t\t<i class=\"fa fa-sort\"></i>\n\t\t<i class=\"fa fa-sort-alpha-asc\"></i>\n\t\t<i class=\"fa fa-sort-alpha-desc\"></i>\n\t\t<i class=\"fa fa-sort-amount-asc\"></i>\n\t\t<i class=\"fa fa-sort-amount-desc\"></i>\n\t\t<i class=\"fa fa-sort-asc\"></i>\n\t\t<i class=\"fa fa-sort-desc\"></i>\n\t\t<i class=\"fa fa-sort-down\"></i>\n\t\t<i class=\"fa fa-sort-numeric-asc\"></i>\n\t\t<i class=\"fa fa-sort-numeric-desc\"></i>\n\t\t<i class=\"fa fa-sort-up\"></i>\n\t\t<i class=\"fa fa-soundcloud\"></i>\n\t\t<i class=\"fa fa-space-shuttle\"></i>\n\t\t<i class=\"fa fa-spinner\"></i>\n\t\t<i class=\"fa fa-spoon\"></i>\n\t\t<i class=\"fa fa-spotify\"></i>\n\t\t<i class=\"fa fa-square\"></i>\n\t\t<i class=\"fa fa-square-o\"></i>\n\t\t<i class=\"fa fa-stack-exchange\"></i>\n\t\t<i class=\"fa fa-stack-overflow\"></i>\n\t\t<i class=\"fa fa-star\"></i>\n\t\t<i class=\"fa fa-star-half\"></i>\n\t\t<i class=\"fa fa-star-half-empty\"></i>\n\t\t<i class=\"fa fa-star-half-full\"></i>\n\t\t<i class=\"fa fa-star-half-o\"></i>\n\t\t<i class=\"fa fa-star-o\"></i>\n\t\t<i class=\"fa fa-steam\"></i>\n\t\t<i class=\"fa fa-steam-square\"></i>\n\t\t<i class=\"fa fa-step-backward\"></i>\n\t\t<i class=\"fa fa-step-forward\"></i>\n\t\t<i class=\"fa fa-stethoscope\"></i>\n\t\t<i class=\"fa fa-sticky-note\"></i>\n\t\t<i class=\"fa fa-sticky-note-o\"></i>\n\t\t<i class=\"fa fa-stop\"></i>\n\t\t<i class=\"fa fa-stop-circle\"></i>\n\t\t<i class=\"fa fa-stop-circle-o\"></i>\n\t\t<i class=\"fa fa-street-view\"></i>\n\t\t<i class=\"fa fa-strikethrough\"></i>\n\t\t<i class=\"fa fa-stumbleupon\"></i>\n\t\t<i class=\"fa fa-stumbleupon-circle\"></i>\n\t\t<i class=\"fa fa-subscript\"></i>\n\t\t<i class=\"fa fa-subway\"></i>\n\t\t<i class=\"fa fa-suitcase\"></i>\n\t\t<i class=\"fa fa-sun-o\"></i>\n\t\t<i class=\"fa fa-superpowers\"></i>\n\t\t<i class=\"fa fa-superscript\"></i>\n\t\t<i class=\"fa fa-support\"></i>\n\t\t<i class=\"fa fa-table\"></i>\n\t\t<i class=\"fa fa-tablet\"></i>\n\t\t<i class=\"fa fa-tachometer\"></i>\n\t\t<i class=\"fa fa-tag\"></i>\n\t\t<i class=\"fa fa-tags\"></i>\n\t\t<i class=\"fa fa-tasks\"></i>\n\t\t<i class=\"fa fa-taxi\"></i>\n\t\t<i class=\"fa fa-telegram\"></i>\n\t\t<i class=\"fa fa-television\"></i>\n\t\t<i class=\"fa fa-tencent-weibo\"></i>\n\t\t<i class=\"fa fa-terminal\"></i>\n\t\t<i class=\"fa fa-text-height\"></i>\n\t\t<i class=\"fa fa-text-width\"></i>\n\t\t<i class=\"fa fa-th\"></i>\n\t\t<i class=\"fa fa-th-large\"></i>\n\t\t<i class=\"fa fa-th-list\"></i>\n\t\t<i class=\"fa fa-themeisle\"></i>\n\t\t<i class=\"fa fa-thermometer\"></i>\n\t\t<i class=\"fa fa-thermometer-0\"></i>\n\t\t<i class=\"fa fa-thermometer-1\"></i>\n\t\t<i class=\"fa fa-thermometer-2\"></i>\n\t\t<i class=\"fa fa-thermometer-3\"></i>\n\t\t<i class=\"fa fa-thermometer-4\"></i>\n\t\t<i class=\"fa fa-thermometer-empty\"></i>\n\t\t<i class=\"fa fa-thermometer-full\"></i>\n\t\t<i class=\"fa fa-thermometer-half\"></i>\n\t\t<i class=\"fa fa-thermometer-quarter\"></i>\n\t\t<i class=\"fa fa-thermometer-three-quarters\"></i>\n\t\t<i class=\"fa fa-thumb-tack\"></i>\n\t\t<i class=\"fa fa-thumbs-down\"></i>\n\t\t<i class=\"fa fa-thumbs-o-down\"></i>\n\t\t<i class=\"fa fa-thumbs-o-up\"></i>\n\t\t<i class=\"fa fa-thumbs-up\"></i>\n\t\t<i class=\"fa fa-ticket\"></i>\n\t\t<i class=\"fa fa-times\"></i>\n\t\t<i class=\"fa fa-times-circle\"></i>\n\t\t<i class=\"fa fa-times-circle-o\"></i>\n\t\t<i class=\"fa fa-times-rectangle\"></i>\n\t\t<i class=\"fa fa-times-rectangle-o\"></i>\n\t\t<i class=\"fa fa-tint\"></i>\n\t\t<i class=\"fa fa-toggle-down\"></i>\n\t\t<i class=\"fa fa-toggle-left\"></i>\n\t\t<i class=\"fa fa-toggle-off\"></i>\n\t\t<i class=\"fa fa-toggle-on\"></i>\n\t\t<i class=\"fa fa-toggle-right\"></i>\n\t\t<i class=\"fa fa-toggle-up\"></i>\n\t\t<i class=\"fa fa-trademark\"></i>\n\t\t<i class=\"fa fa-train\"></i>\n\t\t<i class=\"fa fa-transgender\"></i>\n\t\t<i class=\"fa fa-transgender-alt\"></i>\n\t\t<i class=\"fa fa-trash\"></i>\n\t\t<i class=\"fa fa-trash-o\"></i>\n\t\t<i class=\"fa fa-tree\"></i>\n\t\t<i class=\"fa fa-trello\"></i>\n\t\t<i class=\"fa fa-tripadvisor\"></i>\n\t\t<i class=\"fa fa-trophy\"></i>\n\t\t<i class=\"fa fa-truck\"></i>\n\t\t<i class=\"fa fa-try\"></i>\n\t\t<i class=\"fa fa-tty\"></i>\n\t\t<i class=\"fa fa-tumblr\"></i>\n\t\t<i class=\"fa fa-tumblr-square\"></i>\n\t\t<i class=\"fa fa-turkish-lira\"></i>\n\t\t<i class=\"fa fa-tv\"></i>\n\t\t<i class=\"fa fa-twitch\"></i>\n\t\t<i class=\"fa fa-twitter\"></i>\n\t\t<i class=\"fa fa-twitter-square\"></i>\n\t\t<i class=\"fa fa-umbrella\"></i>\n\t\t<i class=\"fa fa-underline\"></i>\n\t\t<i class=\"fa fa-undo\"></i>\n\t\t<i class=\"fa fa-universal-access\"></i>\n\t\t<i class=\"fa fa-university\"></i>\n\t\t<i class=\"fa fa-unlink\"></i>\n\t\t<i class=\"fa fa-unlock\"></i>\n\t\t<i class=\"fa fa-unlock-alt\"></i>\n\t\t<i class=\"fa fa-unsorted\"></i>\n\t\t<i class=\"fa fa-upload\"></i>\n\t\t<i class=\"fa fa-usb\"></i>\n\t\t<i class=\"fa fa-usd\"></i>\n\t\t<i class=\"fa fa-user\"></i>\n\t\t<i class=\"fa fa-user-circle\"></i>\n\t\t<i class=\"fa fa-user-circle-o\"></i>\n\t\t<i class=\"fa fa-user-md\"></i>\n\t\t<i class=\"fa fa-user-o\"></i>\n\t\t<i class=\"fa fa-user-plus\"></i>\n\t\t<i class=\"fa fa-user-secret\"></i>\n\t\t<i class=\"fa fa-user-times\"></i>\n\t\t<i class=\"fa fa-users\"></i>\n\t\t<i class=\"fa fa-vcard\"></i>\n\t\t<i class=\"fa fa-vcard-o\"></i>\n\t\t<i class=\"fa fa-venus\"></i>\n\t\t<i class=\"fa fa-venus-double\"></i>\n\t\t<i class=\"fa fa-venus-mars\"></i>\n\t\t<i class=\"fa fa-viacoin\"></i>\n\t\t<i class=\"fa fa-viadeo\"></i>\n\t\t<i class=\"fa fa-viadeo-square\"></i>\n\t\t<i class=\"fa fa-video-camera\"></i>\n\t\t<i class=\"fa fa-vimeo\"></i>\n\t\t<i class=\"fa fa-vimeo-square\"></i>\n\t\t<i class=\"fa fa-vine\"></i>\n\t\t<i class=\"fa fa-vk\"></i>\n\t\t<i class=\"fa fa-volume-control-phone\"></i>\n\t\t<i class=\"fa fa-volume-down\"></i>\n\t\t<i class=\"fa fa-volume-off\"></i>\n\t\t<i class=\"fa fa-volume-up\"></i>\n\t\t<i class=\"fa fa-warning\"></i>\n\t\t<i class=\"fa fa-wechat\"></i>\n\t\t<i class=\"fa fa-weibo\"></i>\n\t\t<i class=\"fa fa-weixin\"></i>\n\t\t<i class=\"fa fa-whatsapp\"></i>\n\t\t<i class=\"fa fa-wheelchair\"></i>\n\t\t<i class=\"fa fa-wheelchair-alt\"></i>\n\t\t<i class=\"fa fa-wifi\"></i>\n\t\t<i class=\"fa fa-wikipedia-w\"></i>\n\t\t<i class=\"fa fa-window-close\"></i>\n\t\t<i class=\"fa fa-window-close-o\"></i>\n\t\t<i class=\"fa fa-window-maximize\"></i>\n\t\t<i class=\"fa fa-window-minimize\"></i>\n\t\t<i class=\"fa fa-window-restore\"></i>\n\t\t<i class=\"fa fa-windows\"></i>\n\t\t<i class=\"fa fa-won\"></i>\n\t\t<i class=\"fa fa-wordpress\"></i>\n\t\t<i class=\"fa fa-wpbeginner\"></i>\n\t\t<i class=\"fa fa-wpexplorer\"></i>\n\t\t<i class=\"fa fa-wpforms\"></i>\n\t\t<i class=\"fa fa-wrench\"></i>\n\t\t<i class=\"fa fa-xing\"></i>\n\t\t<i class=\"fa fa-xing-square\"></i>\n\t\t<i class=\"fa fa-y-combinator\"></i>\n\t\t<i class=\"fa fa-y-combinator-square\"></i>\n\t\t<i class=\"fa fa-yahoo\"></i>\n\t\t<i class=\"fa fa-yc\"></i>\n\t\t<i class=\"fa fa-yc-square\"></i>\n\t\t<i class=\"fa fa-yelp\"></i>\n\t\t<i class=\"fa fa-yen\"></i>\n\t\t<i class=\"fa fa-yoast\"></i>\n\t\t<i class=\"fa fa-youtube\"></i>\n\t\t<i class=\"fa fa-youtube-play\"></i>\n\t\t<i class=\"fa fa-youtube-square\"></i>\n\n\t</div>\n\t<p class=\"help-block text-center\">\n\t\tFor a full list of icons, please consult:\n\t\t<a href=\"http://fortawesome.github.io/Font-Awesome/icons/\">FontAwesome</a>\n\t</p>\n</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<hr />\r\n\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t<input name=\"userTitleEnabled\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['userTitleEnabled'] : null) ?
            " checked" :
            "") + 
          "><i class=\"input-helper\"></i> <strong>[[groups:details.userTitleEnabled]]</strong>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t<input name=\"private\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['private'] : null) ?
            " checked" :
            "") + 
          "><i class=\"input-helper\"></i> <strong>[[groups:details.private]]</strong>\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null) ? context['allowPrivateGroups'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t\t\t\t\t[[groups:details.private_system_help]]\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t\t\t\t\t[[groups:details.private_help]]\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t<input name=\"disableJoinRequests\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['disableJoinRequests'] : null) ?
            " checked" :
            "") + 
          "><i class=\"input-helper\"></i> <strong>[[groups:details.disableJoinRequests]]</strong>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t<input name=\"hidden\" type=\"checkbox\"" + 
          (guard((context != null && context['group'] != null) ? context['group']['hidden'] : null) ?
            " checked" :
            "") + 
          "><i class=\"input-helper\"></i> <strong>[[groups:details.hidden]]</strong>\r\n\t\t\t\t\t\t\t\t<p class=\"help-block\">\r\n\t\t\t\t\t\t\t\t\t[[groups:details.hidden_help]]\r\n\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null) ? context['group']['system'] : null) ?
            "" :
            "\r\n\t\t\t\t\t\t<button class=\"btn btn-danger btn-xs pull-right\" type=\"button\" data-action=\"delete\">[[groups:details.delete_group]]</button>\r\n\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\" type=\"button\" data-action=\"update\">[[global:save_changes]]</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t" :
        "") + 
      "\r\n\t\t\t<div data-widget-area=\"left\"></div>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-8 col-xs-12\">\r\n\t\t\t<div class=\"col-lg-11\">\r\n\t\t\t\t" + 
      (guard((context != null && context['posts'] != null) ? context['posts']['length'] : null) ?
        "" :
        "\r\n\t\t\t\t<div class=\"alert alert-info\">[[groups:details.has_no_posts]]</div>\r\n\t\t\t\t") + 
      "\r\n\t\t\t\t<div component=\"posts\" class=\"posts-list\" data-nextstart=\"" + 
      __escape(guard((context != null) ? context['nextStart'] : null)) + 
      "\">\r\n\t" + 
      compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
      "\r\n</div>\r\n<div component=\"posts/loading\" class=\"loading-indicator text-center hidden\">\r\n\t<i class=\"fa fa-refresh fa-spin\"></i>\r\n</div>\r\n\t\t\t</div>\r\n\t\t\t<div data-widget-area=\"right\"></div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n";
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
    'group.members': function groupmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['uid'] : null)) + 
          "\">\r\n\t\t<td>\r\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">\r\n\t\t\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['picture'] : null) ?
            "\r\n\t\t\t\t<img class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['picture'] : null)) + 
              "\" alt=\"" + 
              __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
              "\" />\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['icon:text'] : null)) + 
              "</div>\r\n\t\t\t\t") + 
          "\r\n\t\t\t</a>\r\n\t\t</td>\r\n\t\t<td class=\"member-name\">\r\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['username'] : null)) + 
          "</a> <i title=\"[[groups:owner]]\" class=\"fa fa-star text-warning " + 
          (guard((context != null && context['group'] != null && context['group']['members'] != null && context['group']['members'][key0] != null) ? context['group']['members'][key0]['isOwner'] : null) ?
            "" :
            "invisible") + 
          "\"></i>\r\n\r\n\t\t\t" + 
          (guard((context != null && context['group'] != null) ? context['group']['isOwner'] : null) ?
            "\r\n\t\t\t<div class=\"owner-controls btn-group pull-right\">\r\n\t\t\t\t<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"toggleOwnership\" title=\"[[groups:details.grant]]\">\r\n\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t</a>\r\n\r\n\t\t\t\t<a class=\"btn btn-sm\" href=\"#\" data-ajaxify=\"false\" data-action=\"kick\" title=\"[[groups:details.kick]]\">\r\n\t\t\t\t\t<i class=\"fa fa-ban\"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t\t" :
            "") + 
          "\r\n\t\t</td>\r\n\t</tr>\r\n\t";
      }, function alt() {
        return "";
      });
    },
    'group.pending': function grouppending(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['pending'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['uid'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['picture'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
              "\"><img class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['picture'] : null)) + 
              "\" alt=\"" + 
              __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['username'] : null)) + 
              "\" /></a>\r\n\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['icon:text'] : null)) + 
              "</div>\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class=\"member-name\">\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['pending'] != null && context['group']['pending'][key0] != null) ? context['group']['pending'][key0]['username'] : null)) + 
          "</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t[[global:more]] <span class=\"caret\"></span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" data-ajaxify=\"false\" data-action=\"accept\">[[groups:pending.accept]]</a></li>\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" data-ajaxify=\"false\" data-action=\"reject\">[[groups:pending.reject]]</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'group.invited': function groupinvited(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['group'] != null) ? context['group']['invited'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['uid'] : null)) + 
          "\">\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['picture'] : null) ?
            "\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
              "\"><img class=\"user-avatar\" src=\"" + 
              __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['picture'] : null)) + 
              "\" alt=\"" + 
              __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['username'] : null)) + 
              "\" /></a>\r\n\t\t\t\t\t\t\t\t" :
            "\r\n\t\t\t\t\t\t\t\t<div class=\"user-icon\" style=\"background-color: " + 
              __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['icon:text'] : null)) + 
              "</div>\r\n\t\t\t\t\t\t\t\t") + 
          "\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td class=\"member-name\">\r\n\t\t\t\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['group'] != null && context['group']['invited'] != null && context['group']['invited'][key0] != null) ? context['group']['invited'][key0]['username'] : null)) + 
          "</a>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t<div class=\"btn-group pull-right\">\r\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n\t\t\t\t\t\t\t\t\t\t[[global:more]] <span class=\"caret\"></span>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" role=\"menu\">\r\n\t\t\t\t\t\t\t\t\t\t<li><a href=\"#\" data-ajaxify=\"false\" data-action=\"rescindInvite\">[[groups:invited.uninvite]]</a></li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\n        <a role=\"menu-item\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\" class=\"fa fa-stack-1x fa-fw " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\n    </li>\n    ";
      }, function alt() {
        return "";
      });
    },
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t<div component=\"post\" class=\"posts-list-item" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['deleted'] : null) ?
            " deleted" :
            (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['deleted'] : null) ?
                " deleted" :
                "")) + 
          "\" data-pid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\" data-uid=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['uid'] : null)) + 
          "\">\r\n    <div class=\"post-body\">\r\n        <a class=\"topic-title\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/post/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['pid'] : null)) + 
          "\">\r\n            " + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['isMainPost'] : null) ?
            "" :
            "RE: ") + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "\r\n        </a>\r\n\r\n        <div component=\"post/content\" class=\"content\">\r\n            " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\r\n        </div>\r\n\r\n        <span class=\"topic-category\"><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/category/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['slug'] : null)) + 
          "\">[[global:posted_in, " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['category'] != null) ? context['posts'][key0]['category']['name'] : null)) + 
          "]]</a></span> &bull; <span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span>\r\n    </div>\r\n</div>\r\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
