
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
    return "<div class=\"admins-mods\">\n\t<h4>" + 
      (guard((context != null && context['admins'] != null) ? context['admins']['icon'] : null) ?
        "<i class=\"fa " + 
          __escape(guard((context != null && context['admins'] != null) ? context['admins']['icon'] : null)) + 
          "\"></i> " :
        "") + 
      "[[admin/manage/admins-mods:administrators]]</h4>\n\t<div class=\"administrator-area\">\n\t" + 
      compiled.blocks['admins.members'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\t<input id=\"admin-search\" class=\"form-control\" placeholder=\"[[admin/manage/admins-mods:add-administrator]]\" />\n\n\t<br/>\n\n\t<h4>" + 
      (guard((context != null && context['globalMods'] != null) ? context['globalMods']['icon'] : null) ?
        "<i class=\"fa " + 
          __escape(guard((context != null && context['globalMods'] != null) ? context['globalMods']['icon'] : null)) + 
          "\"></i> " :
        "") + 
      "[[admin/manage/admins-mods:global-moderators]]</h4>\n\t<div class=\"global-moderator-area\">\n\t" + 
      compiled.blocks['globalMods.members'](helpers, context, guard, iter, helper) + 
      "\n\t</div>\n\n\t<div id=\"no-global-mods-warning\" class=\"" + 
      (guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null) ? context['globalMods']['members']['length'] : null) ?
        "hidden" :
        "") + 
      "\">[[admin/manage/admins-mods:no-global-moderators]]</div>\n\n\t<input id=\"global-mod-search\" class=\"form-control\" placeholder=\"[[admin/manage/admins-mods:add-global-moderator]]\" />\n\n\t<br/>\n\n\t<div component=\"category-selector\" class=\"btn-group bottom-sheet\">\r\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n    <span component=\"category-selector-selected\">" + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
          ";\"></i></span> " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) :
        "\r\n    " + 
          (guard((context != null) ? context['selectCategoryLabel'] : null) ?
            __escape(guard((context != null) ? context['selectCategoryLabel'] : null)) :
            "[[topic:thread_tools.select_category]]")) + 
      "</span> <span class=\"caret\"></span>\r\n</button>\r\n<div component=\"category-selector-search\" class=\"hidden\">\r\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\r\n</div>\r\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\r\n    <li component=\"category/no-matches\" role=\"presentation\" class=\"category hidden\">\r\n        <a role=\"menu-item\">[[search:no-matches]]</a>\r\n    </li>\r\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n</div>\n\n\t" + 
      compiled.blocks['categoryMods'](helpers, context, guard, iter, helper) + 
      "\n</div>\n";
  }

  compiled.blocks = {
    'admins.members': function adminsmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['admins'] != null) ? context['admins']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<div class=\"user-card pull-left\" data-uid=\"" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['uid'] : null)) + 
          "\">\n\t\t\t" + 
          (guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['picture'] : null) ?
            "\n\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
              __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['picture'] : null)) + 
              "\" />\n\t\t\t" :
            "\n\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
              __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['icon:text'] : null)) + 
              "</div>\n\t\t\t") + 
          "\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['admins'] != null && context['admins']['members'] != null && context['admins']['members'][key0] != null) ? context['admins']['members'][key0]['username'] : null)) + 
          "</a>\n\t\t\t<i class=\"remove-user-icon fa fa-times\" role=\"button\"></i>\n\t\t</div>\n\t";
      }, function alt() {
        return "";
      });
    },
    'globalMods.members': function globalModsmembers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['globalMods'] != null) ? context['globalMods']['members'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t<div class=\"user-card pull-left\" data-uid=\"" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['uid'] : null)) + 
          "\">\n\t\t\t" + 
          (guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['picture'] : null) ?
            "\n\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
              __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['picture'] : null)) + 
              "\" />\n\t\t\t" :
            "\n\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
              __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['icon:text'] : null)) + 
              "</div>\n\t\t\t") + 
          "\n\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/user/" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['userslug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['globalMods'] != null && context['globalMods']['members'] != null && context['globalMods']['members'][key0] != null) ? context['globalMods']['members'][key0]['username'] : null)) + 
          "</a>\n\t\t\t<i class=\"remove-user-icon fa fa-times\" role=\"button\"></i>\n\t\t</div>\n\t";
      }, function alt() {
        return "";
      });
    },
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled " :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\">\r\n        <a role=\"menu-item\">" + 
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
          "</span></a>\r\n    </li>\r\n    ";
      }, function alt() {
        return "";
      });
    },
    'categoryMods': function categoryMods(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryMods'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t<div class=\"categories category-wrapper category-depth-" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['depth'] : null)) + 
          "\">\n\t<h4>" + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['icon'] : null)) + 
              "\"></i> " :
            "") + 
          "[[admin/manage/admins-mods:moderators-of-category, " + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['name'] : null)) + 
          "]]" + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['disabled'] : null) ?
            "<span class=\"badge badge-primary\">[[admin/manage/admins-mods:disabled]]</span>" :
            "") + 
          "</h4>\n\t<div class=\"moderator-area\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\">\n\t\t" + 
          iter(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['moderators'] : null), function each(key1, index, length, value) {
            var key = key1;
            return "\n\t\t\t<div class=\"user-card pull-left\" data-uid=\"" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['uid'] : null)) + 
              "\">\n\t\t\t\t" + 
              (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['picture'] : null) ?
                "\n\t\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
                  __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['picture'] : null)) + 
                  "\" />\n\t\t\t\t" :
                "\n\t\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
                  __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['icon:bgColor'] : null)) + 
                  ";\">" + 
                  __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['icon:text'] : null)) + 
                  "</div>\n\t\t\t\t") + 
              "\n\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['userslug'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null && context['categoryMods'][key0]['moderators'][key1] != null) ? context['categoryMods'][key0]['moderators'][key1]['username'] : null)) + 
              "</a>\n\t\t\t\t<i class=\"remove-user-icon fa fa-times\" role=\"button\"></i>\n\t\t\t</div>\n\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t</div>\n\n\t<div data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\" class=\"no-moderator-warning " + 
          (guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null && context['categoryMods'][key0]['moderators'] != null) ? context['categoryMods'][key0]['moderators']['length'] : null) ?
            "hidden" :
            "") + 
          "\">[[admin/manage/admins-mods:no-moderators]]</div>\n\n\t<input data-cid=\"" + 
          __escape(guard((context != null && context['categoryMods'] != null && context['categoryMods'][key0] != null) ? context['categoryMods'][key0]['cid'] : null)) + 
          "\" class=\"form-control moderator-search\" placeholder=\"[[admin/manage/admins-mods:add-moderator]]\" />\n\t</div>\n\t<br/>\n\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
