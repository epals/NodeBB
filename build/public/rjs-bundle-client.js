/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.6.7
 * @requires jQuery >=1.5.0 <4.0
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2019, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define('timeago/jquery.timeago',['jquery'], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.timeago = function(timestamp) {
    if (timestamp instanceof Date) {
      return inWords(timestamp);
    } else if (typeof timestamp === "string") {
      return inWords($.timeago.parse(timestamp));
    } else if (typeof timestamp === "number") {
      return inWords(new Date(timestamp));
    } else {
      return inWords($.timeago.datetime(timestamp));
    }
  };
  var $t = $.timeago;

  $.extend($.timeago, {
    settings: {
      refreshMillis: 60000,
      allowPast: true,
      allowFuture: false,
      localeTitle: false,
      cutoff: 0,
      autoDispose: true,
      strings: {
        prefixAgo: null,
        prefixFromNow: null,
        suffixAgo: "ago",
        suffixFromNow: "from now",
        inPast: 'any moment now',
        seconds: "less than a minute",
        minute: "about a minute",
        minutes: "%d minutes",
        hour: "about an hour",
        hours: "about %d hours",
        day: "a day",
        days: "%d days",
        month: "about a month",
        months: "%d months",
        year: "about a year",
        years: "%d years",
        wordSeparator: " ",
        numbers: []
      }
    },

    inWords: function(distanceMillis) {
      if (!this.settings.allowPast && ! this.settings.allowFuture) {
          throw 'timeago allowPast and allowFuture settings can not both be set to false.';
      }

      var $l = this.settings.strings;
      var prefix = $l.prefixAgo;
      var suffix = $l.suffixAgo;
      if (this.settings.allowFuture) {
        if (distanceMillis < 0) {
          prefix = $l.prefixFromNow;
          suffix = $l.suffixFromNow;
        }
      }

      if (!this.settings.allowPast && distanceMillis >= 0) {
        return this.settings.strings.inPast;
      }

      var seconds = Math.abs(distanceMillis) / 1000;
      var minutes = seconds / 60;
      var hours = minutes / 60;
      var days = hours / 24;
      var years = days / 365;

      function substitute(stringOrFunction, number) {
        var string = $.isFunction(stringOrFunction) ? stringOrFunction(number, distanceMillis) : stringOrFunction;
        var value = ($l.numbers && $l.numbers[number]) || number;
        return string.replace(/%d/i, value);
      }

      var words = seconds < 45 && substitute($l.seconds, Math.round(seconds)) ||
        seconds < 90 && substitute($l.minute, 1) ||
        minutes < 45 && substitute($l.minutes, Math.round(minutes)) ||
        minutes < 90 && substitute($l.hour, 1) ||
        hours < 24 && substitute($l.hours, Math.round(hours)) ||
        hours < 42 && substitute($l.day, 1) ||
        days < 30 && substitute($l.days, Math.round(days)) ||
        days < 45 && substitute($l.month, 1) ||
        days < 365 && substitute($l.months, Math.round(days / 30)) ||
        years < 1.5 && substitute($l.year, 1) ||
        substitute($l.years, Math.round(years));

      var separator = $l.wordSeparator || "";
      if ($l.wordSeparator === undefined) { separator = " "; }
      return $.trim([prefix, words, suffix].join(separator));
    },

    parse: function(iso8601) {
      var s = $.trim(iso8601);
      s = s.replace(/\.\d+/,""); // remove milliseconds
      s = s.replace(/-/,"/").replace(/-/,"/");
      s = s.replace(/T/," ").replace(/Z/," UTC");
      s = s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"); // -04:00 -> -0400
      s = s.replace(/([\+\-]\d\d)$/," $100"); // +09 -> +0900
      return new Date(s);
    },
    datetime: function(elem) {
      var iso8601 = $t.isTime(elem) ? $(elem).attr("datetime") : $(elem).attr("title");
      return $t.parse(iso8601);
    },
    isTime: function(elem) {
      // jQuery's `is()` doesn't play well with HTML5 in IE
      return $(elem).get(0).tagName.toLowerCase() === "time"; // $(elem).is("time");
    }
  });

  // functions that can be called via $(el).timeago('action')
  // init is default when no action is given
  // functions are called with context of a single element
  var functions = {
    init: function() {
      functions.dispose.call(this);
      var refresh_el = $.proxy(refresh, this);
      refresh_el();
      var $s = $t.settings;
      if ($s.refreshMillis > 0) {
        this._timeagoInterval = setInterval(refresh_el, $s.refreshMillis);
      }
    },
    update: function(timestamp) {
      var date = (timestamp instanceof Date) ? timestamp : $t.parse(timestamp);
      $(this).data('timeago', { datetime: date });
      if ($t.settings.localeTitle) {
        $(this).attr("title", date.toLocaleString());
      }
      refresh.apply(this);
    },
    updateFromDOM: function() {
      $(this).data('timeago', { datetime: $t.parse( $t.isTime(this) ? $(this).attr("datetime") : $(this).attr("title") ) });
      refresh.apply(this);
    },
    dispose: function () {
      if (this._timeagoInterval) {
        window.clearInterval(this._timeagoInterval);
        this._timeagoInterval = null;
      }
    }
  };

  $.fn.timeago = function(action, options) {
    var fn = action ? functions[action] : functions.init;
    if (!fn) {
      throw new Error("Unknown function name '"+ action +"' for timeago");
    }
    // each over objects here and call the requested function
    this.each(function() {
      fn.call(this, options);
    });
    return this;
  };

  function refresh() {
    var $s = $t.settings;

    //check if it's still visible
    if ($s.autoDispose && !$.contains(document.documentElement,this)) {
      //stop if it has been removed
      $(this).timeago("dispose");
      return this;
    }

    var data = prepareData(this);

    if (!isNaN(data.datetime)) {
      if ( $s.cutoff === 0 || Math.abs(distance(data.datetime)) < $s.cutoff) {
        $(this).text(inWords(data.datetime));
      } else {
        if ($(this).attr('title').length > 0) {
            $(this).text($(this).attr('title'));
        }
      }
    }
    return this;
  }

  function prepareData(element) {
    element = $(element);
    if (!element.data("timeago")) {
      element.data("timeago", { datetime: $t.datetime(element) });
      var text = $.trim(element.text());
      if ($t.settings.localeTitle) {
        element.attr("title", element.data('timeago').datetime.toLocaleString());
      } else if (text.length > 0 && !($t.isTime(element) && element.attr("title"))) {
        element.attr("title", text);
      }
    }
    return element.data("timeago");
  }

  function inWords(date) {
    return $t.inWords(distance(date));
  }

  function distance(date) {
    return (new Date().getTime() - date.getTime());
  }

  // fix for IE6 suckage
  document.createElement("abbr");
  document.createElement("time");
}));

/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define('nprogress',factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.NProgress = factory();
  }

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});


/*! @preserve
 * bootbox.js
 * version: 5.5.2
 * author: Nick Payne <nick@kurai.co.uk>
 * license: MIT
 * http://bootboxjs.com/
 */
(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD
    define('bootbox',['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node, CommonJS-like
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals (root is window)
    root.bootbox = factory(root.jQuery);
  }
}(this, function init($, undefined) {
  'use strict';

  //  Polyfills Object.keys, if necessary.
  //  @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  if (!Object.keys) {
    Object.keys = (function () {
      var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

      return function (obj) {
        if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
          throw new TypeError('Object.keys called on non-object');
        }

        var result = [], prop, i;

        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }

        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }

        return result;
      };
    }());
  }

  var exports = {};

  var VERSION = '5.5.2';
  exports.VERSION = VERSION;

  var locales = {
    en : {
      OK      : 'OK',
      CANCEL  : 'Cancel',
      CONFIRM : 'OK'
    }
  };

  var templates = {
    dialog:
    '<div class="bootbox modal" tabindex="-1" role="dialog" aria-hidden="true">' +
    '<div class="modal-dialog">' +
    '<div class="modal-content">' +
    '<div class="modal-body"><div class="bootbox-body"></div></div>' +
    '</div>' +
    '</div>' +
    '</div>',
    header:
    '<div class="modal-header">' +
    '<h5 class="modal-title"></h5>' +
    '</div>',
    footer:
    '<div class="modal-footer"></div>',
    closeButton:
    '<button type="button" class="bootbox-close-button close" aria-hidden="true">&times;</button>',
    form:
    '<form class="bootbox-form"></form>',
    button:
    '<button type="button" class="btn"></button>',
    option:
    '<option></option>',
    promptMessage:
    '<div class="bootbox-prompt-message"></div>',
    inputs: {
      text:
      '<input class="bootbox-input bootbox-input-text form-control" autocomplete="off" type="text" />',
      textarea:
      '<textarea class="bootbox-input bootbox-input-textarea form-control"></textarea>',
      email:
      '<input class="bootbox-input bootbox-input-email form-control" autocomplete="off" type="email" />',
      select:
      '<select class="bootbox-input bootbox-input-select form-control"></select>',
      checkbox:
      '<div class="form-check checkbox"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-checkbox" type="checkbox" /></label></div>',
      radio:
      '<div class="form-check radio"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-radio" type="radio" name="bootbox-radio" /></label></div>',
      date:
      '<input class="bootbox-input bootbox-input-date form-control" autocomplete="off" type="date" />',
      time:
      '<input class="bootbox-input bootbox-input-time form-control" autocomplete="off" type="time" />',
      number:
      '<input class="bootbox-input bootbox-input-number form-control" autocomplete="off" type="number" />',
      password:
      '<input class="bootbox-input bootbox-input-password form-control" autocomplete="off" type="password" />',
      range:
      '<input class="bootbox-input bootbox-input-range form-control-range" autocomplete="off" type="range" />'
    }
  };


  var defaults = {
    // default language
    locale: 'en',
    // show backdrop or not. Default to static so user has to interact with dialog
    backdrop: 'static',
    // animate the modal in/out
    animate: true,
    // additional class string applied to the top level dialog
    className: null,
    // whether or not to include a close button
    closeButton: true,
    // show the dialog immediately by default
    show: true,
    // dialog container
    container: 'body',
    // default value (used by the prompt helper)
    value: '',
    // default input type (used by the prompt helper)
    inputType: 'text',
    // switch button order from cancel/confirm (default) to confirm/cancel
    swapButtonOrder: false,
    // center modal vertically in page
    centerVertical: false,
    // Append "multiple" property to the select when using the "prompt" helper
    multiple: false,
    // Automatically scroll modal content when height exceeds viewport height
    scrollable: false,
    // whether or not to destroy the modal on hide
    reusable: false
  };


  // PUBLIC FUNCTIONS
  // *************************************************************************************************************

  // Return all currently registered locales, or a specific locale if "name" is defined
  exports.locales = function (name) {
    return name ? locales[name] : locales;
  };


  // Register localized strings for the OK, CONFIRM, and CANCEL buttons
  exports.addLocale = function (name, values) {
    $.each(['OK', 'CANCEL', 'CONFIRM'], function (_, v) {
      if (!values[v]) {
        throw new Error('Please supply a translation for "' + v + '"');
      }
    });

    locales[name] = {
      OK: values.OK,
      CANCEL: values.CANCEL,
      CONFIRM: values.CONFIRM
    };

    return exports;
  };


  // Remove a previously-registered locale
  exports.removeLocale = function (name) {
    if (name !== 'en') {
      delete locales[name];
    }
    else {
      throw new Error('"en" is used as the default and fallback locale and cannot be removed.');
    }

    return exports;
  };


  // Set the default locale
  exports.setLocale = function (name) {
    return exports.setDefaults('locale', name);
  };


  // Override default value(s) of Bootbox.
  exports.setDefaults = function () {
    var values = {};

    if (arguments.length === 2) {
      // allow passing of single key/value...
      values[arguments[0]] = arguments[1];
    } else {
      // ... and as an object too
      values = arguments[0];
    }

    $.extend(defaults, values);

    return exports;
  };


  // Hides all currently active Bootbox modals
  exports.hideAll = function () {
    $('.bootbox').modal('hide');

    return exports;
  };


  // Allows the base init() function to be overridden
  exports.init = function (_$) {
    return init(_$ || $);
  };


  // CORE HELPER FUNCTIONS
  // *************************************************************************************************************

  // Core dialog function
  exports.dialog = function (options) {
    if ($.fn.modal === undefined) {
      throw new Error(
        '"$.fn.modal" is not defined; please double check you have included ' +
        'the Bootstrap JavaScript library. See https://getbootstrap.com/docs/4.4/getting-started/javascript/ ' +
        'for more details.'
      );
    }

    options = sanitize(options);

    if ($.fn.modal.Constructor.VERSION) {
      options.fullBootstrapVersion = $.fn.modal.Constructor.VERSION;
      var i = options.fullBootstrapVersion.indexOf('.');
      options.bootstrap = options.fullBootstrapVersion.substring(0, i);
    }
    else {
      // Assuming version 2.3.2, as that was the last "supported" 2.x version
      options.bootstrap = '2';
      options.fullBootstrapVersion = '2.3.2';
      console.warn('Bootbox will *mostly* work with Bootstrap 2, but we do not officially support it. Please upgrade, if possible.');
    }

    var dialog = $(templates.dialog);
    var innerDialog = dialog.find('.modal-dialog');
    var body = dialog.find('.modal-body');
    var header = $(templates.header);
    var footer = $(templates.footer);
    var buttons = options.buttons;

    var callbacks = {
      onEscape: options.onEscape
    };

    body.find('.bootbox-body').html(options.message);

    // Only attempt to create buttons if at least one has 
    // been defined in the options object
    if (getKeyLength(options.buttons) > 0) {
      each(buttons, function (key, b) {
        var button = $(templates.button);
        button.data('bb-handler', key);
        button.addClass(b.className);

        switch (key) {
          case 'ok':
          case 'confirm':
            button.addClass('bootbox-accept');
            break;

          case 'cancel':
            button.addClass('bootbox-cancel');
            break;
        }

        button.html(b.label);
        footer.append(button);

        callbacks[key] = b.callback;
      });

      body.after(footer);
    }

    if (options.animate === true) {
      dialog.addClass('fade');
    }

    if (options.className) {
      dialog.addClass(options.className);
    }

    if (options.size) {
      // Requires Bootstrap 3.1.0 or higher
      if (options.fullBootstrapVersion.substring(0, 3) < '3.1') {
        console.warn('"size" requires Bootstrap 3.1.0 or higher. You appear to be using ' + options.fullBootstrapVersion + '. Please upgrade to use this option.');
      }

      switch (options.size) {
        case 'small':
        case 'sm':
          innerDialog.addClass('modal-sm');
          break;

        case 'large':
        case 'lg':
          innerDialog.addClass('modal-lg');
          break;

        case 'extra-large':
        case 'xl':
          innerDialog.addClass('modal-xl');

          // Requires Bootstrap 4.2.0 or higher
          if (options.fullBootstrapVersion.substring(0, 3) < '4.2') {
            console.warn('Using size "xl"/"extra-large" requires Bootstrap 4.2.0 or higher. You appear to be using ' + options.fullBootstrapVersion + '. Please upgrade to use this option.');
          }
          break;
      }
    }

    if (options.scrollable) {
      innerDialog.addClass('modal-dialog-scrollable');

      // Requires Bootstrap 4.3.0 or higher
      if (options.fullBootstrapVersion.substring(0, 3) < '4.3') {
        console.warn('Using "scrollable" requires Bootstrap 4.3.0 or higher. You appear to be using ' + options.fullBootstrapVersion + '. Please upgrade to use this option.');
      }
    }

    if (options.title) {
      body.before(header);
      dialog.find('.modal-title').html(options.title);
    }

    if (options.closeButton) {
      var closeButton = $(templates.closeButton);

      if (options.title) {
        if (options.bootstrap > 3) {
          dialog.find('.modal-header').append(closeButton);
        }
        else {
          dialog.find('.modal-header').prepend(closeButton);
        }
      } else {
        closeButton.prependTo(body);
      }
    }

    if (options.centerVertical) {
      innerDialog.addClass('modal-dialog-centered');

      // Requires Bootstrap 4.0.0-beta.3 or higher
      if (options.fullBootstrapVersion < '4.0.0') {
        console.warn('"centerVertical" requires Bootstrap 4.0.0-beta.3 or higher. You appear to be using ' + options.fullBootstrapVersion + '. Please upgrade to use this option.');
      }
    }

    // Bootstrap event listeners; these handle extra
    // setup & teardown required after the underlying
    // modal has performed certain actions.

    if(!options.reusable) {
      // make sure we unbind any listeners once the dialog has definitively been dismissed
      dialog.one('hide.bs.modal', { dialog: dialog }, unbindModal);
    }

    if (options.onHide) {
      if ($.isFunction(options.onHide)) {
        dialog.on('hide.bs.modal', options.onHide);
      }
      else {
        throw new Error('Argument supplied to "onHide" must be a function');
      }
    }

    if(!options.reusable) {
      dialog.one('hidden.bs.modal', { dialog: dialog }, destroyModal);
    }

    if (options.onHidden) {
      if ($.isFunction(options.onHidden)) {
        dialog.on('hidden.bs.modal', options.onHidden);
      }
      else {
        throw new Error('Argument supplied to "onHidden" must be a function');
      }
    }

    if (options.onShow) {
      if ($.isFunction(options.onShow)) {
        dialog.on('show.bs.modal', options.onShow);
      }
      else {
        throw new Error('Argument supplied to "onShow" must be a function');
      }
    }

    dialog.one('shown.bs.modal', { dialog: dialog }, focusPrimaryButton);

    if (options.onShown) {
      if ($.isFunction(options.onShown)) {
        dialog.on('shown.bs.modal', options.onShown);
      }
      else {
        throw new Error('Argument supplied to "onShown" must be a function');
      }
    }

    // Bootbox event listeners; used to decouple some
    // behaviours from their respective triggers

    if (options.backdrop === true) {
      // A boolean true/false according to the Bootstrap docs
      // should show a dialog the user can dismiss by clicking on
      // the background.
      // We always only ever pass static/false to the actual
      // $.modal function because with "true" we can't trap
      // this event (the .modal-backdrop swallows it)
      // However, we still want to sort-of respect true
      // and invoke the escape mechanism instead
      dialog.on('click.dismiss.bs.modal', function (e) {
        // @NOTE: the target varies in >= 3.3.x releases since the modal backdrop
        // moved *inside* the outer dialog rather than *alongside* it
        if (dialog.children('.modal-backdrop').length) {
          e.currentTarget = dialog.children('.modal-backdrop').get(0);
        }

        if (e.target !== e.currentTarget) {
          return;
        }

        dialog.trigger('escape.close.bb');
      });
    }

    dialog.on('escape.close.bb', function (e) {
      // the if statement looks redundant but it isn't; without it
      // if we *didn't* have an onEscape handler then processCallback
      // would automatically dismiss the dialog
      if (callbacks.onEscape) {
        processCallback(e, dialog, callbacks.onEscape);
      }
    });


    dialog.on('click', '.modal-footer button:not(.disabled)', function (e) {
      var callbackKey = $(this).data('bb-handler');

      if (callbackKey !== undefined) {
        // Only process callbacks for buttons we recognize:
        processCallback(e, dialog, callbacks[callbackKey]);
      }
    });

    dialog.on('click', '.bootbox-close-button', function (e) {
      // onEscape might be falsy but that's fine; the fact is
      // if the user has managed to click the close button we
      // have to close the dialog, callback or not
      processCallback(e, dialog, callbacks.onEscape);
    });

    dialog.on('keyup', function (e) {
      if (e.which === 27) {
        dialog.trigger('escape.close.bb');
      }
    });

    // the remainder of this method simply deals with adding our
    // dialog element to the DOM, augmenting it with Bootstrap's modal
    // functionality and then giving the resulting object back
    // to our caller

    $(options.container).append(dialog);

    dialog.modal({
      backdrop: options.backdrop,
      keyboard: false,
      show: false
    });

    if (options.show) {
      dialog.modal('show');
    }

    return dialog;
  };


  // Helper function to simulate the native alert() behavior. **NOTE**: This is non-blocking, so any
  // code that must happen after the alert is dismissed should be placed within the callback function 
  // for this alert.
  exports.alert = function () {
    var options;

    options = mergeDialogOptions('alert', ['ok'], ['message', 'callback'], arguments);

    // @TODO: can this move inside exports.dialog when we're iterating over each
    // button and checking its button.callback value instead?
    if (options.callback && !$.isFunction(options.callback)) {
      throw new Error('alert requires the "callback" property to be a function when provided');
    }

    // override the ok and escape callback to make sure they just invoke
    // the single user-supplied one (if provided)
    options.buttons.ok.callback = options.onEscape = function () {
      if ($.isFunction(options.callback)) {
        return options.callback.call(this);
      }

      return true;
    };

    return exports.dialog(options);
  };


  // Helper function to simulate the native confirm() behavior. **NOTE**: This is non-blocking, so any
  // code that must happen after the confirm is dismissed should be placed within the callback function 
  // for this confirm.
  exports.confirm = function () {
    var options;

    options = mergeDialogOptions('confirm', ['cancel', 'confirm'], ['message', 'callback'], arguments);

    // confirm specific validation; they don't make sense without a callback so make
    // sure it's present
    if (!$.isFunction(options.callback)) {
      throw new Error('confirm requires a callback');
    }

    // overrides; undo anything the user tried to set they shouldn't have
    options.buttons.cancel.callback = options.onEscape = function () {
      return options.callback.call(this, false);
    };

    options.buttons.confirm.callback = function () {
      return options.callback.call(this, true);
    };

    return exports.dialog(options);
  };


  // Helper function to simulate the native prompt() behavior. **NOTE**: This is non-blocking, so any
  // code that must happen after the prompt is dismissed should be placed within the callback function 
  // for this prompt.
  exports.prompt = function () {
    var options;
    var promptDialog;
    var form;
    var input;
    var shouldShow;
    var inputOptions;

    // we have to create our form first otherwise
    // its value is undefined when gearing up our options
    // @TODO this could be solved by allowing message to
    // be a function instead...
    form = $(templates.form);

    // prompt defaults are more complex than others in that
    // users can override more defaults
    options = mergeDialogOptions('prompt', ['cancel', 'confirm'], ['title', 'callback'], arguments);

    if (!options.value) {
      options.value = defaults.value;
    }

    if (!options.inputType) {
      options.inputType = defaults.inputType;
    }

    // capture the user's show value; we always set this to false before
    // spawning the dialog to give us a chance to attach some handlers to
    // it, but we need to make sure we respect a preference not to show it
    shouldShow = (options.show === undefined) ? defaults.show : options.show;

    // This is required prior to calling the dialog builder below - we need to 
    // add an event handler just before the prompt is shown
    options.show = false;

    // Handles the 'cancel' action
    options.buttons.cancel.callback = options.onEscape = function () {
      return options.callback.call(this, null);
    };

    // Prompt submitted - extract the prompt value. This requires a bit of work, 
    // given the different input types available.
    options.buttons.confirm.callback = function () {
      var value;

      if (options.inputType === 'checkbox') {
        value = input.find('input:checked').map(function () {
          return $(this).val();
        }).get();
      } else if (options.inputType === 'radio') {
        value = input.find('input:checked').val();
      }
      else {
        if (input[0].checkValidity && !input[0].checkValidity()) {
          // prevents button callback from being called
          return false;
        } else {
          if (options.inputType === 'select' && options.multiple === true) {
            value = input.find('option:selected').map(function () {
              return $(this).val();
            }).get();
          }
          else {
            value = input.val();
          }
        }
      }

      return options.callback.call(this, value);
    };

    // prompt-specific validation
    if (!options.title) {
      throw new Error('prompt requires a title');
    }

    if (!$.isFunction(options.callback)) {
      throw new Error('prompt requires a callback');
    }

    if (!templates.inputs[options.inputType]) {
      throw new Error('Invalid prompt type');
    }

    // create the input based on the supplied type
    input = $(templates.inputs[options.inputType]);

    switch (options.inputType) {
      case 'text':
      case 'textarea':
      case 'email':
      case 'password':
        input.val(options.value);

        if (options.placeholder) {
          input.attr('placeholder', options.placeholder);
        }

        if (options.pattern) {
          input.attr('pattern', options.pattern);
        }

        if (options.maxlength) {
          input.attr('maxlength', options.maxlength);
        }

        if (options.required) {
          input.prop({ 'required': true });
        }

        if (options.rows && !isNaN(parseInt(options.rows))) {
          if (options.inputType === 'textarea') {
            input.attr({ 'rows': options.rows });
          }
        }

        break;


      case 'date':
      case 'time':
      case 'number':
      case 'range':
        input.val(options.value);

        if (options.placeholder) {
          input.attr('placeholder', options.placeholder);
        }

        if (options.pattern) {
          input.attr('pattern', options.pattern);
        }

        if (options.required) {
          input.prop({ 'required': true });
        }

        // These input types have extra attributes which affect their input validation.
        // Warning: For most browsers, date inputs are buggy in their implementation of 'step', so 
        // this attribute will have no effect. Therefore, we don't set the attribute for date inputs.
        // @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#Setting_maximum_and_minimum_dates
        if (options.inputType !== 'date') {
          if (options.step) {
            if (options.step === 'any' || (!isNaN(options.step) && parseFloat(options.step) > 0)) {
              input.attr('step', options.step);
            }
            else {
              throw new Error('"step" must be a valid positive number or the value "any". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step for more information.');
            }
          }
        }

        if (minAndMaxAreValid(options.inputType, options.min, options.max)) {
          if (options.min !== undefined) {
            input.attr('min', options.min);
          }
          if (options.max !== undefined) {
            input.attr('max', options.max);
          }
        }

        break;


      case 'select':
        var groups = {};
        inputOptions = options.inputOptions || [];

        if (!$.isArray(inputOptions)) {
          throw new Error('Please pass an array of input options');
        }

        if (!inputOptions.length) {
          throw new Error('prompt with "inputType" set to "select" requires at least one option');
        }

        // placeholder is not actually a valid attribute for select,
        // but we'll allow it, assuming it might be used for a plugin
        if (options.placeholder) {
          input.attr('placeholder', options.placeholder);
        }

        if (options.required) {
          input.prop({ 'required': true });
        }

        if (options.multiple) {
          input.prop({ 'multiple': true });
        }

        each(inputOptions, function (_, option) {
          // assume the element to attach to is the input...
          var elem = input;

          if (option.value === undefined || option.text === undefined) {
            throw new Error('each option needs a "value" property and a "text" property');
          }

          // ... but override that element if this option sits in a group

          if (option.group) {
            // initialise group if necessary
            if (!groups[option.group]) {
              groups[option.group] = $('<optgroup />').attr('label', option.group);
            }

            elem = groups[option.group];
          }

          var o = $(templates.option);
          o.attr('value', option.value).text(option.text);
          elem.append(o);
        });

        each(groups, function (_, group) {
          input.append(group);
        });

        // safe to set a select's value as per a normal input
        input.val(options.value);

        break;


      case 'checkbox':
        var checkboxValues = $.isArray(options.value) ? options.value : [options.value];
        inputOptions = options.inputOptions || [];

        if (!inputOptions.length) {
          throw new Error('prompt with "inputType" set to "checkbox" requires at least one option');
        }

        // checkboxes have to nest within a containing element, so
        // they break the rules a bit and we end up re-assigning
        // our 'input' element to this container instead
        input = $('<div class="bootbox-checkbox-list"></div>');

        each(inputOptions, function (_, option) {
          if (option.value === undefined || option.text === undefined) {
            throw new Error('each option needs a "value" property and a "text" property');
          }

          var checkbox = $(templates.inputs[options.inputType]);

          checkbox.find('input').attr('value', option.value);
          checkbox.find('label').append('\n' + option.text);

          // we've ensured values is an array so we can always iterate over it
          each(checkboxValues, function (_, value) {
            if (value === option.value) {
              checkbox.find('input').prop('checked', true);
            }
          });

          input.append(checkbox);
        });
        break;


      case 'radio':
        // Make sure that value is not an array (only a single radio can ever be checked)
        if (options.value !== undefined && $.isArray(options.value)) {
          throw new Error('prompt with "inputType" set to "radio" requires a single, non-array value for "value"');
        }

        inputOptions = options.inputOptions || [];

        if (!inputOptions.length) {
          throw new Error('prompt with "inputType" set to "radio" requires at least one option');
        }

        // Radiobuttons have to nest within a containing element, so
        // they break the rules a bit and we end up re-assigning
        // our 'input' element to this container instead
        input = $('<div class="bootbox-radiobutton-list"></div>');

        // Radiobuttons should always have an initial checked input checked in a "group".
        // If value is undefined or doesn't match an input option, select the first radiobutton
        var checkFirstRadio = true;

        each(inputOptions, function (_, option) {
          if (option.value === undefined || option.text === undefined) {
            throw new Error('each option needs a "value" property and a "text" property');
          }

          var radio = $(templates.inputs[options.inputType]);

          radio.find('input').attr('value', option.value);
          radio.find('label').append('\n' + option.text);

          if (options.value !== undefined) {
            if (option.value === options.value) {
              radio.find('input').prop('checked', true);
              checkFirstRadio = false;
            }
          }

          input.append(radio);
        });

        if (checkFirstRadio) {
          input.find('input[type="radio"]').first().prop('checked', true);
        }
        break;
    }

    // now place it in our form
    form.append(input);

    form.on('submit', function (e) {
      e.preventDefault();
      // Fix for SammyJS (or similar JS routing library) hijacking the form post.
      e.stopPropagation();

      // @TODO can we actually click *the* button object instead?
      // e.g. buttons.confirm.click() or similar
      promptDialog.find('.bootbox-accept').trigger('click');
    });

    if ($.trim(options.message) !== '') {
      // Add the form to whatever content the user may have added.
      var message = $(templates.promptMessage).html(options.message);
      form.prepend(message);
      options.message = form;
    }
    else {
      options.message = form;
    }

    // Generate the dialog
    promptDialog = exports.dialog(options);

    // clear the existing handler focusing the submit button...
    promptDialog.off('shown.bs.modal', focusPrimaryButton);

    // ...and replace it with one focusing our input, if possible
    promptDialog.on('shown.bs.modal', function () {
      // need the closure here since input isn't
      // an object otherwise
      input.focus();
    });

    if (shouldShow === true) {
      promptDialog.modal('show');
    }

    return promptDialog;
  };


  // INTERNAL FUNCTIONS
  // *************************************************************************************************************

  // Map a flexible set of arguments into a single returned object
  // If args.length is already one just return it, otherwise
  // use the properties argument to map the unnamed args to
  // object properties.
  // So in the latter case:
  //  mapArguments(["foo", $.noop], ["message", "callback"])
  //  -> { message: "foo", callback: $.noop }
  function mapArguments(args, properties) {
    var argn = args.length;
    var options = {};

    if (argn < 1 || argn > 2) {
      throw new Error('Invalid argument length');
    }

    if (argn === 2 || typeof args[0] === 'string') {
      options[properties[0]] = args[0];
      options[properties[1]] = args[1];
    } else {
      options = args[0];
    }

    return options;
  }


  //  Merge a set of default dialog options with user supplied arguments
  function mergeArguments(defaults, args, properties) {
    return $.extend(
      // deep merge
      true,
      // ensure the target is an empty, unreferenced object
      {},
      // the base options object for this type of dialog (often just buttons)
      defaults,
      // args could be an object or array; if it's an array properties will
      // map it to a proper options object
      mapArguments(
        args,
        properties
      )
    );
  }


  //  This entry-level method makes heavy use of composition to take a simple
  //  range of inputs and return valid options suitable for passing to bootbox.dialog
  function mergeDialogOptions(className, labels, properties, args) {
    var locale;
    if (args && args[0]) {
      locale = args[0].locale || defaults.locale;
      var swapButtons = args[0].swapButtonOrder || defaults.swapButtonOrder;

      if (swapButtons) {
        labels = labels.reverse();
      }
    }

    //  build up a base set of dialog properties
    var baseOptions = {
      className: 'bootbox-' + className,
      buttons: createLabels(labels, locale)
    };

    // Ensure the buttons properties generated, *after* merging
    // with user args are still valid against the supplied labels
    return validateButtons(
      // merge the generated base properties with user supplied arguments
      mergeArguments(
        baseOptions,
        args,
        // if args.length > 1, properties specify how each arg maps to an object key
        properties
      ),
      labels
    );
  }


  //  Checks each button object to see if key is valid. 
  //  This function will only be called by the alert, confirm, and prompt helpers. 
  function validateButtons(options, buttons) {
    var allowedButtons = {};
    each(buttons, function (key, value) {
      allowedButtons[value] = true;
    });

    each(options.buttons, function (key) {
      if (allowedButtons[key] === undefined) {
        throw new Error('button key "' + key + '" is not allowed (options are ' + buttons.join(' ') + ')');
      }
    });

    return options;
  }



  //  From a given list of arguments, return a suitable object of button labels.
  //  All this does is normalise the given labels and translate them where possible.
  //  e.g. "ok", "confirm" -> { ok: "OK", cancel: "Annuleren" }
  function createLabels(labels, locale) {
    var buttons = {};

    for (var i = 0, j = labels.length; i < j; i++) {
      var argument = labels[i];
      var key = argument.toLowerCase();
      var value = argument.toUpperCase();

      buttons[key] = {
        label: getText(value, locale)
      };
    }

    return buttons;
  }



  //  Get localized text from a locale. Defaults to 'en' locale if no locale 
  //  provided or a non-registered locale is requested
  function getText(key, locale) {
    var labels = locales[locale];

    return labels ? labels[key] : locales.en[key];
  }



  //  Filter and tidy up any user supplied parameters to this dialog.
  //  Also looks for any shorthands used and ensures that the options
  //  which are returned are all normalized properly
  function sanitize(options) {
    var buttons;
    var total;

    if (typeof options !== 'object') {
      throw new Error('Please supply an object of options');
    }

    if (!options.message) {
      throw new Error('"message" option must not be null or an empty string.');
    }

    // make sure any supplied options take precedence over defaults
    options = $.extend({}, defaults, options);

    //make sure backdrop is either true, false, or 'static'
    if (!options.backdrop) {
      options.backdrop = (options.backdrop === false || options.backdrop === 0) ? false : 'static';
    } else {
      options.backdrop = typeof options.backdrop === 'string' && options.backdrop.toLowerCase() === 'static' ? 'static' : true;
    } 

    // no buttons is still a valid dialog but it's cleaner to always have
    // a buttons object to iterate over, even if it's empty
    if (!options.buttons) {
      options.buttons = {};
    }
    
    buttons = options.buttons;

    total = getKeyLength(buttons);

    each(buttons, function (key, button, index) {
      if ($.isFunction(button)) {
        // short form, assume value is our callback. Since button
        // isn't an object it isn't a reference either so re-assign it
        button = buttons[key] = {
          callback: button
        };
      }

      // before any further checks make sure by now button is the correct type
      if ($.type(button) !== 'object') {
        throw new Error('button with key "' + key + '" must be an object');
      }

      if (!button.label) {
        // the lack of an explicit label means we'll assume the key is good enough
        button.label = key;
      }

      if (!button.className) {
        var isPrimary = false;
        if (options.swapButtonOrder) {
          isPrimary = index === 0;
        }
        else {
          isPrimary = index === total - 1;
        }

        if (total <= 2 && isPrimary) {
          // always add a primary to the main option in a one or two-button dialog
          button.className = 'btn-primary';
        } else {
          // adding both classes allows us to target both BS3 and BS4 without needing to check the version
          button.className = 'btn-secondary btn-default';
        }
      }
    });

    return options;
  }


  //  Returns a count of the properties defined on the object
  function getKeyLength(obj) {
    return Object.keys(obj).length;
  }


  //  Tiny wrapper function around jQuery.each; just adds index as the third parameter
  function each(collection, iterator) {
    var index = 0;
    $.each(collection, function (key, value) {
      iterator(key, value, index++);
    });
  }


  function focusPrimaryButton(e) {
    e.data.dialog.find('.bootbox-accept').first().trigger('focus');
  }


  function destroyModal(e) {
    // ensure we don't accidentally intercept hidden events triggered
    // by children of the current dialog. We shouldn't need to handle this anymore, 
    // now that Bootstrap namespaces its events, but still worth doing.
    if (e.target === e.data.dialog[0]) {
      e.data.dialog.remove();
    }
  }


  function unbindModal(e) {
    if (e.target === e.data.dialog[0]) {
      e.data.dialog.off('escape.close.bb');
      e.data.dialog.off('click');
    }
  }


  //  Handle the invoked dialog callback
  function processCallback(e, dialog, callback) {
    e.stopPropagation();
    e.preventDefault();

    // by default we assume a callback will get rid of the dialog,
    // although it is given the opportunity to override this

    // so, if the callback can be invoked and it *explicitly returns false*
    // then we'll set a flag to keep the dialog active...
    var preserveDialog = $.isFunction(callback) && callback.call(dialog, e) === false;

    // ... otherwise we'll bin it
    if (!preserveDialog) {
      dialog.modal('hide');
    }
  }

  // Validate `min` and `max` values based on the current `inputType` value
  function minAndMaxAreValid(type, min, max) {
    var result = false;
    var minValid = true;
    var maxValid = true;

    if (type === 'date') {
      if (min !== undefined && !(minValid = dateIsValid(min))) {
        console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your min value may not be enforced by this browser.');
      }
      else if (max !== undefined && !(maxValid = dateIsValid(max))) {
        console.warn('Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your max value may not be enforced by this browser.');
      }
    }
    else if (type === 'time') {
      if (min !== undefined && !(minValid = timeIsValid(min))) {
        throw new Error('"min" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.');
      }
      else if (max !== undefined && !(maxValid = timeIsValid(max))) {
        throw new Error('"max" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.');
      }
    }
    else {
      if (min !== undefined && isNaN(min)) {
        minValid = false;
        throw new Error('"min" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min for more information.');
      }

      if (max !== undefined && isNaN(max)) {
        maxValid = false;
        throw new Error('"max" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.');
      }
    }

    if (minValid && maxValid) {
      if (max <= min) {
        throw new Error('"max" must be greater than "min". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.');
      }
      else {
        result = true;
      }
    }

    return result;
  }

  function timeIsValid(value) {
    return /([01][0-9]|2[0-3]):[0-5][0-9]?:[0-5][0-9]/.test(value);
  }

  function dateIsValid(value) {
    return /(\d{4})-(\d{2})-(\d{2})/.test(value);
  }

  //  The Bootbox object
  return exports;
}));

