
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
    return "<div class=\"text-center\">\r\n\t<div class=\"panel panel-default\">\r\n\t\t<div class=\"panel-body collapse\" id=\"flags-daily-wrapper\" aria-expanded=\"false\">\r\n\t\t\t<div><canvas id=\"flags:daily\" height=\"150\"></canvas></div>\r\n\t\t</div>\r\n\t\t<div class=\"panel-footer\" data-toggle=\"collapse\" data-target=\"#flags-daily-wrapper\" aria-controls=\"#flags-daily-wrapper\"><small>[[flags:graph-label]]</small>&nbsp;<i class=\"fa fa-sort\"></i></div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">[[flags:quick-filters]]</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<ul>\r\n\t\t\t<li><a href=\"" + 
      __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
      "/flags?quick=mine\">[[flags:filter-quick-mine]]</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n\t<div class=\"panel-heading\">\r\n\t\t<h3 class=\"panel-title\">[[flags:filters]]</h3>\r\n\t</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<form role=\"form\" component=\"flags/filters\">\r\n\t\t\t<fieldset>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-cid\">[[flags:filter-cid]]</label>\r\n\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t<div component=\"category/dropdown\" class=\"btn-group category-dropdown-container bottom-sheet\">\r\n   <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n    " + 
      (guard((context != null) ? context['selectedCategory'] : null) ?
        "<span class=\"fa-stack\" style=\"" + 
          __escape(helper(context, helpers, 'generateCategoryBackground', [guard((context != null) ? context['selectedCategory'] : null)])) + 
          "\"><i class=\"fa fa-fw fa-stack-1x " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['icon'] : null)) + 
          "\" style=\"color: " + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['color'] : null)) + 
          ";\"></i></span> <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">" + 
          __escape(guard((context != null && context['selectedCategory'] != null) ? context['selectedCategory']['name'] : null)) + 
          "</span>" :
        "\r\n    <span class=\"visible-sm-inline visible-md-inline visible-lg-inline\">[[unread:all_categories]]</span><span class=\"visible-xs-inline\"><i class=\"fa fa-fw fa-list\"></i></span>") + 
      " <span class=\"caret\"></span>\r\n</button>\r\n<div component=\"category-selector-search\" class=\"hidden\">\r\n    <input type=\"text\" class=\"form-control\" autocomplete=\"off\">\r\n</div>\r\n<ul component=\"category/list\" class=\"dropdown-menu category-dropdown-menu\" role=\"menu\">\r\n    " + 
      (guard((context != null) ? context['allCategoriesUrl'] : null) ?
        "\r\n    <li role=\"presentation\" class=\"category\" data-all=\"all\">\r\n        <a role=\"menu-item\" href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/" + 
          __escape(guard((context != null) ? context['allCategoriesUrl'] : null)) + 
          "\"><i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard((context != null) ? context['selectedCategory'] : null) ?
            "invisible" :
            "") + 
          "\"></i> [[unread:all_categories]]</a>\r\n    </li>\r\n    " :
        "") + 
      "\r\n    " + 
      compiled.blocks['categoryItems'](helpers, context, guard, iter, helper) + 
      "\r\n</ul>\r\n</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"sort\">[[flags:sort]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"sort\" name=\"sort\">\r\n\t\t\t\t\t\t<optgroup label=\"[[flags:sort-all]]\">\r\n\t\t\t\t\t\t\t<option value=\"newest\">[[flags:sort-newest]]</option>\r\n\t\t\t\t\t\t\t<option value=\"oldest\">[[flags:sort-oldest]]</option>\r\n\t\t\t\t\t\t\t<option value=\"reports\">[[flags:sort-reports]]</option>\r\n\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t\t<optgroup label=\"[[flags:sort-posts-only]]\">\r\n\t\t\t\t\t\t\t<option value=\"downvotes\">[[flags:sort-downvotes]]</option>\r\n\t\t\t\t\t\t\t<option value=\"upvotes\">[[flags:sort-upvotes]]</option>\r\n\t\t\t\t\t\t\t<option value=\"replies\">[[flags:sort-replies]]</option>\r\n\t\t\t\t\t\t</optgroup>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-state\">[[flags:filter-state]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-state\" name=\"state\">\r\n\t\t\t\t\t\t<option value=\"\">[[flags:state-all]]</option>\r\n\t\t\t\t\t\t<option value=\"open\">[[flags:state-open]]</option>\r\n\t\t\t\t\t\t<option value=\"wip\">[[flags:state-wip]]</option>\r\n\t\t\t\t\t\t<option value=\"resolved\">[[flags:state-resolved]]</option>\r\n\t\t\t\t\t\t<option value=\"rejected\">[[flags:state-rejected]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-type\">[[flags:filter-type]]</label>\r\n\t\t\t\t\t<select class=\"form-control\" id=\"filter-type\" name=\"type\">\r\n\t\t\t\t\t\t<option value=\"\">[[flags:filter-type-all]]</option>\r\n\t\t\t\t\t\t<option value=\"post\">[[flags:filter-type-post]]</option>\r\n\t\t\t\t\t\t<option value=\"user\">[[flags:filter-type-user]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</fieldset>\r\n\r\n\t\t\t<fieldset class=\"collapse" + 
      (guard((context != null) ? context['expanded'] : null) ?
        " in" :
        "") + 
      "\" id=\"more-filters\" aria-expanded=\"" + 
      __escape(guard((context != null) ? context['expanded'] : null)) + 
      "\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-assignee\">[[flags:filter-assignee]]</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"filter-assignee\" name=\"assignee\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-targetUid\">[[flags:filter-targetUid]]</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"filter-targetUid\" name=\"targetUid\" />\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"filter-reporterId\">[[flags:filter-reporterId]]</label>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"filter-reporterId\" name=\"reporterId\" />\r\n\t\t\t\t</div>\r\n\t\t\t</fieldset>\r\n\r\n\t\t\t" + 
      (guard((context != null) ? context['expanded'] : null) ?
        "\r\n\t\t\t<button type=\"button\" class=\"btn btn-link btn-block\" data-toggle=\"collapse\" data-target=\"#more-filters\" aria-controls=\"#more-filters\" data-text-variant=\"[[flags:more-filters]] \">[[flags:fewer-filters]]&nbsp;<i class=\"fa fa-sort\"></i></button>\r\n\t\t\t" :
        "\r\n\t\t\t<button type=\"button\" class=\"btn btn-link btn-block\" data-toggle=\"collapse\" data-target=\"#more-filters\" aria-controls=\"#more-filters\" data-text-variant=\"[[flags:fewer-filters]] \">[[flags:more-filters]]&nbsp;<i class=\"fa fa-sort\"></i></button>\r\n\t\t\t") + 
      "\r\n\t\t\t<button type=\"button\" id=\"apply-filters\" class=\"btn btn-primary btn-block\">[[flags:apply-filters]]</button>\r\n\t\t</form>\r\n\t</div>\r\n</div>";
  }

  compiled.blocks = {
    'categoryItems': function categoryItems(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['categoryItems'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n    <li role=\"presentation\" class=\"category " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['disabledClass'] : null) ?
            "disabled" :
            "") + 
          "\" data-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['cid'] : null)) + 
          "\" data-parent-cid=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['parentCid'] : null)) + 
          "\" data-name=\"" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "\">\r\n        <a role=\"menu-item\" href=\"#\">" + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['level'] : null)) + 
          "<i component=\"category/select/icon\" class=\"fa fa-fw fa-check " + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['selected'] : null) ?
            "" :
            "invisible") + 
          "\"></i><span component=\"category-markup\" style=\"" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['match'] : null) ?
            "font-weight: bold;" :
            "") + 
          "\">" + 
          (guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null) ?
            "<span class=\"fa-stack\" style=\"" + 
              __escape(helper(context, helpers, 'generateCategoryBackground', [guard(value)])) + 
              "\"><i class=\"fa fa-fw fa-stack-1x " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['icon'] : null)) + 
              "\" style=\"color: " + 
              __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['color'] : null)) + 
              ";\"></i></span>" :
            "") + 
          " " + 
          __escape(guard((context != null && context['categoryItems'] != null && context['categoryItems'][key0] != null) ? context['categoryItems'][key0]['name'] : null)) + 
          "</span></a>\r\n    </li>\r\n    ";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
