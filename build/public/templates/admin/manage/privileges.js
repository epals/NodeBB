
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
    return "<div class=\"row\">\n\t<form role=\"form\" class=\"category\">\n\t\t<div class=\"\">\n\t\t\t<p>\n\t\t\t\t[[admin/manage/categories:privileges.description]]\n\t\t\t</p>\n\n\t\t\t<div class=\"lead\">\n\t\t\t\t[[admin/manage/categories:privileges.category-selector]]\n\t\t\t\t<div component=\"category-selector\" class=\"btn-group bottom-sheet\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n    <span component=\"category-selector-selected\">" + 
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
      "\n</ul>\n</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"privilege-table-container\">\n\t\t\t\t" + 
      (guard((context != null) ? context['cid'] : null) ?
        "\n\t\t\t\t\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t\t\t\t\t<th colspan=\"3\"></th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"10\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null) ?
            "\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"" + 
              __escape(guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountGroupOther'] : null)) + 
              "\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-other]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.labels.groups'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.groups'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['groups'] != null) ? context['privileges']['keys']['groups']['length'] : null)) + 
          "\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.group\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyPrivilegesFrom\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-from-category]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyToChildren\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-to-children]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"copyToAll\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.copy-privileges-to-all-categories]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class=\"help-block\">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t\t\t\t\t<th colspan=\"3\"></th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-viewing]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"10\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-posting]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"3\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-moderation]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null) ?
            "\n\t\t\t\t\t\t\t\t<th class=\"arrowed\" colspan=\"" + 
              __escape(guard((context != null && context['privileges'] != null) ? context['privileges']['columnCountUserOther'] : null)) + 
              "\">\n\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.section-other]]\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.labels.users'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
          compiled.blocks['privileges.users'](helpers, context, guard, iter, helper) + 
          "\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
          "\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.user\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t</table>\n\n\t\t\t\t" :
        "\n\t\t\t\t\t\t\t\t\t<label>[[admin/manage/privileges:group-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-group]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['groups'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null && context['privileges']['labels']['groups'] != null && context['privileges']['labels']['groups'][key0] != null) ? context['privileges']['labels']['groups'][key0]['name'] : null)) + 
              "</th>\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['groups'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t\t\t\t\t<tr data-group-name=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['nameEscaped'] : null)) + 
              "\" data-private=\"" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
                "1" :
                "0") + 
              "\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
                "\n\t\t\t\t\t\t\t\t\t\t" + 
                  ((guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null) == "banned-users") ?
                    "\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-exclamation-triangle text-muted\" title=\"[[admin/manage/categories:privileges.inheritance-exception]]\"></i>\n\t\t\t\t\t\t\t\t\t\t" :
                    "\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\n\t\t\t\t\t\t\t\t\t\t") + 
                  "\n\t\t\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-none\"></i>\n\t\t\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null)) + 
              "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['privileges'] : null)])) + 
              "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['groups'] != null) ? context['privileges']['keys']['groups']['length'] : null)) + 
          "\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn-toolbar\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.group\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-users\"></i>\n\t\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-group]]\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t</table>\n\t\t\t\t\t<div class=\"help-block\">\n\t\t\t\t\t\t[[admin/manage/categories:privileges.inherit]]\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr/>\n\t\t\t\t\t<label>[[admin/manage/privileges:user-privileges]]</label>\n\t\t\t\t\t<table class=\"table table-striped privilege-table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"privilege-table-header\">\n\t\t\t\t\t\t\t\t<th colspan=\"15\"></th>\n\t\t\t\t\t\t\t</tr><tr><!-- zebrastripe reset --></tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th colspan=\"2\">[[admin/manage/categories:privileges.section-user]]</th>\n\t\t\t\t\t\t\t\t<th class=\"text-center\">[[admin/manage/privileges:select-clear-all]]</th>\n\t\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['users'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null && context['privileges']['labels']['users'] != null && context['privileges']['labels']['users'][key0] != null) ? context['privileges']['labels']['users'][key0]['name'] : null)) + 
              "</th>\n\t\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t" + 
          iter(guard((context != null && context['privileges'] != null) ? context['privileges']['users'] : null), function each(key0, index, length, value) {
            var key = key0;
            return "\n\t\t\t\t\t\t\t<tr data-uid=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['uid'] : null)) + 
              "\"" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
                " data-banned" :
                "") + 
              ">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['picture'] : null) ?
                "\n\t\t\t\t\t\t\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
                  __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['picture'] : null)) + 
                  "\" title=\"" + 
                  __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
                  "\" />\n\t\t\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
                  __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['icon:bgColor'] : null)) + 
                  ";\">" + 
                  __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['icon:text'] : null)) + 
                  "</div>\n\t\t\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
              (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
                "\n\t\t\t\t\t\t\t\t\t\t<i class=\"ban fa fa-gavel text-danger\" title=\"[[admin/manage/categories:privileges.banned-user-inheritance]]\"></i>\n\t\t\t\t\t\t\t\t\t" :
                "") + 
              "\n\t\t\t\t\t\t\t\t\t" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
              "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t\t\t\t\t" + 
              __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null)])) + 
              "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
          }, function alt() {
            return "";
          }) + 
          "\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t<tfoot>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td colspan=\"3\"></td>\n\t\t\t\t\t\t\t\t<td colspan=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['keys'] != null && context['privileges']['keys']['users'] != null) ? context['privileges']['keys']['users']['length'] : null)) + 
          "\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default pull-right\" data-ajaxify=\"false\" data-action=\"search.user\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>\n\t\t\t\t\t\t\t\t\t\t[[admin/manage/categories:privileges.search-user]]\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tfoot>\n\t\t\t\t\t</table>\n\n\t\t\t\t") + 
      "\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n\n<div class=\"floating-button\">\n\t<button id=\"discard\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored\" style=\"display: none;\">\n\t\t<i class=\"material-icons\">undo</i>\n\t</button>\n\n\t<button id=\"save\" class=\"mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored primary\">\n\t\t<i class=\"material-icons\">save</i>\n\t</button>\n</div>";
  }

  compiled.blocks = {
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
    'privileges.labels.groups': function privilegeslabelsgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null && context['privileges']['labels']['groups'] != null && context['privileges']['labels']['groups'][key0] != null) ? context['privileges']['labels']['groups'][key0]['name'] : null)) + 
          "</th>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.groups': function privilegesgroups(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['groups'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<tr data-group-name=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['nameEscaped'] : null)) + 
          "\" data-private=\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "1" :
            "0") + 
          "\">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['isPrivate'] : null) ?
            "\n\t\t\t\t\t\t\t\t\t\t" + 
              ((guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null) == "banned-users") ?
                "\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-exclamation-triangle text-muted\" title=\"[[admin/manage/categories:privileges.inheritance-exception]]\"></i>\n\t\t\t\t\t\t\t\t\t\t" :
                "\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-lock text-muted\" title=\"[[admin/manage/categories:privileges.group-private]]\"></i>\n\t\t\t\t\t\t\t\t\t\t") + 
              "\n\t\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-fw fa-none\"></i>\n\t\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null)) + 
          "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-sm dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-copy\"></i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyToAllGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-all-categories]]</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyToChildrenGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-to-children]]</a></li>\n\t\t\t\t\t\t\t\t\t\t\t<li data-action=\"copyPrivilegesFromGroup\"><a href=\"#\">[[admin/manage/categories:privileges.copy-group-privileges-from]]</a></li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['name'] : null), guard((context != null && context['privileges'] != null && context['privileges']['groups'] != null && context['privileges']['groups'][key0] != null) ? context['privileges']['groups'][key0]['privileges'] : null)])) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.labels.users': function privilegeslabelsusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null) ? context['privileges']['labels']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t\t<th class=\"text-center\">" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['labels'] != null && context['privileges']['labels']['users'] != null && context['privileges']['labels']['users'][key0] != null) ? context['privileges']['labels']['users'][key0]['name'] : null)) + 
          "</th>\n\t\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    },
    'privileges.users': function privilegesusers(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null && context['privileges'] != null) ? context['privileges']['users'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\n\t\t\t\t\t\t\t<tr data-uid=\"" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['uid'] : null)) + 
          "\"" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            " data-banned" :
            "") + 
          ">\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['picture'] : null) ?
            "\n\t\t\t\t\t\t\t\t\t<img class=\"avatar avatar-sm\" src=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['picture'] : null)) + 
              "\" title=\"" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
              "\" />\n\t\t\t\t\t\t\t\t\t" :
            "\n\t\t\t\t\t\t\t\t\t<div class=\"avatar avatar-sm\" style=\"background-color: " + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['icon:bgColor'] : null)) + 
              ";\">" + 
              __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['icon:text'] : null)) + 
              "</div>\n\t\t\t\t\t\t\t\t\t") + 
          "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t" + 
          (guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['banned'] : null) ?
            "\n\t\t\t\t\t\t\t\t\t<i class=\"ban fa fa-gavel text-danger\" title=\"[[admin/manage/categories:privileges.banned-user-inheritance]]\"></i>\n\t\t\t\t\t\t\t\t\t" :
            "") + 
          "\n\t\t\t\t\t\t\t\t\t" + 
          __escape(guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null)) + 
          "\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"text-center\"><input autocomplete=\"off\" type=\"checkbox\" class=\"checkbox-helper\"></td>\n\t\t\t\t\t\t\t\t" + 
          __escape(helper(context, helpers, 'spawnPrivilegeStates', [guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['username'] : null), guard((context != null && context['privileges'] != null && context['privileges']['users'] != null && context['privileges']['users'][key0] != null) ? context['privileges']['users'][key0]['privileges'] : null)])) + 
          "\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
