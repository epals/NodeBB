
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
    return "<script>\n\twindow.addEventListener('load', function () {\n\t\tdefine(config.relative_path + '/assets/templates/500.js', function () {\n\t\t\tfunction compiled(helpers, context, get, iter, helper) {\n\t\t\t\treturn '<div class=\"alert alert-danger\">\\n\\t<strong>[[global:500.title]]</strong>\\n\\t<p>[[global:500.message]]</p>\\n\\t<p>' + \n\t\t\t\t\thelpers.__escape(get(context && context['path'])) + '</p>\\n\\t' + \n\t\t\t\t\t(get(context && context['error']) ? '<p>' + helpers.__escape(get(context && context['error'])) + '</p>' : '') + '\\n\\n\\t' + \n\t\t\t\t\t(get(context && context['returnLink']) ? '\\n\\t<p>[[error:goback]]</p>\\n\\t' : '') + '\\n</div>\\n';\n\t\t\t}\n\n\t\t\treturn compiled;\n\t\t});\n\t});\n</script>";
  }

  compiled.blocks = {
    
  };

  return compiled;
})
