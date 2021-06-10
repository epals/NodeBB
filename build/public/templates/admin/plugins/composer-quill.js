
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
    return "<div class=\"row\">\n\t<div class=\"col-lg-8 col-sm-6\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Quill Composer</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<p>\n\t\t\t\t\t<a href=\"https://quilljs.com/\">Quill</a> is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-4 col-sm-6\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Migration</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<p>\n\t\t\t\t\tIf you are switching to Quill from a different composer (i.e. composer-default/markdown), you will need to convert your existing posts to Quill's format. You may use the utilities below to do so.\n\t\t\t\t</p>\n\n\t\t\t\t<button class=\"btn btn-block btn-default\" data-action=\"migrate/in\">Migrate to Quill <i class=\"fa fa-arrow-circle-o-left\"></i></button>\n\t\t\t\t<button class=\"btn btn-block btn-default\" data-action=\"migrate/out\">Migrate from Quill <i class=\"fa fa-arrow-circle-o-right\"></i></button>\n\t\t\t</div>\n\t\t</div><div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Compatibility Checks</div>\n\t\t\t<div class=\"panel-body\">\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item list-group-item-" + 
      (guard((context != null && context['checks'] != null) ? context['checks']['markdown'] : null) ?
        "success" :
        "danger") + 
      "\">\n\t\t\t\t\t\t<strong>Markdown Compatibility</strong>\n\t\t\t\t\t\t" + 
      (guard((context != null && context['checks'] != null) ? context['checks']['markdown'] : null) ?
        "\n\t\t\t\t\t\t<span class=\"badge\"><i class=\"fa fa-check\"></i></span>\n\t\t\t\t\t\t<p>The Markdown plugin is either disabled, or HTML sanitization is disabled</p>\n\t\t\t\t\t\t" :
        "\n\t\t\t\t\t\t<span class=\"badge\"><i class=\"fa fa-times\"></i></span>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tIn order to render post content correctly, the Markdown plugin needs to have HTML sanitization disabled,\n\t\t\t\t\t\t\tor the entire plugin should be disabled altogether.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t\t") + 
      "\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-group-item list-group-item-" + 
      (guard((context != null && context['checks'] != null) ? context['checks']['composer'] : null) ?
        "success" :
        "danger") + 
      "\">\n\t\t\t\t\t\t<strong>Composer Conflicts</strong>\n\t\t\t\t\t\t" + 
      (guard((context != null && context['checks'] != null) ? context['checks']['composer'] : null) ?
        "\n\t\t\t\t\t\t<span class=\"badge\"><i class=\"fa fa-check\"></i></span>\n\t\t\t\t\t\t<p>Great! Looks like Quill is the only composer active</p>\n\t\t\t\t\t\t" :
        "\n\t\t\t\t\t\t<span class=\"badge\"><i class=\"fa fa-times\"></i></span>\n\t\t\t\t\t\t<p>Quill must be the only composer active. Please disable other composers and reload NodeBB.</p>\n\t\t\t\t\t\t") + 
      "\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
