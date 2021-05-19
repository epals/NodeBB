
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
    return (guard((context != null) ? context['isSection'] : null) ?
        "\r\n<div component=\"categories/category\" class=\"col-xs-12 category-item\">\r\n\t<h1 class=\"section\">" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</h1>\r\n</div>\r\n" :
        "\r\n<div component=\"categories/category\" class=\"" + 
          (guard((context != null) ? context['class'] : null) ?
            __escape(guard((context != null) ? context['class'] : null)) :
            "col-md-3 col-sm-6 col-xs-12") + 
          " category-item\" data-cid=\"" + 
          __escape(guard((context != null) ? context['cid'] : null)) + 
          "\" data-numRecentReplies=\"" + 
          __escape(guard((context != null) ? context['numRecentReplies'] : null)) + 
          "\">\r\n\t<meta itemprop=\"name\" content=\"" + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "\">\r\n\r\n\t<div class=\"category-icon\">\r\n\t\t" + 
          (guard((context != null) ? context['link'] : null) ?
            "\r\n\t\t<a style=\"color: " + 
              __escape(guard((context != null) ? context['color'] : null)) + 
              ";\" href=\"" + 
              __escape(guard((context != null) ? context['link'] : null)) + 
              "\" itemprop=\"url\">\r\n\t\t" :
            "\r\n\t\t<a style=\"color: " + 
              __escape(guard((context != null) ? context['color'] : null)) + 
              ";\" href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null)) + 
              "\" itemprop=\"url\">\r\n\t\t") + 
          "\r\n\t\t\t<div\r\n\t\t\t\tid=\"category-" + 
          __escape(guard((context != null) ? context['cid'] : null)) + 
          "\" class=\"category-header category-header-image-" + 
          __escape(guard((context != null) ? context['imageClass'] : null)) + 
          "\"\r\n\t\t\t\tstyle=\"\r\n\t\t\t\t\t" + 
          (guard((context != null) ? context['backgroundImage'] : null) ?
            "background-image: url(" + 
              __escape(guard((context != null) ? context['backgroundImage'] : null)) + 
              ");" :
            "") + 
          "\r\n\t\t\t\t\t" + 
          (guard((context != null) ? context['bgColor'] : null) ?
            "background-color: " + 
              __escape(guard((context != null) ? context['bgColor'] : null)) + 
              ";" :
            "") + 
          "\r\n\t\t\t\t\tcolor: " + 
          __escape(guard((context != null) ? context['color'] : null)) + 
          ";\r\n\t\t\t\t\"\r\n\t\t\t>\r\n\t\t\t\t" + 
          (guard((context != null) ? context['link'] : null) ?
            "" :
            "\r\n\t\t\t\t<span class=\"badge " + 
              __escape(guard((context != null) ? context['unread-class'] : null)) + 
              "\"><i class=\"fa fa-book\" data-toggle=\"tooltip\" title=\"[[global:topics]]\"></i> <span class=\"human-readable-number\" title=\"" + 
              __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
              "\">" + 
              __escape(guard((context != null) ? context['totalTopicCount'] : null)) + 
              "</span>&nbsp; <i class=\"fa fa-pencil\" data-toggle=\"tooltip\" title=\"[[global:posts]]\"></i> <span class=\"human-readable-number\" title=\"" + 
              __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
              "\">" + 
              __escape(guard((context != null) ? context['totalPostCount'] : null)) + 
              "</span></span>\r\n\t\t\t\t") + 
          "\r\n\r\n\t\t\t\t" + 
          (guard((context != null) ? context['icon'] : null) ?
            "\r\n\t\t\t\t<div><i class=\"fa " + 
              __escape(guard((context != null) ? context['icon'] : null)) + 
              " fa-4x\"></i></div>\r\n\t\t\t\t" :
            "") + 
          "\r\n\t\t\t</div>\r\n\t\t</a>\r\n\r\n\t\t<div class=\"category-box\">\r\n\t\t\t<div class=\"category-info\">\r\n\t\t\t\t" + 
          (guard((context != null) ? context['link'] : null) ?
            "\r\n\t\t\t\t<a href=\"" + 
              __escape(guard((context != null) ? context['link'] : null)) + 
              "\" itemprop=\"url\">\r\n\t\t\t\t" :
            "\r\n\t\t\t\t<a href=\"" + 
              __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/category/" + 
              __escape(guard((context != null) ? context['slug'] : null)) + 
              "\" itemprop=\"url\">\r\n\t\t\t\t") + 
          "\r\n\t\t\t\t\t<h4>" + 
          (guard((context != null) ? context['icon'] : null) ?
            "<i class=\"fa " + 
              __escape(guard((context != null) ? context['icon'] : null)) + 
              " visible-xs-inline\"></i> " :
            "") + 
          __escape(guard((context != null) ? context['name'] : null)) + 
          "</h4>\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"description\" itemprop=\"description\">" + 
          __escape(guard((context != null) ? context['descriptionParsed'] : null)) + 
          "</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t" + 
          (guard((context != null) ? context['link'] : null) ?
            "" :
            "\r\n\t\t\t" + 
              compiled.blocks['posts'](helpers, context, guard, iter, helper) + 
              "\r\n\t\t\t") + 
          "\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n");
  }

  compiled.blocks = {
    'posts': function posts(helpers, context, guard, iter, helper) {
      var __escape = helpers.__escape;
      var value = context;
      return iter(guard((context != null) ? context['posts'] : null), function each(key0, index, length, value) {
        var key = key0;
        return "\r\n\t\t\t<div component=\"category/posts\" class=\"post-preview clearfix\">\r\n\t\t\t\t<strong><a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
          "\">" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['title'] : null)) + 
          "</a></strong>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<a style=\"color: " + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['color'] : null)) + 
          ";\" href=\"" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null) ?
            __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
              "/user/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['userslug'] : null)) :
            "#") + 
          "\">\r\n\t\t\t\t\t" + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null) ?
            "\r\n\t\t\t\t\t<img src=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['picture'] : null)) + 
              "\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\" class=\"pull-left user-img\" />\r\n\t\t\t\t\t" :
            "\r\n\t\t\t\t\t<div class=\"pull-left user-img user-icon\" title=\"" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['username'] : null)) + 
              "\" style=\"background-color: " + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:bgColor'] : null)) + 
              "\">" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['user'] != null) ? context['posts'][key0]['user']['icon:text'] : null)) + 
              "</div>\r\n\t\t\t\t\t") + 
          "\r\n\t\t\t\t</a>\r\n\t\t\t\t<div class=\"post-preview-content\">\r\n\r\n\t\t\t\t\t<div class=\"content\">\r\n\t\t\t\t\t" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['content'] : null)) + 
          "\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p class=\"fade-out\"></p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<span class=\"pull-right post-preview-footer\">\r\n\t\t\t\t\t<span class=\"timeago\" title=\"" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['timestampISO'] : null)) + 
          "\"></span> &bull;\r\n\t\t\t\t\t<a href=\"" + 
          __escape(guard((context != null && context['config'] != null) ? context['config']['relative_path'] : null)) + 
          "/topic/" + 
          __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null && context['posts'][key0]['topic'] != null) ? context['posts'][key0]['topic']['slug'] : null)) + 
          (guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null) ?
            "/" + 
              __escape(guard((context != null && context['posts'] != null && context['posts'][key0] != null) ? context['posts'][key0]['index'] : null)) :
            "") + 
          "\">[[global:read_more]]</a>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t";
      }, function alt() {
        return "";
      });
    }
  };

  return compiled;
})
